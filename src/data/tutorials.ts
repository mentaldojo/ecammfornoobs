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
