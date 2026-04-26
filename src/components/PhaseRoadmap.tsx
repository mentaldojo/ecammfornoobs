const phases = [
  { name: "Phase 1 Foundation", detail: "Core setup and workflow basics." },
  { name: "Phase 2 Visuals", detail: "Overlays, scenes, and on-screen polish." },
  { name: "Phase 3 Audio", detail: "Clean levels, music, and clips." },
  { name: "Phase 4 Power Tips", detail: "Guest mode, Stream Deck, and pro flow." },
];

export function PhaseRoadmap() {
  return (
    <section className="section-block">
      <div className="section-head">
        <p className="section-kicker">Series Roadmap</p>
        <h2>Four learning phases from first stream to pro features</h2>
      </div>

      <div className="phase-grid">
        {phases.map((phase) => (
          <article key={phase.name} className="phase-card">
            <h3>{phase.name}</h3>
            <p>{phase.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
