# Development Workflow

## Prerequisites

- Node.js 22 (the repository pins this in `.nvmrc` and both package manifests)
- npm 10.9.8
- PostgreSQL for backend/database development
- access to the required staging environment variables when testing integrations

If you use nvm, run:

```bash
nvm use
```

The supported Node major is intentionally narrow so local development, GitHub Actions, Vercel and the backend runtime do not drift across incompatible Node versions.

## Frontend

```bash
npm ci
npm run dev
```

The frontend runs on port 3000 by default.

Before opening a pull request:

```bash
npm run verify
```

This runs repository quality checks, TypeScript validation, frontend tests and the production build.

## Backend

```bash
cd server
npm ci
npm run dev
```

Before opening a pull request:

```bash
npm run verify
```

## Environment files

Copy `server/.env.example` to `server/.env` for local backend development and provide your own development values. Never commit the resulting file or paste secrets into issues/PRs.

Runtime backend configuration is parsed once through `server/src/config/env.ts` with Zod. Required values such as `DATABASE_URL` and `JWT_SECRET`, supported Node/runtime modes, ports and cookie settings therefore fail fast with a configuration error rather than failing later during a customer request.

When adding a new runtime environment variable:

1. add it to `server/src/config/env.ts` with an appropriate type/default/constraint;
2. document it in `server/.env.example`;
3. access the validated `env` object instead of reading `process.env` throughout application code;
4. add or update environment-validation tests when the rule has meaningful behavior;
5. configure it in staging before merging functionality that depends on it;
6. document the production deployment requirement in the PR.

Seed-only variables may remain scoped to the seed command rather than the runtime environment contract, but they must still be documented and must never be committed with real secret values.

## Database changes

Change the Drizzle schema, generate/add a migration, review the SQL and run it against a development database. Do not use manual staging/production schema edits as a substitute for a migration.

A migration PR should describe whether the change is additive, whether old application versions remain compatible during deployment, and whether data backfill is required.

## Pull request flow

```text
feature/fix/chore branch
        ↓
local verification
        ↓
pull request → deployment/staging
        ↓
CI + review
        ↓
staging deployment + verification
        ↓
production promotion through main
```

Keep feature branches short-lived and re-sync with the integration branch before merging when necessary.

## Dependencies

Prefer `npm ci` for reproducible installs from the lockfile. Dependency changes must include the updated lockfile and pass dependency review and CI.

Dependabot creates scheduled maintenance PRs; treat them like normal changes rather than auto-merging blindly.
