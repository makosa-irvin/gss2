import { vi } from 'vitest';
import { makeTour, makeHotel, makeDestination, makeTestimonial, makeBlogPost } from './fixtures';
import { initialCompanySettings } from '../data/initialData';

/**
 * DataContext now fetches its catalog data over the network (see
 * src/context/DataContext.tsx) instead of reading localStorage
 * synchronously, so component tests that render <DataProvider> need a
 * fetch mock or every test would hang waiting on a real backend that
 * isn't running. This provides sane default responses for every GET
 * endpoint DataContext calls on mount, and lets individual tests
 * override specific routes (e.g. to inject a decimal testimonial
 * rating, or to simulate an admin session).
 */

export interface MockApiOverrides {
  tours?: unknown;
  hotels?: unknown;
  destinations?: unknown;
  blog?: unknown;
  testimonials?: unknown;
  settings?: unknown;
  /** Response for GET /api/auth/me - defaults to a 401 (no session), matching a logged-out visitor. */
  me?: { status: number; body: unknown };
  enquiries?: unknown;
  /**
   * If true, POST /api/admin/tours succeeds and echoes back a full Tour
   * object built from the request body plus fixture defaults for
   * whatever fields weren't sent - close enough to the real backend's
   * behavior (server/src/routes/adminTours.ts) for tests that exercise
   * the admin "Create New Tour" form without needing a real database.
   */
  allowAdminTourCreate?: boolean;
}

export function installMockApi(overrides: MockApiOverrides = {}) {
  const routes: Record<string, { status: number; body: unknown }> = {
    'GET /api/tours': { status: 200, body: overrides.tours ?? [makeTour()] },
    'GET /api/hotels': { status: 200, body: overrides.hotels ?? [makeHotel()] },
    'GET /api/destinations': { status: 200, body: overrides.destinations ?? [makeDestination()] },
    'GET /api/blog': { status: 200, body: overrides.blog ?? [makeBlogPost()] },
    'GET /api/testimonials': { status: 200, body: overrides.testimonials ?? [makeTestimonial()] },
    'GET /api/settings': { status: 200, body: overrides.settings ?? initialCompanySettings },
    'GET /api/auth/me': overrides.me ?? { status: 401, body: { error: 'Not authenticated.' } },
    // AdminDashboardView fetches this once a session exists (see
    // DataContext's admin-only enquiries effect); default to an empty
    // list so admin-focused tests that aren't specifically about
    // enquiries don't need to think about this endpoint at all.
    'GET /api/enquiries': { status: 200, body: overrides.enquiries ?? [] },
  };

  const fetchMock = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();
    const path = url.replace(/^https?:\/\/[^/]+/, '');
    const method = (init?.method || 'GET').toUpperCase();
    const key = `${method} ${path}`;

    if (key === 'POST /api/admin/tours' && overrides.allowAdminTourCreate) {
      const body = init?.body ? JSON.parse(init.body as string) : {};
      return {
        ok: true,
        status: 201,
        json: async () => makeTour(body),
      } as Response;
    }

    const route = routes[key];
    const response = route ?? { status: 404, body: { error: `No mock route for ${key}` } };

    return {
      ok: response.status >= 200 && response.status < 300,
      status: response.status,
      json: async () => response.body,
    } as Response;
  });

  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}
