import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { DataProvider } from '../context/DataContext';

/**
 * Renders a component wrapped in the real DataProvider.
 *
 * We use the real provider rather than mocking `useData()` because the
 * views under test (TourDetailView, HotelDetailView, DestinationDetailView)
 * call real context helpers like `formatPrice` and `getWhatsAppUrl`, and
 * because DataProvider itself is cheap to construct (it just seeds state
 * from src/data/initialData.ts / localStorage, both available in jsdom).
 * This keeps tests closer to what actually renders in the app.
 */
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: DataProvider, ...options });
}

export * from '@testing-library/react';
