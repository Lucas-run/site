# AGENTS

## Quick Facts
- Single-package Vite + React + TypeScript app (not a monorepo).
- Runtime router is `HashRouter` in `src/App.tsx` (GitHub Pages-friendly); keep hash-based routing unless migration is intentional.
- Main entrypoint is `src/main.tsx` -> `src/App.tsx`; layout shell is `src/components/layout/MainLayout.tsx`.

## Commands That Matter
- Install deps: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Production build/typecheck: `npm run build` (runs `tsc -b` before `vite build`)
- Preview built app: `npm run preview`
- There is no test script configured right now.

## API + Runtime Quirks
- Vite dev proxy is defined in `vite.config.ts` for `/articles` and `/projects` -> `http://localhost:3000`; backend must be running locally for these routes.
- Blog service (`src/features/blog/services/blog.service.ts`) calls relative `/articles...` endpoints via `API_URL = ""`.
- Portfolio service (`src/features/landing/services/portfolio.service.ts`) calls `/projects/projects` (double segment is intentional in current code + proxy setup).

## Env / Analytics
- GA4 hook is in `src/hooks/useAnalytics.ts` and is mounted globally via `AnalyticsWrapper` in `src/App.tsx`.
- `VITE_GA_MEASUREMENT_ID` is optional at runtime (analytics code no-ops if missing).
- `.env` is gitignored; do not commit measurement IDs/secrets.

## Deploy Notes
- `npm run deploy` publishes `dist/` to `gh-pages` via `gh-pages` package.
- CI deploy workflow is `.github/workflows/deploy.yml` and builds on push to `main`.
- Workflow currently uses `actions/setup-node` with `node-node` key (typo); use local scripts/package settings as source of truth for Node behavior.
