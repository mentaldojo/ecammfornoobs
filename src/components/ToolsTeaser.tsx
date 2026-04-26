const tools = [
  {
    name: "Ecamm",
    detail: "The main live production tool this series teaches.",
  },
  {
    name: "Stream Deck",
    detail: "Fast scene and action control for smoother live shows.",
  },
  {
    name: "Shure MV7",
    detail: "A clear and beginner-friendly microphone option.",
  },
];

export function ToolsTeaser() {
  return (
    <section className="section-block">
      <div className="section-head">
        <p className="section-kicker">Recommended Tools</p>
        <h2>Tools I Use With Ecamm</h2>
      </div>

      <div className="tools-grid">
        {tools.map((tool) => (
          <article key={tool.name} className="tool-card">
            <h3>{tool.name}</h3>
            <p>{tool.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
