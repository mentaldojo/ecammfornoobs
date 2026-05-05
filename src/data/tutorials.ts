export type TutorialStatus = "published" | "coming-soon";

// Solution page content pattern:
// 1. Use real beginner search language in the opening problem explanation.
// 2. Explain what is actually happening in plain English.
// 3. Provide a short numbered step list.
// 4. Include a common mistake section.
// 5. Add a short closing reassurance or next-step note.
// 6. Link to related internal tutorials where relevant.
// Affiliate recommendations should only appear on tutorials where the product
// directly helps with the exact problem being solved. Keep tutorial value
// first and affiliate content secondary.
export type TutorialAffiliateRecommendation = {
  name: string;
  description: string;
  href: string;
};

export type TutorialDetailContent = {
  problemHeading: string;
  problemParagraphs: string[];
  stepsHeading: string;
  stepsIntro?: string;
  steps: string[];
  stepsFollowUpParagraphs: string[];
  affiliateRecommendationsHeading?: string;
  affiliateRecommendationsIntroParagraphs?: string[];
  affiliateRecommendations?: TutorialAffiliateRecommendation[];
  affiliateDisclosure?: string;
  commonMistakeHeading: string;
  commonMistakeParagraphs: string[];
  nextStepsHeading?: string;
  nextStepsIntro?: string;
  nextStepsTutorialSlugs?: string[];
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
    imageSrc: "/images/solution-images/solution-02-scenes-profiles-w.png",
    videoAspect: "landscape",
    seoTitle: "Ecamm Profiles vs Scenes (Why This Confuses Everyone)",
    seoDescription:
      "Understand the difference between profiles and scenes in Ecamm. Learn why your scenes can seem to disappear and what’s really happening when you switch profiles.",
    relatedTutorialSlugs: [
      "add-camera-to-scene",
      "mic-setup",
      "creating-your-first-scene",
    ],
    detailContent: {
      problemHeading: "Profiles vs scenes in Ecamm explained",
      problemParagraphs: [
        "Confused about profiles vs scenes in Ecamm? You’re not alone — this is one of the most common beginner sticking points.",
        "If your scenes seem to disappear in Ecamm or things suddenly look different, it can be confusing at first.",
        "This usually happens because you’ve switched profiles — not because anything is broken.",
        "In Ecamm, profiles and scenes are closely connected, but they do different jobs. A profile is a complete setup, and each profile contains its own set of scenes.",
        "The key thing to understand is this:",
        "The Scenes panel always looks the same — but the scenes inside it change depending on which profile you have loaded.",
      ],
      stepsHeading: "How it works",
      steps: [
        "Open Ecamm and look at the Scenes panel",
        "Note the current scenes you have available",
        "Go to the Profiles menu",
        "Switch to a different profile",
        "Look back at the Scenes panel",
      ],
      stepsFollowUpParagraphs: [
        "You’ll see that the scenes have changed.",
        "That’s because each profile has its own set of scenes.",
        "Switch back to your original profile, and your original scenes will return.",
      ],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "Many people think their scenes have been deleted or lost when they switch profiles.",
        "In reality, nothing has been removed — you’re simply looking at a different set of scenes from another profile.",
      ],
    },
    tags: ["Foundation", "Beginner"],
    popular: true,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/Z5Ah442NDvw",
  },
  {
    id: "camera-source-setup",
    slug: "add-camera-to-scene",
    episode: "03",
    title: "Add a Camera to a Scene",
    description: "Add a camera to your scene so your setup is ready to use.",
    imageSrc: "/images/solution-images/solution-03-add-camera-to-scene-w.png",
    videoAspect: "landscape",
    seoTitle: "How to Add a Camera to a Scene in Ecamm",
    seoDescription:
      "Learn how to add a camera to a scene in Ecamm using the Overlays panel. Simple step-by-step guide to get your camera working correctly.",
    relatedTutorialSlugs: [
      "profiles-vs-scenes",
      "mic-setup",
      "creating-your-first-scene",
    ],
    detailContent: {
      problemHeading: "Add a camera to a scene in Ecamm",
      problemParagraphs: [
        "If your camera is not showing in Ecamm, or you’re not sure how to add one to your scene, this usually comes down to where cameras are added in the interface.",
        "Many beginners look in the Camera menu first, but adding a camera actually starts inside the scene itself.",
        "In Ecamm, each scene contains its own elements — including your camera, screen share, and overlays.",
        "Once you understand that cameras are added inside a scene, setting up your video becomes much simpler.",
      ],
      stepsHeading: "How to add a camera to a scene",
      steps: [
        "Go to the Scenes window in Ecamm",
        "Create a new scene or select an existing one",
        "Move down to the Overlays panel",
        "Click the camera icon to add a camera source",
        "Select the camera you want to use",
        "Check the preview to confirm your camera appears",
      ],
      stepsFollowUpParagraphs: [
        "Once your camera appears in the preview, it is now part of that scene and ready to use.",
        "You can switch between scenes at any time, and each scene can have its own camera setup.",
      ],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "A common mistake is trying to add or change the camera from the Camera menu before a camera has been added to the scene.",
        "In Ecamm, the Camera menu is used to switch between cameras — not to add them in the first place.",
        "Always start by adding the camera inside the scene using the Overlays panel.",
      ],
      closingNote:
        "Once your camera is added to a scene, you’re ready to record or go live with confidence.",
    },
    tags: ["Foundation", "Camera"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/paRApNlF-Ss",
  },
  {
    id: "mic-setup",
    slug: "mic-setup",
    episode: "04",
    title: "Mic Setup",
    description: "Get clean audio fast with the right input and level checks.",
    imageSrc: "/images/solution-images/solution-04-amic-input-setup-w.png",
    videoAspect: "landscape",
    seoTitle: "Ecamm Mic Setup (No Audio? Add Your Microphone Fast)",
    seoDescription:
      "Fix no audio issues in Ecamm by adding and selecting the correct microphone. Step-by-step guide to getting your mic working quickly.",
    relatedTutorialSlugs: [
      "profiles-vs-scenes",
      "add-camera-to-scene",
      "black-screen-fix",
    ],
    detailContent: {
      problemHeading: "Mic Setup in Ecamm (Fixing No Audio Issues)",
      problemParagraphs: [
        "If you can’t hear any sound in Ecamm, the problem is usually simple.",
        "In most cases, your microphone hasn’t been added or selected correctly inside Ecamm, even though it is connected and working on your system.",
        "Ecamm requires you to explicitly add your microphone and confirm it in the Sound Levels window. Once that’s done, your audio will come through clearly.",
      ],
      stepsHeading: "How to add and check your microphone in Ecamm",
      steps: [
        "Open the Sound Levels window in Ecamm",
        "Look for your available microphone inputs",
        "Select the microphone you want to use",
        "Speak and check that the audio levels are moving",
        "Adjust the volume slider if needed",
        "(Optional) Add a second microphone if you need multiple inputs",
      ],
      stepsFollowUpParagraphs: [
        "If you can see the levels moving, your microphone is working correctly.",
      ],
      affiliateRecommendationsHeading: "Optional: Simple audio setup",
      affiliateRecommendationsIntroParagraphs: [
        "If you want cleaner, more reliable audio in Ecamm, this is the kind of setup I use.",
        "You do not need this exact setup to follow the tutorial, but a good microphone, audio interface, and clean gain can make a big difference to how your voice sounds.",
      ],
      affiliateRecommendations: [
        {
          name: "Shure SM7B",
          description: "Professional broadcast microphone with rich, warm sound.",
          href: "https://amzn.to/3OW5VZB",
        },
        {
          name: "Audient iD14 MKII",
          description:
            "High-quality audio interface to connect XLR microphones to your computer.",
          href: "https://amzn.to/3OULQmp",
        },
        {
          name: "Cloudlifter CL-2",
          description:
            "Clean gain booster to get the best performance from the SM7B.",
          href: "https://amzn.to/4ukIacs",
        },
      ],
      affiliateDisclosure:
        "As an Amazon Associate, I earn from qualifying purchases. There’s no extra cost to you, and it helps support the creation of more tutorials like these.",
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "Many beginners assume their microphone isn’t working when there is no sound.",
        "In reality, the microphone often just hasn’t been added or selected inside Ecamm’s Sound Levels window.",
      ],
      nextStepsHeading: "What to do next",
      nextStepsIntro: "Now that your audio is working, you may want to:",
      nextStepsTutorialSlugs: [
        "add-camera-to-scene",
        "profiles-vs-scenes",
        "black-screen-fix",
      ],
    },
    tags: ["Foundation", "Audio"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/OkHTOA-B4_E",
  },
  {
    id: "first-scene",
    slug: "creating-your-first-scene",
    episode: "05",
    title: "Creating Your First Scene",
    description: "Build a simple scene layout you can confidently reuse.",
    imageSrc: "/images/solution-images/solution-05-scenes.png",
    videoAspect: "landscape",
    seoTitle: "Create Your First Scene in Ecamm (Beginner Step-by-Step Guide)",
    seoDescription:
      "Learn how to create your first scene in Ecamm. Step-by-step guide to adding content, using overlays, and understanding what your audience sees.",
    relatedTutorialSlugs: [
      "add-camera-to-scene",
      "mic-setup",
      "profiles-vs-scenes",
    ],
    detailContent: {
      problemHeading: "Creating Your First Scene in Ecamm",
      problemParagraphs: [
        "If you’re new to Ecamm, understanding scenes is one of the most important steps.",
        "A scene is what your audience actually sees. Everything you add — your camera, screen share, text, and overlays — lives inside a scene.",
        "Many beginners get stuck because they try to add things before creating a scene, or they don’t realise how scenes and overlays work together. Once you understand this relationship, your setup becomes much easier to manage.",
      ],
      stepsHeading: "How to create your first scene in Ecamm",
      steps: [
        "Open the Scenes window",
        "Click the plus button to create a new scene",
        "Rename the scene to something meaningful (for example, “Screen Share”)",
        "Move down to the Overlays window",
        "Add a screen share or camera",
        "Add text or other elements as needed",
        "Return to the Scenes window and select your scene",
      ],
      stepsFollowUpParagraphs: [
        "What you see in that scene is exactly what your audience will see.",
      ],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "A common mistake is thinking that scenes automatically contain content.",
        "In reality, a scene starts empty — you need to add overlays like your camera, screen, or text to build what your audience sees.",
      ],
      nextStepsHeading: "What to do next",
      nextStepsIntro:
        "Now that you’ve created your first scene, you may want to:",
      nextStepsTutorialSlugs: [
        "add-camera-to-scene",
        "mic-setup",
        "profiles-vs-scenes",
      ],
    },
    tags: ["Foundation", "Scenes"],
    popular: true,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/B6--t4SJFxY",
  },
  {
    id: "cant-see-overlay",
    slug: "why-cant-i-see-my-overlay",
    episode: "06",
    title: "Why Can't I See My Overlay?",
    description:
      "Fix missing overlays by checking visibility, scene assignment, and source order.",
    imageSrc: "/images/solution-images/solution-06-overlays-w.png",
    videoAspect: "landscape",
    seoTitle: "Ecamm Overlay Not Showing? Fix It Fast",
    seoDescription:
      "Fix overlays not showing in Ecamm by adjusting overlay order and visibility. Quick step-by-step guide to get your overlays working.",
    relatedTutorialSlugs: [
      "creating-your-first-scene",
      "add-camera-to-scene",
      "mic-setup",
    ],
    detailContent: {
      problemHeading: "Why You Can’t See Your Overlay in Ecamm",
      problemParagraphs: [
        "If your overlay is not showing in Ecamm, it can be frustrating — especially when you know you’ve added it.",
        "In most cases, nothing is broken. The issue usually comes down to how overlays are stacked or whether the overlay is turned on.",
        "Ecamm layers overlays on top of each other, and if your overlay is hidden behind another element or disabled, it won’t be visible in your scene.",
      ],
      stepsHeading: "How to fix an overlay that isn’t showing in Ecamm",
      steps: [
        "Open the Overlays panel",
        "Find the overlay you are trying to show",
        "Drag the overlay to the top of the list",
        "Check that the overlay is turned on (visibility enabled)",
        "Look at the preview to confirm it is now visible",
      ],
      stepsFollowUpParagraphs: [
        "If your overlay is still not visible, try moving it above other elements again to ensure it is not hidden behind them.",
      ],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "Many beginners assume their overlay has been deleted or is not working.",
        "In reality, the overlay is often still there — it is just behind another element or has been turned off in the Overlays panel.",
      ],
      nextStepsHeading: "What to do next",
      nextStepsIntro: "Now that your overlay is visible, you may want to:",
      nextStepsTutorialSlugs: [
        "creating-your-first-scene",
        "add-camera-to-scene",
        "mic-setup",
      ],
    },
    tags: ["Visuals", "Overlays"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/KUlIDPwpZTw",
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
