import Link from "next/link";
import type { Tutorial } from "@/src/data/tutorials";

type TutorialCardProps = {
  tutorial: Tutorial;
};

export function TutorialCard({ tutorial }: TutorialCardProps) {
  const isComingSoon = tutorial.status === "comingSoon";
  const thumbStyle = tutorial.imageSrc
    ? {
        backgroundImage: `url("${tutorial.imageSrc}")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : undefined;
  const tutorialHref = `/tutorials/${tutorial.slug}`;

  return (
    <article className="tutorial-card is-clickable">
      <Link
        href={tutorialHref}
        className="tutorial-card-shell"
        aria-label={
          isComingSoon
            ? `Open ${tutorial.title} tutorial preview page`
            : `Read and watch ${tutorial.title}`
        }
      >
        <div className="tutorial-thumb" aria-hidden style={thumbStyle}>
          {isComingSoon && !tutorial.imageSrc ? (
            <span className="tutorial-thumb-coming-soon">
              New videos uploaded daily
            </span>
          ) : null}
        </div>

        <div className="tutorial-meta">
          <p className="tutorial-episode">Solution {tutorial.episode}</p>
          <h3>{tutorial.title}</h3>
          <p className="tutorial-description">{tutorial.description}</p>
          <span className="tutorial-link">
            {isComingSoon ? "In Production ->" : "View Solution ->"}
          </span>
        </div>
      </Link>
    </article>
  );
}
