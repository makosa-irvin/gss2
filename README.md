# Good Secrets Safaris

Kenya, Tanzania & Zanzibar safari and travel platform. React + TypeScript
SPA intended to replace the current WordPress/Elementor live site.

## Stack

- React 19 + TypeScript, built with Vite
- Tailwind CSS v4
- React Router v7 (client-side routing)
- Vitest + React Testing Library for tests

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values, see below
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check, regenerate `public/sitemap.xml`, then build to `dist/` |
| `npm run preview` | Serve the production build locally (has correct SPA fallback, unlike a plain static file server) |
| `npm run lint` | Type-check only (`tsc --noEmit`) |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run sitemap` | Regenerate `public/sitemap.xml` on its own |

## Environment variables

See `.env.example`. Copy it to `.env.local` (gitignored, never commit real
values). `VITE_ADMIN_PASSWORD` gates `/admin` - see the security note
below before relying on it for anything real.

## Architecture

- `src/App.tsx` - route table and the global enquiry modal / WhatsApp
  widget that live outside any single page.
- `src/routes/` - thin wrapper components that resolve a URL (e.g.
  `/safaris/:slug`) to real data from context and hand it to a view, or
  render a 404. This is where `useParams`/`useSearchParams` live, so the
  `src/views/*` components themselves stay plain and don't need to know
  about routing.
- `src/views/` - one file per page.
- `src/components/` - shared UI, grouped by domain (`tours/`, `hotels/`,
  `layout/`, etc).
- `src/context/DataContext.tsx` - the entire data layer. Currently backed
  by `localStorage` seeded from `src/data/initialData.ts` - **not a real
  backend**. See "Known gaps" below; this is the most important thing to
  understand before treating this as production-ready.
- `src/types.ts` - all shared TypeScript interfaces (`Tour`, `Hotel`,
  `Destination`, etc). Treat this as the schema; every view/component
  should be checked against it, not against what the data *looks like* at
  a glance.

## Deployment

This is a client-rendered single-page app. Whatever host you use **must**
be configured to serve `index.html` for any path that isn't a real static
file (an "SPA fallback" / history-mode rewrite), or direct links and page
refreshes on anything other than `/` will 404.

- **Vercel / Netlify**: both support this via a rewrite rule. This repo
  already includes both (`vercel.json` for Vercel, `public/_redirects`
  for Netlify, which Vite copies into `dist/` on build) - pick whichever
  matches your host and delete the other if you like, but leaving both is
  harmless.
- **nginx**: `try_files $uri /index.html;` in the relevant `location`
  block.
- **Any static host without SPA fallback support will not work correctly**
  for this app as-is.

Set `VITE_SITE_URL` to the real production URL before building, so
`public/sitemap.xml` contains correct absolute URLs.

## Known gaps (read before launch)

These are the things standing between "polished prototype" and "safe to
put in front of real customers." None of them are hidden or silently
worked around elsewhere in the code - each is called out at the point it
matters, but they're collected here too:

1. **Enquiry/booking forms don't reach anyone.** `addEnquiry()` in
   `DataContext.tsx` only writes to the submitting visitor's own browser
   `localStorage`. There is no email, database, or notification of any
   kind. As shipped, every "Plan My Safari" / booking enquiry form is a
   dead end for the business - the only lead channel that actually works
   today is the WhatsApp deep links (`getWhatsAppUrl`), because those
   open a real WhatsApp conversation rather than going through
   `addEnquiry`. **This needs a real backend or a forwarding service
   (e.g. a transactional email API, or a hosted form service) before
   launch.**
2. **`/admin` is not properly secured.** `src/routes/AdminRoute.tsx`
   checks a password against `VITE_ADMIN_PASSWORD`, which Vite inlines
   into the shipped JavaScript in plain text - readable by anyone who
   opens devtools. It's a reasonable speed bump against someone
   stumbling onto the URL, not protection against someone who actually
   wants in. It also gates viewing only; because of point 1 above and the
   localStorage-only data layer, admin edits aren't even visible to other
   visitors, so there's nothing sensitive to steal *yet* - but customer
   enquiries (name, email, phone, travel plans) would be, once point 1 is
   fixed, so **do not consider this component sufficient security for
   handling real customer data.** Needs real server-side authentication.
3. **No real backend / shared data store.** Tours, hotels, destinations,
   and enquiries all live in each visitor's own browser `localStorage`,
   seeded from `src/data/initialData.ts`. An edit made in `/admin` is only
   visible in that one browser - it does not appear for other visitors,
   and refreshing a different device shows the original seed data. A
   production deployment needs this behind a real database/API.
4. **SEO ceiling of a client-only SPA.** Per-page `<title>`/meta tags are
   wired up (`src/components/common/PageMeta.tsx`, via React 19's native
   head-hoisting), and there's a generated `sitemap.xml` + `robots.txt`.
   But because nothing is server-rendered, a crawler or link-preview bot
   that doesn't execute JavaScript sees a blank shell. Most major
   crawlers do execute JS today, but if organic search matters a lot,
   consider prerendering or moving to an SSR/SSG framework later.
5. **Real photography.** Tour/hotel/destination images currently
   hotlink to Unsplash placeholder URLs (`images.unsplash.com`) rather
   than owned, brand-appropriate photography. Fine for a prototype, not
   for a live business site - and a third-party hotlink is also a
   reliability risk (if Unsplash changes/removes an image, or is
   unreachable, the site loses images it doesn't control).
6. **Bundle size.** The production JS bundle is currently ~515 KB
   (~136 KB gzipped) as a single chunk - Vite's build warns about this.
   Worth revisiting with route-based code-splitting
   (`React.lazy`/dynamic `import()`) once the backend work above is
   settled, so it's not solving a moving target.

## Testing

24 tests across 6 files (Vitest + React Testing Library), covering the
crash-fix history of this codebase (see `src/views/__tests__/` and
`src/components/**/__tests__/`) plus fixture factories in `src/test/` that
are typed against the real `Tour`/`Hotel`/`Destination`/`Testimonial`
interfaces, so a future field rename fails the test build instead of
silently compiling.
