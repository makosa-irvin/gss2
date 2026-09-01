'use client';

import { useState } from 'react';
import type { Tour } from '../lib/types';

const routeImageFiles:Record<string,string>={
  '14-day-ultimate-kenya-tanzania-safari':'14-day-ultimate-kenya-tanzania.webp',
  '3-day-amboseli-safari-kilimanjaro-views':'3-day-amboseli-safari.webp',
  '3-day-masai-mara-luxury-big-5-migration-safari':'3-day-maasai-mara-safari.webp',
  '1-day-nairobi-wildlife-cultural-discovery':'1-day-nairobi-safari.webp',
  '1-day-lake-nakuru-lake-naivasha-adventure':'1-day-nakuru-naivasha.webp',
  '3-day-samburu-untamed-beauty-rare-wildlife':'3-day-samburu-safari.webp',
  '8-day-safari-zanzibar-spice-beach-escape':'8-day-zanzibar-combo.webp',
  '2-day-masai-mara-lion-encounters':'3-day-maasai-mara-safari.webp',
  '3-day-midrange-wildlife-safari-samburu':'3-day-samburu-safari.webp',
  '3-day-amboseli-luxury-elephant-kilimanjaro':'3-day-amboseli-safari.webp',
  '3-day-midrange-amboseli-big-elephant-safari':'3-day-amboseli-safari.webp'
};
const correctedTitles:Record<string,string>={
  '3-day-amboseli-safari-kilimanjaro-views':'3 DAY AMBOSELI SAFARI','1-day-nairobi-wildlife-cultural-discovery':'1 DAY NAIROBI SAFARI','3-day-masai-mara-luxury-big-5-migration-safari':'3 DAY MAASAI MARA SAFARI','3-day-samburu-untamed-beauty-rare-wildlife':'3 DAY SAMBURU ADVENTURE','2-day-masai-mara-lion-encounters':'2 DAY MAASAI MARA SAFARI','3-day-midrange-wildlife-safari-samburu':'3 DAY SAMBURU SAFARI','3-day-amboseli-luxury-elephant-kilimanjaro':'3 DAY AMBOSELI SAFARI','3-day-midrange-amboseli-big-elephant-safari':'3 DAY AMBOSELI SAFARI'
};
export function TourRouteMap({tour}:{tour:Tour}){const[failed,setFailed]=useState(false);const fileName=routeImageFiles[tour.slug];const routeImage=fileName?`/images/routes/${fileName}`:undefined;const correctedTitle=correctedTitles[tour.slug];if(routeImage&&!failed)return <figure className="overflow-hidden rounded-2xl border border-[#d6d1c5] bg-[#fffdf8] shadow-sm" aria-labelledby={`route-map-caption-${tour.id}`}><div className="relative bg-[#eee9dc]"><img src={routeImage} alt={`Route map for ${tour.title}`} loading="lazy" decoding="async" onError={()=>setFailed(true)} className="block h-auto w-full object-contain"/>{correctedTitle&&<div className="pointer-events-none absolute left-0 top-0 max-w-[58%] rounded-br-[22px] bg-[#123b2a] px-3 py-2 sm:px-5 sm:py-3 text-white shadow-sm"><strong className="block font-serif-luxury text-[clamp(12px,2.2vw,24px)] leading-tight tracking-wide">{correctedTitle}</strong><span className="mt-0.5 block text-[clamp(7px,1.15vw,12px)] font-bold tracking-[0.08em]">ROUTE MAP</span></div>}</div><figcaption id={`route-map-caption-${tour.id}`} className="border-t border-[#d6d1c5] bg-[#fffdf8] px-4 py-3 text-xs text-[#536158]">Static itinerary route overview for {tour.title}.</figcaption></figure>;return <div className="rounded-2xl border border-dashed border-[#b9b1a2] bg-[#f7f3ea] px-5 py-6 text-sm text-[#536158]" role="status">{fileName?'The route map image could not be loaded. Please refresh the page or try again shortly.':'A dedicated route map has not been added for this safari yet.'}</div>}
