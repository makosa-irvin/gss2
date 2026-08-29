# Contributing to Good Secrets Safaris

## Branching

Create short-lived branches from `deployment/staging` unless the work explicitly targets another integration branch.

Use these prefixes:

- `feature/` for new product functionality
- `fix/` for bug fixes
- `design/` for visual/system design changes
- `test/` for test-only work
- `docs/` for documentation
- `chore/` for tooling, dependencies and maintenance

Do not commit directly to protected integration or production branches once branch protection is enabled.

## Commit messages

Use Conventional Commits:

- `feat: add traveller follow-up scheduling`
- `fix: prevent malformed enquiry from crashing admin`
- `test: cover enquiry validation failures`
- `refactor: centralize route constants`
- `docs: document Railway migration process`
- `ci: add backend integration checks`
- `chore: update dependencies`

Keep commits logically scoped. Avoid commits such as `changes`, `final`, `fix stuff`, or `working`.

## Before opening a pull request

Run:

```bash
npm ci
npm run verify

cd server
npm ci
npm run verify
```

A change is not considered ready because it works manually. Type checking, automated tests and production builds must pass.

## Pull requests

Every pull request must explain what changed, why it changed, how it was tested and any deployment/migration risk. Visual changes should include screenshots. Database changes must include a reviewed migration and deployment notes.

Prefer small pull requests that are easy to reason about. Do not mix unrelated refactors with feature work unless required by the feature.

## Testing expectations

Follow the test pyramid documented in `docs/TESTING.md`. New business logic should normally receive unit tests. API behavior should receive integration tests. End-to-end tests are reserved for high-value journeys rather than every UI detail.

Bug fixes should include a regression test when practical.

## Frontend standards

Reuse existing components, route helpers and design tokens before introducing new variants. Do not duplicate contact details, API URLs, status values, pricing labels or other reusable constants inside individual components.

Marketing copy that belongs to a single page may remain close to that page. Shared business content and configuration should be centralized. Avoid turning ordinary prose into opaque keys merely to eliminate string literals.

For UI changes, verify mobile and desktop layouts, keyboard operation, focus states, loading/error/empty states, and semantic labels.

## Backend standards

Validate all external input at the API boundary. Keep credentials server-side. Public endpoints must not expose admin-only state. Database schema changes require migrations; do not modify staging or production schemas manually.

Side effects such as email should not cause a persisted customer enquiry to appear failed when the side effect alone fails.

## Security

Never commit `.env` files, private keys, API keys, database URLs, access tokens or customer data. Use example files with placeholders and store real values in the deployment platform's secret/environment system.

See `SECURITY.md` for vulnerability reporting guidance.
