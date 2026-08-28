import React from 'react';
import { Tour } from '../../types';

type GeoPoint = { label: string; lat: number; lng: number };

// Geographic reference points used by the published itineraries. Coordinates are
// representative park/city centres; the connecting line communicates itinerary
// order rather than turn-by-turn road navigation.
const places: Record<string, GeoPoint> = {
  nairobi: { label: 'Nairobi', lat: -1.2864, lng: 36.8172 },
  samburu: { label: 'Samburu', lat: 0.6155, lng: 37.5391 },
  nakuru: { label: 'Lake Nakuru', lat: -0.36, lng: 36.08 },
  naivasha: { label: 'Lake Naivasha', lat: -0.77, lng: 36.36 },
  mara: { label: 'Maasai Mara', lat: -1.49, lng: 35.14 },
  isebania: { label: 'Isebania / Lake Victoria', lat: -1.759, lng: 34.475 },
  serengeti: { label: 'Serengeti', lat: -2.33, lng: 34.83 },
  ngorongoro: { label: 'Ngorongoro', lat: -2.98, lng: 35.45 },
  amboseli: { label: 'Amboseli', lat: -2.65, lng: 37.26 },
  nairobiPark: { label: 'Nairobi National Park', lat: -1.36, lng: 36.84 },
  giraffeCentre: { label: 'Giraffe Centre', lat: -1.376, lng: 36.745 }
};

const routes: Record<string, GeoPoint[]> = {
  '14-day-ultimate-kenya-tanzania-safari': [places.nairobi, places.samburu, places.nakuru, places.mara, places.isebania, places.serengeti, places.ngorongoro, places.amboseli, places.nairobi],
  '3-day-amboseli-safari-kilimanjaro-views': [places.nairobi, places.amboseli, places.nairobi],
  '3-day-masai-mara-luxury-big-5-migration-safari': [places.nairobi, places.mara, places.nairobi],
  '1-day-nairobi-wildlife-cultural-discovery': [places.nairobi, places.nairobiPark, places.giraffeCentre, places.nairobi],
  '1-day-lake-nakuru-lake-naivasha-adventure': [places.nairobi, places.nakuru, places.naivasha, places.nairobi],
  '2-day-masai-mara-lion-encounters': [places.nairobi, places.mara, places.nairobi],
  '3-day-samburu-untamed-beauty-rare-wildlife': [places.nairobi, places.samburu, places.nairobi]
};

const fallbackPoint = (label: string, index: number): GeoPoint => ({ label, lat: -1.3 - index * 0.15, lng: 36.8 - index * 0.15 });

export const TourRouteMap: React.FC<{ tour: Tour }> = ({ tour }) => {
  const route = routes[tour.slug] || [places.nairobi, ...(tour.destinations || []).map(fallbackPoint)];
  const minLng = Math.min(...route.map(p => p.lng));
  const maxLng = Math.max(...route.map(p => p.lng));
  const minLat = Math.min(...route.map(p => p.lat));
  const maxLat = Math.max(...route.map(p => p.lat));
  const lngPad = Math.max(0.35, (maxLng - minLng) * 0.22);
  const latPad = Math.max(0.3, (maxLat - minLat) * 0.22);
  const west = minLng - lngPad;
  const east = maxLng + lngPad;
  const south = minLat - latPad;
  const north = maxLat + latPad;
  const project = (p: GeoPoint) => ({ x: 7 + ((p.lng - west) / (east - west)) * 86, y: 8 + ((north - p.lat) / (north - south)) * 82 });
  const plotted = route.map(project);
  const path = plotted.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <figure className="overflow-hidden rounded-2xl border border-[#d6d1c5] bg-[#e9ece3] shadow-sm" aria-labelledby={`route-map-caption-${tour.id}`}>
      <svg viewBox="0 0 100 100" role="img" aria-label={`Geographic route overview for ${tour.title}`} className="block w-full aspect-[16/9] sm:aspect-[16/7]" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id={`geo-grid-${tour.id}`} width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0H0V10" fill="none" stroke="#cbd2c9" strokeWidth=".18" /></pattern>
          <filter id={`route-shadow-${tour.id}`} x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy=".6" stdDeviation=".7" floodOpacity=".2" /></filter>
        </defs>
        <rect width="100" height="100" fill="#e9ece3" />
        <rect width="100" height="100" fill={`url(#geo-grid-${tour.id})`} opacity=".75" />
        <path d="M0 0H100V100H0Z" fill="#f4f1e7" opacity=".68" />
        <text x="3" y="96" fill="#7a857d" fontSize="2.2">{south.toFixed(2)}° to {north.toFixed(2)}° latitude · {west.toFixed(2)}° to {east.toFixed(2)}° longitude</text>
        <polyline points={path} fill="none" stroke="#a66b12" strokeWidth="1.35" strokeDasharray="2.5 2" strokeLinecap="round" strokeLinejoin="round" />
        {route.map((point, index) => {
          const pos = plotted[index];
          const above = pos.y > 18;
          const labelY = above ? pos.y - 5.2 : pos.y + 7.2;
          const labelWidth = Math.min(25, Math.max(12, point.label.length * 1.25));
          const labelX = Math.max(labelWidth / 2 + 1, Math.min(99 - labelWidth / 2, pos.x));
          return <g key={`${point.label}-${index}`} filter={`url(#route-shadow-${tour.id})`}>
            <circle cx={pos.x} cy={pos.y} r="3" fill="#163c2b" stroke="#fff" strokeWidth=".8" />
            <text x={pos.x} y={pos.y + 1.05} textAnchor="middle" fill="#fff" fontSize="2.55" fontWeight="800">{index + 1}</text>
            <rect x={labelX - labelWidth / 2} y={labelY - 3.1} width={labelWidth} height="5" rx="2.5" fill="#fffdf8" fillOpacity=".94" />
            <text x={labelX} y={labelY + .25} textAnchor="middle" fill="#26352c" fontSize="2.15" fontWeight="700">{point.label}</text>
          </g>;
        })}
        <g transform="translate(78 4)"><rect width="18" height="13" rx="2" fill="#fffdf8" fillOpacity=".96" stroke="#d6d1c5" strokeWidth=".35" /><circle cx="3.5" cy="4" r="1.5" fill="#163c2b" /><text x="6" y="4.8" fill="#34463a" fontSize="2.1">Itinerary stop</text><line x1="2" y1="9" x2="5" y2="9" stroke="#a66b12" strokeWidth=".8" strokeDasharray="1.3 1" /><text x="6" y="9.8" fill="#34463a" fontSize="2.1">Journey</text></g>
      </svg>
      <figcaption id={`route-map-caption-${tour.id}`} className="flex flex-wrap items-center justify-between gap-2 border-t border-[#d6d1c5] bg-[#fffdf8] px-4 py-3 text-xs text-[#536158]">
        <span><strong className="text-[#26352c]">Safari route:</strong> {route.map(p => p.label).join(' → ')}</span>
        <span>Stops use geographic coordinates · route line is illustrative</span>
      </figcaption>
    </figure>
  );
};
