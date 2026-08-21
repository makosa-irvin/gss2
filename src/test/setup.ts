import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Ensure each test starts from a clean DOM and clean localStorage, since
// DataProvider persists tours/hotels/destinations/etc. to localStorage and
// falls back to the seed data in src/data/initialData.ts when nothing is
// stored. Without this, state from one test (e.g. a resident-mode toggle)
// could leak into the next.
afterEach(() => {
  cleanup();
  window.localStorage.clear();
});
