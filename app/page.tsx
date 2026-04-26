import { PhaseRoadmap } from "@/src/components/PhaseRoadmap";
import { ToolsTeaser } from "@/src/components/ToolsTeaser";
import { TutorialGrid } from "@/src/components/TutorialGrid";
import { tutorials } from "@/src/data/tutorials";

export default function Home() {
  const startHere = tutorials.filter((tutorial) =>
    ["01", "07", "08"].includes(tutorial.episode),
  );

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-label-row">
          <p className="mono-label">YOUTUBE SHORTS SERIES</p>
          <span className="launching-pill" aria-hidden>
            Homepage V1
          </span>
        </div>

        <h1 className="hero-title">
          Ecamm
          <br />
          for Noobs
        </h1>

        <p className="hero-tagline">
          One thing.
          <br />
          Every time.
        </p>

        <p className="supporting-text">
          Learn Ecamm one feature at a time with quick practical tutorials.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#tutorial-library">
            Start Learning
          </a>
          <a
            className="btn btn-secondary"
            href="https://www.youtube.com/channel/UCWkyh-bTFJeYnkUeFr7ya4Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit YouTube Channel
          </a>
        </div>
      </section>

      <section className="start-here-strip" aria-label="Start here tutorials">
        <p className="start-here-title">New to Ecamm? Start here:</p>
        <div className="start-here-links">
          {startHere.map((item) => (
            <a key={item.id} className="start-here-link-card" href="#tutorial-library">
              {item.title}
            </a>
          ))}
        </div>
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
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/affiliate-disclosure">Affiliate Disclosure</a>
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
