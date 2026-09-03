import { afterAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db } from '../db/client.js';
import { testimonials } from '../db/schema.js';

const app = createApp();
const createdIds: string[] = [];

describe('Customer review moderation', () => {
  afterAll(async () => {
    for (const id of createdIds) await db.delete(testimonials).where(eq(testimonials.id, id));
  });

  it('stores public submissions as pending and keeps them off the public feed', async () => {
    const response = await request(app).post('/api/reviews').send({
      reviewerName: 'Review Test Guest',
      reviewerCountry: 'Kenya',
      rating: 5,
      tourTaken: 'Test Safari',
      reviewText: 'A thoughtful, well organized safari with a wonderful local guide.',
    });

    expect(response.status).toBe(201);
    expect(response.body.status).toBe('pending');
    createdIds.push(response.body.id);

    const [stored] = await db.select().from(testimonials).where(eq(testimonials.id, response.body.id));
    expect(stored.published).toBe(false);
    expect(stored.featured).toBe(false);
    expect(stored.platform).toBe('Direct Feedback');

    const publicResponse = await request(app).get('/api/testimonials');
    expect(publicResponse.body.some((review: { id: string }) => review.id === response.body.id)).toBe(false);
  });
});
