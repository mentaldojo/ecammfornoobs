import type { Tutorial } from "@/src/data/tutorials";

type TutorialCardProps = {
  tutorial: Tutorial;
};

export function TutorialCard({ tutorial }: TutorialCardProps) {
  const isComingSoon = tutorial.status === "coming-soon";
  const isPro = tutorial.tags.includes("Pro");

  return (
    <article className="tutorial-card">
      <div className="tutorial-thumb" aria-hidden>
        <div className="tutorial-thumb-inner">
          <span>SHORT</span>
          <strong>{tutorial.episode}</strong>
        </div>
      </div>

      <div className="tutorial-meta">
        <p className="tutorial-episode">Episode {tutorial.episode}</p>
        <h3>{tutorial.title}</h3>
        <p className="tutorial-description">{tutorial.description}</p>

        <div className="tutorial-tags" aria-label="tutorial tags">
          {tutorial.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="tutorial-badges">
          {tutorial.popular ? <span className="badge badge-popular">Popular</span> : null}
          {isComingSoon ? <span className="badge badge-coming">Coming Soon</span> : null}
          {isPro ? <span className="badge badge-pro">Pro</span> : null}
        </div>

        <a
          className="tutorial-link"
          href={isComingSoon ? "#" : tutorial.youtubeUrl}
          aria-disabled={isComingSoon}
        >
          {isComingSoon ? "Coming Soon" : "Watch Short ->"}
        </a>
      </div>
    </article>
  );
}
