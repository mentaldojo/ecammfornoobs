# Ecamm for Noobs — Project Brief

## Project Goal

Build a simple, fast, SEO-friendly Next.js website for the “Ecamm for Noobs” YouTube Shorts/tutorial project.

The site should act as:

- A branded home for the Ecamm for Noobs series
- A searchable/browsable tutorial library
- A simple affiliate-supported recommendation hub
- A trustworthy independent resource for beginners learning Ecamm

The core idea:

> One feature. One short. Every answer someone needs — without sitting through a 40-minute tutorial.

## Positioning

Ecamm for Noobs is for people who are new to Ecamm and feel confused by the interface, terminology, panels, scenes, overlays, and live production workflow.

The site should feel:

- Clear
- Fast
- Useful
- Beginner-friendly
- Bold and memorable
- Slightly punchy, but not gimmicky
- Independent and trustworthy

The tone should be direct and practical:

> No waffle. No long tutorials. Just the one answer you came for.

## Core Brand Line

Ecamm for Noobs  
One thing. Every time.

## Design Direction

The visual style should be based on the provided HTML design references, but implemented properly as a Next.js site, not pasted as static HTML.

### Colour Palette

Use CSS variables for the brand palette.

Primary colours:

- Near black: `#0c0c0c`
- Warm off-white: `#f4f2ee`
- Yellow: `#FFE040`
- Orange: `#FF4D1A`
- Blue: `#2563EB`
- Green: `#16A34A`

Supporting colours:

- Card background: `#161616`
- Secondary card background: `#1c1c1c`
- Border: `#252525`
- Muted text: `#666666`
- Body text: `#c8c4bc`

### Typography

Use a bold poster-style display font for headings and a readable sans-serif for body copy.

Preferred direction:

- Display headings: Bebas Neue
- Body copy: Bricolage Grotesque or DM Sans
- Labels/tags/meta: Space Mono

If font loading needs to be simplified, use Next.js font handling properly.

### Visual System

The site should use:

- Dark background
- Large bold headlines
- Yellow highlights
- Orange accent labels and CTA moments
- Grid-based video/tutorial cards
- Simple phase badges
- Strong contrast
- Clear section breaks
- Minimal decoration
- Fast-loading layout

Avoid:

- Heavy animations
- Over-complex UI
- Generic SaaS gradients
- Bloated components
- Anything that slows the site down

## Site Structure

Initial pages to create:

### Public Pages

- `/` — Homepage / tutorial library landing page
- `/tutorials` — Full tutorial index
- `/tutorials/[slug]` — Individual tutorial page template
- `/gear` — Recommended tools / affiliate gear page
- `/about` — About the project
- `/contact` — Simple contact page
- `/privacy` — Privacy policy
- `/terms` — Terms and conditions
- `/affiliate-disclosure` — Affiliate disclosure

Optional later:

- `/categories/[slug]`
- `/start-here`
- `/ecamm-review`
- `/resources`

## Homepage Requirements

Homepage should include:

1. Sticky nav
2. Hero section
3. Core positioning line
4. CTA buttons:
  - Start Learning
  - Get Ecamm Free Trial
5. Featured Ecamm affiliate card
6. Stats bar:
  - 35+ videos
  - 4 phases
  - 60s max per video
  - 0 filler
7. Tutorial phase sections
8. Video/tutorial cards
9. Affiliate/recommended tools section
10. About strip
11. Footer with legal links

## Content Strategy

The site supports a YouTube Shorts series.

Each short should cover one specific Ecamm problem or feature.

Format:

- One question
- One answer
- One clear result
- Ideally under 60 seconds
- No long intro
- On-screen text for each step
- End with the next useful related topic

## Tutorial Phases

### Phase 1 — Foundation

For brand-new users before they go live.

Topics include:

1. What is a Profile?
2. Profiles vs Scenes
3. How to Select Your Camera Source
4. How to Select Your Microphone
5. Creating Your First Scene
6. The Four Source Modes Explained
7. Where Did My Panel Go?
8. Preview Mode vs Live
9. Stream vs Record
10. Connecting to YouTube / Facebook / LinkedIn

### Phase 2 — Visuals

For making streams look better.

Topics include:

1. What Is an Overlay?
2. Adding a Logo or Graphic Overlay
3. Adding a Lower Third
4. Global vs Scene-Specific Overlays
5. Adding a Countdown Timer
6. Adding a Scrolling Ticker
7. Using Green Screen
8. Zoom & Pan
9. Adjusting Camera Picture Settings
10. Picture-in-Picture
11. Using the Camera Switcher
12. Scene Transitions

### Phase 3 — Audio & Content

Topics include:

1. Adjusting Sound Levels
2. Adding Background Music
3. Using Sound Effects
4. Playing a Pre-Recorded Video Clip
5. Screen Share Mode
6. Displaying Viewer Comments On-Screen

### Phase 4 — Pro Features & Power Tips

Topics include:

1. Bringing On a Guest / Interview Mode
2. Using Ecamm as a Virtual Camera
3. Locking a Scene
4. Duplicating a Scene
5. Stream Deck Integration
6. Multistreaming
7. Scheduling a Broadcast

## Data Structure

Tutorial content should be stored as structured data, not hard-coded all over the UI.

Use a central data file such as:

`src/data/tutorials.ts`

Each tutorial should include:

- id
- title
- slug
- phase
- phaseLabel
- category
- description
- shortDescription
- tags
- isPopular
- isProFeature
- youtubeUrl
- thumbnailUrl
- status: published | coming-soon
- affiliateLinks if relevant

## SEO Requirements

The site should be built with SEO in mind from the start.

Include:

- Proper metadata on each page
- Clear page titles
- Meta descriptions
- Open Graph image support
- Semantic HTML
- Clean heading hierarchy
- Fast loading
- Internal links between related tutorials
- Sitemap support
- Robots.txt
- Descriptive tutorial URLs

Example tutorial URL:

/tutorials/where-did-my-panel-go

## Trust / Compliance Pages

Create simple starter versions of:

- Privacy Policy
- Terms and Conditions
- Affiliate Disclosure

The affiliate disclosure should clearly state:

- The site is independent
- Some links are affiliate links
- The owner may earn commission at no extra cost to the visitor
- Recommendations should be based on actual use or honest assessment

Footer should clearly say:

> Independent tutorial site. Not affiliated with Ecamm Network. Affiliate links may be used.

## Affiliate Strategy

The site may include affiliate links for:

- Ecamm
- Stream Deck
- Microphones
- Cameras
- Lighting
- Restream or multistreaming tools
- Other creator gear actually used or recommended

Affiliate content should be helpful, not pushy.

Primary monetization should come from relevant recommendations connected to tutorials.

Example:

A tutorial on Stream Deck integration may link to the recommended Stream Deck.

A tutorial on microphones may link to recommended microphones.

## Technical Direction

Use:

- Next.js App Router
- TypeScript
- CSS modules or global CSS with clean variables
- Static-first pages where possible
- Simple components
- No unnecessary CMS at the start
- No database at the start
- No authentication
- No complex animations

Prioritize:

- Simplicity
- Speed
- SEO
- Maintainability
- Easy content editing

## Suggested Component Structure

Create reusable components such as:

- SiteHeader
- SiteFooter
- HeroSection
- StatsBar
- TutorialCard
- TutorialGrid
- PhaseSection
- AffiliateCard
- GearCard
- LegalPageLayout

## Build Protocol

Before making large changes:

1. Read the existing project structure.
2. Confirm whether the repo uses App Router or Pages Router.
3. Do not overwrite existing setup blindly.
4. Implement in small, clear steps.
5. Keep styling centralized.
6. Run build before final summary if possible.

## First Build Milestone

The first milestone is not the full final site.

The first milestone should create:

- Brand design system
- Homepage
- Tutorial data file
- Tutorial cards
- Footer legal links
- Starter legal pages
- Basic SEO metadata

Do not add unnecessary complexity.

## Notes

This project is being built through Cursor and deployed on Vercel with GitHub backup.

The goal is to create a clean, professional, beginner-friendly site that can grow as more YouTube Shorts are published.