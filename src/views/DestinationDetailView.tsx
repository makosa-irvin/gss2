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
      <div className="flex items-center justify-between text-xs text-[#707f74]">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 hover:text-[#9e7120] transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Destinations</span>
        </button>

        <div className="flex items-center gap-2">
          <span>{destination.country}</span>
          <ChevronRight className="w-3 h-3 text-[#b4beb7]" />
          <span className="text-[#161f19] font-medium">{destination.name}</span>
        </div>
      </div>

      {/* Hero Cover */}
      <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-12 border border-[#e8e4da] shadow-xl">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25 -z-10" />

        <div className="space-y-3 max-w-3xl">
          {/* Destination type has no `landscape` or `tagline` field — dropped
              the landscape badge (no equivalent data) and swapped tagline
              for `subtitle`, which is the closest matching field. */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#b3822a] text-white">
              {destination.country}
            </span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
            {destination.name}
          </h1>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
            {destination.subtitle}
          </p>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => onOpenEnquiryModal({ initialType: `Safari to ${destination.name}` })}
              className="px-6 py-2.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Plan Safari to {destination.name}
            </button>
          </div>
        </div>
      </div>

      {/* Overview & Best Time to Visit Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-[#e8e4da] space-y-4 shadow-xs">
            <h2 className="font-serif-luxury text-2xl font-bold text-[#161f19]">
              About {destination.name}
            </h2>
            <p className="text-sm text-[#4d5c52] leading-relaxed whitespace-pre-line font-normal">
              {destination.description}
            </p>

            {/* Highlights */}
            {/* Destination type has no `highlights` field — the closest
                matching data is `wildlife`. Guarded so a destination record
                with no wildlife list can't crash this page. */}
            {(destination.wildlife?.length ?? 0) > 0 && (
              <div className="pt-4 border-t border-[#eeebe2]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#9e7120] mb-3">
                  Key Highlights & Wildlife Encounters
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destination.wildlife.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#303e35]">
                      <CheckCircle2 className="w-4 h-4 text-[#9e7120] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-[#e8e4da] space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e7120]">
              <Calendar className="w-4 h-4" />
              <span>Best Time to Visit</span>
            </div>
            <p className="text-sm font-semibold text-[#161f19]">
              {destination.bestTimeToVisit}
            </p>

            <div className="pt-3 border-t border-[#eeebe2] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#707f74] block">
                Iconic Wildlife
              </span>
              <div className="flex flex-wrap gap-1.5">
                {destination.wildlife.map((w, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-[#faf8f2] text-xs text-[#161f19] border border-[#ded8cb]"
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7120]">Featured Routes</span>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#161f19] mt-0.5">
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
          <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] text-center text-sm text-[#707f74]">
            Custom itineraries are available for {destination.name}. Contact us to include this park in your route.
          </div>
        )}
      </div>

      {/* Lodges & Hotels in this area */}
      {matchingHotels.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b4332]">Recommended Lodging</span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#161f19] mt-0.5">
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
