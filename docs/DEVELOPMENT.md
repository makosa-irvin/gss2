# Development Workflow

## Prerequisites

- Node.js 22
- npm
- PostgreSQL for backend/database development
- access to the required staging environment variables when testing integrations

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

Copy the appropriate `.env.example` to a local ignored environment file and provide your own development values. Never commit the resulting file or paste secrets into issues/PRs.

When adding a new environment variable:

1. document it in the appropriate `.env.example`;
2. validate/use it at the application boundary;
3. configure it in staging before merging functionality that depends on it;
4. document the production deployment requirement in the PR.

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
