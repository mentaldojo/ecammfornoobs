import Image from "next/image";
import Link from "next/link";
import type { Tutorial } from "@/src/data/tutorials";

type TutorialCardProps = {
  tutorial: Tutorial;
  prioritizeImage?: boolean;
  imageSizes?: string;
};

export function TutorialCard({
  tutorial,
  prioritizeImage = false,
  imageSizes = "(max-width: 739px) 100vw, (max-width: 879px) 50vw, 25vw",
}: TutorialCardProps) {
  const isComingSoon = tutorial.status === "comingSoon";
  const showDuration = !isComingSoon && Boolean(tutorial.duration);
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
        <div className="tutorial-thumb">
          {tutorial.imageSrc ? (
            <Image
              src={tutorial.imageSrc}
              alt={`${tutorial.title} tutorial thumbnail`}
              fill
              className="tutorial-thumb-image"
              sizes={imageSizes}
              priority={prioritizeImage}
            />
          ) : null}
          {isComingSoon && !tutorial.imageSrc ? (
            <span className="tutorial-thumb-coming-soon">
              In Production
            </span>
          ) : null}
        </div>

        <div className="tutorial-meta">
          <p className="tutorial-episode">
            {`SOLUTION ${tutorial.episode}`}
            {showDuration ? (
              <>
                {" · "}
                <span className="tutorial-duration">{tutorial.duration}</span>
              </>
            ) : null}
          </p>
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
