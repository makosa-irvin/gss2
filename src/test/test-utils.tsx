import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { DataProvider } from '../context/DataContext';
import { ShortlistProvider } from '../context/ShortlistContext';

/**
 * Render with the same cross-cutting providers used by production views.
 *
 * Tests intentionally keep the real providers and mock only the network
 * boundary (see mockApi.ts). That means a new context dependency fails in
 * one shared wrapper rather than leaving individual view tests with stale,
 * hand-built provider trees.
 */
const AppTestProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <DataProvider>
    <ShortlistProvider>{children}</ShortlistProvider>
  </DataProvider>
);

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AppTestProviders, ...options });
}

export * from '@testing-library/react';
