/**
 * Generates public/sitemap.xml from the content exposed by the backend.
 */
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = (process.env.VITE_SITE_URL || 'https://www.goodsecretssafaris.com').replace(/\/$/, '');
const API_URL = (process.env.SITEMAP_API_URL || process.env.VITE_API_URL || '').replace(/\/$/, '');

// /shortlist is intentionally omitted because it is browser-personalized and noindex.
// /book-direct is a compatibility redirect and is therefore also omitted.
const staticRoutes = [
  '/',
  '/safaris',
  '/destinations',
  '/hotels',
  '/safari-builder',
  '/blog',
  '/reviews',
  '/plan-with-us',
  '/about',
  '/contact',
  '/guides',
  '/guides/kenya-safari-cost-guide',
  '/guides/kenya-safari-from-usa',
  '/guides/7-day-kenya-safari',
  '/guides/best-time-for-kenya-safari',
  '/guides/great-migration-safari-timing',
  '/guides/kenya-vs-tanzania-safari',
  '/guides/kenya-safari-zanzibar',
  '/guides/kenya-honeymoon-safari',
  '/guides/kenya-family-safari',
  '/guides/first-time-africa-safari-guide',
  '/guides/safari-over-60-comfort-guide',
  '/privacy',
  '/terms',
  '/booking-conditions',
];

type SlugRecord = { slug: string; updatedAt?: string; publishedDate?: string };
type SitemapEntry = { path: string; lastmod?: string };

async function fetchCollection(path: string): Promise<SlugRecord[]> {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) throw new Error(`Sitemap API request failed: ${response.status} ${path}`);
  const data = await response.json();
  if (!Array.isArray(data)) throw new Error(`Sitemap API returned non-array data for ${path}`);
  return data;
}

function isoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10);
}

async function dynamicEntries(): Promise<SitemapEntry[]> {
  if (!API_URL) {
    console.warn('SITEMAP_API_URL/VITE_API_URL is not set; generating static routes only.');
    return [];
  }
  const [tours, hotels, destinations, posts] = await Promise.all([
    fetchCollection('/api/tours'),
    fetchCollection('/api/hotels'),
    fetchCollection('/api/destinations'),
    fetchCollection('/api/blog'),
  ]);
  return [
    ...tours.map((item) => ({ path: `/safaris/${item.slug}`, lastmod: isoDate(item.updatedAt) })),
    ...hotels.map((item) => ({ path: `/hotels/${item.slug}`, lastmod: isoDate(item.updatedAt) })),
    ...destinations.map((item) => ({ path: `/destinations/${item.slug}`, lastmod: isoDate(item.updatedAt) })),
    ...posts.map((item) => ({ path: `/blog/${item.slug}`, lastmod: isoDate(item.updatedAt || item.publishedDate) })),
  ];
}

const today = new Date().toISOString().slice(0, 10);
const entries: SitemapEntry[] = [...staticRoutes.map((path) => ({ path, lastmod: today })), ...(await dynamicEntries())];
const body = entries.map(({ path, lastmod }) => `  <url>\n    <loc>${SITE_URL}${path}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
const outPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`sitemap.xml written with ${entries.length} URLs -> ${outPath}`);
