export type TutorialStatus = "published" | "coming-soon";

// Solution page content pattern:
// 1. Use real beginner search language in the opening problem explanation.
// 2. Explain what is actually happening in plain English.
// 3. Provide a short numbered step list.
// 4. Include a common mistake section.
// 5. Add a short closing reassurance or next-step note.
// 6. Link to related internal tutorials where relevant.
export type TutorialDetailContent = {
  problemHeading: string;
  problemParagraphs: string[];
  stepsHeading: string;
  stepsIntro?: string;
  steps: string[];
  stepsFollowUpParagraphs: string[];
  commonMistakeHeading: string;
  commonMistakeParagraphs: string[];
  closingNote?: string;
};

export type Tutorial = {
  id: string;
  slug: string;
  episode: string;
  title: string;
  description: string;
  imageSrc?: string;
  videoAspect?: "portrait" | "landscape";
  seoTitle?: string;
  seoDescription?: string;
  relatedTutorialSlugs?: string[];
  detailContent?: TutorialDetailContent;
  tags: string[];
  popular: boolean;
  status: TutorialStatus;
  youtubeUrl: string;
};

export const tutorials: Tutorial[] = [
  {
    id: "black-screen-fix",
    slug: "black-screen-fix",
    episode: "01",
    title: "Black Screen Fix",
    description:
      "Fix the black preview problem by checking the right camera source.",
    imageSrc: "/images/solution-images/solution-01-w-black-screen.png",
    videoAspect: "landscape",
    seoTitle: "Ecamm Black Screen Fix (No Camera Showing? Do This)",
    seoDescription:
      "Fix the black screen issue in Ecamm by selecting the correct camera source. Simple step-by-step solution for when your camera isn’t showing.",
    relatedTutorialSlugs: [
      "profiles-vs-scenes",
      "add-camera-to-scene",
      "mic-setup",
    ],
    detailContent: {
      problemHeading: "Fixing the Ecamm Black Screen Problem",
      problemParagraphs: [
        "If your camera is not showing in Ecamm and you’re stuck with a black screen, this is usually caused by the wrong camera source being selected.",
        "It looks like nothing is working, but in most cases your camera is fine — Ecamm just isn’t pointing to it correctly.",
        "Ecamm allows you to switch between different camera inputs, and if the wrong one is selected, your preview may appear black even though your camera is working correctly.",
      ],
      stepsHeading: "How to fix it",
      stepsIntro: "Here’s the quickest way to fix it:",
      steps: [
        "Go to the Camera menu in Ecamm.",
        "Look at the list of available camera sources.",
        "Select the camera you want to use.",
        "Check the preview window to confirm your video appears.",
      ],
      stepsFollowUpParagraphs: [
        "If your camera feed appears, you’re ready to go.",
        "If not, try switching between the available camera options until your video shows up.",
      ],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "Many people think a black screen means their camera is not working.",
        "In most cases, the camera is working — Ecamm is just set to a different input, or a camera that is no longer active.",
      ],
      closingNote:
        "Once your camera is showing, you’re ready to go live or record without any issues.",
    },
    tags: ["Foundation", "Camera"],
    popular: true,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/0NAdYRZDo00",
  },
  {
    id: "profiles-vs-scenes",
    slug: "profiles-vs-scenes",
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
    slug: "add-camera-to-scene",
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
    slug: "mic-setup",
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
    slug: "creating-your-first-scene",
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
    slug: "why-cant-i-see-my-overlay",
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
    slug: "where-did-my-panel-go",
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
    slug: "preview-vs-live",
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
    slug: "global-vs-scene-overlays",
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
    slug: "adding-a-countdown-timer",
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
    slug: "displaying-viewer-comments",
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
    slug: "interview-mode",
    episode: "12",
    title: "Interview Mode",
    description: "Bring in guests cleanly for interviews and co-host streams.",
    tags: ["Power Tips", "Pro"],
    popular: false,
    status: "coming-soon",
    youtubeUrl: "#",
  },
];

export const publishedTutorials = tutorials.filter(
  (tutorial) => tutorial.status === "published",
);

export function getTutorialBySlug(slug: string) {
  return tutorials.find((tutorial) => tutorial.slug === slug);
}
