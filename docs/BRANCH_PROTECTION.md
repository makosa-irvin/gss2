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
- `Conventional PR title`
- `Branch naming policy`
- CodeQL JavaScript/TypeScript analysis (select the exact successful CodeQL check shown by GitHub)

Do not select transient deployment-preview statuses as required engineering checks unless the deployment itself is intentionally part of the merge policy.

For a solo-maintainer repository, do not require multiple external approvals. CI, the PR policy checks and conversation resolution should be mandatory. When a second regular maintainer joins, require one approving review and CODEOWNERS review for sensitive areas.

### Recommended GitHub ruleset settings

In **Settings → Rules → Rulesets**, create a branch ruleset targeting `deployment/staging` and enable it in active mode after the baseline PR has merged. Configure:

1. Target branch pattern: `deployment/staging`.
2. Restrict deletions: enabled.
3. Block force pushes: enabled.
4. Require a pull request before merging: enabled.
5. Required approvals: `0` while this remains a solo-maintainer repository; raise to `1` when another maintainer is available.
6. Dismiss stale approvals: enable once approvals are required.
7. Require review from CODEOWNERS: enable once approvals are required.
8. Require conversation resolution before merging: enabled.
9. Require status checks to pass: enabled.
10. Require branches to be up to date before merging: enabled.
11. Add each stable engineering/security check listed above by its exact GitHub check name.
12. Do not allow bypass for routine feature work. Keep owner/admin bypass available only if necessary for repository recovery or a documented production incident.

Avoid enabling a required deployment check until the deployment provider's preview/staging integration is itself stable and intentionally part of the merge contract.

## Production branch: `main`

Production should be at least as strict as staging. Recommended settings:

- PR required
- all required CI/security checks passing
- one approval once there is more than one maintainer
- dismiss stale approvals after new commits
- conversation resolution required
- force pushes/deletion blocked
- deployment to production performed from reviewed `main` only

When production promotion becomes routine, consider a separate environment protection rule for the production deployment in addition to branch protection. That lets code review and deployment authorization remain distinct controls.

## Emergency changes

Emergency fixes should still use a pull request and run automated checks. If a repository administrator must bypass protection during a live incident, record why in the PR/incident notes and follow with a normal reviewed corrective PR if necessary.

## Merge strategy

Prefer squash merge for small feature/fix PRs when it produces a clean single logical change on the integration branch. Use a normal merge when preserving a carefully structured multi-commit history is useful. Avoid rebase/force-push workflows on shared long-lived branches.
