import { vi } from 'vitest';
import { makeTour, makeHotel, makeDestination, makeTestimonial, makeBlogPost } from './fixtures';
import { initialCompanySettings } from '../data/initialData';

/**
 * DataContext fetches catalog data over the network, so component tests
 * mock the HTTP boundary while leaving the real provider/model mapping in
 * place. Public and authenticated admin catalog routes are both covered so
 * a test that restores an admin session does not accidentally fall through
 * to unrelated 404 behavior.
 */
export interface MockApiOverrides {
  tours?: unknown;
  hotels?: unknown;
  destinations?: unknown;
  blog?: unknown;
  testimonials?: unknown;
  settings?: unknown;
  /** Response for GET /api/auth/me - defaults to a 401 (logged-out visitor). */
  me?: { status: number; body: unknown };
  enquiries?: unknown;
  /**
   * If true, POST /api/admin/tours succeeds and echoes back a full Tour
   * object built from the request plus fixture defaults.
   */
  allowAdminTourCreate?: boolean;
}

export function installMockApi(overrides: MockApiOverrides = {}) {
  const tours = overrides.tours ?? [makeTour()];
  const hotels = overrides.hotels ?? [makeHotel()];
  const destinations = overrides.destinations ?? [makeDestination()];
  const blog = overrides.blog ?? [makeBlogPost()];
  const testimonials = overrides.testimonials ?? [makeTestimonial()];
  let createdTourSequence = 0;

  const routes: Record<string, { status: number; body: unknown }> = {
    'GET /api/tours': { status: 200, body: tours },
    'GET /api/hotels': { status: 200, body: hotels },
    'GET /api/destinations': { status: 200, body: destinations },
    'GET /api/blog': { status: 200, body: blog },
    'GET /api/testimonials': { status: 200, body: testimonials },
    'GET /api/settings': { status: 200, body: overrides.settings ?? initialCompanySettings },
    'GET /api/auth/me': overrides.me ?? { status: 401, body: { error: 'Not authenticated.' } },
    'GET /api/enquiries': { status: 200, body: overrides.enquiries ?? [] },
    'GET /api/admin/tours': { status: 200, body: tours },
    'GET /api/admin/hotels': { status: 200, body: hotels },
    'GET /api/admin/destinations': { status: 200, body: destinations },
    'GET /api/admin/blog': { status: 200, body: blog },
    'GET /api/admin/testimonials': { status: 200, body: testimonials },
  };

  const fetchMock = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();
    const path = url.replace(/^https?:\/\/[^/]+/, '');
    const method = (init?.method || 'GET').toUpperCase();
    const key = `${method} ${path}`;

    if (key === 'POST /api/admin/tours' && overrides.allowAdminTourCreate) {
      const body = init?.body ? JSON.parse(init.body as string) : {};
      createdTourSequence += 1;
      return {
        ok: true,
        status: 201,
        json: async () => makeTour({ ...body, id: body.id || `created-tour-${createdTourSequence}` }),
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
