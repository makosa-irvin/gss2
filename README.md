# Good Secrets Safaris

Kenya, Tanzania & Zanzibar safari and travel platform. React + TypeScript
frontend backed by a real PostgreSQL + Express API (see `server/`),
intended to replace the current WordPress/Elementor live site.

## Stack

- **Frontend**: React 19 + TypeScript, built with Vite, Tailwind CSS v4,
  React Router v7
- **Backend**: Express + TypeScript + PostgreSQL (Drizzle ORM) - see
  `server/README.md` for full details
- Vitest + React Testing Library (frontend) / Vitest + Supertest
  (backend) for tests, both run against real dependencies rather than
  mocks wherever practical
- GitHub Actions for repository quality, type checks, tests, coverage,
  production builds, Chromium browser smoke checks and security analysis

## Getting started

You need both the API and the frontend running. See `server/README.md`
first to get the backend up (Docker Compose is the fastest path - it
includes Postgres). Then:

```bash
npm ci
cp .env.example .env.local   # VITE_API_URL should point at your running backend
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check, regenerate `public/sitemap.xml`, then build to `dist/` |
| `npm run preview` | Serve the production build locally (has correct SPA fallback, unlike a plain static file server) |
| `npm run typecheck` | Run TypeScript validation without emitting files |
| `npm run lint` | Current compatibility alias for the TypeScript quality gate |
| `npm run quality:check` | Check repository hygiene, secrets-risk files, merge markers and new scattered UI hardcoding |
| `npm test` | Run the frontend unit/component suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run verify` | Run repository quality, typecheck, tests and production build |
| `npm run sitemap` | Regenerate `public/sitemap.xml` on its own |

## Engineering workflow

The repository is designed around short-lived feature/fix/chore branches and reviewed pull requests into `deployment/staging`. CI is intended to be the merge gate rather than relying on one developer's local environment.

Start with these documents:

- [`CONTRIBUTING.md`](CONTRIBUTING.md) - branch, commit and pull-request rules
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) - local development and migration workflow
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) - frontend/backend/database boundaries
- [`docs/TESTING.md`](docs/TESTING.md) - test pyramid, regression policy and coverage
- [`docs/ENGINEERING_STANDARDS.md`](docs/ENGINEERING_STANDARDS.md) - coding and API/database standards
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) - UI consistency and semantic design-token rules
- [`docs/BRANCH_PROTECTION.md`](docs/BRANCH_PROTECTION.md) - staging/production branch governance
- [`SECURITY.md`](SECURITY.md) - secrets and vulnerability-reporting policy

For normal development, run `npm run verify` at the root and again in `server/` before opening a pull request. GitHub Actions repeats the checks in a clean environment and adds coverage, dependency review, CodeQL and real Chromium smoke checks.

New shared contact details, external URLs, phone/WhatsApp values and arbitrary UI hex colors should not be scattered through page components. The repository quality check blocks those patterns on newly added UI lines so legacy code can be migrated incrementally instead of requiring a disruptive all-at-once rewrite.

## Environment variables

See `.env.example`. Copy it to `.env.local` (gitignored, never commit
real values). `VITE_API_URL` is the important one - it must point at a
running instance of the backend in `server/` (defaults to
`http://localhost:4000` for local dev).

## Architecture

- `src/App.tsx` - route table, the global enquiry modal / WhatsApp
  widget that live outside any single page, and a loading/error gate
  that covers the initial API fetch (see `DataContext` below) so
  individual views can keep assuming catalog data is already available,
  the same as before this was network-backed.
- `src/routes/` - thin wrapper components that resolve a URL (e.g.
  `/safaris/:slug`) to real data from context and hand it to a view, or
  render a 404. This is where `useParams`/`useSearchParams` live, so the
  `src/views/*` components themselves stay plain and don't need to know
  about routing. `AdminRoute.tsx` gates `/admin` behind a real login
  backed by the API (see "Authentication" below).
- `src/views/` - one file per page.
- `src/components/` - shared UI, grouped by domain (`tours/`, `hotels/`,
  `layout/`, etc).
- `src/services/api.ts` - the one place that talks to the backend
  (fetch wrapper with credentials/error handling).
- `src/context/DataContext.tsx` - the data layer. Fetches the catalog
  (tours/hotels/destinations/blog/testimonials/settings) from the real
  API on mount, and calls real authenticated endpoints for admin
  mutations and enquiry submission. This used to read/write
  `localStorage` directly; see git history on this file if you need the
  old behavior for reference.
- `src/types.ts` - all shared TypeScript interfaces (`Tour`, `Hotel`,
  `Destination`, etc). Treat this as the schema; every view/component
  should be checked against it, not against what the data *looks like*
  at a glance. The backend's `server/src/db/schema.ts` mirrors these
  shapes - if you change one, change the other.
- `server/` - the API. See `server/README.md` for its own architecture,
  route table, and deployment notes.

## Authentication

Admin login (`/admin`) is a real username/password check against the
database (bcrypt-hashed), with the session held in an httpOnly cookie
the frontend can't read or forge - see `server/README.md`
"Authentication" for the details. `DataContext` restores the session on
page load by asking the backend `GET /api/auth/me`, so a refresh doesn't
log you out.

## Deployment

This is a client-rendered single-page app that calls a separately
deployed API. Whatever host you use for the frontend **must** be
configured to serve `index.html` for any path that isn't a real static
file (an "SPA fallback" / history-mode rewrite), or direct links and
page refreshes on anything other than `/` will 404.

- **Vercel / Netlify**: both support this via a rewrite rule. This repo
  already includes both (`vercel.json` for Vercel, `public/_redirects`
  for Netlify, which Vite copies into `dist/` on build) - pick whichever
  matches your host and delete the other if you like, but leaving both is
  harmless.
- **nginx**: `try_files $uri /index.html;` in the relevant `location`
  block.
- **Any static host without SPA fallback support will not work correctly**
  for this app as-is.

Set `VITE_SITE_URL` to the real production URL and `VITE_API_URL` to
your deployed backend's URL before building. See `server/README.md` for
deploying the API and database.

## Known gaps (read before launch)

These are the things standing between "polished prototype" and "safe to
put in front of real customers." None of them are hidden or silently
worked around elsewhere in the code - each is called out at the point it
matters, but they're collected here too:

1. **SEO ceiling of a client-only SPA.** Per-page `<title>`/meta tags are
   wired up (`src/components/common/PageMeta.tsx`, via React 19's native
   head-hoisting), and there's a generated `sitemap.xml` + `robots.txt`.
   But because nothing is server-rendered, a crawler or link-preview bot
   that doesn't execute JavaScript sees a blank shell. Most major
   crawlers do execute JS today, but if organic search matters a lot,
   consider prerendering or moving to an SSR/SSG framework later.
2. **Real photography.** Tour/hotel/destination images currently
   hotlink to Unsplash placeholder URLs (`images.unsplash.com`) rather
   than owned, brand-appropriate photography. Fine for a prototype, not
   for a live business site - and a third-party hotlink is also a
   reliability risk (if Unsplash changes/removes an image, or is
   unreachable, the site loses images it doesn't control).
3. **Bundle size.** The production JS bundle is currently ~435 KB
   (~116 KB gzipped) as a single chunk - Vite's build warns about this.
   Worth revisiting with route-based code-splitting
   (`React.lazy`/dynamic `import()`).
4. **Admin can only manage tours and hotels.** Destinations, blog posts,
   and testimonials have no admin UI or backend routes yet - they're
   only editable by hand in the database (or via the seed data). Not
   used by the current admin dashboard, so this wasn't built speculatively;
   add it if/when there's an actual need.
5. **No password reset / multi-admin management flow.** The one admin
   account is created by `server`'s seed script from environment
   variables. Adding a second admin, or resetting a forgotten password,
   currently means doing it directly in the database.
6. **Catalog fetch is "load everything on mount."** Fine at this
   catalog's size (dozens of tours/hotels), but wouldn't scale
   gracefully to thousands of items - would need pagination or
   per-route fetching (e.g. React Query) at that point.

Everything that used to be gaps #1-3 in this list before the backend
existed - enquiries never reaching the business, `/admin` having no
real security, and there being no shared backend at all - is now fixed;
see `server/README.md` for how, and its "Verification" section for how
that was actually tested (against a real database, not mocked).

## Testing

Frontend tests use Vitest + React Testing Library and cover critical
components/views using typed fixtures and API mocks at the component
boundary. Backend tests use Vitest + Supertest and exercise API behavior
against the backend test setup.

The required CI suite adds production builds, coverage thresholds,
repository-quality checks, dependency review, CodeQL analysis and a
Chromium browser smoke pass across mobile and desktop. See
`docs/TESTING.md` for the current pyramid and what belongs at each level.
