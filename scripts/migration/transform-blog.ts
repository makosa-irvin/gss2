import { readFileSync, writeFileSync } from 'node:fs';
import TurndownService from 'turndown';

const source = new URL('../../docs/migration/wordpress-posts.raw.json', import.meta.url);
const target = new URL('../../docs/migration/blog-import.review.json', import.meta.url);
const posts = JSON.parse(readFileSync(source, 'utf8'));

// The site's own blog content (src/data/... seed posts) is Markdown -
// BlogView renders it with react-markdown, not as raw HTML or plain
// text. WordPress's REST API returns post bodies as rendered HTML
// (post.content.rendered), so it has to be converted to match, not left
// as-is or stripped to plain text (either would have shipped content
// that looks broken: raw HTML displays literal tags as visible text
// under react-markdown, and stripping to plain text would throw away
// every heading/list/bold in the original article).
const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });

function text(value = '') {
  return value.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

function toMarkdown(html = '') {
  return turndown.turndown(html).trim();
}

function readingTime(html = '') {
  const words = text(html).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

const rows = posts.map((post: any) => ({
  legacyId: post.id,
  legacyUrl: post.link,
  title: text(post.title?.rendered),
  slug: post.slug,
  excerpt: text(post.excerpt?.rendered),
  content: toMarkdown(post.content?.rendered),
  featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
  author: { name: 'Good Secrets Safaris', role: 'Travel Specialist', avatar: '' },
  publishedDate: post.date,
  category: 'Safari Travel',
  readingTime: readingTime(post.content?.rendered),
  relatedDestinations: [],
  relatedTours: [],
  tags: [],
  published: false,
  reviewRequired: true,
}));

writeFileSync(target, JSON.stringify(rows, null, 2));
console.log(`Prepared ${rows.length} blog drafts for editorial review.`);
