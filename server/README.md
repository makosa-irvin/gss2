# Good Secrets Safaris - API

Real backend for the Good Secrets Safaris site: PostgreSQL + Express +
TypeScript, using Drizzle ORM. Replaces the old frontend-only app's
localStorage data layer, which meant enquiries never reached the business
and admin edits were only visible in the editing browser.

## Stack

- Node.js + Express + TypeScript
- PostgreSQL via [Drizzle ORM](https://orm.drizzle.team/) (chosen over
  Prisma specifically because it has no native binary to download - see
  "Why Drizzle, not Prisma" below if you're wondering)
- JWT + bcrypt admin authentication, session held in an httpOnly cookie
- [Resend](https://resend.com) for enquiry notification emails
- Vitest + Supertest for tests, run against a real database

## Getting started (local dev)

You need a Postgres database. Either:

**Option A - Docker (recommended, includes Postgres):**
```bash
cp .env.example .env   # fill in JWT_SECRET at minimum
docker compose up --build
```

**Option B - your own local Postgres:**
```bash
createdb goodsecretssafaris
cp .env.example .env   # point DATABASE_URL at it, fill in JWT_SECRET
npm install
npm run db:migrate
```

Either way, seed the database once (creates the initial catalog data and
the first admin user - set `SEED_ADMIN_EMAIL`/`SEED_ADMIN_PASSWORD` in
`.env` first):

```bash
npm run seed
```

Then for local development with hot reload:
```bash
npm run dev   # http://localhost:4000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and compile to `dist/` |
| `npm start` | Run the compiled server (`dist/index.js`) |
| `npm run db:generate` | Generate a new migration after changing `src/db/schema.ts` |
| `npm run db:migrate` | Apply pending migrations |
| `npm run db:studio` | Open Drizzle Studio, a GUI for browsing the database |
| `npm run seed` | Seed/reset the database from `src/db/seedData/*.json` - clears existing rows first, so treat it as a one-time migration step, not a routine command |
| `npm test` | Run the test suite against a real database (see below) |

## Environment variables

See `.env.example` for the full list with explanations. The two that
matter most:

- `JWT_SECRET` - must be a long random value in any environment beyond
  local dev. Generate one with:
  `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`
- `DATABASE_URL` - your Postgres connection string.

Email notifications (`RESEND_API_KEY` + `ENQUIRY_NOTIFY_EMAIL`) are
optional for local dev - if unset, enquiries still save to the database
correctly, but notification emails are logged to the console instead of
sent. Don't leave this unconfigured in production; see
`src/lib/email.ts`.

## API overview

All routes are prefixed `/api`. Public routes need no authentication;
admin routes require a valid session (see Authentication below).

| Method | Path | Access | What it does |
|---|---|---|---|
| GET | `/health` | Public | Liveness check |
| GET | `/tours`, `/tours/:slug` | Public | List / fetch a tour |
| GET | `/hotels`, `/hotels/:slug` | Public | List / fetch a hotel |
| GET | `/destinations`, `/destinations/:slug` | Public | List / fetch a destination |
| GET | `/blog`, `/blog/:slug` | Public | List / fetch a blog post |
| GET | `/testimonials` | Public | List testimonials |
| GET | `/settings` | Public | Company settings (contact info, currency rate, etc) |
| POST | `/enquiries` | Public, rate-limited | Submit a booking/contact enquiry - saves to the database and emails the business |
| POST | `/auth/login` | Public, rate-limited | Admin login |
| POST | `/auth/logout` | Admin | Clears the session |
| GET | `/auth/me` | Admin | Current session info |
| GET | `/enquiries` | Admin | List all submitted enquiries |
| PUT | `/enquiries/:id/status` | Admin | Update an enquiry's status/notes |
| PUT | `/settings` | Admin | Update company settings |
| POST/PUT/DELETE | `/admin/tours[/:id]` | Admin | Create/update/delete a tour |
| POST/PUT/DELETE | `/admin/hotels[/:id]` | Admin | Create/update/delete a hotel |

## Authentication

`POST /auth/login` sets an httpOnly, `sameSite=lax` session cookie (not a
token returned in the response body for the frontend to store) -
deliberately not readable by JavaScript, so an XSS bug elsewhere on the
site can't steal it via `document.cookie`. The frontend must send
requests with `credentials: 'include'` for the cookie to be sent.

## Security notes

- Passwords are bcrypt-hashed (cost factor 12); plaintext never touches
  the database.
- Login and enquiry-submission endpoints have their own tighter rate
  limits on top of a global one, since they're the most abuse-prone
  routes (credential stuffing and spam, respectively).
- All admin-mutating endpoints validate input with Zod before touching
  the database.
- `helmet` sets standard security headers; CORS is restricted to the
  origins listed in `CORS_ORIGINS`.
- Login failure messages are identical for "no such user" and "wrong
  password" specifically to avoid leaking which admin emails exist.

## Testing

Tests run against a **real** Postgres database via Supertest, not a
mocked client - the setup file (`src/test/setup.ts`) refuses to run
unless `DATABASE_URL` looks like a local database, as a guardrail
against accidentally running destructive tests against production. Tests
that need a working admin login (`it.runIf(!!SEED_ADMIN_PASSWORD)`) skip
automatically if `SEED_ADMIN_PASSWORD` isn't set in your environment,
rather than failing.

```bash
npm test
```

## Deploying

1. Provision a Postgres database (Neon, Supabase, Render, Railway, RDS -
   any of these work; prefer one that gives you a pooled connection
   string for serverless-style hosts).
2. Set the environment variables from `.env.example` on your host.
3. Run `node dist/db/migrate.js` once (the Dockerfile's `CMD` already
   does this on container start - see the note there about multi-replica
   deploys).
4. Run `node dist/db/seed.js` once, manually, the first time only.
5. Point the frontend's `VITE_API_URL` at this service's public URL and
   redeploy it (see the root README).

## Why Drizzle, not Prisma

Prisma's CLI (`generate`/`migrate`) downloads a native query/schema
engine binary at install/run time. In the environment this backend was
originally built and tested in, that download was blocked by network
restrictions, which meant Prisma-based code could be written but never
actually verified to work. Drizzle has no such binary - it's pure
TypeScript/JS talking to Postgres over the standard `pg` driver - so
every part of this backend (schema, migrations, seed data, every route)
was built against, and tested against, a real running database rather
than trusted on faith. If that constraint doesn't apply to your
environment, Prisma is an equally reasonable choice; this isn't a
statement that Drizzle is strictly better, just what let this particular
implementation actually be verified end to end.
