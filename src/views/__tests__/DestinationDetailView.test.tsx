import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import { makeDestination } from '../../test/fixtures';
import { DestinationDetailView } from '../DestinationDetailView';

/**
 * Regression tests for the DestinationDetailView crash fixed on
 * fix/inital-audit. The page used to read destination.landscape,
 * destination.tagline and destination.highlights, none of which exist on
 * the Destination type. `destination.highlights.map()` threw on every
 * destination detail page load because highlights was always undefined;
 * the fix swaps in `subtitle` and `wildlife`, the closest real fields.
 */
describe('DestinationDetailView', () => {
  const noop = () => {};

  it('renders without crashing for a fully-populated destination', () => {
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
    expect(screen.getByRole('heading', { name: destination.name })).toBeInTheDocument();
  });

  it('renders subtitle text in place of the removed tagline field', () => {
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
    expect(screen.getByText('Land of Giants with Kilimanjaro Backdrops')).toBeInTheDocument();
  });

  it('renders wildlife entries under "Key Highlights & Wildlife Encounters"', () => {
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
    expect(screen.getByText('Key Highlights & Wildlife Encounters')).toBeInTheDocument();
    expect(screen.getByText('Grevy\u2019s Zebra')).toBeInTheDocument();
    expect(screen.getByText('Reticulated Giraffe')).toBeInTheDocument();
  });

  it('does not crash and hides the highlights section when wildlife is empty', () => {
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
    expect(screen.queryByText('Key Highlights & Wildlife Encounters')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: destination.name })).toBeInTheDocument();
  });
});
