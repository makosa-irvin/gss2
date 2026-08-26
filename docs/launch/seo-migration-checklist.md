# SEO migration launch checklist

- Export the full legacy URL inventory before DNS cutover.
- Map every indexed/valuable legacy URL to the closest new equivalent; avoid redirecting unrelated pages to the homepage.
  - **Confirmed 2026-08-26 by comparing the live site's actual navigation/content against this repo's current seed data: tour and destination slugs were extensively renamed during the rebuild and mostly do NOT match the legacy ones** (e.g. legacy `masai-mara-national-reserve` vs this site's `maasai-mara`; legacy `14-day-ultimate-kenya-tanzania-safari-experience` vs this site's `14-day-ultimate-kenya-tanzania-safari`). A wildcard redirect for `/safari-tour-packages/*` or `/destination/*` would send most visitors and crawlers to 404s. These need per-URL entries in `redirect-map.csv` (run the actual discovery workflow, don't assume parity) before launch - do not add a wildcard rule for either as a shortcut.
  - Hotel slugs (`/accommodation-packag/*`) were checked individually and are now explicit 1:1 rules in `public/_redirects`/`vercel.json` - 7 of 8 matched exactly, but PrideInn Paradise Beach Resort & Spa did not (legacy slug had a `-spa` suffix the new one doesn't), which a wildcard would have missed.
  - The legacy site's *current* tour-listing link is `/safari-tour-packages/`, not `/all-tours-and-safaris` (which doesn't appear anywhere in the live navigation/content as of the check above) - added a redirect for the real one; kept the other in case it's a genuine older/unindexed alias.
- Verify all redirects return one-hop 301 responses with no loops.
- Generate `sitemap.xml` from the production API and submit it in Google Search Console.
- Confirm canonical URLs use the final HTTPS `www.goodsecretssafaris.com` hostname consistently.
- Validate Organization/TravelAgency and BlogPosting structured data.
- Keep `/admin` and error pages `noindex`.
- Check titles/descriptions/OG images on representative tour, hotel, destination, and blog pages.
- Crawl the replacement site for broken internal links and 404s before launch.
- Preserve the legacy site/database backup until redirects and Search Console coverage stabilize.

## Architectural follow-up

The current Vite application is still client rendered. Metadata is materially improved, but server-rendering or static generation remains the preferred long-term architecture for search-critical landing/detail pages. Treat SSR/SSG as a post-migration architecture task rather than changing framework during the content/URL cutover, which would combine two high-risk migrations at once.
