import { writeFileSync, mkdirSync } from 'node:fs';

const origin = (process.env.LEGACY_SITE_URL || 'https://goodsecretssafaris.com').replace(/\/$/, '');
const outDir = new URL('../../docs/migration/', import.meta.url);
mkdirSync(outDir, { recursive: true });

async function getJson(url: string) {
  const response = await fetch(url, { headers: { 'User-Agent': 'GoodSecretsSafaris-Migration/1.0' } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

async function fetchAll(resource: string) {
  const firstUrl = `${origin}/wp-json/wp/v2/${resource}?per_page=100&page=1&_embed=1`;
  const first = await fetch(firstUrl, { headers: { 'User-Agent': 'GoodSecretsSafaris-Migration/1.0' } });
  if (!first.ok) throw new Error(`${first.status} ${first.statusText}: ${firstUrl}`);
  const pages = Number(first.headers.get('x-wp-totalpages') || '1');
  const rows = await first.json();
  for (let page = 2; page <= pages; page += 1) {
    rows.push(...await getJson(`${origin}/wp-json/wp/v2/${resource}?per_page=100&page=${page}&_embed=1`));
  }
  return rows;
}

function stripHtml(value = '') {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, '’')
    .replace(/\s+/g, ' ')
    .trim();
}

const posts = await fetchAll('posts');
const pages = await fetchAll('pages');

const inventory = [...pages, ...posts].map((item: any) => ({
  type: item.type,
  legacyId: item.id,
  slug: item.slug,
  url: item.link,
  title: stripHtml(item.title?.rendered),
  excerpt: stripHtml(item.excerpt?.rendered),
  publishedDate: item.date,
  modifiedDate: item.modified,
  status: item.status,
  featuredMediaUrl: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
}));

writeFileSync(new URL('legacy-content-inventory.json', outDir), JSON.stringify(inventory, null, 2));
writeFileSync(new URL('wordpress-posts.raw.json', outDir), JSON.stringify(posts, null, 2));
writeFileSync(new URL('wordpress-pages.raw.json', outDir), JSON.stringify(pages, null, 2));
console.log(`Saved ${inventory.length} legacy WordPress records from ${origin}.`);
