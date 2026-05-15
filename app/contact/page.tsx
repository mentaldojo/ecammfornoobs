"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  reason: string;
  message: string;
  guardianNote: string;
  streamChecklist: string;
  startedAt: number;
};

function createInitialState(): FormState {
  return {
    name: "",
    email: "",
    reason: "support",
    message: "",
    guardianNote: "",
    streamChecklist: "",
    startedAt: Date.now(),
  };
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(createInitialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string>("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        setIsError(true);
        setFeedback(data.error || "Could not send your message.");
        return;
      }

      setForm(createInitialState());
      setFeedback("Thanks. Your message has been sent.");
      window.setTimeout(() => {
        setFeedback("");
      }, 8000);
    } catch {
      setIsError(true);
      setFeedback("Could not send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="legal-page">
      <header className="legal-head">
        <p className="section-kicker">Contact</p>
        <h1>Contact Ecamm for Noobs</h1>
        <p className="legal-updated">
          For support, product review requests, and partnerships.
        </p>
      </header>

      <section className="legal-block">
        <h2>Send a message</h2>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          {/* Hidden honeypot field for bot filtering */}
          <div className="contact-honeypot" aria-hidden>
            <label htmlFor="guardianNote">Guardian note</label>
            <input
              id="guardianNote"
              name="guardianNote"
              tabIndex={-1}
              autoComplete="new-password"
              value={form.guardianNote}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, guardianNote: event.target.value }))
              }
            />
          </div>
          <div className="contact-honeypot" aria-hidden>
            <label htmlFor="streamChecklist">Stream checklist</label>
            <input
              id="streamChecklist"
              name="streamChecklist"
              tabIndex={-1}
              autoComplete="new-password"
              value={form.streamChecklist}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, streamChecklist: event.target.value }))
              }
            />
          </div>
          <input type="hidden" name="startedAt" value={String(form.startedAt)} />

          <label className="contact-label" htmlFor="name">
            Name
          </label>
          <input
            className="contact-input"
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
          />

          <label className="contact-label" htmlFor="email">
            Email
          </label>
          <input
            className="contact-input"
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
          />

          <label className="contact-label" htmlFor="reason">
            Reason
          </label>
          <select
            className="contact-input"
            id="reason"
            name="reason"
            value={form.reason}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, reason: event.target.value }))
            }
          >
            <option value="support">Support</option>
            <option value="product-review">Product Review Request</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>

          <label className="contact-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact-input contact-textarea"
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={4000}
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
          />

          <button className="btn btn-primary contact-submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {feedback ? (
            <p className={`contact-feedback ${isError ? "is-error" : "is-success"}`}>
              {feedback}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}
