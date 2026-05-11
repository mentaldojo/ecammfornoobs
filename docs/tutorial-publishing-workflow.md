# Ecamm For Noobs — Tutorial Publishing Workflow

## Purpose

This document explains the standard workflow used to publish tutorials on the Ecamm For Noobs website and YouTube channel.

The goal of Ecamm For Noobs is NOT to create generic tech tutorials.

The project is designed around:

* beginner-safe explanations
* calm teaching
* one real problem per lesson
* practical workflows
* reducing overwhelm

Tutorials should feel like:

* a mentor teaching calmly
* not corporate training
* not fast-paced guru content
* not feature dumping

---

# Core Philosophy

Ecamm For Noobs is structured around:

* one problem
* one workflow
* one outcome

Each tutorial should:

* solve a specific beginner issue
* avoid unnecessary complexity
* explain WHY things work
* reduce anxiety
* build confidence

The site is intentionally:

* solution-centric
* practical
* searchable
* visually simple

Affiliate recommendations are secondary.

Teaching clarity is primary.

---

# Tutorial Structure

Each tutorial consists of:

1. YouTube video
2. Tutorial page
3. Embedded YouTube video
4. SEO article content
5. Thumbnail image
6. Tutorial library card

---

# Tutorial Lifecycle

Tutorials begin as:

* placeholder cards
* “In Production”
* “New videos uploaded daily”

Then later become:

* published tutorials
* embedded YouTube pages
* SEO-enhanced tutorial pages

---

# Standard Tutorial Data

Each tutorial normally contains:

* Solution number
* Title
* Slug
* Description
* Thumbnail image
* Published state
* YouTube URL
* SEO article content

Example:

* Solution 12
* Title: Interview Mode
* Slug: interview-mode
* Thumbnail:
  `/images/solution-images/solution-12-interview-mode-beginners.png`

---

# Slug Convention

Slugs should:

* be short
* descriptive
* lowercase
* hyphen-separated

Examples:

* `/tutorials/interview-mode`
* `/tutorials/preview-vs-live`
* `/tutorials/mic-setup`

Avoid:

* dates
* unnecessary words
* uppercase
* long phrases

---

# Thumbnail Convention

Thumbnail images live in:

`/public/images/solution-images/`

Naming convention:

`solution-XX-short-description.png`

Examples:

* `solution-12-interview-mode-beginners.png`
* `solution-08-preview-vs-live.png`

The website tutorial cards use these thumbnails directly.

---

# Tutorial Library Workflow

The tutorial library page lives at:

`/tutorials`

Placeholder tutorials display:

* “New videos uploaded daily”
* “In Production →”

Published tutorials display:

* real thumbnail
* “View Solution →”

Do NOT redesign the library layout unless explicitly requested.

---

# Standard Publishing Workflow

## STEP 1 — Tutorial Placeholder Exists

A placeholder tutorial already exists in the tutorial library.

It includes:

* title
* slug
* placeholder state
* temporary artwork

---

## STEP 2 — Video Is Recorded

The tutorial is:

* scripted
* recorded in Ecamm
* edited
* uploaded to YouTube

Master videos are recorded in 16:9.

Shorts are created later from the master recordings.

---

## STEP 3 — Thumbnail Is Created

Thumbnail is exported to:

`/public/images/solution-images/`

Use consistent branding and visual style.

---

## STEP 4 — Publish Tutorial

Cursor is instructed to:

* convert placeholder tutorial to published
* add YouTube URL
* update thumbnail
* remove “In Production”
* enable “View Solution”
* preserve existing layout

Cursor should NOT:

* redesign pages
* alter unrelated tutorials
* modify visual architecture

---

# Video Embedding Workflow

Published tutorial pages embed the YouTube video directly.

The embedded video should:

* appear prominently near the top
* preserve existing layout structure
* remain responsive

The YouTube URL is supplied directly during publishing.

---

# SEO Article Workflow

SEO content is added in a SECOND separate prompt.

This is intentional.

The publishing process is split into:

1. Technical publishing
2. SEO content insertion

This keeps changes cleaner and easier to manage.

---

# SEO Philosophy

Tutorial pages are NOT just video wrappers.

Each page should function as:

* a mini teaching landing page
* a searchable help resource
* a calm walkthrough

Articles should:

* explain the problem clearly
* mirror the spoken teaching style
* avoid sounding AI-generated
* avoid keyword stuffing
* feel human and practical

---

# Writing Style

Writing should:

* feel calm
* feel visual
* feel conversational
* reduce overwhelm

Avoid:

* hype
* guru language
* over-technical explanations
* massive bullet overload

Preferred style:

* short paragraphs
* clear headings
* practical sequences
* beginner-safe pacing

---

# Director’s Cut Scripts

Tutorial videos are scripted using:
“Director’s Cut Shooting Scripts”

These scripts include:

* spoken lines
* screen actions
* cursor movements
* pacing guidance
* visual choreography

Format:

* spoken dialogue
* then:
  `► SCREEN:`

This keeps recordings:

* calm
* consistent
* easy to edit

---

# Important Ecamm Teaching Philosophy

Ecamm tutorials should focus on:

* scenes
* preparation
* visibility control
* calm workflows

Avoid overcomplicating tutorials with:

* unnecessary button semantics
* deep routing logic
* advanced production architecture

Beginner tutorials should prioritize:

* confidence
* clarity
* successful first use

Advanced workflows can be separated into future tutorials.

---

# Cursor Prompt Philosophy

Cursor prompts should:

* be surgical
* implementation-focused
* explicit
* low-risk

Prompts should begin with:

`Repo: ecamm-for-noobs`

and:

`Begin Cursor Copy`

This makes prompts easier to identify and paste correctly.

---

# Build Safety

After meaningful changes:

* run build checks
* resolve route issues
* resolve TypeScript issues

Avoid speculative refactors.

Preserve existing architecture whenever possible.

---

# Future Tutorial Philosophy

The library is designed to:

* grow progressively
* reveal roadmap visibility
* show upcoming lessons
* create revisit behaviour

The site intentionally shows future tutorials before production is complete.

This helps users:

* understand the learning roadmap
* see upcoming topics
* revisit the site regularly

---

# Important Reminder For Future Cursor Sessions

When updating tutorials:

* preserve the visual style
* preserve the solution-card structure
* preserve the calm beginner-first philosophy

The goal is NOT:
“feature coverage.”

The goal is:
“reduce beginner overwhelm while solving one real problem at a time.”
