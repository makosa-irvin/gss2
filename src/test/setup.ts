import '@testing-library/jest-dom/vitest';
import { afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { installMockApi } from './mockApi';

// Component tests should never reach a developer machine, staging service or
// the public internet. Install a deterministic public-visitor API boundary by
// default; tests that need an authenticated admin or a special response can
// call installMockApi(...) themselves and replace this stub for that test.
beforeEach(() => {
  installMockApi();
});

// Ensure each test starts from a clean DOM, browser storage and network stub.
// DataProvider persists user preferences in localStorage, so leaving either
// storage or a custom fetch mock behind can make later tests order-dependent.
afterEach(() => {
  cleanup();
  window.localStorage.clear();
  vi.unstubAllGlobals();
});
