import React from 'react';
import { Destination } from '../../types';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (dest: Destination) => void;
  variant?: 'featured' | 'standard' | 'compact';
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onSelect,
  variant = 'standard'
}) => {
  return (
    <div
      id={`dest-card-${destination.id}`}
      onClick={() => onSelect(destination)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#141e17] border border-[#233327] transition-all duration-500 hover:border-[#c49a45]/60 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c120e] via-[#0c120e]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

        {/* Country Badge */}
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white/90 border border-white/10 uppercase tracking-wider">
            {destination.country}
          </span>
        </div>

        {/* Content overlaid on bottom of image */}
        <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
          <div className="flex items-center gap-1.5 text-xs text-[#c49a45] font-semibold mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>{destination.recommendedDuration || '2 - 4 Days'}</span>
          </div>

          <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#c49a45] transition-colors leading-snug">
            {destination.name}
          </h3>

          <p className="mt-1 text-xs text-[#c4d4c8] line-clamp-2 leading-relaxed">
            {destination.subtitle || destination.description}
          </p>

          {/* Wildlife preview tags */}
          {destination.wildlife && destination.wildlife.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {destination.wildlife.slice(0, 3).map(animal => (
                <span
                  key={animal}
                  className="rounded bg-black/50 backdrop-blur-sm px-2 py-0.5 text-[10px] text-[#e0ded6] border border-white/10"
                >
                  {animal}
                </span>
              ))}
              {destination.wildlife.length > 3 && (
                <span className="text-[10px] text-[#c49a45] font-semibold self-center ml-1">
                  +{destination.wildlife.length - 3} more
                </span>
              )}
            </div>
          )}

          <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-xs font-medium text-[#c49a45] group-hover:underline flex items-center gap-1">
              Explore Destination <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
