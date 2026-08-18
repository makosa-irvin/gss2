import React from 'react';
import { Destination, Tour, Hotel } from '../types';
import { useData } from '../context/DataContext';
import { TourCard } from '../components/tours/TourCard';
import { HotelCard } from '../components/hotels/HotelCard';
import {
  MapPin,
  Calendar,
  Sun,
  Camera,
  Compass,
  ArrowLeft,
  Sparkles,
  ChevronRight,
  Binoculars,
  CheckCircle2
} from 'lucide-react';

interface DestinationDetailViewProps {
  destination: Destination;
  onBack: () => void;
  onSelectTour: (tour: Tour) => void;
  onSelectHotel: (hotel: Hotel) => void;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({
  destination,
  onBack,
  onSelectTour,
  onSelectHotel,
  onOpenEnquiryModal
}) => {
  const { tours, hotels } = useData();

  // Find tours visiting this destination
  const matchingTours = tours.filter(t =>
    t.destinations.some(d => d.toLowerCase().includes(destination.name.toLowerCase())) ||
    t.title.toLowerCase().includes(destination.name.toLowerCase()) ||
    t.destinations.some(d => destination.name.toLowerCase().includes(d.toLowerCase()))
  );

  // Find hotels in this area
  const matchingHotels = hotels.filter(h =>
    h.location.toLowerCase().includes(destination.name.toLowerCase()) ||
    destination.name.toLowerCase().includes(h.location.toLowerCase()) ||
    h.country.toLowerCase() === destination.country.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-[#8b9e90]">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 hover:text-[#c49a45] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Destinations</span>
        </button>

        <div className="flex items-center gap-2">
          <span>{destination.country}</span>
          <ChevronRight className="w-3 h-3 text-[#384e3e]" />
          <span className="text-[#c4d4c8]">{destination.name}</span>
        </div>
      </div>

      {/* Hero Cover */}
      <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-12 border border-[#233327] shadow-2xl">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c120e] via-[#0c120e]/60 to-black/30 -z-10" />

        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#c49a45] text-black">
              {destination.country}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-[#f4f2eb] border border-white/20">
              {destination.landscape}
            </span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4f2eb]">
            {destination.name}
          </h1>

          <p className="text-sm sm:text-base text-[#d4ded6] leading-relaxed">
            {destination.tagline}
          </p>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => onOpenEnquiryModal({ initialType: `Safari to ${destination.name}` })}
              className="px-6 py-2.5 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              Plan Safari to {destination.name}
            </button>
          </div>
        </div>
      </div>

      {/* Overview & Best Time to Visit Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="p-8 rounded-3xl bg-[#141e17] border border-[#233327] space-y-4">
            <h2 className="font-serif-luxury text-2xl font-bold text-[#f4f2eb]">
              About {destination.name}
            </h2>
            <p className="text-sm text-[#c4d4c8] leading-relaxed whitespace-pre-line">
              {destination.description}
            </p>

            {/* Highlights */}
            <div className="pt-4 border-t border-[#233327]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#c49a45] mb-3">
                Key Highlights & Wildlife Encounters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {destination.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#e0ded6]">
                    <CheckCircle2 className="w-4 h-4 text-[#c49a45] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-[#141e17] border border-[#233327] space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c49a45]">
              <Calendar className="w-4 h-4" />
              <span>Best Time to Visit</span>
            </div>
            <p className="text-sm font-semibold text-[#f4f2eb]">
              {destination.bestTimeToVisit}
            </p>

            <div className="pt-3 border-t border-[#233327] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8b9e90] block">
                Iconic Wildlife
              </span>
              <div className="flex flex-wrap gap-1.5">
                {destination.wildlife.map((w, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-[#0c120e] text-xs text-[#f4f2eb] border border-[#233327]"
                  >
                    🐾 {w}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tours visiting this destination */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#c49a45]">Featured Routes</span>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#f4f2eb] mt-0.5">
              Safaris Featuring {destination.name}
            </h3>
          </div>
        </div>

        {matchingTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchingTours.map(tour => (
              <TourCard
                key={tour.id}
                tour={tour}
                onSelect={onSelectTour}
                onEnquire={onOpenEnquiryModal}
              />
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-[#141e17] border border-[#233327] text-center text-sm text-[#8b9e90]">
            Custom itineraries are available for {destination.name}. Contact us to include this park in your route.
          </div>
        )}
      </div>

      {/* Lodges & Hotels in this area */}
      {matchingHotels.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#86efac]">Recommended Lodging</span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#f4f2eb] mt-0.5">
                Luxury Lodges & Camps near {destination.name}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {matchingHotels.slice(0, 4).map(hotel => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                onSelect={onSelectHotel}
                onEnquire={onOpenEnquiryModal}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
