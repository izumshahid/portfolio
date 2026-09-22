# Portfolio — Irzum Shahid

Personal portfolio built with Next.js 15, React 19 and Tailwind CSS 4.

**Live:** [irzumshahid.com](https://irzumshahid.com)

## Design

Dark-first, with an animated aurora backdrop and frosted-glass surfaces. Both
themes are designed rather than inverted — in light mode the aurora softens to
pastel washes on an off-white canvas.

The aurora is three blurred radial gradients on independent CSS keyframe loops,
so it runs on the compositor with no canvas or WebGL. A film-grain overlay sits
above it to prevent banding on 8-bit displays. Glass is rationed to three
surfaces — the nav pill, project cards and the hero portrait — since
overusing it is what makes the style read as templated.

All motion is wrapped in `prefers-reduced-motion` guards.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 (CSS-first config) |
| Motion | Framer Motion |
| Fonts | Geist / Geist Mono |

## Structure

```
src/
  app/
    layout.js          root layout, theme bootstrap, metadata
    page.js            landing — hero, selected work, skills, approach, contact
    globals.css        design tokens, glass primitives, aurora keyframes
    about/             about, toolkit, credentials
    work/              project index
    work/[slug]/       case study template (statically generated)
  components/          Nav, Hero, Aurora, ProjectCard, Motion primitives…
  data/
    projects.js        every case study — content lives here, not in JSX
    site.js            bio, socials, skills, education, certifications
  assets/              project screenshots
```

Content is data-driven: adding a project means appending one object to
`src/data/projects.js`. The route, case-study page, cards and prev/next
navigation all derive from it.

## Theming

Surface colours are CSS custom properties defined per theme in `globals.css`
and consumed through utility classes (`.glass`, `.control`, `.hover-surface`,
`.btn-solid`). Nothing hardcodes a colour that only works in one theme. The
selected theme is written to `localStorage` and applied before first paint to
avoid a flash.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
```

## Legacy routes

The pre-2026 URLs (`/Projects`, `/AboutMe`, `/ApexGaming`, …) 301-redirect to
their new equivalents via `next.config.js`.
