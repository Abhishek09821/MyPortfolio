<div align="center">

# ABHISHEK TIWARI --> <p align="center">
  <a href="https://knowabhee.netlify.app/">
    <strong> PORTFOLIO </strong>
  </a>
</p>

**A HUD-inspired, agentic-feeling portfolio — built like a system, not a template.**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-black?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)



</div>

---

## Overview

This isn't a "developer portfolio template" — it's built around one idea:
**every panel on the page is a HUD readout.** Glassmorphic surfaces, thin
neon corner brackets, an animated cyber grid, and a short boot sequence
frame the whole site like an operating system rather than a scrolling résumé.

No copied assets, characters, or UI kits — the visual language (corner
brackets, scanlines, glow) is original and reused consistently across every
section so it never feels bolted-on.

## Features

**Interface**
- Boot sequence on first load (skippable, plays once per session)
- Fixed HUD nav bar with live scroll-spy waypoints
- Signature "targeting-reticle" glass panel used for every card on the site
- Animated cyber-grid + lightweight canvas particle field in the hero
- Fully original color system: void-black background, cyan/green accents

**Content sections**
- **Home** — animated hero with a rotating role readout and mission-status strip
- **About** — profile broken into HUD info-cards instead of a paragraph
- **Career Journey** — a 5-level progression path that reveals on scroll
- **Skills** — an RPG-style skill tree with per-skill XP bars and levels
- **Projects** — mission-card grid with tech tags, mouse-tracked spotlight
  hover, and an expandable case-study panel per project
- **GitHub** — live repo count, stars, followers, language mix, and
  contribution graph, pulled straight from the GitHub REST API
- **Achievements** — unlockable badges for real, shipped milestones
- **Contact** — glass contact cards + a message form

**Assistant**
- Floating chat widget that answers from the site's own structured data
  (`src/data/portfolio.ts`) — no external AI/LLM calls, so it can never
  say anything that isn't already true on the page

**Engineering**
- SEO: metadata, Open Graph/Twitter cards, JSON-LD `Person` schema,
  generated `sitemap.xml` and `robots.txt`, dynamic OG image
- Accessibility: visible focus rings, semantic landmarks, `aria-label`s on
  every icon-only control, full `prefers-reduced-motion` support
- One centralized content file — no data duplicated across components

## Tech Stack

| Layer          | Choice                                              |
|----------------|------------------------------------------------------|
| Framework      | Next.js 16 (App Router, Turbopack)                   |
| Language       | TypeScript                                            |
| Styling        | Tailwind CSS v4 (CSS-native `@theme` tokens)          |
| Animation      | Framer Motion                                         |
| Icons          | lucide-react                                          |
| Fonts          | Space Grotesk (display) · Inter (body) · JetBrains Mono (data/HUD) |
| Data source    | Public GitHub REST API (client-side, no token needed) |
| Deployment     | Vercel (or any Next.js-compatible host)               |

## Project Structure

```
src/
├── app/                  # Routes, layout, metadata, sitemap/robots, OG image
├── components/
│   ├── boot/             # Boot sequence
│   ├── layout/           # Header, Footer, SiteChrome (boot/header/assistant orchestration)
│   ├── home/             # Hero + mission status HUD
│   ├── about/            # About info-cards
│   ├── career/           # Career progression path
│   ├── skills/           # RPG skill tree
│   ├── projects/         # Project grid + mission cards
│   ├── github/           # Live GitHub stats panel
│   ├── achievements/     # Achievement badges
│   ├── contact/          # Contact form + links
│   ├── assistant/        # Floating AI-style assistant widget
│   └── ui/                # GlassPanel, GlowButton, SectionHeading, backgrounds
├── data/
│   └── portfolio.ts      # ⚡ single source of truth for all content
├── hooks/
│   └── useGithubStats.ts # Live GitHub API fetch + session cache
└── lib/
    ├── assistant.ts       # Rule-based responder for the assistant
    └── utils.ts
```

## Getting Started

**Requirements:** Node.js 20+

```bash
# 1. Clone
git clone https://github.com/Abhishek09821/<your-repo-name>.git
cd <your-repo-name>

# 2. Install
npm install

# 3. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Production build
npm run build
npm run start
```

> `next/font/google` fetches font files at build time, so `npm run build`
> needs normal internet access — this works out of the box on Vercel,
> Netlify, or any standard machine.

## Editing Content

Every piece of text on the site — name, roles, tagline, projects, skills,
career levels, achievements, and contact links — lives in a single file:

```
src/data/portfolio.ts
```

Change it there and the entire site updates. No content is duplicated
inside components.

A few things worth doing before you deploy:

- Add your resume PDF to `public/resume/` (filename referenced in `profile.resumeUrl`)
- Replace `siteUrl` in `src/app/layout.tsx` with your real production domain
- Fill in `demo` URLs on any project once it has a live deployment — the
  "Live Demo" button appears automatically

## Deployment

Deploy with [Vercel](https://vercel.com/new) in one click, or:

```bash
npx vercel
```

## License

This project is personal portfolio source code. Feel free to fork it for
inspiration — please don't republish it as your own identical portfolio and for using these tampelate you can just message me on linkedin.

## Contact

**Abhishek Tiwari**
[GitHub](https://github.com/Abhishek09821) 

---

<div align="center">
<sub>Built from scratch — no template.</sub>
</div>
