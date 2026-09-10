import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { apiOrigin } from '../../../../lib/api';

async function proxy(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  const target = new URL(`/${path.join('/')}`, apiOrigin);
  request.nextUrl.searchParams.forEach((value, key) => target.searchParams.append(key, value));

  const headers = new Headers();
  for (const name of ['accept', 'content-type', 'cookie', 'user-agent', 'origin']) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  const init: RequestInit = { method: request.method, headers, redirect: 'manual' };
  if (!['GET', 'HEAD'].includes(request.method)) init.body = await request.arrayBuffer();

  let response: Response;
  try { response = await fetch(target, init); }
  catch { return Response.json({ error: 'Could not reach the safari backend.' }, { status: 502 }); }

  const outgoing = new Headers();
  response.headers.forEach((value, key) => {
    if (!['content-encoding', 'content-length', 'transfer-encoding', 'connection'].includes(key.toLowerCase())) outgoing.append(key, value);
  });
  if (response.ok && !['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    const backendPath = `/${path.join('/')}`;
    if (backendPath === '/api/settings' || backendPath.startsWith('/api/admin/')) {
      revalidatePath('/', 'layout');
    }
  }
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: outgoing });
}

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const PATCH = proxy;
export const DELETE = proxy;
export const OPTIONS = proxy;
