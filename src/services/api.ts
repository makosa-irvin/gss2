/**
 * Thin fetch wrapper for the real backend (see /server). Centralizes the
 * two things every call needs to get right: sending the httpOnly admin
 * session cookie (`credentials: 'include'`), and turning a non-2xx
 * response into a real thrown Error with the server's own message
 * instead of a generic "fetch failed" or a silently-ignored failure.
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
  } catch {
    throw new ApiError(0, 'Could not reach the server. Check your connection and try again.');
  }

  if (res.status === 204) {
    return undefined as T;
  }

  let body: any = null;
  try {
    body = await res.json();
  } catch {
    // Non-JSON response (rare - a proxy error page, etc). Fall through
    // to the generic message below rather than throwing here.
  }

  if (!res.ok) {
    throw new ApiError(res.status, body?.error || `Request failed with status ${res.status}.`);
  }

  return body as T;
}

export const api = {
  get: <T>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: 'POST', body: data !== undefined ? JSON.stringify(data) : undefined }),
  put: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: 'PUT', body: data !== undefined ? JSON.stringify(data) : undefined }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};
