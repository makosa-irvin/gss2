/**
 * Generates public/sitemap.xml from the current data.
 *
 * Run automatically as part of `npm run build` (see package.json) and can
 * be run standalone via `npm run sitemap`.
 *
 * IMPORTANT LIMITATION: this reads from src/data/initialData.ts, the
 * static seed data - not whatever an admin has actually published. There
 * is currently no real backend, so seed data IS the site's content. Once
 * a real backend/CMS exists (see README "Known gaps"), this script should
 * be changed to fetch the live, published catalog instead, or the sitemap
 * should be generated server-side per request.
 */
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  initialTours,
  initialHotels,
  initialDestinations,
  initialBlogPosts,
} from '../src/data/initialData';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = process.env.VITE_SITE_URL || 'https://www.goodsecretssafaris.com';

const staticRoutes = ['/', '/safaris', '/destinations', '/hotels', '/safari-builder', '/blog', '/about', '/contact'];

const dynamicRoutes = [
  ...initialTours.map(t => `/safaris/${t.slug}`),
  ...initialHotels.map(h => `/hotels/${h.slug}`),
  ...initialDestinations.map(d => `/destinations/${d.slug}`),
  ...initialBlogPosts.map(p => `/blog/${p.slug}`),
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const today = new Date().toISOString().split('T')[0];

const body = allRoutes
  .map(
    path => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

const outPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`sitemap.xml written with ${allRoutes.length} URLs -> ${outPath}`);
