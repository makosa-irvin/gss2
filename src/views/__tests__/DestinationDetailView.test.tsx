import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders, settleProviderEffects } from '../../test/test-utils';
import { makeDestination } from '../../test/fixtures';
import { DestinationDetailView } from '../DestinationDetailView';

/**
 * Regression tests for the destination detail contract. They use the real
 * Destination fields (`subtitle` and `wildlife`) and assert the current
 * user-visible presentation rather than historical copy that no longer
 * exists in the product.
 */
describe('DestinationDetailView', () => {
  const noop = () => {};

  it('renders without crashing for a fully-populated destination', async () => {
    const destination = makeDestination();
    renderWithProviders(
      <DestinationDetailView
        destination={destination}
        onBack={noop}
        onSelectTour={noop}
        onSelectHotel={noop}
        onOpenEnquiryModal={noop}
      />
    );
    await settleProviderEffects();
    expect(screen.getByRole('heading', { name: destination.name })).toBeInTheDocument();
  });

  it('renders the destination subtitle', async () => {
    const destination = makeDestination({ subtitle: 'Land of Giants with Kilimanjaro Backdrops' });
    renderWithProviders(
      <DestinationDetailView
        destination={destination}
        onBack={noop}
        onSelectTour={noop}
        onSelectHotel={noop}
        onOpenEnquiryModal={noop}
      />
    );
    await settleProviderEffects();
    expect(screen.getByText('Land of Giants with Kilimanjaro Backdrops')).toBeInTheDocument();
  });

  it('renders wildlife entries under the current highlights heading', async () => {
    const destination = makeDestination({ wildlife: ['Grevy\u2019s Zebra', 'Reticulated Giraffe'] });
    renderWithProviders(
      <DestinationDetailView
        destination={destination}
        onBack={noop}
        onSelectTour={noop}
        onSelectHotel={noop}
        onOpenEnquiryModal={noop}
      />
    );
    await settleProviderEffects();
    expect(screen.getByText('Wildlife & highlights')).toBeInTheDocument();
    expect(screen.getAllByText('Grevy\u2019s Zebra').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Reticulated Giraffe').length).toBeGreaterThan(0);
  });

  it('does not crash and hides wildlife highlights when the list is empty', async () => {
    const destination = makeDestination({ wildlife: [] });
    renderWithProviders(
      <DestinationDetailView
        destination={destination}
        onBack={noop}
        onSelectTour={noop}
        onSelectHotel={noop}
        onOpenEnquiryModal={noop}
      />
    );
    await settleProviderEffects();
    expect(screen.queryByText('Wildlife & highlights')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: destination.name })).toBeInTheDocument();
  });
});