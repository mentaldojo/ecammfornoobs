export type TutorialStatus = "published" | "coming-soon";

export type Tutorial = {
  id: string;
  episode: string;
  title: string;
  description: string;
  imageSrc?: string;
  tags: string[];
  popular: boolean;
  status: TutorialStatus;
  youtubeUrl: string;
};

export const tutorials: Tutorial[] = [
  {
    id: "black-screen-fix",
    episode: "01",
    title: "Black Screen Fix",
    description:
      "Fix the black preview problem by checking the right camera source.",
    imageSrc: "/images/solution-images/solution-01-black-screen.png",
    tags: ["Foundation", "Camera"],
    popular: true,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/-UpVC6y84is",
  },
  {
    id: "profiles-vs-scenes",
    episode: "02",
    title: "Profiles vs Scenes",
    description: "Understand the difference so your setup stays organized.",
    imageSrc: "/images/solution-images/solution-02-profiles-a.png",
    tags: ["Foundation", "Beginner"],
    popular: true,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/iB_xD9IfT60",
  },
  {
    id: "camera-source-setup",
    episode: "03",
    title: "Add a Camera to a Scene",
    description: "Add a camera to your scene so your setup is ready to use.",
    imageSrc: "/images/solution-images/solution-03-choose-camera.png",
    tags: ["Foundation", "Camera"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/6EiTp_VrRd4",
  },
  {
    id: "mic-setup",
    episode: "04",
    title: "Mic Setup",
    description: "Get clean audio fast with the right input and level checks.",
    imageSrc: "/images/solution-images/solution-04-mic-input-a.png",
    tags: ["Foundation", "Audio"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/1S9O9l_mCHo",
  },
  {
    id: "first-scene",
    episode: "05",
    title: "Creating Your First Scene",
    description: "Build a simple scene layout you can confidently reuse.",
    imageSrc: "/images/solution-images/solution-05-build-first-scene.png",
    tags: ["Foundation", "Scenes"],
    popular: true,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/KETmDsg8wMc",
  },
  {
    id: "cant-see-overlay",
    episode: "06",
    title: "Why Can't I See My Overlay?",
    description:
      "Fix missing overlays by checking visibility, scene assignment, and source order.",
    imageSrc: "/images/solution-images/solution-06a-cant-see-my-overlay.png",
    tags: ["Visuals", "Overlays"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/uEkb6O1FG2M",
  },
  {
    id: "panel-missing",
    episode: "07",
    title: "Where Did My Panel Go?",
    description: "Quick fixes when Ecamm panels disappear unexpectedly.",
    imageSrc: "/images/solution-images/solution-07-missing-panels.png",
    tags: ["Foundation", "Troubleshooting"],
    popular: true,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/B6WhshLsuhY",
  },
  {
    id: "preview-vs-live",
    episode: "08",
    title: "Preview vs Live",
    description: "Learn when to stage in Preview and when to go Live.",
    imageSrc: "/images/solution-images/solution-08-preview-vs-live.png",
    tags: ["Foundation", "Workflow"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/mbnQO3jVw5w",
  },
  {
    id: "global-vs-scene-overlays",
    episode: "09",
    title: "Global vs Scene Overlays",
    description: "Choose the right overlay scope for cleaner production flow.",
    tags: ["Visuals", "Overlays"],
    popular: false,
    status: "coming-soon",
    youtubeUrl: "#",
  },
  {
    id: "countdown-timer",
    episode: "10",
    title: "Adding a Countdown Timer",
    description: "Set up a pre-show timer to start streams with confidence.",
    tags: ["Visuals", "Overlays"],
    popular: false,
    status: "coming-soon",
    youtubeUrl: "#",
  },
  {
    id: "comments-on-screen",
    episode: "11",
    title: "Displaying Viewer Comments",
    description: "Bring audience comments on-screen without clutter.",
    tags: ["Audio & Content", "Engagement"],
    popular: false,
    status: "coming-soon",
    youtubeUrl: "#",
  },
  {
    id: "interview-mode",
    episode: "12",
    title: "Interview Mode",
    description: "Bring in guests cleanly for interviews and co-host streams.",
    tags: ["Power Tips", "Pro"],
    popular: false,
    status: "coming-soon",
    youtubeUrl: "#",
  },
];
