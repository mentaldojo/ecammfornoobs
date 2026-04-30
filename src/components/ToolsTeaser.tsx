import { affiliateLinks } from "@/src/data/affiliateLinks";

const tools = [
  {
    name: "Ecamm",
    detail: "The main live production tool this series teaches.",
    href: affiliateLinks.toolsEcamm,
    ctaLabel: "Try Ecamm Free",
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
            {"href" in tool ? (
              <a
                className="tool-link"
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tool.ctaLabel}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
