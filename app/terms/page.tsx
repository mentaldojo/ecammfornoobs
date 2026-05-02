import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Ecamm for Noobs",
  description:
    "Read the Terms of Use for Ecamm for Noobs, including acceptable use, digital product terms, refunds, and legal limitations.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <header className="legal-head">
        <p className="section-kicker">Legal</p>
        <h1>Terms of Use</h1>
        <p className="legal-updated">Effective date: April 30, 2026</p>
      </header>

      <section className="legal-block">
        <h2>Acceptance of terms</h2>
        <p>
          By accessing or using ecammfornoobs.com, you agree to these Terms of
          Use. If you do not agree, please do not use the site.
        </p>
      </section>

      <section className="legal-block">
        <h2>Educational content only</h2>
        <p>
          Content on this site is provided for general educational and
          informational purposes. We aim for accuracy but do not guarantee that
          all content is complete, current, or error-free.
        </p>
      </section>

      <section className="legal-block">
        <h2>No professional advice</h2>
        <p>
          Nothing on this site constitutes legal, tax, financial, or other
          professional advice. You are responsible for evaluating information and
          decisions based on your own circumstances.
        </p>
      </section>

      <section className="legal-block">
        <h2>Intellectual property</h2>
        <p>
          Unless otherwise stated, content on this site (including text, layout,
          and branding elements) is owned by Ecamm for Noobs and protected by
          applicable intellectual property laws.
        </p>
      </section>

      <section className="legal-block">
        <h2>Digital products and paid training (future)</h2>
        <p>
          We may offer paid digital products in the future, including courses,
          templates, downloads, workshops, or memberships. Product-specific
          details may be presented on the relevant sales page and will form part
          of these Terms.
        </p>
      </section>

      <section className="legal-block">
        <h2>Payments, billing, and taxes</h2>
        <p>
          If paid products are offered, payments may be processed by third-party
          payment providers. You agree to provide accurate billing details and to
          pay all applicable charges, including taxes where required.
        </p>
      </section>

      <section className="legal-block">
        <h2>Refund policy</h2>
        <p>
          For eligible digital purchases made directly through Ecamm for Noobs,
          we offer a 7-day refund window unless otherwise stated on the specific
          offer page. See the full{" "}
          <Link href="/refund-policy">Refund Policy</Link>.
        </p>
      </section>

      <section className="legal-block">
        <h2>License and access rules for paid content</h2>
        <ul>
          <li>
            Purchases grant a limited, non-transferable license for personal use.
          </li>
          <li>
            Sharing account access, redistributing files, or reselling content is
            not permitted.
          </li>
          <li>
            We may suspend access where misuse, fraud, abuse, or unauthorized
            distribution is detected.
          </li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>Allowed and prohibited use</h2>
        <ul>
          <li>You may view and use the site for personal, non-commercial use.</li>
          <li>
            You may not copy, republish, or exploit site content at scale
            without permission.
          </li>
          <li>
            You may not attempt to disrupt, probe, or misuse site infrastructure.
          </li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>Third-party links and affiliate relationships</h2>
        <p>
          This site may link to third-party websites, including affiliate links
          (for example, Ecamm and potentially other tools or marketplaces such as
          Amazon as they are added). We may also include links to owned products,
          including Spript, which are promotional links and not affiliate links.
        </p>
        <p>
          We are not responsible for third-party content, offers, terms, or
          privacy practices. Purchases made through third-party websites are
          governed by those third parties.
        </p>
      </section>

      <section className="legal-block">
        <h2>Disclaimers</h2>
        <p>
          The site is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind, express or
          implied, to the fullest extent permitted by law.
        </p>
      </section>

      <section className="legal-block">
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Ecamm for Noobs will not be
          liable for indirect, incidental, special, consequential, or punitive
          damages arising out of or related to your use of this site.
        </p>
      </section>

      <section className="legal-block">
        <h2>Changes to these terms</h2>
        <p>
          We may update these Terms of Use at any time. Continued use of the
          site after changes are posted constitutes acceptance of the updated
          terms.
        </p>
      </section>

      <section className="legal-block">
        <h2>Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws applicable in our operating
          jurisdiction, without regard to conflict-of-law principles. If a
          provision is found unenforceable, the remaining provisions remain in
          effect.
        </p>
      </section>
    </main>
  );
}
