import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Notice | Ecamm for Noobs",
  description:
    "GDPR notice for Ecamm for Noobs visitors in the EEA/UK, including legal bases, rights, and data transfer information.",
};

export default function GdprPage() {
  return (
    <main className="legal-page">
      <header className="legal-head">
        <p className="section-kicker">GDPR</p>
        <h1>GDPR Notice</h1>
        <p className="legal-updated">Effective date: April 30, 2026</p>
      </header>

      <section className="legal-block">
        <h2>Scope</h2>
        <p>
          This notice applies to visitors in the European Economic Area, United
          Kingdom, and other jurisdictions with similar privacy rights. It should
          be read together with our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section className="legal-block">
        <h2>Data controller</h2>
        <p>
          Ecamm for Noobs acts as the data controller for personal data processed
          through this website.
        </p>
      </section>

      <section className="legal-block">
        <h2>Lawful bases for processing</h2>
        <ul>
          <li>
            <strong>Legitimate interests:</strong> running and improving the
            site, security, and understanding content performance.
          </li>
          <li>
            <strong>Consent:</strong> where required for certain analytics or
            cookie-based activity.
          </li>
          <li>
            <strong>Legal obligations:</strong> when processing is required by
            law.
          </li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>Your rights</h2>
        <ul>
          <li>Right of access</li>
          <li>Right to rectification</li>
          <li>Right to erasure</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Right to withdraw consent where consent is the legal basis</li>
          <li>Right to lodge a complaint with your local supervisory authority</li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>International data transfers</h2>
        <p>
          Data may be processed in countries outside your jurisdiction, including
          where our service providers operate. When required, we rely on
          appropriate safeguards for international data transfers.
        </p>
      </section>

      <section className="legal-block">
        <h2>Requests and updates</h2>
        <p>
          We may update this GDPR Notice as our data practices evolve. Please
          review this page periodically.
        </p>
      </section>
    </main>
  );
}
