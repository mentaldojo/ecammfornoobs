import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Ecamm for Noobs",
  description:
    "Read how affiliate links work on Ecamm for Noobs and how commissions support tutorial creation.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="legal-page">
      <header className="legal-head">
        <p className="section-kicker">Disclosure</p>
        <h1>Affiliate Disclosure</h1>
        <p className="legal-updated">Effective date: April 30, 2026</p>
      </header>

      <section className="legal-block">
        <h2>How affiliate links work</h2>
        <p>
          Some links on this website are affiliate links. If you click one of
          those links and make a purchase, we may earn a commission at no extra
          cost to you.
        </p>
      </section>

      <section className="legal-block">
        <h2>Why this matters</h2>
        <p>
          Affiliate commissions help support the time and cost of creating
          tutorials, maintaining this site, and publishing new resources.
        </p>
      </section>

      <section className="legal-block">
        <h2>Editorial independence</h2>
        <p>
          Recommendations are based on our own judgment and intended usefulness
          for beginners. Compensation may influence what we choose to review or
          promote, but we aim to keep recommendations practical and honest.
        </p>
      </section>

      <section className="legal-block">
        <h2>Current affiliate relationships</h2>
        <p>
          We currently include affiliate links related to Ecamm. We may also
          include affiliate links for other creator tools and gear as they are
          added and reviewed.
        </p>
        <p>
          We also promote Spript, which is a product owned by this site&apos;s
          owner. Spript links are not affiliate links, but they are promotional
          links to an owned product.
        </p>
        <p>
          We may add affiliate links from additional partner programs in the
          future, including marketplaces such as Amazon, for relevant items like
          streaming accessories, lighting, and related equipment.
        </p>
      </section>

      <section className="legal-block">
        <h2>Questions</h2>
        <p>
          If you have questions about this disclosure, please check this page
          for updates as affiliate relationships evolve.
        </p>
      </section>
    </main>
  );
}
