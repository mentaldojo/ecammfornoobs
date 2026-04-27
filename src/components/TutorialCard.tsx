import type { Tutorial } from "@/src/data/tutorials";

type TutorialCardProps = {
  tutorial: Tutorial;
};

export function TutorialCard({ tutorial }: TutorialCardProps) {
  const isComingSoon = tutorial.status === "coming-soon";
  const thumbStyle = tutorial.imageSrc
    ? {
        backgroundImage: `url("${tutorial.imageSrc}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <article className="tutorial-card">
      <div className="tutorial-thumb" aria-hidden style={thumbStyle} />

      <div className="tutorial-meta">
        <p className="tutorial-episode">Solution {tutorial.episode}</p>
        <h3>{tutorial.title}</h3>
        <p className="tutorial-description">{tutorial.description}</p>

        <a
          className="tutorial-link"
          href={isComingSoon ? "#" : tutorial.youtubeUrl}
          aria-disabled={isComingSoon}
        >
          {isComingSoon ? "Coming Soon" : "View Solution ->"}
        </a>
      </div>
    </article>
  );
}
