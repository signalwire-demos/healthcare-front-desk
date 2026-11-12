"""
Hosts Ava (agent.py) for the chat page. Nothing in here is about Ava herself.

  /                        the page: SignalWire address widget + live code panel
  /riverside               Ava's SWML, fetched by the AI Chat service and by calls (basic auth)
  /api/healthcare/chat/...  ChatGateway (text turns) and HandoffRouter (chat <-> call), from signalwire-sdk
  /api/healthcare/config    gateway URL and publishable chat key for the page
  /api/token/healthcare     a guest token for the browser call, minted when Call is pressed
  /api/healthcare/code      agent.py with the line ranges the code panel lights up
  /api/healthcare/events    what ran in this conversation

Run:  python app.py   (one process: conversations, handoffs and rate limits live in memory)
"""

import ast
import asyncio
import os
import re
import secrets
import threading
import time
from collections import defaultdict
from pathlib import Path
from urllib.parse import quote, urlsplit

import certifi

os.environ.setdefault("SSL_CERT_FILE", certifi.where())  # python.org macOS builds ship without a CA bundle

import requests
from dotenv import load_dotenv

load_dotenv()

from fastapi import Request
from fastapi.responses import FileResponse, JSONResponse
from signalwire import AgentServer
from signalwire.ai_chat import AIChatClient, ChatGateway, HandoffRouter
from signalwire.core.capabilities import user_variables
from signalwire.rest import RestClient

import agent as ava

HERE = Path(__file__).parent
SPACE = os.environ["SIGNALWIRE_SPACE_NAME"]
SW_HOST = SPACE if "." in SPACE else f"{SPACE}.signalwire.com"
PROJECT, TOKEN = os.environ["SIGNALWIRE_PROJECT_ID"], os.environ["SIGNALWIRE_TOKEN"]
PUBLIC_URL = os.environ["SWML_PROXY_URL_BASE"].rstrip("/")
FABRIC = f"https://{SW_HOST}/api/fabric"
HANDLER_NAME = os.getenv("FABRIC_HANDLER_NAME", "healthcare-front-desk")
CALLS_PER_IP_PER_HOUR = int(os.getenv("CALLS_PER_IP_PER_HOUR", "20"))
handler_info = {}

# What earlier legs of each conversation said, keyed by session (the first leg's id).
TRANSCRIPTS: dict[str, list[dict]] = {}
CALL_SESSION: dict[str, str] = {}        # call_id -> session
VOICE_DONE: dict[str, threading.Event] = {}
TOKEN_MINTS: dict[str, list[float]] = defaultdict(list)


def root_of(conversation_id: str) -> str:
    """HandoffRouter names each new leg <id>.1, <id>.2, ...; the session is the bare id."""
    return re.sub(r"(\.\d+)+$", "", conversation_id or "")


def progress(session: str) -> dict:
    """Rebuild Ava's state for a session from the tools that already ran."""
    state = {}
    for e in list(ava.EVENTS.get(session, [])):
        if e.get("name") == "lookup_patient":
            state["patient"] = {k: v for k, v in (e.get("args") or {}).items() if v}
            if e.get("result"):
                state["record"] = e["result"]
        elif e.get("name") == "book_appointment":
            state["appointment"] = (e.get("args") or {}).get("slot")
    return state


class HostedAva(ava.RiversideIntakeAgent):
    def on_summary(self, summary, raw_data=None):
        super().on_summary(summary, raw_data)
        raw_data = raw_data or {}
        if raw_data.get("conversation_type") != "chat":   # a call ended: keep what was said
            session = ava.session_of(raw_data)
            said = [{"role": m["role"], "content": m["content"]} for m in raw_data.get("call_log", [])
                    if m.get("role") in ("user", "assistant") and isinstance(m.get("content"), str)]
            TRANSCRIPTS.setdefault(session, []).append({"medium": "voice", "messages": said})
            VOICE_DONE.setdefault(session, threading.Event()).set()


agent = HostedAva()
agent.enable_debug_events(level=1)


def authed(path: str) -> str:
    """A URL SignalWire can fetch: the SDK's basic-auth credentials ride in the URL."""
    user, password = agent.get_basic_auth_credentials()
    parts = urlsplit(PUBLIC_URL)
    return f"{parts.scheme}://{quote(user, safe='')}:{quote(password, safe='')}@{parts.netloc}{path}"


@agent.on_debug_event
def on_debug(event_type, body):
    """Log each step change by name for the code panel.

    Chat sends {"new_step": <index>, "call_id"}; a call sends
    {"call_info": {"call_id"}, "step_change": {"to_step": <name>, "trigger"}}.
    """
    if event_type == "step_change":
        steps = list(agent._contexts_builder.get_context("default")._steps)
        i = body.get("new_step")
        name = steps[i] if isinstance(i, int) and 0 <= i < len(steps) else None
        call_id, trigger = body.get("call_id", ""), body.get("trigger")
    elif isinstance(body.get("step_change"), dict):
        name = body["step_change"].get("to_step")
        call_id, trigger = (body.get("call_info") or {}).get("call_id", ""), body["step_change"].get("trigger")
    else:
        return
    if name:
        session = CALL_SESSION.get(call_id) or root_of(call_id)
        ava.log_event({"call_id": session}, "step", name, trigger=trigger)


chat_client = AIChatClient(project=PROJECT, token=TOKEN, url=f"https://{SW_HOST}/api/ai/chat")
CHAT_KEY = os.getenv("CHAT_PUBLISHABLE_KEY") or "pk_" + secrets.token_urlsafe(16)   # public by design
gateway = ChatGateway(config_url=authed("/riverside"), client=chat_client, key=CHAT_KEY,
                      allowed_origins=[f"{urlsplit(PUBLIC_URL).scheme}://{urlsplit(PUBLIC_URL).netloc}"],
                      conversation_timeout=1800, max_new_conversations=20, max_turns=80)
rest = RestClient(project=PROJECT, token=TOKEN, host=SW_HOST)


async def capture_leg(conversation_id, medium):
    """End a leg and keep its transcript, so the next leg can pick up from it."""
    session = root_of(conversation_id)
    if medium == "chat":
        log = await chat_client.log(conversation_id)
        await chat_client.end(conversation_id)
        TRANSCRIPTS.setdefault(session, []).append(
            {"medium": "chat", "messages": gateway.visible_messages(log.messages)})
        return True
    done = VOICE_DONE.setdefault(session, threading.Event())   # set by on_summary
    return await asyncio.to_thread(done.wait, 7)


handoff = HandoffRouter(
    gateway=gateway, capture_leg=capture_leg,
    end_call=lambda call_id: asyncio.to_thread(rest.calling.end, call_id),
    send_message=lambda call_id, text: asyncio.to_thread(
        rest.calling.ai_message, call_id, role="user", message_text=text),
)


def per_request(query_params, body_params, headers, req_agent):
    """Tag each leg with its session; on the leg's first fetch, hand it the earlier legs.

    The SDK runs this on every request, including tool calls and the summary, which carry
    no chat handle. Those keep the session the leg already has.
    """
    body = body_params or {}
    uv = user_variables(body)
    call_id = (body.get("call") or {}).get("call_id") or body.get("call_id") or ""
    if body.get("conversation_type") == "chat":
        session = root_of(body.get("conversation_id") or call_id)
    elif uv.get("chat_handle"):
        try:
            session = root_of(gateway.read_handle(uv["chat_handle"]))
        except Exception:
            session = call_id
    else:
        session = CALL_SESSION.get(call_id, call_id)
    if not session:
        return
    if call_id:
        CALL_SESSION[call_id] = session
    if body.get("function") or "post_prompt_data" in body:   # a tool call or the summary
        return
    if uv.get("handoff_nonce") and call_id:
        handoff.register(uv["handoff_nonce"], conversation_id=session, call_id=call_id)
        VOICE_DONE.pop(session, None)

    state = progress(session)
    req_agent.set_global_data({"session": session, **state})
    earlier = TRANSCRIPTS.get(session, [])
    if earlier:
        lines = [f"[{leg['medium']}] {m['role']}: {m['content']}" for leg in earlier for m in leg["messages"]]
        req_agent.prompt_add_section(
            "Earlier in this conversation",
            "The person already talked with you. Pick up where it left off; do not greet them again "
            "or repeat questions they answered.\n" + "\n".join(lines[-40:]))
        # Skip what's settled. Verify re-runs if needed: it's where insurance gets confirmed.
        step = "wrap_up" if state.get("appointment") else "verify" if state.get("patient") else None
        if step:
            req_agent._contexts_builder.get_context("default").set_initial_step(step)
            ava.log_event({"call_id": session}, "step", step, trigger="picked_up")


agent.set_dynamic_config_callback(per_request)


# ---- Browser calling: Call Fabric address + guest token --------------------------
def setup_handler():
    """Point this app's SWML handler at /riverside and record its dial address."""
    body = {"primary_request_url": authed("/riverside"), "primary_request_method": "POST"}
    auth = (PROJECT, TOKEN)
    r = requests.get(f"{FABRIC}/resources/external_swml_handlers", auth=auth, timeout=20)
    r.raise_for_status()
    handler_id = next((h["id"] for h in r.json().get("data", [])
                       if (h.get("swml_webhook") or {}).get("name") == HANDLER_NAME
                       or h.get("display_name") == HANDLER_NAME), None)
    if handler_id:
        requests.put(f"{FABRIC}/resources/external_swml_handlers/{handler_id}",
                     json=body, auth=auth, timeout=20).raise_for_status()
    else:
        r = requests.post(f"{FABRIC}/resources/external_swml_handlers",
                          json={"name": HANDLER_NAME, "used_for": "calling", **body}, auth=auth, timeout=20)
        r.raise_for_status()
        handler_id = r.json()["id"]
    r = requests.get(f"{FABRIC}/resources/external_swml_handlers/{handler_id}/addresses", auth=auth, timeout=20)
    r.raise_for_status()
    addrs = r.json().get("data", [])
    addr = next((a for a in addrs if a.get("channels", {}).get("audio") == f"/public/{HANDLER_NAME}"), addrs[0])
    handler_info.update(address_id=addr["id"], address=addr["channels"]["audio"])
    print(f"Fabric handler {handler_id} -> {PUBLIC_URL}/riverside; dial address {handler_info['address']}")


# ---- agent.py with the line ranges the code panel lights up ----------------------
def code_map():
    source = (HERE / "agent.py").read_text()
    lines, anchors = source.splitlines(), {}
    for node in ast.walk(ast.parse(source)):
        if isinstance(node, ast.FunctionDef) and node.name in ("lookup_patient", "check_availability",
                                                                "book_appointment", "on_summary"):
            start = min([d.lineno for d in node.decorator_list] + [node.lineno])
            anchors["post_prompt" if node.name == "on_summary" else node.name] = [start, node.end_lineno]
    for i, text in enumerate(lines, 1):
        m = re.search(r'add_step\("(\w+)"\)', text)
        if m:
            # A step is one statement: it runs while a line ends in "\" or a bracket is still open.
            end, depth = i, 0
            while True:
                text_end = lines[end - 1]
                depth += text_end.count("(") + text_end.count("[") - text_end.count(")") - text_end.count("]")
                if end >= len(lines) or (depth <= 0 and not text_end.rstrip().endswith("\\")):
                    break
                end += 1
            anchors["step:" + m.group(1)] = [i, end]
        if 'prompt_add_section(' in text and i < len(lines) and "Role" in lines[i]:
            anchors["role"] = [i, i + 3]
    return {"source": source, "anchors": anchors}


def create_server():
    server = AgentServer(host="0.0.0.0", port=int(os.getenv("PORT", "3000")))

    @server.app.middleware("http")
    async def chat_root(request: Request, call_next):
        # The widget posts to the gateway URL itself; the SDK router answers on ".../chat/".
        if request.url.path == "/api/healthcare/chat":
            request.scope["path"] = "/api/healthcare/chat/"
        return await call_next(request)

    server.app.include_router(gateway.router(), prefix="/api/healthcare/chat")
    server.app.include_router(handoff.router(), prefix="/api/healthcare/chat")
    server.register(agent, "/riverside")

    @server.app.get("/api/healthcare/config")
    def config():
        return {"gatewayUrl": "/api/healthcare/chat", "chatKey": CHAT_KEY}

    @server.app.get("/api/token/healthcare")
    def call_token(request: Request):
        ip = (request.headers.get("cf-connecting-ip") or request.headers.get("x-forwarded-for", "").split(",")[0]
              or (request.client.host if request.client else "")).strip()
        now = time.time()
        TOKEN_MINTS[ip] = [t for t in TOKEN_MINTS[ip] if now - t < 3600]
        if len(TOKEN_MINTS[ip]) >= CALLS_PER_IP_PER_HOUR:
            return JSONResponse({"detail": "Call limit reached for now. Try again later."}, status_code=429)
        if not handler_info.get("address_id"):
            return JSONResponse({"detail": "Voice calls are not available right now."}, status_code=503)
        r = requests.post(f"{FABRIC}/guests/tokens", auth=(PROJECT, TOKEN), timeout=20,
                          json={"allowed_addresses": [handler_info["address_id"]],
                                "expire_at": int(now) + 3600})
        if not r.ok:
            return JSONResponse({"detail": "Voice calls are not available right now."}, status_code=503)
        TOKEN_MINTS[ip].append(now)
        return {"token": r.json()["token"], "address": handler_info["address"]}

    @server.app.get("/api/healthcare/code")
    def code():
        return code_map()

    @server.app.get("/api/healthcare/events")
    def events(handle: str = ""):
        try:
            session = root_of(gateway.read_handle(handle))
        except Exception:
            return JSONResponse({"error": "unknown conversation"}, status_code=404)
        return {"events": list(ava.EVENTS.get(session, [])),
                "legs": [leg["medium"] for leg in TRANSCRIPTS.get(session, [])]}

    # Only these files are served, never the folder (it may hold .env).
    @server.app.get("/")
    def page():
        return FileResponse(HERE / "web" / "index.html")

    @server.app.get("/address-widget.umd.js")
    def widget_js():
        return FileResponse(HERE / "web" / "address-widget.umd.js", media_type="text/javascript")

    @server.app.on_event("startup")
    def on_startup():
        setup_handler()

    return server


server = create_server()
app = server.app   # for `uvicorn app:app` (Procfile); keep one worker

if __name__ == "__main__":
    server.run()
