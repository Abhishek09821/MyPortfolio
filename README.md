# Abhishek Tiwari — Portfolio

A futuristic HUD-inspired portfolio built with Next.js 16 (App Router), React 19,
TypeScript, Tailwind CSS v4, and Framer Motion. Original visual language only —
no copied Iron Man or game assets, just an original targeting-reticle /
glassmorphism HUD motif used consistently across every section.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first load in a browser session runs a short
boot sequence — it only plays once per session (stored in `sessionStorage`)
and can be skipped.

## Editing content

Everything on the site — profile info, projects, skills, career levels,
achievements, and contact links — lives in one file:

```
src/data/portfolio.ts
```

Edit that file and every section updates automatically. A few things to fill
in before you deploy:

- `profile.email`, `profile.linkedin` — double-check these are correct.
- `profile.resumeUrl` — points at `/resume/Abhishek_Tiwari_Resume.pdf`.
  Drop your resume PDF into `public/resume/` with that filename (or change
  the path in `data/portfolio.ts`).
- `projects[].demo` — currently `null` for each project. Add a live URL
  string once a project has a public deployment, and a "Live Demo" button
  will appear automatically on that card.
- `src/app/layout.tsx` — replace `siteUrl` ("https://abhishektiwari.dev")
  with your real production domain once you have one; it feeds the SEO
  metadata, sitemap, robots.txt, and the generated Open Graph image.

## What's already wired up

- **Live GitHub stats** (`src/hooks/useGithubStats.ts`) — fetches repos,
  stars, followers, and language mix from the public GitHub REST API for
  the username in `profile.github`. No token required; results are cached
  in `sessionStorage` for 15 minutes to stay well under GitHub's rate limit.
- **On-page assistant** (`src/lib/assistant.ts`) — answers questions from
  the structured data in `data/portfolio.ts` only. It does not call any
  external AI/LLM API, so it can never say anything that isn't already on
  the page. If you'd rather wire it to a real model later, that file is the
  only place you'd need to change.
- **Contact form** — currently opens the visitor's email client via a
  `mailto:` link with the message pre-filled. If you want real form
  submissions without leaving the page, swap the `handleSubmit` in
  `src/components/contact/Contact.tsx` for a call to a form backend
  (Resend, Formspree, an API route, etc.).
- **SEO** — metadata, Open Graph/Twitter tags, JSON-LD `Person` schema,
  `sitemap.xml`, and `robots.txt` are all generated (`src/app/sitemap.ts`,
  `src/app/robots.ts`, `src/app/opengraph-image.tsx`).
- **Accessibility** — visible focus rings, semantic landmarks, `aria-label`s
  on icon-only controls, and full `prefers-reduced-motion` support (the boot
  screen, particle field, and animated grid all disable themselves).

## Build

```bash
npm run build
npm run start
```

`next/font/google` fetches font files from Google at build time, so
`npm run build` needs normal internet access — it will work on your machine
or any standard CI/deploy target (Vercel, Netlify, etc.) without changes.

## Deploying

The project is a standard Next.js app — the fastest path is
[Vercel](https://vercel.com/new): push this folder to a GitHub repo and
import it, or run `npx vercel` from this directory.
