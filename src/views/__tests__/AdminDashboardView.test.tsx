import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/test-utils';
import { installMockApi } from '../../test/mockApi';
import { AdminDashboardView } from '../AdminDashboardView';
import { TourDetailView } from '../TourDetailView';
import type { Tour } from '../../types';

/**
 * Regression tests for the admin "Create New Safari Tour" form
 * (handleCreateTour in AdminDashboardView), which had the same class of
 * bug as the original crash fixes, just on the write path instead of the
 * read path: it built a tour object using field names that don't exist on
 * Tour (wildlifeHighlights/included/excluded instead of
 * includedActivities/includedServices/exclusions), was missing many
 * required fields, used an invalid TravelerType literal ('Small Groups'),
 * and gave seasonalPricing a `months` field instead of the required
 * startDate/endDate/currency.
 *
 * None of this was caught before because @types/react wasn't installed,
 * so every component (including this form) was silently type-checked as
 * `any`. A tour created through this form would look fine in the tours
 * list, then crash the instant an admin opened its detail page - which is
 * exactly what the second test below proves no longer happens.
 *
 * The admin CRUD flow now goes through the real backend API (see
 * src/context/DataContext.tsx and server/src/routes/adminTours.ts), so
 * these tests mock GET /api/auth/me as an already-logged-in admin and
 * POST /api/admin/tours as succeeding - the actual auth enforcement and
 * validation are covered by the backend's own test suite
 * (server/src/test/adminTours.test.ts) against a real database, not
 * re-tested here.
 */
const loggedInAdmin = { status: 200, body: { id: 'admin-1', email: 'admin@example.com', name: 'Admin' } };

describe('AdminDashboardView - Create New Tour form', () => {
  const noop = () => {};

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  async function openAddTourFormAndFillTitle(title: string) {
    installMockApi({ me: loggedInAdmin, allowAdminTourCreate: true });

    const user = userEvent.setup();
    renderWithProviders(<AdminDashboardView onNavigateHome={noop} onPreviewTour={noop} />);

    await user.click(await screen.findByRole('button', { name: /tours & safaris/i }));
    await user.click(screen.getByRole('button', { name: /add new safari tour/i }));
    await user.type(screen.getByPlaceholderText(/5-Day Masai Mara/i), title);
    await user.click(screen.getByRole('button', { name: /save safari/i }));

    return user;
  }

  it('creates a tour and adds it to the tours list without crashing the admin dashboard', async () => {
    await openAddTourFormAndFillTitle('Test 4-Day Amboseli Explorer');

    // The tours tab lists tours by title once created.
    expect(await screen.findByText('Test 4-Day Amboseli Explorer')).toBeInTheDocument();
  });

  it('produces a tour object that renders successfully in TourDetailView (the page that used to crash)', async () => {
    installMockApi({ me: loggedInAdmin, allowAdminTourCreate: true });

    let capturedTour: Tour | null = null;

    renderWithProviders(
      <AdminDashboardView
        onNavigateHome={noop}
        onPreviewTour={(tour) => {
          capturedTour = tour;
        }}
      />
    );

    const user = userEvent.setup();
    await user.click(await screen.findByRole('button', { name: /tours & safaris/i }));
    await user.click(screen.getByRole('button', { name: /add new safari tour/i }));
    await user.type(screen.getByPlaceholderText(/5-Day Masai Mara/i), 'Test Preview Tour');
    await user.click(screen.getByRole('button', { name: /save safari/i }));

    // Find the newly created tour's row by its title, then click the
    // "Preview tour page" button within that same row (addTour prepends,
    // so relying on array position here would be fragile).
    const titleHeading = await screen.findByText('Test Preview Tour');
    const row = titleHeading.closest('div.p-4.rounded-2xl');
    const previewButton = row?.querySelector('button[title="Preview tour page"]');
    expect(previewButton).toBeTruthy();
    await user.click(previewButton as HTMLElement);

    expect(capturedTour).not.toBeNull();

    // This is the actual regression check: render the tour this form
    // produced through TourDetailView, the page that used to throw
    // "Cannot read properties of undefined (reading 'map')".
    let threw = false;
    try {
      renderWithProviders(
        <TourDetailView tour={capturedTour as Tour} onBack={noop} onOpenEnquiryModal={noop} />
      );
    } catch {
      threw = true;
    }
    expect(threw).toBe(false);

    expect(
      screen.getByRole('heading', { name: 'Test Preview Tour', level: 1 })
    ).toBeInTheDocument();
  });
});
