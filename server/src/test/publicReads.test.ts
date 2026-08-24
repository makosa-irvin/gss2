import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../app.js';

const app = createApp();

describe('Public read endpoints', () => {
  it('GET /api/health returns ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('GET /api/tours returns a non-empty array of tours from the real database', async () => {
    const res = await request(app).get('/api/tours');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('slug');
    expect(res.body[0]).toHaveProperty('title');
  });

  it('GET /api/tours/:slug returns 404 for an unknown slug, not a crash', async () => {
    const res = await request(app).get('/api/tours/this-does-not-exist-at-all');
    expect(res.status).toBe(404);
    expect(res.body.error).toBeDefined();
  });

  it('GET /api/tours/:slug returns the matching tour for a real slug', async () => {
    const list = await request(app).get('/api/tours');
    const knownSlug = list.body[0].slug;

    const res = await request(app).get(`/api/tours/${knownSlug}`);
    expect(res.status).toBe(200);
    expect(res.body.slug).toBe(knownSlug);
  });

  it('GET /api/hotels returns a non-empty array', async () => {
    const res = await request(app).get('/api/hotels');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/destinations returns a non-empty array', async () => {
    const res = await request(app).get('/api/destinations');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/blog returns an array', async () => {
    const res = await request(app).get('/api/blog');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/testimonials returns an array', async () => {
    const res = await request(app).get('/api/testimonials');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/settings returns the singleton company settings row', async () => {
    const res = await request(app).get('/api/settings');
    expect(res.status).toBe(200);
    expect(res.body.companyName).toBeDefined();
    expect(res.body.contact).toBeDefined();
  });
});
