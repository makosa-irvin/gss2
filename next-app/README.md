# Good Secrets Safaris Next.js migration app

This directory is the parallel App Router application used to migrate the public Good Secrets Safaris frontend from Vite/React CSR to a hybrid Next.js architecture.

## Why it is parallel

The existing root Vite application remains the deployed application while migration work is in progress. This avoids switching rendering architecture before route, design, analytics, enquiry, and SEO parity are verified.

## Rendering targets

- SSG: legal pages, guides, evergreen editorial content, About, Contact.
- SSG/ISR: safari, destination, hotel, and review pages backed by the existing Express API.
- CSR inside a server-rendered shell: shortlist, safari builder, enquiry interactions.
- CSR/authenticated: admin and CRM.
- SSR only where request-time data genuinely requires it.

## Current migrated slice

- `/privacy`
- `/terms`
- `/booking-conditions`

These pages are Server Components and use Next.js native metadata. The migration preview is intentionally `noindex` and its generated robots file blocks crawlers until the Next application becomes the canonical deployment.

## Local verification

```bash
cd next-app
npm install
npm run typecheck
npm run build
npm run dev
```

Next.js is pinned to the current Active LTS security release for this branch. Do not change the repository root `npm run build` to Next.js until the migration checklist is complete.
