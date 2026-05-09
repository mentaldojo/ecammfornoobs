type Tool = {
  name: string;
  detail: string;
  href: string;
  ctaLabel?: string;
  ctaVariant?: "spript";
};

type ToolCategory = {
  category:
    | "Camera"
    | "Audio"
    | "Lighting"
    | "Control"
    | "Capture"
    | "Audience & Growth Tools";
  tools: Tool[];
};

const toolCategories: ToolCategory[] = [
  {
    category: "Camera",
    tools: [
      {
        name: "Elgato Facecam",
        detail: "Clean, reliable camera that works seamlessly with Ecamm.",
        href: "https://amzn.to/4eWiT40",
      },
      {
        name: "Logitech Brio",
        detail: "Flexible 4K webcam with strong auto exposure and framing.",
        href: "https://amzn.to/48GDC88",
      },
      {
        name: "DJI Osmo Pocket 3",
        detail:
          "Compact camera with excellent image quality for portable setups.",
        href: "https://amzn.to/3QRMQZ0",
      },
    ],
  },
  {
    category: "Audio",
    tools: [
      {
        name: "Shure SM7B",
        detail: "Professional broadcast microphone with rich, warm sound.",
        href: "https://amzn.to/3OW5VZB",
      },
      {
        name: "Audient iD14 MKII",
        detail:
          "High-quality audio interface to connect XLR microphones to your computer.",
        href: "https://amzn.to/3OULQmp",
      },
      {
        name: "Cloudlifter CL-2",
        detail:
          "Clean gain booster to get the best performance from the SM7B.",
        href: "https://amzn.to/4ukIacs",
      },
      {
        name: "Rode Wireless Pro",
        detail:
          "Compact wireless mic system for travel and on-the-go recording when a full studio mic is not practical.",
        href: "https://amzn.to/3RaAsDx",
      },
      {
        name: "USB/XLR Travel Microphone",
        detail:
          "Flexible travel microphone with both USB and XLR output, so you can plug in fast or run through an audio interface.",
        href: "https://amzn.to/4d1L7cs",
      },
    ],
  },
  {
    category: "Lighting",
    tools: [
      {
        name: "Godox SL200III",
        detail:
          "Powerful continuous lighting for clean, consistent video quality.",
        href: "https://amzn.to/4na7TCh",
      },
      {
        name: 'Godox 65" Umbrella',
        detail: "Softens and spreads light for a more natural look on camera.",
        href: "https://amzn.to/4nd9lUr",
      },
      {
        name: "ULANZI VL120 RGB Video Light",
        detail:
          "Pocket-sized travel light with full RGB control and built-in battery for quick on-location setups.",
        href: "https://amzn.to/49ljuZo",
      },
    ],
  },
  {
    category: "Control",
    tools: [
      {
        name: "Elgato Stream Deck",
        detail:
          "Fast scene switching and control for smoother live production.",
        href: "https://amzn.to/48EltYx",
      },
      {
        name: "Elgato Prompter",
        detail:
          "Keeps scripts and notes in your eyeline for smoother on-camera delivery.",
        href: "https://amzn.to/4nj6GIE",
      },
    ],
  },
  {
    category: "Capture",
    tools: [
      {
        name: "Elgato Cam Link 4K",
        detail: "Turn your camera into a high-quality webcam for Ecamm.",
        href: "https://amzn.to/3OUIqjz",
      },
    ],
  },
  {
    category: "Audience & Growth Tools",
    tools: [
      {
        name: "Spript",
        detail:
          "Activate your audience so people actually show up when you go live.",
        href: "https://www.spript.com/?utm_source=ecammfornoobs&utm_medium=website&utm_campaign=tools_section&utm_content=spript_card",
        ctaLabel: "Try Spript",
        ctaVariant: "spript",
      },
    ],
  },
];

export function ToolsTeaser() {
  return (
    <section className="section-block">
      <div className="section-head">
        <p className="section-kicker">Recommended Tools</p>
        <h2>Tools I Use With Ecamm</h2>
      </div>

      {toolCategories.map((group) => (
        <div key={group.category} className="tools-category-block">
          <h3 className="tools-category-heading">{group.category}</h3>
          <div className="tools-grid">
            {group.tools.map((tool) => (
              <article key={tool.name} className="tool-card">
                <h3>{tool.name}</h3>
                <p>{tool.detail}</p>
                <a
                  className="tool-link"
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-variant={tool.ctaVariant}
                >
                  {tool.ctaLabel ?? "View on Amazon"}
                </a>
              </article>
            ))}
          </div>
        </div>
      ))}

      <p className="tools-disclosure">
        As an Amazon Associate, I earn from qualifying purchases. There&apos;s no
        extra cost to you, and it helps support the creation of more tutorials
        like these.
      </p>
    </section>
  );
}
