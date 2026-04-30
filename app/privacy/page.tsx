import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ecamm for Noobs",
  description:
    "Read the Ecamm for Noobs Privacy Policy, including data handling, cookies, affiliate links, and your privacy rights.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-head">
        <p className="section-kicker">Privacy</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Effective date: April 30, 2026</p>
      </header>

      <section className="legal-block">
        <h2>Overview</h2>
        <p>
          This Privacy Policy explains what information Ecamm for Noobs
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) may collect, how
          we use it, and your choices. This site is an informational tutorial
          website focused on Ecamm education.
        </p>
      </section>

      <section className="legal-block">
        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Basic usage data:</strong> technical data such as browser
            type, device type, and pages viewed, typically through hosting or
            analytics tools.
          </li>
          <li>
            <strong>Voluntarily provided data:</strong> information you provide
            directly (for example, if you email us in the future).
          </li>
          <li>
            <strong>Affiliate link interaction data:</strong> when you click
            affiliate links, third-party partners may receive tracking
            information needed for commission attribution.
          </li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>How we use information</h2>
        <ul>
          <li>To operate and improve the website</li>
          <li>To understand which tutorials and resources are most useful</li>
          <li>To measure link performance and affiliate attribution</li>
          <li>
            To deliver purchased products and customer support if paid products
            are introduced
          </li>
          <li>To respond to inquiries when contact channels are provided</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>Cookies and similar technologies</h2>
        <p>
          This site and its service providers may use cookies or similar
          technologies for core site behavior, analytics, and referral
          attribution. You can manage cookies through your browser settings.
          Disabling some cookies may affect site functionality.
        </p>
      </section>

      <section className="legal-block">
        <h2>Affiliate links and third-party sites</h2>
        <p>
          We use affiliate links, including links to Ecamm and possibly other
          tools in the future. When you click these links, third-party websites
          may collect data under their own privacy policies. We do not control
          third-party data practices.
        </p>
      </section>

      <section className="legal-block">
        <h2>Data sharing</h2>
        <p>
          We do not sell your personal information. We may share limited data
          with service providers (for hosting, analytics, security, or affiliate
          attribution), payment providers for purchases, and where required by
          law.
        </p>
      </section>

      <section className="legal-block">
        <h2>Payments and transaction data (future)</h2>
        <p>
          If we offer paid products, transaction processing may be handled by
          third-party payment providers. We generally do not store full payment
          card numbers on our servers.
        </p>
      </section>

      <section className="legal-block">
        <h2>Data retention</h2>
        <p>
          We retain information only as long as reasonably necessary for the
          purposes described in this policy, including legal, accounting, and
          reporting requirements.
        </p>
      </section>

      <section className="legal-block">
        <h2>Your privacy rights</h2>
        <p>
          Depending on your location, you may have rights to request access,
          correction, deletion, or restriction of your personal information. You
          may also have rights related to consent and data portability.
        </p>
      </section>

      <section className="legal-block">
        <h2>GDPR and international visitors</h2>
        <p>
          If you are in the European Economic Area, United Kingdom, or similar
          jurisdictions, please see our <a href="/gdpr">GDPR Notice</a> for
          additional details about lawful bases, data transfers, and your rights.
        </p>
      </section>

      <section className="legal-block">
        <h2>Children&apos;s privacy</h2>
        <p>
          This site is not directed to children under 13, and we do not
          knowingly collect personal data from children.
        </p>
      </section>

      <section className="legal-block">
        <h2>Policy updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a revised effective date.
        </p>
      </section>
    </main>
  );
}
