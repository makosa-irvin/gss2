# Engineering Standards

## Principles

The repository should make the safe path the easy path. Quality is enforced through automated checks, small reviewed pull requests, centralized configuration, explicit migrations and tests at the right layer.

## TypeScript

Prefer explicit domain types over `any`. Validate external input before it becomes trusted application state. Keep transformations between API/database shapes and UI shapes in named mapper functions rather than duplicating them in components.

Avoid non-null assertions for environment variables and API data unless an earlier invariant guarantees the value.

## Configuration and constants

Centralize values that are shared across the application or represent business/configuration state, including:

- routes and public URLs
- contact information
- enquiry statuses and lifecycle labels
- reusable CTA labels
- API/environment configuration
- design tokens
- reusable pricing/unit labels

A string literal is not automatically a problem. Page-specific prose can live with the page. Shared values should not be copied into several components.

## Environment variables

Read and validate environment variables at application boundaries. Do not scatter `process.env` or `import.meta.env` reads across feature modules. Document every required variable in the relevant `.env.example` without real values.

## Error handling

Handle expected failures at the correct boundary and provide actionable user-facing messages without leaking implementation or secret details. Background side effects must be observable in logs and must not silently change core transaction semantics.

## Database

All schema changes require versioned migrations. Migrations should be forward-safe and reviewed as code. Avoid destructive changes in the same release that introduces the replacement unless there is a tested migration/backfill plan.

Never manually patch staging/production schema as the normal deployment method.

## API

Public routes receive strict validation and rate limiting when abuse is plausible. Admin routes require authentication. Avoid returning database internals that are not part of the API contract.

Prefer explicit response contracts and mapper functions when database and frontend shapes differ.

## React

Keep business logic out of presentation components where practical. Prefer reusable UI primitives and composition over copying long Tailwind class sets between views. Components must include loading, empty and failure behavior where those states can occur.

Accessibility is part of correctness: controls need accessible names, keyboard interaction and visible focus states.

## Logging

Do not log secrets, authorization headers, full customer payloads or passwords. Server logs should include enough context to diagnose a request or background side-effect failure without exposing customer data unnecessarily.

## Dependencies

Use dependencies when they materially reduce maintenance or security risk. Avoid introducing a library for trivial functionality. Dependabot updates are reviewed and pass the same CI as product code.

## Pull requests

A pull request should do one coherent job. Large changes should be split by architecture layer or delivery phase. Reviewers should be able to understand both the intended behavior and the failure modes.

Required automated checks must pass before merge. Do not merge by bypassing CI unless responding to a production incident and the bypass itself is documented.
