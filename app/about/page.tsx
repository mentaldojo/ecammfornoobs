import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Ecamm for Noobs",
  description:
    "Learn what Ecamm for Noobs is about, who it serves, and how this tutorial library helps beginners stream with confidence.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="legal-page">
      <header className="legal-head">
        <p className="section-kicker">About</p>
        <h1>About Ecamm for Noobs</h1>
        <p className="legal-updated">Updated: April 30, 2026</p>
      </header>

      <section className="legal-block">
        <h2>What this site is</h2>
        <p>
          Ecamm for Noobs is a beginner-focused tutorial library for people who
          want to learn Ecamm quickly, one practical problem at a time. The
          content is designed to be clear, short, and actionable.
        </p>
      </section>

      <section className="legal-block">
        <h2>Who this is for</h2>
        <ul>
          <li>New Ecamm users getting their first stream setup working</li>
          <li>Creators who want simple, repeatable streaming workflows</li>
          <li>People who prefer short video tutorials over long courses</li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>How tutorials are made</h2>
        <p>
          Tutorials are based on common beginner issues and recurring setup
          questions. The goal is to reduce confusion and help you get from stuck
          to live, fast.
        </p>
      </section>

      <section className="legal-block">
        <h2>Independence and affiliation</h2>
        <p>
          Ecamm for Noobs is an independent educational site and is not owned by
          or officially affiliated with Ecamm. Some links on this site are
          affiliate links, and we may earn a commission at no extra cost to you.
          Other links may point to products we own (such as Spript), which are
          promotional links and not affiliate links.
        </p>
        <p>
          See our full{" "}
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for details.
        </p>
      </section>

      <section className="legal-block">
        <h2>Future plans</h2>
        <p>
          Over time, this site may expand with additional training resources,
          including long-form guides, templates, and paid educational products.
          If that happens, this page and our legal pages will be updated.
        </p>
      </section>
    </main>
  );
}
