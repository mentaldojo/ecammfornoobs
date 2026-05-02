import Link from "next/link";
import type { Tutorial } from "@/src/data/tutorials";

type TutorialCardProps = {
  tutorial: Tutorial;
};

export function TutorialCard({ tutorial }: TutorialCardProps) {
  const isComingSoon = tutorial.status === "coming-soon";
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
    <article className={`tutorial-card ${!isComingSoon ? "is-clickable" : ""}`}>
      {isComingSoon ? (
        <div className="tutorial-card-shell">
          <div className="tutorial-thumb" aria-hidden style={thumbStyle}>
            {!tutorial.imageSrc ? (
              <span className="tutorial-thumb-coming-soon">New videos added daily</span>
            ) : null}
          </div>

          <div className="tutorial-meta">
            <p className="tutorial-episode">Solution {tutorial.episode}</p>
            <h3>{tutorial.title}</h3>
            <p className="tutorial-description">{tutorial.description}</p>
            <span className="tutorial-link" aria-disabled>
              New videos added daily
            </span>
          </div>
        </div>
      ) : (
        <Link
          href={tutorialHref}
          className="tutorial-card-shell"
          aria-label={`Read and watch ${tutorial.title}`}
        >
          <div className="tutorial-thumb" aria-hidden style={thumbStyle} />

          <div className="tutorial-meta">
            <p className="tutorial-episode">Solution {tutorial.episode}</p>
            <h3>{tutorial.title}</h3>
            <p className="tutorial-description">{tutorial.description}</p>
            <span className="tutorial-link">View Solution -&gt;</span>
          </div>
        </Link>
      )}
    </article>
  );
}
