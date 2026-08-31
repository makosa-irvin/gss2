import { describe, expect, it } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SafariGuidesView } from '../SafariGuidesView';

function renderGuides(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/guides" element={<SafariGuidesView />} />
        <Route path="/guides/:slug" element={<SafariGuidesView />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('SafariGuidesView', () => {
  it('surfaces the high-intent safari planning topic cluster', () => {
    renderGuides('/guides');

    expect(screen.getByRole('heading', { name: 'How Much Does a Kenya Safari Cost?' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Planning a Kenya Safari from the USA' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'How to Plan a 7-Day Kenya Safari' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Great Migration Safari Timing: Kenya or Tanzania?' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Kenya vs Tanzania Safari: Which Is Right for You?' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Kenya Safari and Zanzibar: How to Combine Both' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'How to Plan a Kenya Honeymoon Safari' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'How to Plan a Kenya Family Safari' })).toBeInTheDocument();
  });

  it('connects a high-intent guide to relevant safari and planning routes', () => {
    renderGuides('/guides/kenya-safari-from-usa');

    expect(screen.getByRole('heading', { name: 'Planning a Kenya Safari from the USA', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Protect the first safari day' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /see kenya safari ideas/i })).toHaveAttribute('href', '/safaris?country=Kenya');
    expect(screen.getByRole('link', { name: /how safari planning works/i })).toHaveAttribute('href', '/plan-with-us');
    expect(screen.getByRole('link', { name: /build my safari/i })).toHaveAttribute('href', '/safari-builder');
  });

  it('publishes article metadata, breadcrumbs and a canonical URL for guide detail pages', () => {
    renderGuides('/guides/kenya-safari-cost-guide');

    expect(document.title).toContain('How Much Does a Kenya Safari Cost?');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toContain('/guides/kenya-safari-cost-guide');

    const structuredData = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
      .map((node) => node.textContent ?? '')
      .find((value) => value.includes('How Much Does a Kenya Safari Cost?'));

    expect(structuredData).toContain('"@type":"Article"');
    expect(structuredData).toContain('"mainEntityOfPage"');
    expect(structuredData).toContain('"@type":"BreadcrumbList"');
    expect(structuredData).toContain('"name":"Safari Planning Guides"');
    expect(structuredData).toContain('/guides/kenya-safari-cost-guide');
  });
});
