"use client";

import { useEffect, useState } from "react";
import type { Tutorial } from "@/src/data/tutorials";
import { affiliateLinks } from "@/src/data/affiliateLinks";
import { TutorialCard } from "@/src/components/TutorialCard";

type TutorialGridProps = {
  items: Tutorial[];
};

export function TutorialGrid({ items }: TutorialGridProps) {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const orderedItems = [...items].sort(
    (a, b) => Number(a.episode) - Number(b.episode),
  );

  const closeModal = () => {
    setSelectedTutorial(null);
  };

  useEffect(() => {
    if (!selectedTutorial) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedTutorial]);

  return (
    <section id="tutorial-library" className="section-block">
      <div className="section-head">
        <p className="section-kicker">Featured Tutorial Library</p>
        <h2>Quick answers for the exact Ecamm thing you are stuck on</h2>
      </div>
      <div className="tutorial-grid">
        {orderedItems.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
            onOpen={setSelectedTutorial}
          />
        ))}
      </div>

      {selectedTutorial ? (
        <div className="tutorial-modal-overlay" onClick={closeModal}>
          <div className="tutorial-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="tutorial-modal-close"
              onClick={closeModal}
              aria-label="Close video modal"
            >
              Close
            </button>
            <div className="tutorial-video-frame">
              <iframe
                src={selectedTutorial.youtubeUrl}
                title={selectedTutorial.title}
                className="h-full w-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              className="btn btn-secondary tutorial-modal-cta"
              href={affiliateLinks.tutorialModal}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply This In Ecamm
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}
