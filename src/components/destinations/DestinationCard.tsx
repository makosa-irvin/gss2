import React from 'react';
import { Destination } from '../../types';
import { destinationImage, DESTINATION_IMAGE_FALLBACK } from '../../lib/destinationImage';
import { ArrowRight, Compass } from 'lucide-react';

interface DestinationCardProps { destination: Destination; onSelect: (dest: Destination) => void; variant?: 'featured' | 'standard' | 'compact'; }

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect }) => {
  const image = destinationImage(destination);
  return (
    <article id={`dest-card-${destination.id}`} className="group relative overflow-hidden rounded-2xl bg-white border border-border-strong transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-xl focus-within:border-brand focus-within:shadow-xl shadow-sm">
      <button type="button" onClick={() => onSelect(destination)} aria-label={`Explore ${destination.name}, ${destination.country}`} className="block w-full text-left rounded-2xl">
        <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-shell">
          <img src={image} alt={`${destination.name}, ${destination.country}`} referrerPolicy="no-referrer" onError={(event) => { const target = event.currentTarget; if (!target.src.endsWith(DESTINATION_IMAGE_FALLBACK)) target.src = DESTINATION_IMAGE_FALLBACK; }} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10 transition-opacity duration-300" />
          <div className="absolute top-3 left-3"><span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/30 uppercase tracking-wider">{destination.country}</span></div>
          <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
            <div className="flex items-center gap-1.5 text-xs text-brand-soft font-bold mb-1"><Compass className="w-3.5 h-3.5" aria-hidden="true" /><span>{destination.recommendedDuration || '2 - 4 Days'}</span></div>
            <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-brand-soft transition-colors leading-snug">{destination.name}</h3>
            <p className="mt-1 text-sm text-white/95 line-clamp-2 leading-relaxed font-medium">{destination.subtitle || destination.description}</p>
            {destination.wildlife && destination.wildlife.length > 0 && <div className="mt-3 flex flex-wrap gap-1.5">{destination.wildlife.slice(0, 3).map(animal => <span key={animal} className="rounded-md bg-black/70 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white border border-white/25">{animal}</span>)}{destination.wildlife.length > 3 && <span className="text-xs text-brand-soft font-bold self-center ml-1">+{destination.wildlife.length - 3} more</span>}</div>}
            <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/30"><span className="text-sm font-bold text-brand-soft group-hover:underline flex items-center gap-1">Explore destination <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div>
          </div>
        </div>
      </button>
    </article>
  );
};
