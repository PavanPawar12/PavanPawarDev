# Developer Portfolio

React 19 + Vite + Tailwind CSS v4 + shadcn-style primitives + Framer Motion + React Router.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

> This sandbox has no internet access, so `npm install` hasn't been run here —
> run it on your own machine. Everything is hand-written, standard-registry
> packages (no private/custom deps), so a normal install will work.

## What's built so far

- [x] Project scaffold (Vite, Tailwind v4 tokens, folder architecture)
- [x] Theme system (dark default, light mode, persisted, no-flicker boot script)
- [x] **Navbar** — floating glass bar, scroll-spy active-link highlighting,
      scroll-based transparency, desktop nav, full-screen animated mobile
      drawer, ⌘K command palette, theme toggle
- [ ] Hero section
- [ ] Projects (featured + grid + detail pages)
- [ ] Skills
- [ ] Journey (timeline)
- [ ] Blog
- [ ] Certificates
- [ ] Contact
- [ ] Footer

Home page currently renders placeholder sections at `#hero`, `#projects`,
`#journey`, `#blog` so the Navbar's links, scroll-spy, and command menu are
all fully testable before the real sections exist.

## Design identity

Dark-first "code editor" aesthetic: near-black editor-style surfaces, a
syntax-highlight-inspired accent trio (teal / violet / amber), Instrument
Sans for display type, Inter for body copy, and JetBrains Mono for
structural/meta labels (nav eyebrows like `~/builds`, the command palette,
badges). The ⌘K command palette is the signature interaction — a real,
working jump-to-anything tool, not just decoration.

## Customize

- `src/data/site.js` — your name, role, socials, resume path
- `src/data/nav.js` — nav link labels/targets
- `src/index.css` — color tokens (`:root` = dark, `:root:not(.dark)` = light)
