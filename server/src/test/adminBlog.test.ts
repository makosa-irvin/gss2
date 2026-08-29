import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { eq, inArray } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db, pool } from '../db/client.js';
import { adminUsers, blogPosts } from '../db/schema.js';
import { hashPassword } from '../lib/auth.js';

const app = createApp();
const TEST_ADMIN_EMAIL = 'ci-blog-admin@example.com';
const TEST_ADMIN_PASSWORD = 'Test-only-password-42!';
const TEST_SLUGS = [
  'ci-regression-blog-draft',
  'ci-regression-blog-duplicate',
  'ci-regression-blog-publish',
  'ci-regression-blog-source',
  'ci-regression-blog-target',
  'ci-regression-blog-delete',
];

const basePayload = {
  title: 'CI Regression Safari Journal',
  slug: TEST_SLUGS[0],
  excerpt: 'Synthetic article used only by automated integration tests.',
  content: 'This synthetic article verifies the authenticated blog content lifecycle.',
  featuredImage: '',
  author: {
    name: 'CI Blog Administrator',
    role: 'Test author',
    avatar: '',
  },
  publishedDate: '2026-08-29T12:00:00.000Z',
  category: 'Safari planning',
  readingTime: '3 min read',
  relatedDestinations: [],
  relatedTours: [],
  tags: ['automated-test'],
  published: false,
};

describe('Authenticated blog content lifecycle', () => {
  const createdIds: string[] = [];
  let sessionCookie: string;

  beforeAll(async () => {
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await db.delete(blogPosts).where(inArray(blogPosts.slug, TEST_SLUGS));

    await db.insert(adminUsers).values({
      email: TEST_ADMIN_EMAIL,
      passwordHash: await hashPassword(TEST_ADMIN_PASSWORD),
      name: 'CI Blog Administrator',
    });

    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: TEST_ADMIN_EMAIL, password: TEST_ADMIN_PASSWORD });

    expect(loginRes.status).toBe(200);
    sessionCookie = loginRes.headers['set-cookie'];
  });

  afterAll(async () => {
    if (createdIds.length) {
      await db.delete(blogPosts).where(inArray(blogPosts.id, createdIds));
    }
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await pool.end();
  });

  it('rejects unauthenticated and malformed blog writes', async () => {
    const unauthenticatedRes = await request(app).post('/api/admin/blog').send(basePayload);
    expect(unauthenticatedRes.status).toBe(401);

    const malformedRes = await request(app)
      .post('/api/admin/blog')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: 'Invalid Slug', title: '' });
    expect(malformedRes.status).toBe(400);
  });

  it('keeps a draft private while exposing it to the authenticated admin list', async () => {
    const createRes = await request(app)
      .post('/api/admin/blog')
      .set('Cookie', sessionCookie)
      .send(basePayload);

    expect(createRes.status).toBe(201);
    expect(createRes.body.published).toBe(false);
    createdIds.push(createRes.body.id);

    const publicListRes = await request(app).get('/api/blog');
    expect(publicListRes.status).toBe(200);
    expect(publicListRes.body.some((post: { id: string }) => post.id === createRes.body.id)).toBe(false);

    const publicDetailRes = await request(app).get(`/api/blog/${basePayload.slug}`);
    expect(publicDetailRes.status).toBe(404);

    const adminListRes = await request(app)
      .get('/api/admin/blog')
      .set('Cookie', sessionCookie);
    expect(adminListRes.status).toBe(200);
    expect(adminListRes.body.some((post: { id: string }) => post.id === createRes.body.id)).toBe(true);
  });

  it('rejects duplicate slugs on create', async () => {
    const firstRes = await request(app)
      .post('/api/admin/blog')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: TEST_SLUGS[1], title: 'CI Duplicate Source' });
    expect(firstRes.status).toBe(201);
    createdIds.push(firstRes.body.id);

    const duplicateRes = await request(app)
      .post('/api/admin/blog')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: TEST_SLUGS[1], title: 'CI Duplicate Attempt' });
    expect(duplicateRes.status).toBe(409);
  });

  it('publishes and updates a draft through the authenticated route', async () => {
    const createRes = await request(app)
      .post('/api/admin/blog')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: TEST_SLUGS[2], title: 'CI Publish Article' });
    expect(createRes.status).toBe(201);
    createdIds.push(createRes.body.id);

    const updateRes = await request(app)
      .put(`/api/admin/blog/${createRes.body.id}`)
      .set('Cookie', sessionCookie)
      .send({ published: true, title: 'CI Published Article' });

    expect(updateRes.status).toBe(200);
    expect(updateRes.body.published).toBe(true);
    expect(updateRes.body.title).toBe('CI Published Article');

    const publicDetailRes = await request(app).get(`/api/blog/${TEST_SLUGS[2]}`);
    expect(publicDetailRes.status).toBe(200);
    expect(publicDetailRes.body.id).toBe(createRes.body.id);
    expect(publicDetailRes.body.title).toBe('CI Published Article');
  });

  it('rejects an update that would collide with another blog slug', async () => {
    const sourceRes = await request(app)
      .post('/api/admin/blog')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: TEST_SLUGS[3], title: 'CI Source Article' });
    expect(sourceRes.status).toBe(201);
    createdIds.push(sourceRes.body.id);

    const targetRes = await request(app)
      .post('/api/admin/blog')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: TEST_SLUGS[4], title: 'CI Target Article' });
    expect(targetRes.status).toBe(201);
    createdIds.push(targetRes.body.id);

    const collisionRes = await request(app)
      .put(`/api/admin/blog/${targetRes.body.id}`)
      .set('Cookie', sessionCookie)
      .send({ slug: TEST_SLUGS[3] });

    expect(collisionRes.status).toBe(409);
  });

  it('returns 404 for missing updates and deletes', async () => {
    const updateRes = await request(app)
      .put('/api/admin/blog/id_missing_blog_post')
      .set('Cookie', sessionCookie)
      .send({ published: true });
    expect(updateRes.status).toBe(404);

    const deleteRes = await request(app)
      .delete('/api/admin/blog/id_missing_blog_post')
      .set('Cookie', sessionCookie);
    expect(deleteRes.status).toBe(404);
  });

  it('deletes an existing article from both admin persistence and public reads', async () => {
    const createRes = await request(app)
      .post('/api/admin/blog')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: TEST_SLUGS[5], title: 'CI Delete Article', published: true });
    expect(createRes.status).toBe(201);

    const deleteRes = await request(app)
      .delete(`/api/admin/blog/${createRes.body.id}`)
      .set('Cookie', sessionCookie);
    expect(deleteRes.status).toBe(204);

    const deletedRows = await db.select().from(blogPosts).where(eq(blogPosts.id, createRes.body.id));
    expect(deletedRows).toHaveLength(0);

    const publicDetailRes = await request(app).get(`/api/blog/${TEST_SLUGS[5]}`);
    expect(publicDetailRes.status).toBe(404);
  });
});
