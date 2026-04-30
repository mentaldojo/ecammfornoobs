import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Ecamm for Noobs",
  description:
    "Read the Ecamm for Noobs refund policy for digital products, including the 7-day refund window and eligibility terms.",
};

export default function RefundPolicyPage() {
  return (
    <main className="legal-page">
      <header className="legal-head">
        <p className="section-kicker">Policy</p>
        <h1>Refund Policy</h1>
        <p className="legal-updated">Effective date: April 30, 2026</p>
      </header>

      <section className="legal-block">
        <h2>Current status</h2>
        <p>
          At this time, Ecamm for Noobs is primarily a free tutorial site.
          However, this policy applies to any digital products sold directly by
          Ecamm for Noobs now or in the future.
        </p>
      </section>

      <section className="legal-block">
        <h2>7-day refund window</h2>
        <p>
          We offer a 7-day refund policy for eligible digital purchases made
          directly through Ecamm for Noobs. The 7-day period begins from the date
          of purchase.
        </p>
      </section>

      <section className="legal-block">
        <h2>Eligible purchases</h2>
        <ul>
          <li>One-time digital course purchases</li>
          <li>Downloadable digital learning resources sold by us</li>
          <li>Other digital educational products explicitly marked refundable</li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>Non-refundable items</h2>
        <ul>
          <li>Purchases made after the 7-day refund window</li>
          <li>Products clearly marked as non-refundable at checkout</li>
          <li>Third-party purchases not sold directly by Ecamm for Noobs</li>
          <li>Affiliate purchases made on partner websites</li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>How refunds are issued</h2>
        <p>
          Approved refunds are issued to the original payment method. Processing
          times depend on your payment provider and can vary by region.
        </p>
      </section>

      <section className="legal-block">
        <h2>Policy updates</h2>
        <p>
          We may update this policy as product offerings evolve. The latest
          version will always be posted on this page.
        </p>
      </section>
    </main>
  );
}
