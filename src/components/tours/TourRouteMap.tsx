import React from 'react';
import { Tour } from '../../types';

type Point = { label: string; x: number; y: number };

const knownPoints: Record<string, { x: number; y: number }> = {
  'Nairobi': { x: 58, y: 38 },
  'Nairobi City & Wildlife': { x: 58, y: 38 },
  'Samburu National Reserve': { x: 60, y: 18 },
  'Lake Nakuru & Lake Naivasha': { x: 43, y: 37 },
  'Lake Nakuru National Park': { x: 42, y: 34 },
  'Lake Naivasha': { x: 47, y: 40 },
  'Maasai Mara National Reserve': { x: 35, y: 55 },
  'Masai Mara National Reserve': { x: 35, y: 55 },
  'Lake Victoria': { x: 24, y: 59 },
  'Serengeti National Park': { x: 35, y: 67 },
  'Ngorongoro Conservation Area': { x: 47, y: 73 },
  'Amboseli National Park': { x: 66, y: 57 },
  'Arusha': { x: 59, y: 68 },
  'Kilimanjaro': { x: 66, y: 67 },
  'Zanzibar': { x: 86, y: 86 }
};

const routeOverrides: Record<string, string[]> = {
  '14-day-ultimate-kenya-tanzania-safari': ['Nairobi', 'Samburu National Reserve', 'Lake Nakuru National Park', 'Maasai Mara National Reserve', 'Lake Victoria', 'Serengeti National Park', 'Ngorongoro Conservation Area', 'Amboseli National Park', 'Nairobi'],
  '3-day-amboseli-safari-kilimanjaro-views': ['Nairobi', 'Amboseli National Park', 'Nairobi'],
  '3-day-masai-mara-luxury-big-5-migration-safari': ['Nairobi', 'Maasai Mara National Reserve', 'Nairobi'],
  '1-day-nairobi-wildlife-cultural-discovery': ['Nairobi', 'Nairobi City & Wildlife'],
  '1-day-lake-nakuru-lake-naivasha-adventure': ['Nairobi', 'Lake Nakuru National Park', 'Lake Naivasha', 'Nairobi'],
  '2-day-masai-mara-lion-encounters': ['Nairobi', 'Maasai Mara National Reserve', 'Nairobi'],
  '3-day-samburu-untamed-beauty-rare-wildlife': ['Nairobi', 'Samburu National Reserve', 'Nairobi']
};

const shortLabel = (label: string) => label.replace(' National Reserve', '').replace(' National Park', '').replace(' Conservation Area', '').replace(' City & Wildlife', '');

export const TourRouteMap: React.FC<{ tour: Tour }> = ({ tour }) => {
  const route = routeOverrides[tour.slug] || ['Nairobi', ...(tour.destinations || [])];
  const points: Point[] = route.map((label, index) => ({
    label,
    ...(knownPoints[label] || { x: 24 + index * (56 / Math.max(route.length - 1, 1)), y: 48 + (index % 2 ? 8 : -5) })
  }));
  const path = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <figure className="overflow-hidden rounded-2xl border border-[#d6d1c5] bg-[#e9e9df] shadow-sm" aria-labelledby="route-map-caption">
      <svg viewBox="0 0 100 100" role="img" aria-label={`Static route map for ${tour.title}`} className="block w-full aspect-[16/8] sm:aspect-[16/7]">
        <defs>
          <pattern id={`grid-${tour.id}`} width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="#cfd3c8" strokeWidth="0.22" /></pattern>
          <filter id={`shadow-${tour.id}`} x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="0.7" stdDeviation="0.8" floodOpacity="0.22" /></filter>
        </defs>
        <rect width="100" height="100" fill="#e9ece3" />
        <rect width="100" height="100" fill={`url(#grid-${tour.id})`} opacity="0.6" />
        <path d="M16 8 C24 13 31 11 38 15 C44 19 50 18 56 23 C63 29 69 34 76 37 C81 40 82 49 80 57 C78 65 82 72 80 80 C72 86 66 91 57 94 L42 91 C38 84 31 78 27 70 C24 62 19 57 18 48 C20 40 17 32 18 25 Z" fill="#f4f1e7" stroke="#c7c5ba" strokeWidth="0.6" />
        <path d="M20 45 C15 49 12 56 13 65 C15 72 20 75 25 71 C28 66 27 58 25 51 Z" fill="#c9dce2" stroke="#adc5cc" strokeWidth="0.5" />
        <path d="M75 37 C84 42 91 50 94 61 L94 94 L81 94 C82 82 78 73 80 61 C82 52 80 44 75 37 Z" fill="#d8e5e7" opacity="0.8" />
        <text x="47" y="31" fill="#8b9289" fontSize="3.2" fontWeight="700" letterSpacing=".6">KENYA</text>
        <text x="47" y="82" fill="#8b9289" fontSize="3.2" fontWeight="700" letterSpacing=".6">TANZANIA</text>
        <text x="8" y="68" fill="#7795a0" fontSize="2.6" transform="rotate(-75 8 68)">Lake Victoria</text>
        <polyline points={path} fill="none" stroke="#b67a1a" strokeWidth="1.2" strokeDasharray="2.5 2" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((point, index) => <g key={`${point.label}-${index}`} filter={`url(#shadow-${tour.id})`}>
          <circle cx={point.x} cy={point.y} r="2.8" fill="#163c2b" stroke="#fff" strokeWidth="0.8" />
          <text x={point.x} y={point.y + 1.05} textAnchor="middle" fill="#fff" fontSize="2.5" fontWeight="800">{index + 1}</text>
          <rect x={Math.max(1, point.x - 8)} y={point.y < 18 ? point.y + 4 : point.y - 8} width="16" height="4.4" rx="2.2" fill="#fff" fillOpacity="0.88" />
          <text x={point.x} y={point.y < 18 ? point.y + 7 : point.y - 5} textAnchor="middle" fill="#26352c" fontSize="2.15" fontWeight="700">{shortLabel(point.label).slice(0, 15)}</text>
        </g>)}
        <g transform="translate(79 5)"><rect width="18" height="13" rx="2" fill="#fff" fillOpacity="0.94" stroke="#d6d1c5" strokeWidth="0.35" /><circle cx="3.5" cy="4" r="1.5" fill="#163c2b" /><text x="6" y="4.8" fill="#34463a" fontSize="2.1">Route stop</text><line x1="2" y1="9" x2="5" y2="9" stroke="#b67a1a" strokeWidth="0.8" strokeDasharray="1.3 1" /><text x="6" y="9.8" fill="#34463a" fontSize="2.1">Drive</text></g>
      </svg>
      <figcaption id="route-map-caption" className="flex flex-wrap items-center justify-between gap-2 border-t border-[#d6d1c5] bg-[#fffdf8] px-4 py-3 text-xs text-[#536158]"><span><strong className="text-[#26352c]">Safari route:</strong> {route.map(shortLabel).join(' → ')}</span><span>Illustrative route · not for navigation</span></figcaption>
    </figure>
  );
};
