import React from 'react';
import { Hotel } from '../types';
import { useData } from '../context/DataContext';
import { PageMeta } from '../components/common/PageMeta';
import {
  MapPin,
  Star,
  Utensils,
  Check,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  MessageCircle,
  Clock
} from 'lucide-react';

interface HotelDetailViewProps {
  hotel: Hotel;
  onBack: () => void;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const HotelDetailView: React.FC<HotelDetailViewProps> = ({
  hotel,
  onBack,
  onOpenEnquiryModal
}) => {
  const { formatPrice, getWhatsAppUrl, isKenyanResidentMode } = useData();

  const whatsappUrl = getWhatsAppUrl({
    hotelTitle: hotel.name
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
      <PageMeta
        title={hotel.name}
        description={hotel.description}
        image={hotel.images?.[0]}
        canonicalPath={`/hotels/${hotel.slug}`}
      />
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs text-[#707f74] hover:text-[#9e7120] transition-colors font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Beach Resorts & Lodges</span>
      </button>

      {/* Hero Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 rounded-3xl overflow-hidden bg-[#faf8f2] border border-[#e8e4da] aspect-[16/10] shadow-sm">
          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
          {hotel.images.slice(1, 3).map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-[#faf8f2] border border-[#e8e4da] aspect-[16/10] shadow-xs">
              <img src={img} alt="resort" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#faf8f2] text-[#5d6e62] border border-[#ded8cb]">
                {hotel.category}
              </span>
              {/* Hotel type has no `mealPlan` field, so that badge was dropped.
                  Star rating lives on `rating`, not `starRating`, and is a
                  decimal (e.g. 4.8) — Array() needs a non-negative integer
                  or it throws, so round it before use. */}
              <div className="flex text-[#eab308] ml-2">
                {[...Array(Math.round(hotel.rating ?? 5))].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
              {hotel.name}
            </h1>

            <div className="flex items-center gap-1.5 text-xs text-[#707f74]">
              <MapPin className="w-3.5 h-3.5 text-[#9e7120]" />
              <span>{hotel.location}, {hotel.country}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e8e4da] space-y-4 shadow-xs">
            <h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">
              About the Property & Stay Experience
            </h3>
            <p className="text-sm text-[#4d5c52] leading-relaxed font-normal">
              {hotel.description}
            </p>

            {/* Amenities */}
            {/* Hotel type has no `amenities` field — the data lives on `facilities`
                (and `inclusions`). Guard against either being missing so this
                section can never crash the page. */}
            {(hotel.facilities?.length ?? 0) > 0 && (
              <div className="pt-4 border-t border-[#eeebe2]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9e7120] mb-3">
                  Resort Amenities & Inclusions
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {hotel.facilities.map((am, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#303e35]">
                      <Check className="w-3.5 h-3.5 text-[#1b4332] shrink-0 stroke-[3]" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl bg-white border border-[#e8e4da] p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Hotel type has no `residentPriceKES`, `pricePerNightUSD`, or
                `mealPlan` fields — the real data lives on `priceFromKES` and
                `priceFromUSD`. Guarding with `?? 0` so this can never crash
                the page even if a hotel record is missing a price. */}
            <div>
              <span className="text-xs text-[#707f74] uppercase tracking-wider block font-medium">Resident & Special Offer</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-serif-luxury text-3xl font-extrabold text-[#1b4332]">
                  KSH {(hotel.priceFromKES ?? 0).toLocaleString()}
                </span>
                <span className="text-xs text-[#707f74]">/ night</span>
              </div>
              <span className="text-xs text-[#5d6e62] block mt-1">
                Non-Resident Rate: ${hotel.priceFromUSD ?? '—'} / night
              </span>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => onOpenEnquiryModal({ selectedHotel: hotel })}
                className="w-full py-3.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-sm uppercase tracking-wider text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Reserve / Inquire Package</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#eef7f2] hover:bg-[#def0e6] text-[#1b4332] font-bold text-xs border border-[#c3e2cf] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#128c7e]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#eeebe2] text-xs text-[#5d6e62]">
              <p>✓ Direct booking guarantee with priority room allocation.</p>
              <p>✓ Flight & SGR train transfer bookings can be added seamlessly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
