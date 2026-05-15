import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PhaseRoadmap } from "@/src/components/PhaseRoadmap";
import { ToolsTeaser } from "@/src/components/ToolsTeaser";
import { TutorialGrid } from "@/src/components/TutorialGrid";
import { affiliateLinks } from "@/src/data/affiliateLinks";
import { publishedTutorials } from "@/src/data/tutorials";

export const metadata: Metadata = {
  title: "Ecamm for Noobs | Quick Ecamm Tutorials",
  description:
    "Ecamm for Noobs is a beginner-friendly YouTube Shorts tutorial library for learning Ecamm one problem at a time.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featuredTutorials = [...publishedTutorials]
    .sort(
      (a, b) =>
        Number(a.solutionNumber ?? a.episode) -
        Number(b.solutionNumber ?? b.episode),
    )
    .slice(0, 6);

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-label-row">
          <p className="mono-label">YOUTUBE SHORTS SERIES</p>
        </div>

        <h1 className="hero-title">
          Ecamm
          <br />
          for Noobs
        </h1>

        <p className="hero-tagline">One solution every time.</p>

        <p className="supporting-text">
          Quick solutions for learning Ecamm.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#tutorial-library">
            Start Learning
          </a>
          <a
            className="btn btn-orange"
            href={affiliateLinks.heroCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Ecamm Free
          </a>
        </div>

        <a
          className="affiliate-badge-card"
          href={affiliateLinks.heroCta}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="affiliate-badge-copy">
            <p className="affiliate-badge-kicker">
              Official <span className="affiliate-badge-brand">Ecamm</span> Partner Link
            </p>
            <p className="affiliate-badge-title">
              Try Ecamm free and support the production of more rapid Ecamm
              solutions
            </p>
          </div>
          <Image
            src="/images/asset-images/Orange_Ecamm_LogoCentered.png"
            alt="Ecamm logo"
            width={180}
            height={134}
            className="affiliate-badge-logo"
          />
        </a>
      </section>

      <TutorialGrid
        items={featuredTutorials}
        kicker="Featured Tutorials"
        heading="Quick answers for the exact Ecamm thing you are stuck on"
        browseHref="/tutorials"
        browseLabel="Browse Full Tutorial Library"
        browseVariant="orange"
        desktopColumns={3}
      />

      <PhaseRoadmap />

      <ToolsTeaser />

      <aside className="disclosure-note">
        Independent tutorial site.
        <br />
        Not affiliated with Ecamm.
      </aside>

      <footer className="site-footer">
        <div className="footer-links">
          <Link href="/tutorials">Tutorials</Link>
          <Link href="/tutorial-request">Request a Tutorial</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/gdpr">GDPR</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          <a href={affiliateLinks.footerCta} target="_blank" rel="noopener noreferrer">
            Ecamm Free Trial
          </a>
          <a
            href="https://www.youtube.com/channel/UCWkyh-bTFJeYnkUeFr7ya4Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
        <p>&copy; Ecamm for Noobs</p>
      </footer>
    </main>
  );
}
