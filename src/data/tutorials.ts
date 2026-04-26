export type TutorialStatus = "published" | "coming-soon";

export type Tutorial = {
  id: string;
  episode: string;
  title: string;
  description: string;
  tags: string[];
  popular: boolean;
  status: TutorialStatus;
  youtubeUrl: string;
};

export const tutorials: Tutorial[] = [
  {
    id: "profiles-vs-scenes",
    episode: "01",
    title: "Profiles vs Scenes",
    description: "Understand the difference so your setup stays organized.",
    tags: ["Foundation", "Beginner"],
    popular: true,
    status: "published",
    youtubeUrl: "#",
  },
  {
    id: "camera-source-setup",
    episode: "02",
    title: "Camera Source Setup",
    description: "Pick the right camera source and avoid blank preview issues.",
    tags: ["Foundation", "Camera"],
    popular: false,
    status: "published",
    youtubeUrl: "#",
  },
  {
    id: "mic-setup",
    episode: "03",
    title: "Mic Setup",
    description: "Get clean audio fast with the right input and level checks.",
    tags: ["Foundation", "Audio"],
    popular: false,
    status: "published",
    youtubeUrl: "#",
  },
  {
    id: "first-scene",
    episode: "04",
    title: "Creating Your First Scene",
    description: "Build a simple scene layout you can confidently reuse.",
    tags: ["Foundation", "Scenes"],
    popular: true,
    status: "published",
    youtubeUrl: "#",
  },
  {
    id: "panel-missing",
    episode: "07",
    title: "Where Did My Panel Go?",
    description: "Quick fixes when Ecamm panels disappear unexpectedly.",
    tags: ["Foundation", "Troubleshooting"],
    popular: true,
    status: "published",
    youtubeUrl: "#",
  },
  {
    id: "preview-vs-live",
    episode: "08",
    title: "Preview vs Live",
    description: "Learn when to stage in Preview and when to go Live.",
    tags: ["Foundation", "Workflow"],
    popular: false,
    status: "published",
    youtubeUrl: "#",
  },
  {
    id: "global-vs-scene-overlays",
    episode: "14",
    title: "Global vs Scene Overlays",
    description: "Choose the right overlay scope for cleaner production flow.",
    tags: ["Visuals", "Overlays"],
    popular: false,
    status: "published",
    youtubeUrl: "#",
  },
  {
    id: "countdown-timer",
    episode: "15",
    title: "Adding a Countdown Timer",
    description: "Set up a pre-show timer to start streams with confidence.",
    tags: ["Visuals", "Overlays"],
    popular: false,
    status: "published",
    youtubeUrl: "#",
  },
  {
    id: "comments-on-screen",
    episode: "28",
    title: "Displaying Viewer Comments",
    description: "Bring audience comments on-screen without clutter.",
    tags: ["Audio & Content", "Engagement"],
    popular: false,
    status: "published",
    youtubeUrl: "#",
  },
  {
    id: "interview-mode",
    episode: "29",
    title: "Interview Mode",
    description: "Bring in guests cleanly for interviews and co-host streams.",
    tags: ["Power Tips", "Pro"],
    popular: false,
    status: "coming-soon",
    youtubeUrl: "#",
  },
];
