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

## API and integration tests

Backend tests use Vitest + Supertest. Cover authentication boundaries, request validation, status codes, response shapes and important persistence behavior.

High-priority flows include:

- public enquiry submission
- admin authentication
- enquiry status lifecycle
- follow-up scheduling
- content publishing/admin writes
- public reads returning only published content

Tests should use synthetic data and isolated test state.

## End-to-end tests

End-to-end browser tests should be reserved for high-value journeys:

1. browse a safari and submit an enquiry
2. use the shortlist/quote basket and submit context
3. admin login and enquiry lifecycle management
4. critical navigation and public page smoke checks

Do not duplicate every component assertion in E2E tests. The goal is confidence that the deployed system works across boundaries.

The baseline CI includes a real Chromium browser smoke test for the home page and tours page at desktop and mobile viewports. It verifies successful navigation, substantive rendered content, one page-level `h1`, absence of uncaught page errors, and horizontal viewport overflow. Playwright is installed ephemerally in that CI job so the existing lockfile remains reproducible while this baseline is introduced.

This smoke job is deliberately not presented as full-system enquiry E2E coverage. A later phase should commit Playwright as a development dependency and add DB/API-backed browser flows for enquiry submission and admin CRM management once those environments can be provisioned deterministically in CI.

## Coverage

The first CI runs measured the existing codebase rather than assuming an aspirational number.

Frontend measured baseline:

- lines: 43.18%
- statements: 38.39%
- functions: 21.71%
- branches: 37.19%

Frontend CI floors are therefore 43% lines, 38% statements, 21% functions and 37% branches.

Backend measured baseline:

- lines: 55.52%
- statements: 52.77%
- functions: 34.61%
- branches: 23.44%

Backend CI floors are therefore 55% lines, 52% statements, 34% functions and 23% branches.

These are regression floors, not quality targets. They intentionally sit just below the measured legacy baseline so a new pull request cannot silently reduce coverage. Raise them in small reviewed steps as meaningful tests are added; do not lower them merely to make CI pass, and do not add low-value assertions merely to improve a percentage.

Near-term coverage priorities are the enquiry and CRM workflow, authentication, email side-effect boundaries, admin write routes, `DataContext` API mapping, and customer-facing cards/forms with low current coverage. Critical business modules should trend materially higher than the repository-wide floor.

CI publishes frontend and backend coverage summary artifacts on every run.

## Regression tests

When fixing a reproducible bug, add a test that would have failed before the fix whenever practical. This is particularly important for enquiry submission, authentication, database mappings and admin CRM state transitions.

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
