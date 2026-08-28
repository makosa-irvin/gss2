import React from 'react';
import { Tour } from '../../types';

type GeoPoint = { label: string; lat: number; lng: number };
type Coordinate = [number, number];

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

// Simplified cartographic outlines expressed in longitude/latitude. They keep
// the map recognisably geographic without adding a runtime mapping library.
const kenya: Coordinate[] = [[33.91,4.62],[35.82,4.62],[37.58,3.48],[39.20,3.45],[41.91,3.98],[41.91,-1.68],[40.99,-2.08],[40.64,-2.56],[40.19,-3.27],[39.22,-4.68],[37.61,-3.01],[35.94,-1.79],[34.83,-1.22],[33.91,0.10],[33.91,4.62]];
const tanzania: Coordinate[] = [[29.34,-1.00],[33.91,-1.00],[34.83,-1.22],[35.94,-1.79],[37.61,-3.01],[39.22,-4.68],[40.44,-10.47],[38.49,-11.41],[35.78,-11.58],[34.96,-11.57],[34.28,-9.62],[32.76,-9.23],[31.86,-8.95],[30.20,-4.30],[29.34,-1.00]];
const lakeVictoria: Coordinate[] = [[31.60,-0.05],[32.05,0.32],[32.72,0.12],[33.36,-0.18],[34.04,-0.55],[34.40,-1.04],[34.10,-1.72],[33.48,-2.02],[32.76,-2.38],[32.16,-2.02],[31.73,-1.22],[31.60,-0.05]];

const fallbackPoint = (label: string, index: number): GeoPoint => ({ label, lat: -1.3 - index * 0.15, lng: 36.8 - index * 0.15 });

export const TourRouteMap: React.FC<{ tour: Tour }> = ({ tour }) => {
  const route = routes[tour.slug] || [places.nairobi, ...(tour.destinations || []).map(fallbackPoint)];
  const isCrossBorder = route.some(p => p.lat < -2.1 || p.lng < 34.7);
  const routeMinLng = Math.min(...route.map(p => p.lng));
  const routeMaxLng = Math.max(...route.map(p => p.lng));
  const routeMinLat = Math.min(...route.map(p => p.lat));
  const routeMaxLat = Math.max(...route.map(p => p.lat));
  const west = isCrossBorder ? 31.2 : routeMinLng - Math.max(.5, (routeMaxLng - routeMinLng) * .35);
  const east = isCrossBorder ? 41.2 : routeMaxLng + Math.max(.5, (routeMaxLng - routeMinLng) * .35);
  const south = isCrossBorder ? -4.4 : routeMinLat - Math.max(.45, (routeMaxLat - routeMinLat) * .35);
  const north = isCrossBorder ? 1.35 : routeMaxLat + Math.max(.45, (routeMaxLat - routeMinLat) * .35);
  const projectCoord = ([lng, lat]: Coordinate) => ({ x: 4 + ((lng - west) / (east - west)) * 92, y: 5 + ((north - lat) / (north - south)) * 88 });
  const project = (p: GeoPoint) => projectCoord([p.lng, p.lat]);
  const polygon = (coords: Coordinate[]) => coords.map(c => { const p = projectCoord(c); return `${p.x},${p.y}`; }).join(' ');
  const plotted = route.map(project);
  const routePath = plotted.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <figure className="overflow-hidden rounded-2xl border border-[#d6d1c5] bg-[#dce8e7] shadow-sm" aria-labelledby={`route-map-caption-${tour.id}`}>
      <svg viewBox="0 0 100 100" role="img" aria-label={`Geographic route overview for ${tour.title}`} className="block w-full aspect-[16/9] sm:aspect-[16/7]" preserveAspectRatio="xMidYMid meet">
        <defs><filter id={`route-shadow-${tour.id}`} x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy=".6" stdDeviation=".7" floodOpacity=".2" /></filter></defs>
        <rect width="100" height="100" fill="#dce8e7" />
        <polygon points={polygon(tanzania)} fill="#eee9dc" stroke="#aeb6a9" strokeWidth=".45" />
        <polygon points={polygon(kenya)} fill="#f4f0e4" stroke="#9fa99d" strokeWidth=".5" />
        <polygon points={polygon(lakeVictoria)} fill="#b9d4db" stroke="#8eb4bf" strokeWidth=".45" />
        <path d={`M${projectCoord([39.22,-4.68]).x},${projectCoord([39.22,-4.68]).y} Q${projectCoord([40.2,-3.8]).x},${projectCoord([40.2,-3.8]).y} ${projectCoord([41,-2]).x},${projectCoord([41,-2]).y}`} fill="none" stroke="#8eb4bf" strokeWidth=".35" opacity=".8" />
        {isCrossBorder && <><text x="66" y="28" fill="#7d837b" fontSize="4" fontWeight="800" letterSpacing="1.1">KENYA</text><text x="48" y="82" fill="#7d837b" fontSize="4" fontWeight="800" letterSpacing="1.1">TANZANIA</text><text x="12" y="60" fill="#6d929d" fontSize="2.5" fontStyle="italic">Lake Victoria</text><text x="89" y="70" fill="#6d929d" fontSize="2.4" fontStyle="italic" transform="rotate(78 89 70)">Indian Ocean</text></>}
        <polyline points={routePath} fill="none" stroke="#a66b12" strokeWidth="1.35" strokeDasharray="2.5 2" strokeLinecap="round" strokeLinejoin="round" />
        {route.map((point, index) => {
          const pos = plotted[index];
          const above = pos.y > 18;
          const labelY = above ? pos.y - 5.2 : pos.y + 7.2;
          const labelWidth = Math.min(25, Math.max(12, point.label.length * 1.25));
          const labelX = Math.max(labelWidth / 2 + 1, Math.min(99 - labelWidth / 2, pos.x));
          return <g key={`${point.label}-${index}`} filter={`url(#route-shadow-${tour.id})`}><circle cx={pos.x} cy={pos.y} r="3" fill="#163c2b" stroke="#fff" strokeWidth=".8" /><text x={pos.x} y={pos.y + 1.05} textAnchor="middle" fill="#fff" fontSize="2.55" fontWeight="800">{index + 1}</text><rect x={labelX - labelWidth / 2} y={labelY - 3.1} width={labelWidth} height="5" rx="2.5" fill="#fffdf8" fillOpacity=".94" /><text x={labelX} y={labelY + .25} textAnchor="middle" fill="#26352c" fontSize="2.15" fontWeight="700">{point.label}</text></g>;
        })}
        <g transform="translate(78 4)"><rect width="18" height="13" rx="2" fill="#fffdf8" fillOpacity=".96" stroke="#d6d1c5" strokeWidth=".35" /><circle cx="3.5" cy="4" r="1.5" fill="#163c2b" /><text x="6" y="4.8" fill="#34463a" fontSize="2.1">Itinerary stop</text><line x1="2" y1="9" x2="5" y2="9" stroke="#a66b12" strokeWidth=".8" strokeDasharray="1.3 1" /><text x="6" y="9.8" fill="#34463a" fontSize="2.1">Journey</text></g>
      </svg>
      <figcaption id={`route-map-caption-${tour.id}`} className="flex flex-wrap items-center justify-between gap-2 border-t border-[#d6d1c5] bg-[#fffdf8] px-4 py-3 text-xs text-[#536158]"><span><strong className="text-[#26352c]">Safari route:</strong> {route.map(p => p.label).join(' → ')}</span><span>Geographic overview · route line is illustrative</span></figcaption>
    </figure>
  );
};
