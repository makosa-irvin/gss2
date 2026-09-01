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

export const companyContact = {
  email: 'info@goodsecretssafaris.com',
  phone: '+254 729 000 410',
  whatsapp: '+254729000410',
  address: 'Westlands Commercial Centre, Nairobi, Kenya',
};
