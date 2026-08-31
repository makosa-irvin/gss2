import { describe, expect, it } from 'vitest';
import { STATIC_SITEMAP_ROUTES } from '../sitemap-routes';

describe('STATIC_SITEMAP_ROUTES', () => {
  it('includes the full high-intent safari guide cluster', () => {
    expect(STATIC_SITEMAP_ROUTES).toEqual(expect.arrayContaining([
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
      '/guides/booking-safari-direct-local-operator',
    ]));
  });

  it('includes public legal routes but excludes personalized, admin, and redirect-only routes', () => {
    expect(STATIC_SITEMAP_ROUTES).toEqual(expect.arrayContaining([
      '/privacy',
      '/terms',
      '/booking-conditions',
    ]));
    expect(STATIC_SITEMAP_ROUTES).not.toContain('/shortlist');
    expect(STATIC_SITEMAP_ROUTES).not.toContain('/admin');
    expect(STATIC_SITEMAP_ROUTES).not.toContain('/book-direct');
  });

  it('does not contain duplicate URLs', () => {
    expect(new Set(STATIC_SITEMAP_ROUTES).size).toBe(STATIC_SITEMAP_ROUTES.length);
  });
});
