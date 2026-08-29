# Branch Protection Policy

## Integration branch: `deployment/staging`

Enable a GitHub ruleset or branch protection rule with:

- require a pull request before merging
- require status checks to pass before merging
- require branches to be up to date before merging
- require conversation resolution before merging
- block force pushes
- block branch deletion
- require linear history where it does not conflict with the chosen merge strategy
- include administrators only after confirming the rules cannot lock out the repository owner

Required checks should be added only after this baseline CI has run successfully at least once so GitHub knows the exact check names. The checks introduced by this baseline are:

- `Repository quality`
- `Frontend / typecheck, tests, build`
- `Backend / typecheck, API tests, build`
- `Coverage thresholds`
- `Browser smoke / Chromium`
- `Dependency audit`
- CodeQL JavaScript/TypeScript analysis (select the exact check name shown by the successful CodeQL run)

Do not select transient deployment-preview statuses as required engineering checks unless the deployment itself is intentionally part of the merge policy.

For a solo-maintainer repository, do not require multiple external approvals. CI and conversation resolution should be mandatory. When a second regular maintainer joins, require one approving review and CODEOWNERS review for sensitive areas.

## Production branch: `main`

Production should be at least as strict as staging. Recommended settings:

- PR required
- all required CI/security checks passing
- one approval once there is more than one maintainer
- dismiss stale approvals after new commits
- conversation resolution required
- force pushes/deletion blocked
- deployment to production performed from reviewed `main` only

## Emergency changes

Emergency fixes should still use a pull request and run automated checks. If a repository administrator must bypass protection during a live incident, record why in the PR/incident notes and follow with a normal reviewed corrective PR if necessary.

## Merge strategy

Prefer squash merge for small feature/fix PRs when it produces a clean single logical change on the integration branch. Use a normal merge when preserving a carefully structured multi-commit history is useful. Avoid rebase/force-push workflows on shared long-lived branches.
