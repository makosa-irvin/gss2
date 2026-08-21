import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen, act } from '@testing-library/react';
import { renderWithProviders } from '../../../test/test-utils';
import { FloatingWhatsApp } from '../FloatingWhatsApp';

/**
 * Regression tests for the mobile overlap bug fixed on fix/inital-audit:
 * the "Online Safari Specialist" tooltip used to auto-open the instant the
 * component mounted (`useState(true)`), which on a 390px viewport covered
 * the homepage search bar's "Travel Style" field and Find button. The fix
 * delays the auto-open by 3.5s on desktop and suppresses it entirely under
 * a 640px viewport width.
 */
describe('FloatingWhatsApp', () => {
  const setViewportWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    });
  };

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('does not show the tooltip immediately on mount (desktop)', () => {
    setViewportWidth(1440);
    renderWithProviders(<FloatingWhatsApp />);
    expect(screen.queryByText('Online Safari Specialist')).not.toBeInTheDocument();
  });

  it('shows the tooltip after the delay on desktop viewports', () => {
    setViewportWidth(1440);
    renderWithProviders(<FloatingWhatsApp />);

    // The setTimeout callback triggers a React state update, which needs to
    // happen inside act() so React flushes it before we assert.
    act(() => {
      vi.advanceTimersByTime(3500);
    });

    expect(screen.getByText('Online Safari Specialist')).toBeInTheDocument();
  });

  it('never shows the tooltip on mobile viewports, even after the delay', () => {
    setViewportWidth(390); // matches the iPhone-width viewport the bug was found on
    renderWithProviders(<FloatingWhatsApp />);

    act(() => {
      vi.advanceTimersByTime(3500);
    });

    expect(screen.queryByText('Online Safari Specialist')).not.toBeInTheDocument();
  });

  it('always renders the floating WhatsApp button itself, regardless of viewport', () => {
    setViewportWidth(390);
    renderWithProviders(<FloatingWhatsApp />);
    expect(screen.getByTitle('Chat on WhatsApp with Good Secrets Safaris')).toBeInTheDocument();
  });

  it('lets the user dismiss the tooltip once shown', () => {
    setViewportWidth(1440);
    renderWithProviders(<FloatingWhatsApp />);

    act(() => {
      vi.advanceTimersByTime(3500);
    });
    expect(screen.getByText('Online Safari Specialist')).toBeInTheDocument();

    // Fake timers make real async user-event interaction unreliable here,
    // so we exercise the dismiss button directly via fireEvent, which is
    // synchronous.
    const dismissButton = screen.getByText('Online Safari Specialist')
      .closest('div[class*="relative"]')
      ?.querySelector('button');
    expect(dismissButton).toBeTruthy();

    act(() => {
      dismissButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(screen.queryByText('Online Safari Specialist')).not.toBeInTheDocument();
  });
});
