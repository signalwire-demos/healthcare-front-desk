"""
Ava, the front desk assistant for Riverside Family Health.

This file is the whole AI application: who Ava is, the steps she follows, and
the three tools she can call. The same agent answers a text chat and a voice
call; app.py only serves it. The live code panel beside the chat
highlights the parts of this file as they run.

All patient data is fictional.
"""

import hashlib
import re
import threading
import time
from datetime import datetime

from signalwire import AgentBase, FunctionResult

VOICE = "elevenlabs.rachel"

PATIENTS = {
    ("nick smith", "1988-03-04"): {"patient_id": "RFH-10422", "insurance": "UnitedHealthcare"},
    ("maria lopez", "1975-11-21"): {"patient_id": "RFH-20931", "insurance": "Aetna"},
}
SLOTS = {
    "afternoon": ["Thursday at 2 PM", "Friday at 3:30 PM"],
    "morning": ["Tuesday the 1st at 9 AM", "Wednesday the 2nd at 8:30 AM"],
}

EVENTS: dict[str, list] = {}   # session -> what ran, kept in memory and bounded
MAX_SESSIONS, MAX_EVENTS = 500, 200
_lock = threading.Lock()


def session_of(raw_data):
    """One conversation can span a chat and a call; both legs share this id."""
    raw_data = raw_data or {}
    return (raw_data.get("global_data") or {}).get("session") or raw_data.get("call_id", "no-call-id")


def log_event(raw_data, kind, name, **data):
    """Append one timestamped event. The live code panel reads these."""
    session, row = session_of(raw_data), {"t": time.time(), "kind": kind, "name": name, **data}
    with _lock:
        rows = EVENTS.pop(session, [])
        EVENTS[session] = rows   # re-inserted last: the oldest session goes first
        rows.append(row)
        del rows[:-MAX_EVENTS]
        while len(EVENTS) > MAX_SESSIONS:
            del EVENTS[next(iter(EVENTS))]


INSURERS = ["UnitedHealthcare", "Aetna", "Cigna", "Blue Cross Blue Shield"]


def demo_record(full_name: str, dob: str) -> dict:
    """A stable, made-up record for any name and date of birth (the same person always gets the same one)."""
    n = int(hashlib.sha256(f"{full_name}|{dob}".encode()).hexdigest(), 16)
    return {"patient_id": f"RFH-{10000 + n % 90000}", "insurance": INSURERS[n % len(INSURERS)]}


def normalize_dob(dob: str) -> str:
    # People type dates many ways in chat: "3/4/88", "03-04-1988", "March 4th, 1988", "Mar 4 1988".
    cleaned = re.sub(r"(\d)(st|nd|rd|th)\b", r"\1", dob or "").replace(",", " ").replace("-", "/")
    cleaned = " ".join(cleaned.split())
    for fmt in ("%Y/%m/%d", "%m/%d/%Y", "%m/%d/%y", "%B %d %Y", "%b %d %Y", "%d %B %Y"):
        try:
            return datetime.strptime(cleaned, fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue
    return dob


class RiversideIntakeAgent(AgentBase):
    def __init__(self):
        super().__init__(name="riverside", route="/riverside",
                         record_call=True, record_format="wav", record_stereo=True)

        # Voice settings apply only on a call; a chat ignores them.
        self.add_language(name="English", code="en-US", voice=VOICE,
                          function_fillers=["One sec, pulling that up.", "Let me check that for you."])
        self.set_params({
            "ai_model": "gpt-4.1-mini",
            "end_of_speech_timeout": 700,
            "attention_timeout": 15000,
            "hard_stop_time": "300s",  # ghost-call cap; "5m" ends calls about 9 s in
        })
        self.add_hints(["UnitedHealthcare", "Aetna", "blood work", "Riverside"])

        # ---- Who Ava is ------------------------------------------------------
        self.prompt_add_section(
            "Role",
            "You are Ava, the front desk assistant for Riverside Family Health. Warm, brief, efficient.",
        )
        self.prompt_add_section("Style", bullets=[
            "One question per turn.",
            "Keep every reply under two short sentences.",
            "Offer at most two options.",
            "If the person changes their mind, follow them.",
            "Never give medical advice.",
        ])

        # ---- The steps she follows, in order ---------------------------------
        ctx = self.define_contexts().add_context("default")
        ctx.add_step("intake") \
            .set_text("Introduce yourself as Ava from Riverside Family Health, then collect their details.") \
            .set_functions([]) \
            .set_gather_info(output_key="patient", completion_action="next_step",
                             prompt="Introduce yourself as Ava from Riverside Family Health.") \
            .add_gather_question(key="full_name", question="Can I get your full name?") \
            .add_gather_question(key="dob", question="And your date of birth?", confirm=True)
        ctx.add_step("verify") \
            .set_text("Call lookup_patient, then confirm the insurance on file.") \
            .set_step_criteria("They confirmed their insurance") \
            .set_functions(["lookup_patient"]).set_valid_steps(["reason"])
        ctx.add_step("reason") \
            .set_text("Ask what you can help with today.") \
            .set_step_criteria("They stated the reason for the visit") \
            .set_functions([]).set_valid_steps(["schedule"])
        ctx.add_step("schedule") \
            .set_text("Use check_availability to offer the earliest opening. If they prefer a time of day, check again "
                      "with that filter. When they accept a slot, call book_appointment.") \
            .set_step_criteria("An appointment is booked") \
            .set_functions(["check_availability", "book_appointment"]).set_valid_steps(["wrap_up"])
        # wrap_up stays the active step after booking, so follow-up questions are still answered from code.
        ctx.add_step("wrap_up") \
            .set_text("Tell them their appointment time in one sentence and ask if there's anything else. "
                      "Answer questions about the appointment you booked. Do not offer directions, forms, or "
                      "anything else you have no tool for. When they have nothing else, say goodbye.") \
            .set_functions([])

        self.set_post_prompt(
            'Return JSON only: {"reason":"","appointment":""}. Leave a field empty if it was not stated.'
        )

    # ---- The tools she can call ----------------------------------------------
    @AgentBase.tool(name="lookup_patient")
    def lookup_patient(self, raw_data=None):
        """Look up the patient record using the name and date of birth already collected."""
        patient = (raw_data or {}).get("global_data", {}).get("patient", {})
        key = (patient.get("full_name", "").strip().lower(), normalize_dob(patient.get("dob", "")))
        # For the demo, any name and date of birth has a record, so every visitor can try it.
        record = PATIENTS.get(key) or demo_record(*key)
        log_event(raw_data, "tool", "lookup_patient",
                  args={"full_name": patient.get("full_name"), "dob": patient.get("dob")}, result=record)
        return FunctionResult(
            f"Record found. Insurance on file: {record['insurance']}. Ask them to confirm they're still covered."
        ).update_global_data({"record": record})

    @AgentBase.tool(name="check_availability")
    def check_availability(self, time_of_day: str = "any", raw_data=None):
        """Get open appointment slots.

        Args:
            time_of_day: "morning", "afternoon", or "any".
        """
        slots = SLOTS.get(time_of_day, SLOTS["afternoon"] + SLOTS["morning"])[:2]
        log_event(raw_data, "tool", "check_availability", args={"time_of_day": time_of_day}, result=slots)
        return FunctionResult(f"Open slots: {', '.join(slots)}. Offer the first one.")

    @AgentBase.tool(name="book_appointment")
    def book_appointment(self, slot: str, raw_data=None):
        """Book the appointment slot the person accepted.

        Args:
            slot: The exact slot they accepted, e.g. "Tuesday the 1st at 9 AM".
        """
        # Code, not the model, prevents a double booking when a conversation moves between chat and call.
        if ((raw_data or {}).get("global_data") or {}).get("appointment") == slot:
            return FunctionResult(f"Already booked for {slot}. Do not book it again.")
        log_event(raw_data, "tool", "book_appointment", args={"slot": slot}, result={"booked": slot})
        return FunctionResult(f"Booked for {slot}.").update_global_data({"appointment": slot})

    # ---- When the conversation ends --------------------------------------------
    def on_summary(self, summary, raw_data=None):
        # The record comes from what the tools found, not from the model's memory of the talk.
        known = (raw_data or {}).get("global_data") or {}
        record, patient = known.get("record") or {}, known.get("patient") or {}
        summary = {**(summary if isinstance(summary, dict) else {}),
                   "patient": patient.get("full_name", ""), "patient_id": record.get("patient_id", ""),
                   "insurance": record.get("insurance", "")}
        if known.get("appointment"):
            summary["appointment"] = known["appointment"]
        log_event(raw_data, "post", "post_prompt", summary=summary)
