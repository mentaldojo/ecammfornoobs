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

      <TutorialGrid items={tutorials} />
    </main>
  );
}
