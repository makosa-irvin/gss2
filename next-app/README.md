# Good Secrets Safaris Next.js frontend

This is the canonical Good Secrets Safaris frontend. It replaces the former Vite/React SPA at deployment time while preserving the existing Express API and PostgreSQL database in `/server`.

## Rendering model

- **SSG:** legal pages, planning guides, About, Contact, and evergreen planning content.
- **ISR (15 minutes by default):** homepage, safari catalog, destinations, hotels, reviews, and blog content backed by the existing Express API.
- **Client Components inside server-rendered pages:** enquiry modal, analytics consent/tracking, safari builder, and shortlist.
- **Authenticated CSR:** `/admin` CRM and catalog administration.

Public acquisition routes therefore return useful HTML, metadata, canonical URLs, and structured data before client hydration.

## Backend integration

Server Components read the existing API using `API_URL` (preferred) or the legacy `VITE_API_URL` fallback. Browser mutations and authenticated requests use `/api/backend/*`, a same-origin Next route proxy that forwards to the existing Express service and preserves admin cookies.

Tour detail pages are derived from the public tour list instead of requesting `/api/tours/:slug` during generation so ISR/build traffic does not increment the backend tour view counter.

## Assets

The repository root `/public` directory remains the single source of truth for photography and brand assets. `npm run assets` copies it into `next-app/public` before development and production builds.

## Local development

```bash
cd next-app
npm install
API_URL=http://localhost:4000 NEXT_PUBLIC_SITE_URL=http://localhost:3000 npm run dev
```

The Express backend continues to run separately, normally on port 4000.

## Verification

```bash
cd next-app
npm run typecheck
npm run build
```

GitHub Actions also runs these checks for changes to `next-app/**`.

## Deployment

The repository `vercel.json` now builds this directory as the Next.js frontend and removes the former SPA catch-all rewrite. Legacy WordPress and `/book-direct` redirects live in `next.config.ts`.

Required deployment configuration:

- `API_URL` — server-only Express/Railway origin, without a trailing `/api`.
- `NEXT_PUBLIC_SITE_URL` — canonical public site origin.

For migration compatibility, `VITE_API_URL` and `VITE_SITE_URL` remain accepted as fallbacks, so the existing staging environment can transition without an immediate variable rename.

## Legacy Vite source

The root Vite application remains in the repository temporarily as migration history and a rollback reference, but Vercel no longer builds it. It can be removed in a separate cleanup after the Next deployment has been verified on staging.
