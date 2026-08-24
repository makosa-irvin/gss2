# SEO migration launch checklist

- Export the full legacy URL inventory before DNS cutover.
- Map every indexed/valuable legacy URL to the closest new equivalent; avoid redirecting unrelated pages to the homepage.
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
