# Iris Calder — Product Designer Portfolio

A single-page portfolio site for a product designer, built with a blueprint-inspired visual language: inspector frames, grid overlays, monospace labels, and scroll-driven motion.

Live stack: **Next.js 16** · **React 19** · **TypeScript** · **Tailwind CSS v4** · **Framer Motion**

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Design System](#design-system)
- [Components](#components)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **Hero** with staggered headline animation and availability status badge
- **About** section with inspector-framed portrait placeholder and stats
- **Work** showcase with alternating layout and animated canvas previews
- **Process** timeline with dashed connecting line draw animation
- **Skills** infinite marquee (pauses on hover)
- **Testimonial** and **Contact** sections with social links
- **Fixed header** with scroll state and responsive mobile sidebar
- **Desktop coordinate readout** that follows the cursor
- **Blueprint background** grid + subtle grain texture
- **`prefers-reduced-motion`** support across animations

---

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org) (App Router) |
| Language     | TypeScript                          |
| Styling      | Tailwind CSS v4                     |
| Animation    | Framer Motion                       |
| Fonts        | Fraunces, Inter, JetBrains Mono (`next/font`) |
| Linting      | ESLint + `eslint-config-next`       |

---

## Project Structure

```
product_designer_portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page — composes all sections
│   ├── globals.css         # Design tokens, base styles, utilities
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── CoordinateReadout.tsx
│   │   ├── Footer.tsx
│   │   ├── Grain.tsx
│   │   ├── GridField.tsx
│   │   ├── Header.tsx      # Nav + mobile menu
│   │   └── Wrap.tsx        # Max-width content container
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Process.tsx
│   │   ├── SkillsMarquee.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Work.tsx
│   │   ├── WorkItem.tsx
│   │   └── WorkVisual.tsx
│   └── ui/
│       ├── Eyebrow.tsx
│       ├── Inspector.tsx   # Dashed frame with corner brackets
│       └── Reveal.tsx      # Scroll reveal wrapper
├── hooks/
│   └── useReducedMotion.ts
├── lib/
│   └── data.ts             # Nav links, work items, skills, stats
├── public/
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.18 or later (20+ recommended)
- **npm**, yarn, pnpm, or bun

### Installation

```bash
git clone <your-repo-url>
cd product_designer_portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads when you edit files.

### Production Build

```bash
npm run build
npm start
```

---

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start development server             |
| `npm run build` | Create optimized production build    |
| `npm run start` | Serve production build locally       |
| `npm run lint`  | Run ESLint                           |

---

## Customization

### Site content & navigation

Edit **`lib/data.ts`** to update:

- `navLinks` — header and mobile menu links
- `workItems` — case studies (title, tags, visuals, links)
- `processSteps` — four-step process copy
- `skills` — marquee items
- `aboutStats` — numeric highlights

### Page copy & metadata

| What to change        | Where                                      |
| --------------------- | ------------------------------------------ |
| Page title & SEO      | `app/layout.tsx` → `metadata`              |
| Hero / About text     | `components/sections/Hero.tsx`, `About.tsx` |
| Testimonial quote     | `components/sections/Testimonial.tsx`      |
| Email & social URLs   | `components/sections/Contact.tsx`          |
| Footer text           | `components/layout/Footer.tsx`               |

### Portrait image

Replace the placeholder in `components/sections/About.tsx` with a Next.js `Image` component pointing to a file in `public/`, e.g. `public/portrait.jpg`.

### Case study pages

Work items currently link to `#`. Add routes under `app/work/[slug]/` and set each item's `href` in `lib/data.ts`.

### Reorder or remove sections

Update the section list in **`app/page.tsx`**.

---

## Design System

Tokens live in **`app/globals.css`** (`:root` and `@theme inline`).

| Token            | Value                    | Usage                    |
| ---------------- | ------------------------ | ------------------------ |
| `--bg`           | `#0c0e12`                | Page background          |
| `--bg-soft`      | `#101319`                | Soft surfaces            |
| `--surface`      | `#151922`                | Cards, canvases          |
| `--surface-2`    | `#1b202b`                | Secondary surfaces       |
| `--ink`          | `#ece7dd`                | Primary text             |
| `--ink-dim`      | `#9a988f`                | Body / secondary text    |
| `--ink-faint`    | `#5e6068`                | Labels, meta text        |
| `--accent`       | `#ff6b45`                | Highlights, CTAs         |
| `--accent-soft`  | `rgba(255,107,69,0.14)`  | Accent backgrounds       |
| `--blue`         | `#4d7ea8`                | Measure labels           |
| `--line`         | `rgba(236,231,221,0.10)` | Borders, grid            |
| `--line-strong`  | `rgba(236,231,221,0.22)` | Strong borders           |

**Fonts**

- **Display:** Fraunces (headlines)
- **Body:** Inter (paragraphs)
- **Mono:** JetBrains Mono (labels, coords, tags)

**Signature UI**

- `.inspector` — dashed border with accent corner brackets
- `.section-frame` — standard section padding and bottom rule
- `.grid-field` / `.grain` — ambient background layers

---

## Components

### Layout

| Component            | Purpose                                      |
| -------------------- | -------------------------------------------- |
| `Header`             | Fixed nav, scroll blur, burger + sidebar     |
| `Footer`             | Copyright and back-to-top link                 |
| `Wrap`               | `max-width: 1240px` centered container       |
| `GridField` / `Grain`| Fixed decorative backgrounds                 |
| `CoordinateReadout`  | Mouse position overlay (desktop only)        |

### UI primitives

| Component   | Purpose                                |
| ----------- | -------------------------------------- |
| `Inspector` | Blueprint-style frame with tag label   |
| `Eyebrow`   | Section label (e.g. `Frame 02 / About`) |
| `Reveal`    | Fade-up on scroll (Framer Motion)      |

### Sections

Each section is a self-contained component under `components/sections/`. Most use `Reveal` for scroll animations; `Hero`, `Process`, and `WorkVisual` include bespoke motion.

---

## Accessibility

- Semantic HTML (`header`, `main`, `section`, `nav`, `footer`)
- `aria-label` on icon-only buttons and social links
- `aria-expanded` on the mobile menu toggle
- Animations respect **`prefers-reduced-motion`**
- Coordinate readout hidden on coarse pointers (touch devices)
- Interactive elements use `cursor: pointer` (links, buttons)

---

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub, GitLab, or Bitbucket.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel detects Next.js automatically — deploy with default settings.

### Other platforms

Run `npm run build` and serve the output with any Node-compatible host that supports Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/getting-started/deploying).

---

## License

This project is private (`"private": true` in `package.json`). Update licensing here if you plan to open-source or distribute it.

---

**Built for designers who think in systems — not just screens.**
