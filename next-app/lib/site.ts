export const SITE_NAME = 'Good Secrets Safaris';
export const DEFAULT_SITE_URL = 'https://www.goodsecretssafaris.com';

export function siteUrl(path = '/') {
  const origin = (process.env.NEXT_PUBLIC_SITE_URL || process.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${normalized}`;
}

export function absoluteImage(src?: string) {
  if (!src) return siteUrl('/images/catalog/mara-savannah.jpg');
  if (/^https?:\/\//i.test(src)) return src;
  return siteUrl(src);
}

// JSON.stringify does not escape "<", so a title/description containing a
// literal "</script>" would otherwise close the tag early and let whatever
// follows in the string be parsed as HTML - a script-injection risk for any
// JSON-LD block rendered via dangerouslySetInnerHTML. All the data currently
// feeding these schemas (tours/hotels/destinations/blog/guides) is
// admin-authored, not public-submitted, but the fix costs nothing and
// removes the gap regardless of what feeds it in the future.
export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const companyContact = {
  email: 'info@goodsecretssafaris.com',
  phone: '+254 729 000 410',
  whatsapp: '+254729000410',
  address: 'Westlands Commercial Centre, Nairobi, Kenya',
};
