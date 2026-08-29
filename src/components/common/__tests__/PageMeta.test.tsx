import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { PageMeta } from '../PageMeta';

afterEach(() => {
  cleanup();
  document.head.querySelectorAll('title, meta[name="description"], meta[name="robots"], link[rel="canonical"], script[type="application/ld+json"]').forEach((node) => node.remove());
});

describe('PageMeta', () => {
  it('publishes a canonical URL, title and description for an indexable page', () => {
    render(
      <PageMeta
        title="Safari Ideas"
        description="Browse tailor-made East Africa safari ideas."
        canonicalPath="/safaris"
      />
    );

    expect(document.title).toBe('Safari Ideas | Good Secrets Safaris');
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      'Browse tailor-made East Africa safari ideas.'
    );
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://www.goodsecretssafaris.com/safaris'
    );
    expect(document.head.querySelector('meta[name="robots"]')).toBeNull();
  });

  it('marks private/personalized pages noindex when requested', () => {
    render(
      <PageMeta
        title="My Shortlist"
        description="Saved safari ideas."
        canonicalPath="/shortlist"
        noIndex
      />
    );

    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  });

  it('keeps JSON-LD data inside the script element even when content contains a closing script sequence', () => {
    render(
      <PageMeta
        title="Structured Data Safety"
        canonicalPath="/safe-metadata"
        structuredData={{ '@context': 'https://schema.org', name: '</script><script>alert(1)</script>' }}
      />
    );

    const script = document.head.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
    expect(script?.textContent).not.toContain('</script>');
    expect(script?.textContent).toContain('\\u003c/script>');

    const parsed = JSON.parse(script?.textContent || '{}');
    expect(parsed.name).toBe('</script><script>alert(1)</script>');
  });
});
