<!-- Copilot instructions for repository: vertex-website -->
# Copilot Instructions — vertex-website

Purpose: provide concise, actionable guidance so an AI coding agent can be productive immediately.

- **Big picture:** This is a Next.js (App Router) site using the `app/` directory for routes and layouts. Styling uses Tailwind via `app/globals.css`. Fonts are loaded with `next/font/google` in the root layout.

- **Quick dev commands:**
  - Start dev server: `npm run dev` (also works with `bun dev` per README).
  - Build: `npm run build`.
  - Start production: `npm run start`.
  - Lint: `npm run lint` (runs `eslint`).
  See [package.json](package.json#L1-L60) for script definitions.

- **Where to look first:**
  - App routes & layout: [app/layout.tsx](app/layout.tsx#L1-L40)
  - Global styles: [app/globals.css](app/globals.css#L1-L200)
  - Components: [components/Navbar.jsx](components/Navbar.jsx#L1-L40) and [components/Footer.jsx](components/Footer.jsx#L1-L40)
  - Project metadata / scripts: [package.json](package.json#L1-L80)

- **Architecture & patterns (observed):**
  - Uses the Next.js App Router (`app/`) not `pages/` — prefer editing the `app/` files for routes and layout.
  - UI components live in `components/` and are default-exported plain React components (`.jsx`). Keep changes compatible with both `.jsx` components and `.tsx` route files.
  - Code in `app/layout.tsx` imports components using a path alias (`@/components/...`). Follow that alias when adding imports.
  - Fonts use `next/font/google` and expose CSS variables (e.g. `--font-geist-sans`) — prefer applying these variables on the `body`/root to keep typography consistent.

- **Styling & build notes:**
  - Tailwind is configured (see `postcss.config.mjs` and `tailwindcss` in devDependencies). Editing `app/globals.css` is the canonical way to add global utilities.
  - PostCSS / Tailwind are used at build time; local dev server (`npm run dev`) will pick changes up automatically.

- **Files that exemplify important patterns:**
  - `app/layout.tsx` — shows font setup and layout structure. Example: the Geist font variables are added to `body` and `Navbar` is imported from `@/components/Navbar` ([app/layout.tsx](app/layout.tsx#L1-L40)).
  - `components/Navbar.jsx` — simple default-exported component pattern used across the project.

- **Project-specific gotchas / notes (discoverable):**
  - Mix of `.jsx` components and `.tsx` app files: when editing, maintain compatible imports and default exports.
  - The root layout currently includes `Navbar` and `children` within the same tag in a way that looks like a JSX bug; inspect [app/layout.tsx](app/layout.tsx#L1-L40) before making layout edits.
  - The repo supports running with multiple package runners (npm, yarn, pnpm, bun) as shown in the README — prefer `npm` in CI contexts unless otherwise configured.

- **When writing code changes:**
  - Follow existing conventions: default exports for components, place presentational components in `components/`, and route-level files under `app/`.
  - Use the `@/` alias for imports (as used in `app/layout.tsx`).
  - Run `npm run lint` after changes to respect the repo's ESLint config.

- **If adding features or debugging:**
  - Reproduce locally with `npm run dev` and verify layout and Tailwind styles load from `app/globals.css`.
  - Inspect `next.config.ts` for project-level Next settings if routing/asset behavior is unexpected.

If any of these points are unclear or you'd like me to expand examples (for instance, adding a small component PR or fixing the layout JSX), tell me which area to iterate on.
