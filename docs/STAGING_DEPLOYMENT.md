# Staging deployment: Vercel + Railway

This branch is intended for deploying a temporary Good Secrets Safaris staging site without changing `goodsecretssafaris.com`.

## Target architecture

- Frontend: Vercel, repository root
- API: Railway, root directory `server/`, built from `server/Dockerfile`
- Database: Railway managed PostgreSQL
- Source branch: `deployment/staging`

Do not deploy `server/docker-compose.yml` to Railway. Compose is for local development only.

## 1. Railway PostgreSQL

Create a Railway project and add PostgreSQL. Keep the generated database credentials in Railway; do not copy them into Git.

## 2. Railway API

Add `makosa-irvin/gss2` as a GitHub service, select branch `deployment/staging`, and set the service root directory to `server`.

Configure these variables in Railway:

```text
DATABASE_URL=<Railway PostgreSQL DATABASE_URL reference>
NODE_ENV=production
JWT_SECRET=<fresh 48-byte-or-longer random secret>
JWT_EXPIRES_IN=12h
CORS_ORIGINS=<Vercel staging origin; add after frontend URL is known>
RESEND_API_KEY=<staging/production Resend key when ready>
ENQUIRY_FROM_EMAIL=Good Secrets Safaris <enquiries@goodsecretssafaris.com>
ENQUIRY_NOTIFY_EMAIL=bookings@goodsecretssafaris.com
ADMIN_COOKIE_SAME_SITE=none
ADMIN_COOKIE_SECURE=true
ALLOW_DESTRUCTIVE_SEED=false
```

The Docker image runs `npm run db:migrate:prod` before starting the API. The Drizzle journal on this branch registers migrations 0000, 0001 and 0002, so a new database receives the enquiry lifecycle and publishing columns as well as the base schema.

Generate a Railway public domain and verify:

```text
GET https://<railway-api-domain>/api/health
```

Expected response: `{ "status": "ok" }`.

## 3. Initial staging seed

Only on a new staging database, configure a strong `SEED_ADMIN_PASSWORD` and the desired seed admin email/name. Temporarily set `ALLOW_DESTRUCTIVE_SEED=true`, run:

```text
npm run seed:prod
```

Then immediately restore `ALLOW_DESTRUCTIVE_SEED=false`. Do not make seeding part of normal deploy startup because it clears content/catalog rows.

## 4. Vercel frontend

Import `makosa-irvin/gss2`, select `deployment/staging`, and use the repository root as the project root. Configure:

```text
VITE_API_URL=https://<railway-api-domain>
VITE_SITE_URL=https://<stable-vercel-staging-domain>
SITEMAP_API_URL=https://<railway-api-domain>
```

`VITE_API_URL` intentionally has no trailing `/api`; the frontend client supplies API endpoint paths.

After Vercel assigns the stable staging origin, set Railway `CORS_ORIGINS` to exactly that origin and redeploy/restart the API.

## 5. Protect staging from indexing

Do not treat the temporary deployment as the canonical public website. Prefer Vercel deployment protection for stakeholder testing. If the staging URL is publicly accessible, add an explicit `noindex, nofollow` strategy before sharing it broadly. Do not point `goodsecretssafaris.com` or `www.goodsecretssafaris.com` to this deployment yet.

## 6. Staging acceptance checks

Verify the public API health endpoint, tours, hotels, destinations, blog and testimonials; submit a real test enquiry and confirm it persists; test admin login/logout and cookie persistence; create/edit/publish/unpublish CMS content; refresh nested SPA routes directly; test legacy redirects; verify sitemap generation uses the staging API; and test mobile layouts.

## 7. Production cutover later

Only after staging acceptance should the live domain be moved. Before cutover, take a final WordPress/content backup, verify redirects and canonical URLs, remove staging-only indexing restrictions from the production deployment, configure production CORS/site URLs, validate email delivery, and then change DNS/domain assignment.
