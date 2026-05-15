"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  requestText: string;
  ecammArea: string;
  website: string;
  company: string;
  startedAt: number;
};

function createInitialState(): FormState {
  return {
    name: "",
    email: "",
    requestText: "",
    ecammArea: "",
    website: "",
    company: "",
    startedAt: Date.now(),
  };
}

export default function TutorialRequestPage() {
  const [form, setForm] = useState<FormState>(createInitialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");
    setIsError(false);

    try {
      const response = await fetch("/api/tutorial-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        setIsError(true);
        setFeedback(data.error || "Could not send your tutorial request.");
        return;
      }

      setForm(createInitialState());
      setFeedback("Thanks — your tutorial request has been sent.");
      window.setTimeout(() => {
        setFeedback("");
      }, 8000);
    } catch {
      setIsError(true);
      setFeedback("Could not send your request right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="legal-page">
      <nav className="tutorial-breadcrumbs" aria-label="Tutorial request navigation">
        <Link href="/tutorials" className="btn btn-secondary">
          Back to Tutorials
        </Link>
      </nav>

      <header className="legal-head">
        <p className="section-kicker">Tutorial Requests</p>
        <h1>Request an Ecamm Tutorial</h1>
        <p className="legal-updated">
          If you have checked the tutorial library and still cannot find the
          answer, tell us what you are stuck on. We use requests to decide which
          Ecamm problems to explain next.
        </p>
      </header>

      <section className="legal-block">
        <h2>Send a tutorial request</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-honeypot" aria-hidden>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, website: event.target.value }))
              }
            />
          </div>
          <div className="contact-honeypot" aria-hidden>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, company: event.target.value }))
              }
            />
          </div>
          <input type="hidden" name="startedAt" value={String(form.startedAt)} />

          <label className="contact-label" htmlFor="name">
            Name (required)
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
            Email (required)
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

          <label className="contact-label" htmlFor="requestText">
            What are you stuck on? (required)
          </label>
          <textarea
            className="contact-input contact-textarea"
            id="requestText"
            name="requestText"
            required
            minLength={15}
            maxLength={4000}
            placeholder="Be as specific as you can."
            value={form.requestText}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, requestText: event.target.value }))
            }
          />

          <label className="contact-label" htmlFor="ecammArea">
            Which part of Ecamm is this about? (required)
          </label>
          <select
            className="contact-input"
            id="ecammArea"
            name="ecammArea"
            required
            value={form.ecammArea}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, ecammArea: event.target.value }))
            }
          >
            <option value="">Select an area</option>
            <option value="scenes">Scenes</option>
            <option value="overlays">Overlays</option>
            <option value="audio">Audio</option>
            <option value="livestreaming">Livestreaming</option>
            <option value="interview-mode">Interview Mode</option>
            <option value="screen-sharing">Screen Sharing</option>
            <option value="comments">Comments</option>
            <option value="profiles">Profiles</option>
            <option value="other">Other</option>
          </select>

          <button className="btn btn-primary contact-submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Tutorial Request"}
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
