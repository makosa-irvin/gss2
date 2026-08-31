import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { DirectBookingArticleView } from '../DirectBookingArticleView';

describe('DirectBookingArticleView', () => {
  it('renders balanced direct-booking guidance and buyer checks', () => {
    render(
      <MemoryRouter>
        <DirectBookingArticleView onOpenEnquiryModal={vi.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Booking a Safari Directly with a Local Operator: What to Know', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /use marketplaces to research/i })).toBeInTheDocument();
    expect(screen.getByText(/not a claim that direct is always cheaper or better/i)).toBeInTheDocument();
    expect(screen.getByText('Read independent reviews on third-party platforms.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /read independent traveler reviews/i })).toHaveAttribute('href', '/reviews');
    expect(screen.getByRole('link', { name: /see how we plan private safaris/i })).toHaveAttribute('href', '/plan-with-us');
  });

  it('publishes one canonical editorial URL with Article and breadcrumb schema', () => {
    render(
      <MemoryRouter>
        <DirectBookingArticleView onOpenEnquiryModal={vi.fn()} />
      </MemoryRouter>
    );

    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toContain('/guides/booking-safari-direct-local-operator');

    const structuredData = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
      .map(node => node.textContent ?? '')
      .find(value => value.includes('Booking a Safari Directly with a Local Operator'));

    expect(structuredData).toContain('"@type":"Article"');
    expect(structuredData).toContain('"@type":"BreadcrumbList"');
    expect(structuredData).toContain('"mainEntityOfPage"');
  });
});
