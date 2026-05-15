import type { Tutorial } from "@/src/data/tutorials";
import { TutorialCard } from "@/src/components/TutorialCard";

type TutorialGridProps = {
  items: Tutorial[];
  sectionId?: string;
  kicker?: string;
  heading?: string;
  browseHref?: string;
  browseLabel?: string;
  browseVariant?: "default" | "orange";
  desktopColumns?: 3 | 4;
};

export function TutorialGrid({
  items,
  sectionId = "tutorial-library",
  kicker = "Tutorial Library",
  heading = "Quick answers for the exact Ecamm thing you are stuck on",
  browseHref,
  browseLabel,
  browseVariant = "default",
  desktopColumns = 4,
}: TutorialGridProps) {
  const orderedItems = [...items].sort(
    (a, b) =>
      Number(a.solutionNumber ?? a.episode) - Number(b.solutionNumber ?? b.episode),
  );
  const imageSizes =
    desktopColumns === 3
      ? "(max-width: 739px) 100vw, (max-width: 879px) 50vw, 33vw"
      : "(max-width: 739px) 100vw, (max-width: 879px) 50vw, 25vw";

  return (
    <section id={sectionId} className="section-block">
      <div className="section-head">
        <p className="section-kicker">{kicker}</p>
        {heading ? <h2>{heading}</h2> : null}
      </div>
      <div
        className={`tutorial-grid ${
          desktopColumns === 3 ? "tutorial-grid-desktop-three" : ""
        }`}
      >
        {orderedItems.map((tutorial, index) => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
            prioritizeImage={index === 0}
            imageSizes={imageSizes}
          />
        ))}
      </div>
      {browseHref && browseLabel ? (
        <a
          className={`btn tutorial-grid-browse ${
            browseVariant === "orange" ? "btn-orange" : "btn-secondary"
          }`}
          href={browseHref}
        >
          {browseLabel}
        </a>
      ) : null}
    </section>
  );
}
