export type TutorialStatus = "published" | "comingSoon";

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

export type TutorialExplanationSection = {
  heading: string;
  paragraphs: string[];
};

export type TutorialDetailContent = {
  problemHeading: string;
  problemParagraphs: string[];
  keyIdeaHeading?: string;
  keyIdeaText?: string;
  explanationSections?: TutorialExplanationSection[];
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
  duration?: string;
  solutionNumber?: string;
  title: string;
  description: string;
  shortDescription?: string;
  category?: string;
  imageSrc?: string;
  thumbnail?: string;
  videoAspect?: "portrait" | "landscape";
  seoTitle?: string;
  seoDescription?: string;
  relatedTutorialSlugs?: string[];
  detailContent?: TutorialDetailContent;
  tags: string[];
  popular: boolean;
  status: TutorialStatus;
  articleReady?: boolean;
  youtubeUrl?: string | null;
};

const rawTutorials: Tutorial[] = [
  {
    id: "black-screen-fix",
    slug: "black-screen-fix",
    episode: "01",
    duration: "0:56",
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
    duration: "0:49",
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
    duration: "1:09",
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
    duration: "1:35",
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
    duration: "1:47",
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
    duration: "1:48",
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
    duration: "1:17",
    title: "Where Did My Panel Go?",
    description: "Quick fixes when Ecamm panels disappear unexpectedly.",
    imageSrc: "/images/solution-images/solution-07-missing-panel-w.png",
    videoAspect: "landscape",
    seoTitle: "Ecamm Panel Missing? Get It Back Fast",
    seoDescription:
      "Fix missing panels in Ecamm by restoring them from the Window menu. Quick step-by-step guide to bring back scenes, overlays, and more.",
    relatedTutorialSlugs: [
      "creating-your-first-scene",
      "add-camera-to-scene",
      "why-cant-i-see-my-overlay",
    ],
    detailContent: {
      problemHeading: "Where Did My Panel Go in Ecamm?",
      problemParagraphs: [
        "If a panel like Scenes, Overlays, or Sound Levels suddenly disappears in Ecamm, it can feel like something has gone wrong.",
        "In most cases, nothing has been deleted. The panel is usually just hidden or turned off in the interface.",
        "Ecamm allows you to show and hide panels, so if something disappears, it is almost always still there — just not currently visible.",
      ],
      stepsHeading: "How to bring a missing panel back in Ecamm",
      steps: [
        "Go to the Window menu at the top of Ecamm",
        "Look through the list of available panels",
        "Click the panel you are missing (for example, Scenes or Overlays)",
        "Check your screen to confirm the panel has reappeared",
        "If needed, drag or resize the panel so it is clearly visible",
      ],
      stepsFollowUpParagraphs: [
        "If the panel still doesn’t appear where you expect it, check around the edges of the window — it may be collapsed or off-screen.",
      ],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "Many beginners think a panel has been deleted when it disappears.",
        "In reality, panels are almost always just hidden using the Window menu or accidentally moved out of view.",
      ],
      nextStepsHeading: "What to do next",
      nextStepsIntro: "Now that your panels are back, you may want to:",
      nextStepsTutorialSlugs: [
        "creating-your-first-scene",
        "add-camera-to-scene",
        "why-cant-i-see-my-overlay",
      ],
    },
    tags: ["Foundation", "Troubleshooting"],
    popular: true,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/6m8MxeX0VJc",
  },
  {
    id: "preview-vs-live",
    slug: "preview-vs-live",
    episode: "08",
    duration: "3:06",
    title: "Preview vs Live",
    description: "Learn when to stage in Preview and when to go Live.",
    imageSrc: "/images/solution-images/solution-08-preview-vs-live-w.png",
    videoAspect: "landscape",
    seoTitle: "Ecamm Preview vs Live Mode Explained (What Publish Actually Does)",
    seoDescription:
      "Learn how Preview Mode works in Ecamm, what the Program window means, and what actually happens when you click Publish during a livestream or recording.",
    relatedTutorialSlugs: [
      "creating-your-first-scene",
      "why-cant-i-see-my-overlay",
      "profiles-vs-scenes",
    ],
    detailContent: {
      problemHeading: "Preview Mode vs Live Mode in Ecamm",
      problemParagraphs: [
        "If you are new to Ecamm, Preview Mode can feel confusing at first.",
        "Many beginners click the Preview button accidentally and suddenly see a second Program window appear, a yellow border around the screen, and a Publish button they are unsure about.",
        "The important thing to understand is this:",
      ],
      keyIdeaHeading: "The key idea",
      keyIdeaText:
        "Preview Mode lets you prepare changes before your audience sees them live. Program shows what is currently going out, and Publish sends your prepared change to the live output.",
      explanationSections: [
        {
          heading: "What Preview Mode actually does",
          paragraphs: [
            "Preview Mode is designed to let you prepare changes before your audience sees them.",
            "This becomes most useful when you are already live streaming or recording.",
            "Instead of making changes directly in front of your viewers, Ecamm lets you build the next version of your scene safely inside the Preview window first.",
            "The large yellow-bordered window becomes your Preview area.",
          ],
        },
        {
          heading: "What the Program window means",
          paragraphs: [
            "The smaller Program window shows what your audience is currently seeing live.",
            "This means you can prepare overlays, scene changes, layouts, or media without immediately sending those changes to your stream.",
          ],
        },
        {
          heading: "What Publish actually does",
          paragraphs: [
            "Only when you click Publish do those prepared changes get sent to the live output.",
            "This workflow is what makes Ecamm feel more like a professional live production system.",
          ],
        },
      ],
      stepsHeading: "How Preview Mode Works in Ecamm",
      steps: [
        "Click the Preview Mode button inside Ecamm.",
        "Notice the yellow border appear around the large Preview window.",
        "Look at the smaller Program window that appears below.",
        "Make a change inside Preview, such as adding an overlay.",
        "Confirm the change appears only in Preview.",
        "Click Publish when you are ready for viewers to see the update.",
        "Watch the Program window update to the new version.",
      ],
      stepsFollowUpParagraphs: [],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "Many beginners think the Publish button starts their livestream.",
        "It does not.",
        "Publish simply sends your prepared Preview changes to the live Program output.",
        "If you are already live, your audience will see the update immediately after clicking Publish.",
      ],
      nextStepsHeading: "What to learn next",
      nextStepsTutorialSlugs: [
        "creating-your-first-scene",
        "why-cant-i-see-my-overlay",
        "profiles-vs-scenes",
      ],
    },
    tags: ["Foundation", "Workflow"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/k9jqVczTPIY",
  },
  {
    id: "global-vs-scene-overlays",
    slug: "global-vs-scene-overlays",
    episode: "09",
    duration: "5:25",
    title: "Global vs Scene Overlays",
    description: "Choose the right overlay scope for cleaner production flow.",
    imageSrc: "/images/solution-images/solution-09-global-vs-scene-overlays-w.png",
    videoAspect: "landscape",
    seoTitle:
      "Ecamm Overlays Explained (Global, Scene & Background Overlays)",
    seoDescription:
      "Learn the difference between global overlays, scene overlays, and background overlays in Ecamm, including why Source to Blank can reveal a hidden background.",
    relatedTutorialSlugs: [
      "why-cant-i-see-my-overlay",
      "creating-your-first-scene",
      "preview-vs-live",
    ],
    detailContent: {
      problemHeading: "Global vs Scene Overlays in Ecamm",
      problemParagraphs: [
        "Overlays in Ecamm can feel confusing at first because they do not all behave the same way.",
        "Some overlays appear across every scene, some only appear in the current scene, and background overlays can seem invisible if the main camera source is covering them.",
        "Once you understand the difference between global overlays, scene overlays, and background overlays, it becomes much easier to build clean layouts and avoid wondering why something has disappeared.",
      ],
      keyIdeaHeading: "The key idea",
      keyIdeaText:
        "Show in all scenes means the overlay appears everywhere. Show in current scene means it only appears in that scene. Show in background places the item underneath your overlay layout, but it may be hidden if your base source is still filling the frame.",
      explanationSections: [
        {
          heading: "What “Show in all scenes” means",
          paragraphs: [
            "Show in all scenes is for overlays you want to appear across your whole production.",
            "This is useful for things like logos, watermarks, persistent branding, or any item that should follow you as you move between scenes.",
            "If you add an overlay here and then switch scenes, that overlay should stay visible because it is global.",
          ],
        },
        {
          heading: "What “Show in current scene” means",
          paragraphs: [
            "Show in current scene is for overlays that only belong in one specific scene.",
            "This is useful for labels, temporary graphics, topic titles, instructions, or anything that should only appear in one layout.",
            "If you switch to another scene and the overlay disappears, that does not mean it has been deleted. It simply belongs to the previous scene.",
          ],
        },
        {
          heading: "What “Show in background” means",
          paragraphs: [
            "Show in background is for items that should sit underneath your main overlay layout, such as a background image, texture, or branded backdrop.",
            "This is where many beginners get stuck. You can drag an image into Show in background and still not see it if your full-frame camera source is covering the canvas.",
            "The background image is there, but it is hidden behind the active base source.",
          ],
        },
        {
          heading: "Why Source to Blank matters",
          paragraphs: [
            "If your camera is being used as the full-frame base source, it fills the entire canvas and covers anything placed behind it.",
            "To reveal a background overlay, go to the Source menu at the top of Ecamm and choose Blank.",
            "Blank removes the full-frame base source, leaving your background visible. Then you can add your camera as an overlay, resize it, and position it over the background.",
          ],
        },
      ],
      stepsHeading: "How to reveal a background overlay in Ecamm",
      steps: [
        "Drag your background image into Show in background in the Overlays panel.",
        "Add your camera as an overlay using the camera overlay button.",
        "Go to the Source menu in the Mac menu bar.",
        "Choose Blank.",
        "Check that the background image is now visible.",
        "Click your camera overlay in the preview window.",
        "Resize and reposition the camera overlay as needed.",
      ],
      stepsFollowUpParagraphs: [
        "The important point is that the base source and overlays are separate layers. If the base source is still active and filling the frame, it can hide the background underneath.",
      ],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "A common mistake is trying to resize the full-frame camera directly in the preview window.",
        "That camera is usually the base source, not an overlay, so it will not behave like a movable object with resize handles.",
        "To build a background layout, switch the Source menu to Blank and use a camera overlay instead.",
      ],
      nextStepsHeading: "What to learn next",
      nextStepsTutorialSlugs: [
        "why-cant-i-see-my-overlay",
        "creating-your-first-scene",
        "preview-vs-live",
      ],
    },
    tags: ["Visuals", "Overlays"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/daV-fwMaLHY",
  },
  {
    id: "countdown-timer",
    slug: "adding-a-countdown-timer",
    episode: "10",
    duration: "3:50",
    title: "Adding a Countdown Timer",
    description: "Set up a pre-show timer to start streams with confidence.",
    imageSrc: "/images/solution-images/solution-10-adding-countdown-timer-w.png",
    videoAspect: "landscape",
    seoTitle: "How to Add a Countdown Timer in Ecamm",
    seoDescription:
      "Learn how to create countdown timers in Ecamm, including Auto-Start, scene switching, Preview Mode, and professional pre-show livestream workflows.",
    relatedTutorialSlugs: [
      "creating-your-first-scene",
      "preview-vs-live",
      "global-vs-scene-overlays",
    ],
    detailContent: {
      problemHeading: "Adding a Countdown Timer in Ecamm",
      problemParagraphs: [
        "A countdown timer helps your livestream feel intentional instead of abrupt.",
        "Rather than suddenly appearing live, a countdown scene gives your audience time to arrive, settle in, and prepare before the show begins.",
        "It also gives you a calm final minute to check audio, framing, overlays, and stream health before you start speaking.",
        "Many beginners know they want a countdown timer but are not sure how Ecamm timers actually work, where to place them, or why some countdown setups feel more professional than others.",
      ],
      keyIdeaHeading: "The key idea",
      keyIdeaText:
        "Countdown timers work best when they are placed inside a dedicated pre-show scene. This lets you prepare your livestream separately from your main show layout and transition into the stream cleanly.",
      explanationSections: [
        {
          heading: "Why countdown timers matter",
          paragraphs: [
            "A countdown timer is not just decoration.",
            "It creates a transition moment between “waiting” and “the show has started.”",
            "This makes livestreams feel calmer and more intentional, especially for webinars, interviews, podcasts, and live events.",
            "It also gives viewers confidence that they are in the right place and that the stream is about to begin.",
          ],
        },
        {
          heading: "Countdown vs clock vs stopwatch",
          paragraphs: [
            "Ecamm includes several timer styles.",
            "Countdown counts down toward zero and is usually used before a livestream begins.",
            "Clock displays the current time.",
            "Stopwatch counts upward and is useful for timing segments or demonstrations.",
            "For most livestream intros, Countdown is the timer most creators use.",
          ],
        },
        {
          heading: "Why countdown timers usually belong in their own scene",
          paragraphs: [
            "Most creators build a dedicated pre-show scene specifically for the countdown timer.",
            "This keeps the timer separate from the main show layout and prevents countdown overlays from accidentally appearing during the livestream itself.",
            "A dedicated countdown scene also makes transitions cleaner and easier to manage during live production.",
          ],
        },
        {
          heading: "How Auto-Start works",
          paragraphs: [
            "Auto-Start allows the countdown timer to begin automatically when the scene becomes active.",
            "This means you can switch into your countdown scene and the timer immediately starts running without manually pressing play.",
            "This is one of the easiest ways to make a livestream feel more polished and professional.",
          ],
        },
        {
          heading: "Automatically switching scenes when the timer ends",
          paragraphs: [
            "Ecamm can automatically move to another scene when the countdown reaches zero.",
            "For example, you could create a countdown intro scene followed by your main livestream scene.",
            "When the timer finishes, Ecamm automatically transitions into the main show.",
            "This creates a much smoother start for viewers.",
          ],
        },
        {
          heading: "How countdown timers work with Preview Mode",
          paragraphs: [
            "If you are already live, Preview Mode allows you to prepare the countdown safely before your audience sees it.",
            "You can enter Preview Mode, position the timer, confirm it looks correct, and then click Publish when you are ready for viewers to see it.",
            "This prevents accidental layout mistakes from appearing live on stream.",
          ],
        },
      ],
      stepsHeading: "How to add a countdown timer in Ecamm",
      steps: [
        "Create or open the scene you want to use for your pre-show countdown.",
        "Open the Overlays panel.",
        "Click the timer overlay button.",
        "Choose Countdown as the timer type.",
        "Set your countdown duration.",
        "Position and resize the timer overlay.",
        "Enable Auto-Start if you want the timer to begin automatically.",
        "Optionally enable automatic scene switching when the timer finishes.",
        "Run a quick rehearsal to confirm readability and timing.",
      ],
      stepsFollowUpParagraphs: [
        "A simple rehearsal pass helps you catch timing, visibility, and layout issues before you go live.",
      ],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "A common mistake is placing the countdown timer inside the same scene used for the main livestream.",
        "This can lead to timers accidentally remaining visible after the show begins.",
        "Keeping countdown timers inside a dedicated pre-show scene makes the production flow cleaner and easier to control.",
      ],
      nextStepsHeading: "What to learn next",
      nextStepsTutorialSlugs: [
        "preview-vs-live",
        "creating-your-first-scene",
        "global-vs-scene-overlays",
      ],
      closingNote:
        "A simple countdown scene makes your stream start feel intentional, calm, and more professional.",
    },
    tags: ["Visuals", "Overlays"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/iwv-VyInWvc",
  },
  {
    id: "comments-on-screen",
    slug: "displaying-viewer-comments",
    episode: "11",
    duration: "4:18",
    title: "Displaying Viewer Comments In Ecamm Live",
    description:
      "Learn how to show live YouTube comments on screen in Ecamm Live using comment overlays, placeholder styles, and auto-hide settings.",
    imageSrc: "/images/solution-images/solution-11-display-comments-w.png",
    videoAspect: "landscape",
    seoTitle: "Displaying Viewer Comments In Ecamm Live",
    seoDescription:
      "Learn how to show live YouTube comments on screen in Ecamm Live using comment overlays, placeholder styles, and auto-hide settings.",
    relatedTutorialSlugs: [
      "creating-your-first-scene",
      "global-vs-scene-overlays",
      "preview-vs-live",
      "adding-a-countdown-timer",
    ],
    detailContent: {
      problemHeading: "Displaying Viewer Comments In Ecamm Live",
      problemParagraphs: [
        "One of the things that makes livestreaming feel alive is seeing real audience interaction appear on screen.",
        "When viewer comments appear during a livestream, the stream immediately feels more personal, more responsive, and more engaging.",
        "But when most beginners first try to use comments inside Ecamm Live, things often become confusing very quickly.",
        "Comments may not appear correctly. The formatting can feel inconsistent. Sometimes comments stay on screen too long. And many people accidentally connect YouTube the wrong way, which prevents comments from working properly altogether.",
        "The good news is that once you understand the basic workflow, Ecamm’s comment system is actually very straightforward and extremely powerful.",
      ],
      keyIdeaHeading: "The key idea",
      keyIdeaText:
        "Comments work best when you treat them as part of your livestream layout - not as random popups. Once you create a clean placeholder style, every comment automatically feels consistent, readable, and professional.",
      explanationSections: [
        {
          heading: "Why comment overlays matter",
          paragraphs: [
            "Displaying viewer comments changes the feeling of a livestream.",
            "Instead of the audience watching passively, the stream begins to feel interactive.",
            "This is especially useful for teaching streams, podcasts, interviews, Q&A sessions, and live demonstrations.",
            "Even simple comments on screen make viewers feel acknowledged and involved.",
          ],
        },
        {
          heading: "Why YouTube connection method matters",
          paragraphs: [
            "One of the biggest misunderstandings is how Ecamm connects to YouTube.",
            "Many beginners use a raw RTMP stream key because the stream itself works correctly.",
            "But while the video may stream successfully, comments and reactions often fail to connect properly in that setup.",
            "Ecamm works much better when connected directly through the built-in YouTube destination integration. This allows Ecamm to properly access live chat, reactions, viewer interaction, and comment overlays.",
          ],
        },
        {
          heading: "Creating a reusable comment style",
          paragraphs: [
            "Ecamm allows you to create placeholder comment overlays, and this is one of the easiest ways to make your livestream feel more polished.",
            "Inside Ecamm, go to Overlays and add a Placeholder Comment Overlay. This creates a sample comment box that you can fully design and position.",
            "You can adjust size, colors, fonts, placement, animation, transparency, and rounded corners.",
            "Once styled, future comments automatically appear using that same visual style. This keeps the livestream visually consistent instead of every comment appearing differently.",
          ],
        },
        {
          heading: "Why auto-hide comments helps",
          paragraphs: [
            "If comments remain on screen too long, the stream can quickly start to feel cluttered.",
            "Ecamm allows comments to automatically disappear after a chosen number of seconds.",
            "Most creators use around 6, 8, or 10 seconds depending on how large the comment is.",
            "This creates a much cleaner viewing experience during livestreams.",
          ],
        },
      ],
      stepsHeading: "How to display comments in Ecamm",
      steps: [
        "Connect Ecamm using the built-in YouTube destination.",
        "Start a livestream.",
        "Open the Comments window.",
        "Click any viewer comment to display it on screen.",
        "Position and style the comment overlay.",
        "Create a placeholder comment overlay for consistency.",
        "Enable auto-hide comments if desired.",
      ],
      stepsFollowUpParagraphs: [
        "A short rehearsal stream is one of the best ways to test your layout before going live publicly.",
      ],
      commonMistakeHeading: "Common mistake",
      commonMistakeParagraphs: [
        "One of the most common mistakes is connecting YouTube using only a manual stream key.",
        "While the stream itself may work, comments and reactions often do not connect correctly inside Ecamm.",
        "Using Ecamm’s native YouTube integration is usually the cleaner and more reliable workflow.",
      ],
      nextStepsHeading: "What to learn next",
      nextStepsTutorialSlugs: [
        "creating-your-first-scene",
        "global-vs-scene-overlays",
        "preview-vs-live",
        "adding-a-countdown-timer",
      ],
      closingNote:
        "Displaying comments properly is one of the simplest ways to make a livestream feel more human, interactive, and professional.",
    },
    tags: ["Audio & Content", "Engagement"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/1NMa5mrIUhY",
  },
  {
    id: "interview-mode",
    slug: "interview-mode",
    episode: "12",
    duration: "7:13",
    solutionNumber: "12",
    title: "Interview Mode",
    description:
      "Bring guests into Ecamm safely using invite links, the green room, and clear on-screen control before they go live.",
    shortDescription:
      "Bring guests into Ecamm safely using invite links, the green room, and clear on-screen control before they go live.",
    category: "Production Basics",
    imageSrc: "/images/solution-images/solution-12-interview-mode-beginers-w.png",
    thumbnail: "/images/solution-images/solution-12-interview-mode-beginers-w.png",
    videoAspect: "landscape",
    seoTitle: "Ecamm Interview Mode for Beginners (Calm Guest Workflow)",
    seoDescription:
      "Learn Ecamm Interview Mode with a calm, beginner-safe workflow: scene prep, green room, guest visibility, broadcast vs host camera, and echo cancellation.",
    relatedTutorialSlugs: [
      "creating-your-first-scene",
      "preview-vs-live",
      "global-vs-scene-overlays",
    ],
    detailContent: {
      problemHeading: "Interview Mode in Ecamm without the panic",
      problemParagraphs: [
        "Interview Mode is exciting, but it can also feel like a lot the first time. You are not just turning on your camera. You are managing a guest, your own audio, scene layout, and what viewers can currently see.",
        "Most beginner stress comes from one fear: accidentally showing the wrong thing live. That fear is normal, and the good news is Ecamm gives you a very clear workflow to stay in control.",
        "This tutorial walks through that workflow in plain English, so your first guest interview feels calm and predictable instead of rushed.",
      ],
      keyIdeaHeading: "The key idea",
      keyIdeaText:
        "Prepare your scene first, invite your guest second, and only bring them on screen when you are ready. In Ecamm, scenes control visibility, and that is what keeps your interview flow safe.",
      explanationSections: [
        {
          heading: "What Interview Mode actually is",
          paragraphs: [
            "Interview Mode is Ecamm's built-in guest system. Instead of requiring guests to install complicated software, you send an invite link and they join from their browser.",
            "Think of it as a controlled waiting-and-staging workflow. Guests join your session first, then you decide when they appear in the live scene.",
          ],
        },
        {
          heading: "Why preparing your scene first matters",
          paragraphs: [
            "Before sending the invite link, set up the scene you want to use for the interview. Add your layout, placeholders, name graphics, and any overlays you need.",
            "If you prepare this first, you are not making visual decisions under pressure while your guest is waiting. You already know what viewers will see.",
          ],
        },
        {
          heading: "The Green Room, explained simply",
          paragraphs: [
            "The Green Room is where your guest waits before they are shown to your audience.",
            "This is your safety buffer. You can confirm their camera, check their mic, and make sure they feel ready without exposing that setup moment live.",
          ],
        },
        {
          heading: "Bringing the guest into the scene",
          paragraphs: [
            "When your guest is ready, you add them into the scene intentionally. They do not have to appear instantly just because they joined.",
            "That one decision point is important. It gives you control over timing, framing, and confidence.",
          ],
        },
        {
          heading: "Broadcast vs Host Camera (beginner version)",
          paragraphs: [
            "A simple way to think about this: Host Camera is what you are working with privately in your production view, while Broadcast is what your audience can currently see.",
            "If those two states differ, that is normal and useful. It means you can prepare your next move before viewers see it.",
          ],
        },
        {
          heading: "Echo cancellation and cleaner guest audio",
          paragraphs: [
            "Echo usually happens when guest audio leaks back through speakers and gets picked up by a microphone again.",
            "Using headphones and checking echo cancellation settings early prevents the most common interview audio issue. A quick check in the Green Room saves a lot of stress later.",
          ],
        },
        {
          heading: "Why scenes are the real interview workflow",
          paragraphs: [
            "In Ecamm, scenes are not just decoration. They are your visibility control system.",
            "If a guest is not in the active scene, viewers do not see them. If an overlay is not in that scene, viewers do not see that either. Once this clicks, interviews feel much safer to run.",
          ],
        },
      ],
      stepsHeading: "A beginner-safe guest workflow",
      stepsIntro:
        "Use this sequence each time and your interviews will feel far more predictable:",
      steps: [
        "Create or select your interview scene first.",
        "Add and position the elements you want viewers to see.",
        "Start Interview Mode and copy your guest invite link.",
        "Let the guest join and wait in the Green Room.",
        "Check guest camera, microphone, and overall readiness.",
        "Confirm your own audio routing and echo cancellation before bringing them in.",
        "Add the guest to the scene when you are ready.",
        "Begin the interview knowing your scene controls what is visible.",
      ],
      stepsFollowUpParagraphs: [
        "When you repeat this same sequence each time, livestream anxiety drops quickly because your process becomes familiar.",
      ],
      commonMistakeHeading: "Common beginner confusion",
      commonMistakeParagraphs: [
        "A common mistake is inviting the guest first and building the scene later. That usually creates pressure, messy transitions, and uncertainty about what viewers are seeing.",
        "Another common issue is assuming that joining the interview link automatically means the guest is fully live on screen. In practice, your scene and visibility controls decide that.",
        "If something feels chaotic, slow down and return to the sequence: scene first, Green Room check, then intentional on-screen placement.",
      ],
      nextStepsHeading: "What to learn next",
      nextStepsIntro:
        "After Interview Mode feels comfortable, these tutorials will help you tighten your workflow:",
      nextStepsTutorialSlugs: [
        "creating-your-first-scene",
        "preview-vs-live",
        "global-vs-scene-overlays",
      ],
      closingNote:
        "Your first successful guest interview does not need to be perfect. It just needs to be controlled, clear, and calm. With scene-first preparation, you will feel more confident every time you run one.",
    },
    tags: ["Production Basics", "Guests"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/RsuSmUfIvUo",
  },
  {
    id: "go-live-to-youtube",
    slug: "how-to-go-live-to-youtube",
    episode: "13",
    duration: "11:15",
    solutionNumber: "13",
    title: "How to Go Live in Ecamm",
    description: "Set up a reliable YouTube live destination and go live with confidence.",
    shortDescription:
      "Set up a reliable YouTube live destination and go live with confidence.",
    category: "Going Live",
    imageSrc: "/images/solution-images/solution-13-goliveinecamm-w.png",
    thumbnail: "/images/solution-images/solution-13-goliveinecamm-w.png",
    videoAspect: "landscape",
    seoTitle: "How to Go Live in Ecamm (Beginner-Safe YouTube Workflow)",
    seoDescription:
      "Learn how to go live in Ecamm with a calm, beginner-safe workflow: connect YouTube, choose privacy settings, use Preview Mode, build scenes safely, and publish with confidence.",
    relatedTutorialSlugs: [
      "preview-vs-live",
      "adding-a-countdown-timer",
      "creating-your-first-scene",
    ],
    detailContent: {
      problemHeading: "Going live for the first time can feel intense",
      problemParagraphs: [
        "Most beginners are not stuck on one button. They are stuck on the uncertainty. You can have everything open and still feel nervous about what happens the second you click Go Live.",
        "That is normal. Livestreaming can feel high pressure because it is public, and people worry about showing the wrong scene, using the wrong channel, or going live too early.",
        "This walkthrough gives you a simple, calm sequence you can follow so your first stream feels more under control.",
      ],
      keyIdeaHeading: "The key idea",
      keyIdeaText:
        "Ecamm is your live production room. YouTube is your destination platform. When you prepare scenes privately first and only publish when ready, livestreaming becomes much less stressful.",
      explanationSections: [
        {
          heading: "Ecamm vs YouTube, explained simply",
          paragraphs: [
            "Ecamm is where you build the show: your scenes, overlays, camera layout, and transitions.",
            "YouTube is where the stream is delivered to viewers. Ecamm controls the production. YouTube handles audience access, chat, and replay.",
          ],
        },
        {
          heading: "Connecting YouTube safely",
          paragraphs: [
            "Start by connecting your YouTube destination inside Ecamm, then pause and confirm the account and channel details before streaming.",
            "If you manage multiple channels, this quick check matters. One extra minute here can save you from a very common first-stream mistake.",
          ],
        },
        {
          heading: "Public, Unlisted, and Private",
          paragraphs: [
            "Public means anyone can find and watch your stream.",
            "Unlisted means only people with the link can watch. For most first tests, this is the safest choice.",
            "Private is locked to specific accounts and can limit who can join your test, so use it only when that restriction is intentional.",
          ],
        },
        {
          heading: "Why Preview Mode changes everything",
          paragraphs: [
            "Preview Mode lets you build and check changes before viewers see them.",
            "That means you can line up your camera, adjust overlays, and verify your scene calmly without broadcasting every adjustment.",
          ],
        },
        {
          heading: "Why Studio Mode reduces stress",
          paragraphs: [
            "Studio Mode gives you a clear separation between what you are preparing and what is currently live.",
            "It takes the panic down because you are not making every change in front of viewers. You can set things up first, then push it live when you are ready.",
          ],
        },
        {
          heading: "Build a safe Starting Soon scene first",
          paragraphs: [
            "Create a simple Starting Soon scene before anything else. It can be as basic as text, a background, and optional music.",
            "This gives you breathing room at the beginning of the stream so you are not rushed into your main content immediately.",
          ],
        },
        {
          heading: "Building scenes privately before viewers see them",
          paragraphs: [
            "After your Starting Soon scene is ready, prepare your teaching or interview scenes in Preview.",
            "In Ecamm, scenes control visibility. If it is not in the active live scene, viewers do not see it yet. That is your safety net.",
          ],
        },
        {
          heading: "Transitioning from Preview to Live calmly",
          paragraphs: [
            "Once the scene looks right in Preview, then you push it live.",
            "A calm rhythm helps: prepare, check, then publish. That keeps your stream clean and keeps you feeling in control.",
          ],
        },
        {
          heading: "What viewers actually see",
          paragraphs: [
            "Viewers only see what is in your current live output, not every behind-the-scenes adjustment.",
            "Remembering this helps a lot with nerves. You still have time to think, check, and adjust before each publish action.",
          ],
        },
        {
          heading: "Ending streams properly",
          paragraphs: [
            "When you are finished, close with a clear final message, then end the stream from Ecamm and confirm it has ended on YouTube.",
            "This avoids accidental extra live time and gives your audience a clean ending.",
          ],
        },
      ],
      stepsHeading: "A calm first-livestream workflow",
      stepsIntro: "Use this sequence for your first streams:",
      steps: [
        "Connect your YouTube destination in Ecamm and verify the correct channel.",
        "Set stream privacy to Unlisted for a safe first test.",
        "Create a simple Starting Soon scene.",
        "Prepare your main scenes in Preview Mode.",
        "Check audio, camera framing, and overlays before publishing.",
        "Go live and keep the Starting Soon scene up while you settle in.",
        "Transition scenes from Preview to Live only when ready.",
        "Close clearly and end the stream properly in Ecamm and YouTube.",
      ],
      stepsFollowUpParagraphs: [
        "The more you repeat this same sequence, the easier and calmer your livestream process gets.",
      ],
      commonMistakeHeading: "Common beginner fears and confusion",
      commonMistakeParagraphs: [
        "Many beginners think every setup adjustment is visible to viewers. In reality, Preview and scene control are there to protect you.",
        "Another common fear is choosing the wrong privacy setting or channel. A quick destination and privacy check before going live prevents most early mistakes.",
        "If you feel pressure rising, return to the workflow: Starting Soon scene, private preparation, then intentional publish.",
      ],
      closingNote:
        "Your first livestream does not need to be perfect. It just needs to feel safe and controlled. With a calm workflow, each stream gets easier.",
    },
    tags: ["Going Live", "YouTube"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/HVfynGG7N28",
  },
  {
    id: "persistent-stream-keys-explained",
    slug: "persistent-stream-keys-explained",
    episode: "33",
    solutionNumber: "33",
    title: "Persistent Stream Keys Explained",
    description:
      "Understand persistent stream keys and reusable streaming destinations.",
    shortDescription:
      "Understand persistent stream keys and reusable streaming destinations.",
    category: "Going Live",
    tags: ["Going Live", "YouTube"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "multistreaming-explained",
    slug: "multistreaming-explained",
    episode: "34",
    solutionNumber: "34",
    title: "Multistreaming Explained",
    description:
      "Understand when multistreaming helps and when it adds unnecessary complexity.",
    shortDescription:
      "Understand when multistreaming helps and when it adds unnecessary complexity.",
    category: "Going Live",
    tags: ["Going Live", "Workflow"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "screen-sharing-in-ecamm",
    slug: "screen-sharing-in-ecamm",
    episode: "14",
    duration: "6:22",
    solutionNumber: "14",
    title: "Screen Sharing in Ecamm",
    description: "Share your screen cleanly while keeping your scene layout readable.",
    shortDescription:
      "Share your screen cleanly while keeping your scene layout readable.",
    category: "Going Live",
    imageSrc: "/images/solution-images/solution-14-screensharing-3.png",
    thumbnail: "/images/solution-images/solution-14-screensharing-3.png",
    videoAspect: "landscape",
    seoTitle: "Screen Sharing in Ecamm (Beginner Guide to Clean Layouts)",
    seoDescription:
      "Learn screen sharing in Ecamm with a calm beginner workflow: dedicated scenes, monitor vs app window sharing, permission fixes, readable layouts, and avoiding mirror effects.",
    relatedTutorialSlugs: [
      "creating-your-first-scene",
      "preview-vs-live",
      "how-to-go-live-to-youtube",
    ],
    detailContent: {
      problemHeading: "Screen sharing without the chaos",
      problemParagraphs: [
        "Screen sharing sounds simple until you try it live for the first time. Suddenly you are managing windows, scenes, camera position, and viewer readability all at once.",
        "Most beginners are not failing because they do not know where the button is. They feel overwhelmed by what might go wrong on screen.",
        "This guide gives you a calm, practical setup so your screen share feels clear and controlled from the start.",
      ],
      keyIdeaHeading: "The key idea",
      keyIdeaText:
        "In Ecamm, screen sharing works best when it lives in its own dedicated scene. Build that scene first, then share in a way that keeps the important content easy to read.",
      explanationSections: [
        {
          heading: "What screen sharing means in Ecamm",
          paragraphs: [
            "Screen sharing in Ecamm means sending part of your computer display into your live scene as a visual source.",
            "You can share a full monitor or a single app window. Both work, but they feel very different for your audience.",
          ],
        },
        {
          heading: "Create a dedicated screen share scene first",
          paragraphs: [
            "Before you start sharing, create a scene specifically for screen content. This keeps your main camera scene separate and easier to control.",
            "A dedicated scene also reduces stress because you are not rearranging your whole show while already live.",
          ],
        },
        {
          heading: "Monitor share vs app-window share",
          paragraphs: [
            "Sharing a full monitor shows everything on that display. That can be useful, but it also increases the chance of showing notifications, tabs, or unrelated windows.",
            "Sharing a single app window is often cleaner for teaching because viewers see only the tool or document you want them focused on.",
          ],
        },
        {
          heading: "Fixing black screen permission problems",
          paragraphs: [
            "If your share appears black, the most common cause is macOS screen recording permission not being enabled for Ecamm.",
            "Go to macOS Privacy & Security settings, allow Screen Recording for Ecamm, then restart Ecamm if needed. Once permissions are correct, the source usually appears normally.",
          ],
        },
        {
          heading: "Build layouts for readability, not for fitting everything",
          paragraphs: [
            "A common beginner instinct is to squeeze everything on screen: big camera, full desktop, and multiple overlays.",
            "In practice, readability matters more. If text is tiny, your audience cannot follow the lesson. Keep the shared content large enough to read comfortably.",
          ],
        },
        {
          heading: "Camera positioning during screen sharing",
          paragraphs: [
            "Keep your camera visible, but do not let it cover the exact area you are explaining.",
            "A smaller corner camera usually works best for tutorials, especially when you need viewers to read menus, settings, or timelines.",
          ],
        },
        {
          heading: "Single monitor vs dual monitor workflows",
          paragraphs: [
            "On a single monitor, app-window sharing is often safer because it avoids accidental reveal of unrelated content.",
            "With dual monitors, many creators keep notes and controls on one display and share only the dedicated presentation display. This usually feels calmer while live.",
          ],
        },
        {
          heading: "The infinite mirror effect, explained simply",
          paragraphs: [
            "The mirror effect happens when the shared screen includes the Ecamm preview showing the shared screen again and again.",
            "To avoid it, share a specific app window instead of the whole display, or keep Ecamm on a different monitor that is not being shared.",
          ],
        },
      ],
      stepsHeading: "A simple screen sharing workflow",
      stepsIntro: "Use this sequence to keep your setup clean:",
      steps: [
        "Create a dedicated screen share scene.",
        "Choose whether to share a full monitor or a single app window.",
        "If needed, enable macOS Screen Recording permissions for Ecamm.",
        "Place and size your camera so it does not block key screen content.",
        "Check text readability in preview before going live.",
        "Use app-window sharing when you want cleaner focus.",
        "Switch to the screen share scene when you are ready to teach.",
      ],
      stepsFollowUpParagraphs: [
        "This routine helps you avoid last-minute panic and keeps viewers focused on what matters.",
      ],
      commonMistakeHeading: "Common beginner mistakes",
      commonMistakeParagraphs: [
        "Trying to share everything at once usually creates clutter and tiny unreadable text.",
        "Another common issue is forgetting macOS screen permissions, which leads to a black screen and confusion.",
        "If things feel messy, simplify: one dedicated scene, one clear shared source, and a camera position that supports the content.",
      ],
      closingNote:
        "Your screen share does not need to look fancy. It needs to be clear, readable, and easy to follow. Start simple, and your confidence will build quickly.",
    },
    tags: ["Going Live", "Screenshare"],
    popular: false,
    status: "published",
    youtubeUrl: "https://www.youtube.com/embed/wT4__BhgYwQ",
  },
  {
    id: "picture-in-picture-explained",
    slug: "picture-in-picture-explained",
    episode: "15",
    solutionNumber: "15",
    title: "Picture in Picture Explained",
    description: "Build practical camera-over-content layouts for teaching and demos.",
    shortDescription:
      "Build practical camera-over-content layouts for teaching and demos.",
    category: "Going Live",
    tags: ["Going Live", "Layouts"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "recording-vs-live-streaming",
    slug: "recording-vs-live-streaming",
    episode: "17",
    solutionNumber: "17",
    title: "Recording vs Live Streaming",
    description:
      "Understand when to record privately and when livestreaming makes sense.",
    shortDescription:
      "Understand when to record privately and when livestreaming makes sense.",
    category: "Going Live",
    tags: ["Going Live", "Workflow"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "recording-in-ecamm",
    slug: "recording-in-ecamm",
    episode: "16",
    solutionNumber: "16",
    title: "Recording in Ecamm for Beginners",
    description:
      "Record locally in Ecamm so you can practice and create content without livestream pressure.",
    shortDescription:
      "Record locally in Ecamm so you can practice and create content without livestream pressure.",
    category: "Going Live",
    tags: ["Going Live", "Recording"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "adding-lower-thirds",
    slug: "adding-lower-thirds",
    episode: "18",
    solutionNumber: "18",
    title: "Adding Lower Thirds",
    description: "Add clean name and topic labels that support your on-screen flow.",
    shortDescription:
      "Add clean name and topic labels that support your on-screen flow.",
    category: "Production Basics",
    tags: ["Production Basics", "Overlays"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "creating-branded-overlays",
    slug: "creating-branded-overlays",
    episode: "19",
    solutionNumber: "19",
    title: "Creating Branded Overlays",
    description:
      "Build reusable overlays that keep your streams visually consistent.",
    shortDescription:
      "Build reusable overlays that keep your streams visually consistent.",
    category: "Production Basics",
    tags: ["Production Basics", "Overlays"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "using-animated-overlays",
    slug: "using-animated-overlays",
    episode: "20",
    solutionNumber: "20",
    title: "Using Animated Overlays",
    description: "Use motion overlays without making scenes feel cluttered or distracting.",
    shortDescription:
      "Use motion overlays without making scenes feel cluttered or distracting.",
    category: "Production Basics",
    tags: ["Production Basics", "Overlays"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "how-scene-switching-works",
    slug: "how-scene-switching-works",
    episode: "21",
    solutionNumber: "21",
    title: "How Scene Switching Works",
    description:
      "Understand how transitions and scene changes shape your livestream flow.",
    shortDescription:
      "Understand how transitions and scene changes shape your livestream flow.",
    category: "Production Basics",
    tags: ["Production Basics", "Scenes"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "building-a-simple-show-layout",
    slug: "building-a-simple-show-layout",
    episode: "22",
    solutionNumber: "22",
    title: "Building a Simple Show Layout",
    description: "Create a repeatable scene structure for interviews, teaching, or demos.",
    shortDescription:
      "Create a repeatable scene structure for interviews, teaching, or demos.",
    category: "Production Basics",
    tags: ["Production Basics", "Layouts"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "guest-placeholders-explained",
    slug: "guest-placeholders-explained",
    episode: "23",
    solutionNumber: "23",
    title: "Guest Placeholders Explained",
    description:
      "Use placeholders to prepare guest layouts before people join live.",
    shortDescription:
      "Use placeholders to prepare guest layouts before people join live.",
    category: "Production Basics",
    tags: ["Production Basics", "Guests"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "showing-comments-on-screen-properly",
    slug: "showing-comments-on-screen-properly",
    episode: "24",
    solutionNumber: "24",
    title: "Showing Comments On Screen Properly",
    description: "Display comments cleanly without overwhelming your layout.",
    shortDescription:
      "Display comments cleanly without overwhelming your layout.",
    category: "Production Basics",
    tags: ["Production Basics", "Engagement"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "audio-monitoring-and-avoiding-echo",
    slug: "audio-monitoring-and-avoiding-echo",
    episode: "25",
    solutionNumber: "25",
    title: "Audio Monitoring & Avoiding Echo",
    description:
      "Prevent echo and monitor audio properly during livestreams and interviews.",
    shortDescription:
      "Prevent echo and monitor audio properly during livestreams and interviews.",
    category: "Production Basics",
    tags: ["Production Basics", "Audio"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "audio-filters-explained",
    slug: "audio-filters-explained",
    episode: "26",
    solutionNumber: "26",
    title: "Audio Filters Explained",
    description:
      "Improve clarity and reduce distracting room sound using Ecamm audio filters.",
    shortDescription:
      "Improve clarity and reduce distracting room sound using Ecamm audio filters.",
    category: "Production Basics",
    tags: ["Production Basics", "Audio"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "stream-deck-basics-with-ecamm",
    slug: "stream-deck-basics-with-ecamm",
    episode: "27",
    solutionNumber: "27",
    title: "Stream Deck Basics with Ecamm",
    description: "Speed up scene switching and production flow using Stream Deck.",
    shortDescription:
      "Speed up scene switching and production flow using Stream Deck.",
    category: "Workflow & Efficiency",
    tags: ["Workflow & Efficiency", "Automation"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "reusing-scenes-and-templates",
    slug: "reusing-scenes-and-templates",
    episode: "28",
    solutionNumber: "28",
    title: "Reusing Scenes & Templates",
    description: "Reuse layouts and overlays across multiple streams efficiently.",
    shortDescription:
      "Reuse layouts and overlays across multiple streams efficiently.",
    category: "Workflow & Efficiency",
    tags: ["Workflow & Efficiency", "Scenes"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "organizing-profiles-properly",
    slug: "organizing-profiles-properly",
    episode: "29",
    solutionNumber: "29",
    title: "Organizing Profiles Properly",
    description: "Keep profile structure clean so scenes and assets stay predictable.",
    shortDescription:
      "Keep profile structure clean so scenes and assets stay predictable.",
    category: "Workflow & Efficiency",
    tags: ["Workflow & Efficiency", "Profiles"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "repeatable-livestream-workflow",
    slug: "creating-a-repeatable-livestream-workflow",
    episode: "30",
    solutionNumber: "30",
    title: "Creating a Repeatable Livestream Workflow",
    description:
      "Build a calm repeatable pre-stream process before every livestream.",
    shortDescription:
      "Build a calm repeatable pre-stream process before every livestream.",
    category: "Workflow & Efficiency",
    tags: ["Workflow & Efficiency", "Workflow"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "test-stream-before-going-live",
    slug: "how-to-test-your-stream-before-going-live",
    episode: "31",
    solutionNumber: "31",
    title: "How to Test Your Stream Before Going Live",
    description:
      "Check cameras, scenes, and destinations safely before streaming publicly.",
    shortDescription:
      "Check cameras, scenes, and destinations safely before streaming publicly.",
    category: "Workflow & Efficiency",
    tags: ["Workflow & Efficiency", "Testing"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
  {
    id: "common-beginner-mistakes",
    slug: "common-beginner-mistakes-in-ecamm",
    episode: "32",
    solutionNumber: "32",
    title: "Common Beginner Mistakes in Ecamm",
    description:
      "Avoid the setup mistakes that frustrate most new Ecamm users.",
    shortDescription:
      "Avoid the setup mistakes that frustrate most new Ecamm users.",
    category: "Workflow & Efficiency",
    tags: ["Workflow & Efficiency", "Troubleshooting"],
    popular: false,
    status: "comingSoon",
    articleReady: false,
    youtubeUrl: null,
  },
];

export const tutorials: Tutorial[] = rawTutorials.map((tutorial) => ({
  ...tutorial,
  solutionNumber: tutorial.solutionNumber ?? tutorial.episode,
  shortDescription: tutorial.shortDescription ?? tutorial.description,
  category: tutorial.category ?? tutorial.tags[0] ?? "Getting Started",
  thumbnail: tutorial.thumbnail ?? tutorial.imageSrc,
  articleReady: tutorial.articleReady ?? tutorial.status === "published",
}));

export const publishedTutorials = tutorials.filter(
  (tutorial) => tutorial.status === "published",
);

export function getTutorialBySlug(slug: string) {
  return tutorials.find((tutorial) => tutorial.slug === slug);
}
