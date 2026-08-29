import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../test/test-utils';
import { FloatingWhatsApp } from '../FloatingWhatsApp';

/**
 * The floating WhatsApp entry point is intentionally simple: it should
 * always remain available, expose an accessible purpose, and carry tour
 * context when rendered from a safari detail page. Test those user-visible
 * contracts rather than historical tooltip implementation details.
 */
describe('FloatingWhatsApp', () => {
  it('renders an accessible WhatsApp enquiry link', () => {
    renderWithProviders(<FloatingWhatsApp />);

    const link = screen.getByRole('link', { name: 'Ask Good Secrets Safaris on WhatsApp' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(link.getAttribute('href')).toMatch(/^https:\/\/wa\.me\//);
  });

  it('shows the concise visible CTA used on larger viewports', () => {
    renderWithProviders(<FloatingWhatsApp />);
    expect(screen.getByText('Ask on WhatsApp')).toBeInTheDocument();
  });

  it('includes the selected safari in its accessible label and message URL', () => {
    renderWithProviders(<FloatingWhatsApp currentTourTitle="Mara Explorer" />);

    const link = screen.getByRole('link', { name: 'Ask about Mara Explorer on WhatsApp' });
    expect(link).toBeInTheDocument();
    expect(decodeURIComponent(link.getAttribute('href') || '')).toContain('Mara Explorer');
  });
});
