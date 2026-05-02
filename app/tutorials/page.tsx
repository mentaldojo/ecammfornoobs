import type { Metadata } from "next";
import { TutorialGrid } from "@/src/components/TutorialGrid";
import { tutorials } from "@/src/data/tutorials";

export const metadata: Metadata = {
  title: "Tutorial Library | Ecamm for Noobs",
  description:
    "Browse the Ecamm for Noobs tutorial library for quick, practical Ecamm and Ecamm Live solutions.",
};

export default function TutorialsPage() {
  return (
    <main className="library-page">
      <header className="library-head">
        <p className="section-kicker">Tutorials</p>
        <h1>Ecamm Tutorial Library</h1>
        <p>
          Quick, focused walkthroughs for Ecamm and Ecamm Live users. Learn one
          feature at a time and fix common setup issues faster.
        </p>
      </header>

      <TutorialGrid items={tutorials} />
    </main>
  );
}
