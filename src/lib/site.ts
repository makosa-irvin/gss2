export const SITE_NAME = 'Good Secrets Safaris';
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.goodsecretssafaris.com').replace(/\/$/, '');
export const SCHEMA_CONTEXT = 'https://schema.org';

export function absoluteSiteUrl(value: string): string;
export function absoluteSiteUrl(value?: string): string | undefined;
export function absoluteSiteUrl(value?: string): string | undefined {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
}
