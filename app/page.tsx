import Image from "next/image";
import { PhaseRoadmap } from "@/src/components/PhaseRoadmap";
import { ToolsTeaser } from "@/src/components/ToolsTeaser";
import { TutorialGrid } from "@/src/components/TutorialGrid";
import { affiliateLinks } from "@/src/data/affiliateLinks";
import { tutorials } from "@/src/data/tutorials";

export default function Home() {
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
            className="btn btn-secondary"
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

      <TutorialGrid items={tutorials} />

      <PhaseRoadmap />

      <ToolsTeaser />

      <aside className="disclosure-note">
        Independent tutorial site.
        <br />
        Not affiliated with Ecamm.
      </aside>

      <footer className="site-footer">
        <div className="footer-links">
          <a href="/tutorials">Tutorials</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/gdpr">GDPR</a>
          <a href="/terms">Terms</a>
          <a href="/refund-policy">Refund Policy</a>
          <a href="/affiliate-disclosure">Affiliate Disclosure</a>
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
