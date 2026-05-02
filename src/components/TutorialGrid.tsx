import type { Tutorial } from "@/src/data/tutorials";
import { TutorialCard } from "@/src/components/TutorialCard";

type TutorialGridProps = {
  items: Tutorial[];
};

export function TutorialGrid({ items }: TutorialGridProps) {
  const orderedItems = [...items].sort(
    (a, b) => Number(a.episode) - Number(b.episode),
  );

  return (
    <section id="tutorial-library" className="section-block">
      <div className="section-head">
        <p className="section-kicker">Tutorial Library</p>
        <h2>Quick answers for the exact Ecamm thing you are stuck on</h2>
      </div>
      <div className="tutorial-grid">
        {orderedItems.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </section>
  );
}
