import React, { type ReactElement } from 'react';
import { act, render, type RenderOptions } from '@testing-library/react';
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

/**
 * DataProvider starts asynchronous catalog/auth reads in effects. Tests that
 * render the real provider should await this helper before asserting or
 * unmounting so those state updates are observed inside React's act boundary
 * rather than leaking warning noise into CI.
 */
export async function settleProviderEffects() {
  await act(async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
  });
}

export * from '@testing-library/react';
