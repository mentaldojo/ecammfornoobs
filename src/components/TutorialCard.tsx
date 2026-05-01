import type { KeyboardEvent } from "react";
import type { Tutorial } from "@/src/data/tutorials";

type TutorialCardProps = {
  tutorial: Tutorial;
  onOpen: (tutorial: Tutorial) => void;
};

export function TutorialCard({ tutorial, onOpen }: TutorialCardProps) {
  const isComingSoon = tutorial.status === "coming-soon";
  const thumbStyle = tutorial.imageSrc
    ? {
        backgroundImage: `url("${tutorial.imageSrc}")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : undefined;
  const handleOpen = () => {
    if (!isComingSoon) {
      onOpen(tutorial);
    }
  };
  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (isComingSoon) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <article
      className={`tutorial-card ${!isComingSoon ? "is-clickable" : ""}`}
      role={!isComingSoon ? "button" : undefined}
      tabIndex={!isComingSoon ? 0 : undefined}
      onClick={handleOpen}
      onKeyDown={handleCardKeyDown}
      aria-label={!isComingSoon ? `Watch ${tutorial.title}` : undefined}
    >
      <div className="tutorial-thumb" aria-hidden style={thumbStyle}>
        {!tutorial.imageSrc ? (
          <span className="tutorial-thumb-coming-soon">New videos added daily</span>
        ) : null}
      </div>

      <div className="tutorial-meta">
        <p className="tutorial-episode">Solution {tutorial.episode}</p>
        <h3>{tutorial.title}</h3>
        <p className="tutorial-description">{tutorial.description}</p>

        <button
          type="button"
          className="tutorial-link"
          onClick={(event) => {
            event.stopPropagation();
            handleOpen();
          }}
          aria-disabled={isComingSoon}
          disabled={isComingSoon}
        >
          {isComingSoon ? "New videos added daily" : "View Solution ->"}
        </button>
      </div>
    </article>
  );
}
