# Testing Strategy

## Goals

Tests should reduce the chance of shipping broken customer journeys, incorrect business logic, unsafe API changes, and regressions in the admin CRM. The suite should stay fast enough that developers run it before opening a pull request.

## Test pyramid

Target distribution is approximately:

- 60–70% unit/component tests
- 20–30% API/integration tests
- about 10% end-to-end tests

These are directional targets, not quotas. A critical workflow deserves the appropriate test even if the ratio changes.

## Unit tests

Use Vitest for deterministic business logic, utilities, validators, mapping/normalization, pricing calculations, date/follow-up calculations, route matching, and other pure functions.

Unit tests should be fast, isolated and explicit about edge cases.

## React component tests

Use Testing Library with Vitest/jsdom. Test user-observable behavior rather than internal component implementation. Prefer role/label-based queries. Avoid broad snapshot tests that fail on harmless markup changes.

Important areas include forms, filters, modal focus behavior, CRM controls, shortlist selection and failure/empty/loading states.

A test must reflect the current product contract. Do not weaken or rewrite an assertion merely to make CI pass. When a failure appears, first determine whether the application regressed or the test describes obsolete behavior. Fix production code for real regressions; update the test only when the current contract proves the assertion is stale.

## Test execution integrity

A green workflow must mean the committed tests actually ran. Repository quality checks reject committed `.skip`, `.todo`, `.only`, `skipIf`, `runIf`, `xit`, `xtest` and `xdescribe` usage in test files so important coverage cannot silently disappear while CI remains green.

If a test genuinely cannot run in a particular environment, prefer making the environment deterministic. A temporary conditional skip requires an explicit `quality-allow-test-skip` marker in that test file and should be treated as a reviewed exception with a clear reason and follow-up plan. Focused `.only` tests should never be merged.

## API and integration tests

Backend tests use Vitest + Supertest. Cover authentication boundaries, request validation, status codes, response shapes and important persistence behavior.

High-priority flows include:

- public enquiry submission
- admin authentication
- enquiry status lifecycle
- follow-up scheduling
- content publishing/admin writes
- public reads returning only published content

Tests should use synthetic data and isolated test state. CI provisions a disposable PostgreSQL database, applies migrations and deterministic seed data before running the API/integration suite. Tests must not depend on staging or production data.

## End-to-end tests

End-to-end browser tests should be reserved for high-value journeys:

1. browse a safari and submit an enquiry
2. use the shortlist/quote basket and submit context
3. admin login and enquiry lifecycle management
4. critical navigation and public page smoke checks

Do not duplicate every component assertion in E2E tests. The goal is confidence that the deployed system works across boundaries.

The baseline CI includes a real Chromium browser smoke test for the home page and the current public safari explorer route (`/safaris`) at desktop and mobile viewports. It verifies successful navigation, substantive rendered content, one page-level `h1`, absence of uncaught page errors, horizontal viewport overflow, image alt attributes, accessible control names/labels, page title, meta description, canonical URL and document language. Playwright is installed ephemerally in that CI job so the existing lockfile remains reproducible while this baseline is introduced. The ephemeral browser-test workspace is also audited at high severity before Chromium is run.

This smoke job is deliberately not presented as full-system enquiry E2E coverage. A later phase should commit Playwright as a development dependency and add DB/API-backed browser flows for enquiry submission and admin CRM management once those environments can be provisioned deterministically in CI.

## Coverage

Coverage floors are ratchets: establish the measured result, put the required threshold just below it, and only move that threshold upward as meaningful tests improve confidence. Do not lower a floor merely to get a pull request green.

The initial frontend legacy measurement was 43.18% lines, 38.39% statements, 21.71% functions and 37.19% branches. After adding CRM interaction coverage and related component tests, the current measured frontend baseline is:

- lines: 46.77%
- statements: 41.69%
- functions: 24.57%
- branches: 43.04%

Frontend CI floors are therefore 46% lines, 41% statements, 24% functions and 42% branches.

The initial backend legacy measurement was 55.52% lines, 52.77% statements, 34.61% functions and 23.44% branches. After enabling deterministic auth, enquiry/CRM lifecycle, admin-tour and draft/publish integration tests, the current measured backend baseline is:

- lines: 74.62%
- statements: 72.47%
- functions: 60.75%
- branches: 45.80%

Backend CI floors are therefore 74% lines, 72% statements, 60% functions and 45% branches.

These are regression floors, not final quality targets. Critical business modules should trend materially higher than the repository-wide floor, and new business logic should arrive with tests appropriate to its risk. Do not add low-value assertions merely to improve a percentage.

Near-term coverage priorities are email side-effect boundaries, remaining admin write routes, `DataContext` API mapping, and customer-facing cards/forms with low current coverage. The enquiry and authentication routes are already substantially above the repository-wide backend floor and should remain there.

CI publishes frontend and backend coverage summary artifacts on every run.

## Regression tests

When fixing a reproducible bug, add a test that would have failed before the fix whenever practical. This is particularly important for enquiry submission, authentication, database mappings and admin CRM state transitions.

Historical failed workflow runs remain attached to their original commits in GitHub. Merge readiness is determined from the checks on the current PR head/merge candidate, not by making old failed runs disappear.

## Commands

Frontend:

```bash
npm run typecheck
npm test
npm run build
npm run verify
```

Backend:

```bash
cd server
npm run typecheck
npm test
npm run build
npm run verify
```

Coverage is run by CI with Vitest's V8 coverage provider. The provider is installed ephemerally in CI until it is intentionally added to the repository lockfiles.
