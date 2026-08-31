import { describe, expect, it } from 'vitest';
import { makeDestination, makeTour } from '../../test/fixtures';
import { getDestinationGuideRecommendations, getTourGuideRecommendations } from '../guideRecommendations';

describe('guideRecommendations', () => {
  it('prioritizes migration guidance for Great Migration safaris', () => {
    const tour = makeTour({
      country: 'Kenya + Tanzania',
      travelStyles: ['Great Migration', 'Luxury'],
      travelerTypes: ['Couples'],
    });

    const recommendations = getTourGuideRecommendations(tour);

    expect(recommendations[0].slug).toBe('great-migration-safari-timing');
    expect(recommendations.map(item => item.slug)).toContain('kenya-vs-tanzania-safari');
    expect(recommendations).toHaveLength(3);
  });

  it('surfaces family guidance when the catalog marks a safari for families', () => {
    const tour = makeTour({
      travelStyles: ['Family'],
      travelerTypes: ['Families'],
    });

    const recommendations = getTourGuideRecommendations(tour);

    expect(recommendations[0].slug).toBe('kenya-family-safari');
    expect(new Set(recommendations.map(item => item.slug)).size).toBe(recommendations.length);
  });

  it('uses destination country and name to recommend relevant research', () => {
    const serengeti = makeDestination({
      name: 'Serengeti National Park',
      slug: 'serengeti-national-park',
      country: 'Tanzania',
    });

    const recommendations = getDestinationGuideRecommendations(serengeti);

    expect(recommendations.map(item => item.slug)).toEqual([
      'great-migration-safari-timing',
      'kenya-vs-tanzania-safari',
      'kenya-safari-cost-guide',
    ]);
  });

  it('connects Zanzibar destinations to safari-and-beach planning', () => {
    const zanzibar = makeDestination({
      name: 'Zanzibar',
      slug: 'zanzibar',
      country: 'Zanzibar',
    });

    expect(getDestinationGuideRecommendations(zanzibar)[0].slug).toBe('kenya-safari-zanzibar');
  });
});
