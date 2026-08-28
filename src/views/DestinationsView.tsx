import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Destination } from '../types';
import { PageMeta } from '../components/common/PageMeta';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { MapPin, Compass, Sparkles } from 'lucide-react';

interface DestinationsViewProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({ onSelectDestination }) => {
  const { destinations } = useData();
  const [selectedCountry, setSelectedCountry] = useState<string>('all');

  const filteredDestinations = destinations.filter(d => {
    if (selectedCountry === 'all') return true;
    return d.country.toLowerCase() === selectedCountry.toLowerCase();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <PageMeta title="Destinations" description="Explore Maasai Mara, Serengeti, Zanzibar, and the other destinations we cover across East Africa." canonicalPath="/destinations" />
      {/* Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
          <MapPin className="w-4 h-4 text-[#9e7120]" />
          <span>African Destinations</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
          Iconic Wilderness & Island Sanctuaries
        </h1>
        <p className="text-sm text-[#5d6e62] leading-relaxed">
          From legendary predator-rich savannahs to the snows of Kilimanjaro and pristine Indian Ocean coral reefs, explore the world's most breathtaking wildlife habitats.
        </p>
      </div>

      {/* Country Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { label: 'All Destinations', value: 'all' },
          { label: 'Kenya Parks & Reserves', value: 'Kenya' },
          { label: 'Tanzania Wilderness', value: 'Tanzania' },
          { label: 'Zanzibar & Coast', value: 'Zanzibar' }
        ].map(filter => (
          <button
            key={filter.value}
            onClick={() => setSelectedCountry(filter.value)}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCountry === filter.value
                ? 'bg-[#b3822a] text-white shadow-md'
                : 'bg-white text-[#5d6e62] border border-[#e8e4da] hover:border-[#b3822a] hover:text-[#161f19]'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map(dest => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            onSelect={onSelectDestination}
          />
        ))}
      </div>
    </div>
  );
};
