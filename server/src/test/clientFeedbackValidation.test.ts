import { describe, expect, it } from 'vitest';
import { reviewSubmissionSchema, settingsUpdateSchema } from '../lib/validation.js';

describe('client feedback validation', () => {
  it('accepts the standard homepage and team CMS settings', () => {
    const result = settingsUpdateSchema.safeParse({
      homepage: {
        eyebrow: 'Private safaris',
        title: 'Your safari.',
        highlightedTitle: 'Our home.',
        subtitle: 'Designed around you.',
        heroImage: '/uploads/hero.webp',
        primaryCtaLabel: 'Build My Safari',
        secondaryCtaLabel: 'Explore Safaris',
      },
      about: {
        eyebrow: 'Meet the team',
        title: 'Local planners',
        intro: 'We plan trips from East Africa.',
        storyTitle: 'Our story',
        storyParagraphs: ['One paragraph'],
        teamPhoto: '/uploads/team.webp',
        teamMembers: [{
          id: 'team-1',
          name: 'Elsy',
          role: 'Safari Planner',
          bio: 'Plans thoughtful routes.',
          imageUrl: '/uploads/elsy.webp',
          active: true,
        }],
      },
    });
    expect(result.success).toBe(true);
  });

  it('does not allow a public review to set publication controls', () => {
    const parsed = reviewSubmissionSchema.parse({
      reviewerName: 'A Guest',
      reviewerCountry: 'Kenya',
      rating: 5,
      tourTaken: 'Masai Mara Safari',
      reviewText: 'A detailed and thoughtful review of a wonderful safari experience.',
      published: true,
      featured: true,
    });
    expect(parsed).not.toHaveProperty('published');
    expect(parsed).not.toHaveProperty('featured');
  });

  it('rejects short review spam', () => {
    expect(reviewSubmissionSchema.safeParse({
      reviewerName: 'A',
      reviewerCountry: '',
      rating: 6,
      tourTaken: '',
      reviewText: 'Too short',
    }).success).toBe(false);
  });
});
