import type { Metadata } from "next";
import Link from "next/link";
import { TutorialGrid } from "@/src/components/TutorialGrid";
import { affiliateLinks } from "@/src/data/affiliateLinks";
import { tutorials } from "@/src/data/tutorials";

export const metadata: Metadata = {
  title: "Tutorial Library | Ecamm for Noobs",
  description:
    "Browse the Ecamm for Noobs tutorial library for quick, practical Ecamm and Ecamm Live solutions.",
};

export default function TutorialsPage() {
  const advancedTutorialIds = new Set(["multistreaming-explained"]);
  const beginnerTutorials = tutorials.filter(
    (tutorial) => !advancedTutorialIds.has(tutorial.id),
  );
  const advancedTutorials = tutorials.filter((tutorial) =>
    advancedTutorialIds.has(tutorial.id),
  );

  return (
    <main className="library-page">
      <nav className="tutorial-breadcrumbs" aria-label="Library navigation">
        <Link href="/" className="btn btn-secondary">
          Home
        </Link>
      </nav>

      <header className="library-head">
        <p className="section-kicker">Tutorials</p>
        <h1>Ecamm Tutorial Library</h1>
        <p>
          Quick, focused walkthroughs for Ecamm and Ecamm Live users. Learn one
          feature at a time and fix common setup issues faster.
        </p>
        <div className="library-actions">
          <a
            className="btn btn-orange"
            href={affiliateLinks.heroCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Ecamm Free
          </a>
        </div>
      </header>

      <TutorialGrid items={beginnerTutorials} sectionId="tutorial-library" />

      {advancedTutorials.length > 0 ? (
        <div className="advanced-tutorials-shell">
          <TutorialGrid
            items={advancedTutorials}
            sectionId="advanced-tutorials"
            kicker="ADVANCED TUTORIALS"
            heading=""
          />
        </div>
      ) : null}

      <section className="tutorial-request-cta" aria-label="Request a tutorial">
        <div className="section-head">
          <h2>Still stuck on something in Ecamm?</h2>
        </div>
        <p>
          Browse the library first. If you still cannot find the answer, request a
          tutorial and we may add it to the roadmap.
        </p>
        <div>
          <Link href="/tutorial-request" className="btn btn-primary">
            Request a Tutorial
          </Link>
        </div>
      </section>
    </main>
  );
}
