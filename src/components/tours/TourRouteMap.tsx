import React from 'react';
import { Tour } from '../../types';

const routeImages: Record<string, string> = {
  '14-day-ultimate-kenya-tanzania-safari': '/images/routes/14-day-ultimate-kenya-tanzania.webp',
  '3-day-amboseli-safari-kilimanjaro-views': '/images/routes/3-day-amboseli-safari.webp',
  '3-day-masai-mara-luxury-big-5-migration-safari': '/images/routes/3-day-maasai-mara-safari.webp',
  '1-day-nairobi-wildlife-cultural-discovery': '/images/routes/1-day-nairobi-safari.webp',
  '3-day-samburu-untamed-beauty-rare-wildlife': '/images/routes/3-day-samburu-safari.webp'
};

export const TourRouteMap: React.FC<{ tour: Tour }> = ({ tour }) => {
  const routeImage = routeImages[tour.slug];

  if (routeImage) {
    return (
      <figure className="overflow-hidden rounded-2xl border border-[#d6d1c5] bg-[#fffdf8] shadow-sm" aria-labelledby={`route-map-caption-${tour.id}`}>
        <img
          src={routeImage}
          alt={`Route map for ${tour.title}`}
          loading="lazy"
          className="block h-auto w-full object-contain"
        />
        <figcaption id={`route-map-caption-${tour.id}`} className="border-t border-[#d6d1c5] bg-[#fffdf8] px-4 py-3 text-xs text-[#536158]">
          Static itinerary route overview for {tour.title}.
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-[#b9b1a2] bg-[#f7f3ea] px-5 py-6 text-sm text-[#536158]">
      A dedicated route map has not been added for this safari yet.
    </div>
  );
};
