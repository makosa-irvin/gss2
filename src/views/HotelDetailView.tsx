import React from 'react';
import { Hotel } from '../types';
import { useData } from '../context/DataContext';
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
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs text-[#8b9e90] hover:text-[#c49a45] transition-colors font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Beach Resorts & Lodges</span>
      </button>

      {/* Hero Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 rounded-3xl overflow-hidden bg-[#0c120e] border border-[#233327] aspect-[16/10]">
          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
          {hotel.images.slice(1, 3).map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-[#0c120e] border border-[#233327] aspect-[16/10]">
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
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1b4332] text-[#86efac] border border-[#2d6a4f]">
                {hotel.mealPlan}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#141e17] text-[#a3b2a7] border border-[#233327]">
                {hotel.category}
              </span>
              <div className="flex text-[#facc15] ml-2">
                {[...Array(hotel.starRating || 5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#f4f2eb]">
              {hotel.name}
            </h1>

            <div className="flex items-center gap-1.5 text-xs text-[#8b9e90]">
              <MapPin className="w-3.5 h-3.5 text-[#c49a45]" />
              <span>{hotel.location}, {hotel.country}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#141e17] border border-[#233327] space-y-4">
            <h3 className="font-serif-luxury text-xl font-bold text-[#f4f2eb]">
              About the Property & Stay Experience
            </h3>
            <p className="text-sm text-[#c4d4c8] leading-relaxed">
              {hotel.description}
            </p>

            {/* Amenities */}
            <div className="pt-4 border-t border-[#233327]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#c49a45] mb-3">
                Resort Amenities & Inclusions
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {hotel.amenities.map((am, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#e0ded6]">
                    <Check className="w-3.5 h-3.5 text-[#86efac] shrink-0 stroke-[3]" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl bg-[#141e17] border border-[#233327] p-6 sm:p-8 space-y-6 shadow-2xl">
            <div>
              <span className="text-xs text-[#8b9e90] uppercase tracking-wider block">Resident & Special Offer</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-serif-luxury text-3xl font-extrabold text-[#86efac]">
                  KSH {hotel.residentPriceKES.toLocaleString()}
                </span>
                <span className="text-xs text-[#8b9e90]">/ night</span>
              </div>
              <span className="text-xs text-[#a3b2a7] block mt-1">
                Non-Resident Rate: ${hotel.pricePerNightUSD} / night ({hotel.mealPlan})
              </span>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => onOpenEnquiryModal({ selectedHotel: hotel })}
                className="w-full py-3.5 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-extrabold text-sm uppercase tracking-wider text-center transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Reserve / Inquire Package</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#1b2920] hover:bg-[#233327] text-[#4ade80] font-bold text-xs border border-[#2a3d31] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#233327] text-xs text-[#8b9e90]">
              <p>✓ Direct booking guarantee with priority room allocation.</p>
              <p>✓ Flight & SGR train transfer bookings can be added seamlessly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
