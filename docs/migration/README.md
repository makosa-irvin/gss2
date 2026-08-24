# Legacy content migration

The replacement site must preserve the useful content and URLs from the current Good Secrets Safaris website rather than launching from the much smaller seed dataset.

## Workflow

1. Run `npm run migration:discover` while the legacy site is reachable. This exports WordPress pages/posts and a normalized inventory into `docs/migration/`.
2. Run `npm run migration:blog` to transform legacy posts into reviewable blog drafts.
3. Review every draft for outdated prices, dates, claims, contact information, duplicate pages, licensing and image ownership. Nothing is automatically published.
4. Build `redirect-map.csv` with one row per valuable legacy URL and a final destination URL.
5. Import approved content through the admin API or a one-time import script.
6. Validate redirects, sitemap coverage and Search Console before changing DNS.

## Safety rules

- Never overwrite current CMS content just because a legacy slug matches.
- Keep legacy URL and legacy ID as migration metadata until launch QA is complete.
- Imported blog content starts as `published: false`.
- Do not copy third-party images unless Good Secrets Safaris has usage rights.
- Pricing and availability must be reviewed manually before publication.
