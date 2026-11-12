"""Unattended end-to-end test: chat -> voice (type-to-talk) -> back to chat.

Runs the user's installed Chrome in a throwaway profile with a fake microphone, so no
permission prompt. Fake audio carries no speech, so voice turns go in through type-to-talk.
Run:    python scripts/riverside_e2e.py <base URL> docs/screenshots
        (opens <base URL>/; needs: pip install playwright; uses installed Chrome)
Safety: the agent stops at 300 s, the page hangs up at 5 min, and this script ends the call.
"""
import json, re, sys, time
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = sys.argv[1].rstrip("/")
URL = BASE.rstrip("/") + "/"
SHOTS = Path(sys.argv[2]); SHOTS.mkdir(parents=True, exist_ok=True)
STAMP = time.strftime("%Y-%m-%d") + "-e2e"
log = []

def note(step, ok, detail=""):
    log.append({"step": step, "ok": ok, "detail": detail})
    print(("PASS " if ok else "FAIL ") + step + (": " + detail if detail else ""), flush=True)

def text(page):
    # Walk every nested shadow root: the call transcript lives in a child component.
    return page.evaluate("""() => { const out=[]; const walk=n=>{ if(n.shadowRoot) walk(n.shadowRoot);
      for (const c of n.childNodes) { if (c.nodeType===3) out.push(c.textContent); else if (c.nodeType===1||c.nodeType===11) walk(c); } };
      walk(document.querySelector('signalwire-address')); return out.join(' '); }""")

def wait_text(page, pattern, timeout=40, after=None, fresh=True):
    """Wait for one more match of pattern than the page shows now (the transcript re-renders)."""
    base = len(re.findall(pattern, text(page), re.I)) if fresh else 0
    end = time.time() + timeout
    while time.time() < end:
        if len(re.findall(pattern, text(page), re.I)) > base:
            return True
        time.sleep(0.5)
    print("  last text:", text(page)[-300:].replace("\n", " "), flush=True)
    return False

def wait_any(page, patterns, timeout=40):
    base = {k: len(re.findall(v, text(page), re.I)) for k, v in patterns.items()}
    end = time.time() + timeout
    while time.time() < end:
        t = text(page)
        for k, v in patterns.items():
            if len(re.findall(v, t, re.I)) > base[k]:
                return k
        time.sleep(0.5)
    return None

def say(page, msg):
    box = page.locator('[aria-label="Message"]')
    box.click()
    box.fill(msg)
    box.press("Enter")

def events(page):
    return page.evaluate("async () => { const hs=[...handles]; let best=null; for (const h of hs) { const r=await fetch('/api/healthcare/events?handle='+encodeURIComponent(h)); if(!r.ok) continue; const j=await r.json(); const t=j.events.length?j.events[j.events.length-1].t:0; if(!best||t>best.t) best={t,...j}; } return best; }")

with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome", headless=True, args=[
        "--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream",
        "--autoplay-policy=no-user-gesture-required"])
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, permissions=["microphone"])
    page = ctx.new_page()
    page.on("console", lambda m: m.type in ("error", "warning") and "address-widget" in m.text and print("  console:", m.text, flush=True))
    page.goto(URL)
    page.wait_for_function("() => !!document.querySelector('signalwire-address')", timeout=20000)
    page.evaluate("""() => { window.__joined=0; window.__left=0;
      const w=document.querySelector('signalwire-address');
      w.addEventListener('signalwire-address:call-joined', ()=>window.__joined++);
      w.addEventListener('signalwire-address:call-left', ()=>window.__left++); }""")
    page.evaluate("""() => { const w=document.querySelector('signalwire-address'); const c=w.close;
      w.close = (...a) => { console.warn('[address-widget] close() called; medium=' + w._activeMedium + '\\n' + new Error().stack.split('\\n').slice(1,4).join(' | ')); return c(...a); }; }""")
    note("greeting",wait_text(page, r"I'm Ava|This is Ava|Ava from Riverside", 30, fresh=False))

    # ---- Chat leg ----------------------------------------------------------
    say(page, "Nick Smith"); note("asks DOB", wait_text(page, r"date of birth", 30))
    say(page, "3/4/88"); note("confirms DOB", wait_text(page, r"1988|correct|confirm", 30))
    say(page, "yes"); note("finds record", wait_text(page, r"UnitedHealthcare", 40))
    page.screenshot(path=str(SHOTS / f"{STAMP}-1-chat.png"))

    # ---- Switch to voice ---------------------------------------------------
    page.locator('[aria-label="Switch to a voice call"]').click()
    page.locator('button.consent-btn', has_text="Start call").click(timeout=15000)
    end = time.time() + 30
    while time.time() < end and not page.evaluate("window.__joined"):
        time.sleep(0.5)
    note("call joined", bool(page.evaluate("window.__joined")))
    mark = len(text(page))
    note("voice picks up at insurance", wait_text(page, r"UnitedHealthcare|insurance|covered", 40, mark))
    time.sleep(3)
    say(page, "Yes, still UnitedHealthcare."); note("voice: asks reason", wait_text(page, r"help|reason|visit|today", 40, mark))
    time.sleep(2); mark = len(text(page))
    say(page, "Blood work.")
    got = wait_any(page, {"slot": r"\d ?(AM|PM)", "pref": r"morning or afternoon|prefer|what day|which day"}, 45)
    note("voice: offers slot or asks preference", bool(got), str(got))
    time.sleep(2)
    say(page, "Actually, mornings work better." if got == "slot" else "Mornings work better.")
    note("voice: morning slot", wait_text(page, r"9 ?AM|8:30", 45))
    time.sleep(2)
    say(page, "Yes, book that one.")
    note("voice: booked", wait_text(page, r"booked|set for|scheduled|confirmed|all set", 45))
    page.screenshot(path=str(SHOTS / f"{STAMP}-2-voice.png"))
    ev = events(page) or {"events": [], "legs": []}
    steps = [e["name"] for e in ev["events"] if e["kind"] == "step"]
    note("voice steps in session", {"reason", "schedule", "wrap_up"} <= set(steps),
         ", ".join(f'{e["kind"]}:{e["name"]}' for e in ev["events"]))

    # ---- Back to chat ------------------------------------------------------
    time.sleep(2)
    page.locator('[aria-label="Switch to text chat"]').click()
    end = time.time() + 30
    while time.time() < end and not page.evaluate("window.__left"):
        time.sleep(0.5)
    print("  info: call-left event fired:", bool(page.evaluate("window.__left")), flush=True)
    time.sleep(6)
    state = page.evaluate("() => { const w=document.querySelector('signalwire-address'); return {overlay:w._overlayState, medium:w._activeMedium} }")
    note("chat panel still open", state["overlay"] == "open" and state["medium"] == "chat", str(state))
    page.screenshot(path=str(SHOTS / f"{STAMP}-3a-after-switch.png"))
    mark = len(text(page))
    say(page, "Sorry, what time was my appointment again?")
    note("chat remembers booking", wait_text(page, r"9 ?AM|9:00|Tuesday", 45, mark))
    page.screenshot(path=str(SHOTS / f"{STAMP}-3-back-to-chat.png"))
    ev = events(page) or {"events": [], "legs": []}
    note("legs captured", ev["legs"][:2] == ["chat", "voice"], str(ev["legs"]))
    books = [e for e in ev["events"] if e["name"] == "book_appointment"]
    note("booked exactly once", len(books) == 1, f"{len(books)} bookings")
    posts = [e["summary"] for e in ev["events"] if e["kind"] == "post"]
    note("summaries use the record", bool(posts) and all(s.get("patient") == "Nick Smith" and s.get("patient_id") == "RFH-10422" for s in posts),
         json.dumps(posts))

    # Safety: never leave a call up.
    page.evaluate("() => { try { document.querySelector('signalwire-address').hangup() } catch(e){} }")
    page.locator('[aria-label="End conversation"]').click(timeout=5000) if page.locator('[aria-label="End conversation"]').count() else None
    time.sleep(2)
    browser.close()

json.dump(log, open(SHOTS / f"{STAMP}-results.json", "w"), indent=2)
print("SUMMARY", sum(r["ok"] for r in log), "/", len(log))
