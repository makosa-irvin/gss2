import React, { useState } from 'react';
import { Tour } from '../types';
import { useData } from '../context/DataContext';
import { ItineraryTimeline } from '../components/itinerary/ItineraryTimeline';
import { DynamicPricingTable } from '../components/pricing/DynamicPricingTable';
import {
  Clock,
  MapPin,
  Calendar,
  Compass,
  DollarSign,
  ShieldCheck,
  Check,
  X,
  Sparkles,
  MessageCircle,
  Share2,
  ChevronRight,
  ArrowLeft,
  Bed,
  Car,
  Camera,
  HeartHandshake,
  HelpCircle
} from 'lucide-react';

interface TourDetailViewProps {
  tour: Tour;
  onBack: () => void;
  onOpenEnquiryModal: (payload?: any) => void;
  onSelectDestination?: (destName: string) => void;
}

export const TourDetailView: React.FC<TourDetailViewProps> = ({
  tour,
  onBack,
  onOpenEnquiryModal,
  onSelectDestination
}) => {
  const { formatPrice, getWhatsAppUrl, isKenyanResidentMode } = useData();
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const whatsappUrl = getWhatsAppUrl({
    tourTitle: tour.title
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between text-xs text-[#8b9e90]">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 hover:text-[#c49a45] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Safaris</span>
        </button>

        <div className="flex items-center gap-2">
          <span>{tour.country}</span>
          <ChevronRight className="w-3 h-3 text-[#384e3e]" />
          <span className="text-[#c4d4c8] truncate max-w-xs">{tour.title}</span>
        </div>
      </div>

      {/* Hero Header & Title */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1b2920] text-[#c49a45] border border-[#2a3d31]">
            {tour.country}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#141e17] text-[#a3b2a7] border border-[#233327]">
            {tour.durationLabel}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#141e17] text-[#a3b2a7] border border-[#233327]">
            {tour.comfortLevel}
          </span>
          {tour.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#c49a45] text-black">
              Featured Safari
            </span>
          )}
        </div>

        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4f2eb] leading-tight">
          {tour.title}
        </h1>

        <p className="text-base text-[#a3b2a7] max-w-3xl leading-relaxed">
          {tour.shortDescription}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="space-y-3">
        <div className="aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-[#0c120e] border border-[#233327] relative shadow-2xl">
          <img
            src={tour.images[activeImageIdx] || tour.images[0]}
            alt={tour.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs text-white border border-white/10">
            Photo {activeImageIdx + 1} of {tour.images.length}
          </div>
        </div>

        {/* Thumbnail row */}
        {tour.images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {tour.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImageIdx === idx ? 'border-[#c49a45] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Quick Specs Highlight Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#141e17] border border-[#233327]">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-[#8b9e90]">
            <Clock className="w-3.5 h-3.5 text-[#c49a45]" />
            <span>Duration</span>
          </div>
          <p className="text-sm font-bold text-[#f4f2eb]">{tour.durationLabel}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-[#8b9e90]">
            <Car className="w-3.5 h-3.5 text-[#c49a45]" />
            <span>Vehicle Type</span>
          </div>
          <p className="text-sm font-bold text-[#f4f2eb]">Custom 4x4 Safari Land Cruiser</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-[#8b9e90]">
            <Bed className="w-3.5 h-3.5 text-[#c49a45]" />
            <span>Accommodation</span>
          </div>
          <p className="text-sm font-bold text-[#f4f2eb]">{tour.comfortLevel} Tented Lodges</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-[#8b9e90]">
            <Compass className="w-3.5 h-3.5 text-[#c49a45]" />
            <span>Travel Style</span>
          </div>
          <p className="text-sm font-bold text-[#c49a45]">{tour.travelStyles.join(', ')}</p>
        </div>
      </div>

      {/* Main Content & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Itinerary, Pricing, Inclusions */}
        <div className="lg:col-span-8 space-y-12">
          {/* Detailed Overview */}
          <div className="space-y-4">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#f4f2eb]">
              Safari Overview
            </h3>
            <p className="text-sm text-[#c4d4c8] leading-relaxed whitespace-pre-line">
              {tour.fullDescription}
            </p>

            {/* Wildlife Highlights */}
            {tour.wildlifeHighlights && tour.wildlifeHighlights.length > 0 && (
              <div className="pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#a3b2a7] block mb-2">
                  Featured Wildlife
                </span>
                <div className="flex flex-wrap gap-2">
                  {tour.wildlifeHighlights.map(wild => (
                    <span
                      key={wild}
                      className="px-3 py-1.5 rounded-xl bg-[#0c120e] border border-[#233327] text-xs font-semibold text-[#f4f2eb]"
                    >
                      🐾 {wild}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Day-by-day Itinerary */}
          <ItineraryTimeline itinerary={tour.itinerary} />

          {/* Dynamic Seasonal Pricing Table */}
          <DynamicPricingTable tour={tour} />

          {/* Included / Excluded Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Included */}
            <div className="p-6 rounded-2xl bg-[#141e17] border border-[#233327] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#86efac]">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>What Is Included</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#c4d4c8]">
                {tour.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#86efac] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div className="p-6 rounded-2xl bg-[#141e17] border border-[#233327] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#f87171]">
                <X className="w-4 h-4 stroke-[3]" />
                <span>What Is Excluded</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#a3b2a7]">
                {tour.excluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#f87171] font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQs / Travel Prep */}
          <div className="p-6 rounded-2xl bg-[#141e17] border border-[#233327] space-y-4">
            <h3 className="font-serif-luxury text-xl font-bold text-[#f4f2eb] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#c49a45]" />
              Safari Essentials & Questions
            </h3>
            <div className="space-y-3 text-xs text-[#c4d4c8]">
              <div className="p-3 rounded-xl bg-[#0c120e] border border-[#233327]">
                <strong className="text-[#f4f2eb] block mb-1">What should I pack for this safari?</strong>
                Neutral-colored lightweight clothing (khaki, beige, olive), a warm fleece or jacket for dawn game drives, binoculars, sun protection, and personal camera equipment. Soft-sided duffel bags are recommended for 4x4 luggage spaces.
              </div>
              <div className="p-3 rounded-xl bg-[#0c120e] border border-[#233327]">
                <strong className="text-[#f4f2eb] block mb-1">Is this safari private or shared?</strong>
                All Good Secrets safaris are strictly private. You will have your own customized 4x4 Land Cruiser with pop-up photography roof, private driver-guide, and flexible daily game drive schedule.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Booking & Direct Quote Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl bg-[#141e17] border border-[#233327] p-6 sm:p-8 space-y-6 shadow-2xl">
            <div>
              <span className="text-xs text-[#8b9e90] uppercase tracking-wider block">Starting Rate Per Person</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-serif-luxury text-3xl font-extrabold text-[#f4f2eb]">
                  {formatPrice(tour.sharingPrice || tour.priceFrom)}
                </span>
                <span className="text-xs text-[#8b9e90]">/ 2 Sharing</span>
              </div>
              {isKenyanResidentMode && tour.residentPriceKES && (
                <span className="text-xs font-semibold text-[#86efac] block mt-1">
                  Resident: KSH {tour.residentPriceKES.toLocaleString()}
                </span>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => onOpenEnquiryModal({ selectedTour: tour })}
                className="w-full py-3.5 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-extrabold text-sm uppercase tracking-wider text-center transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book This Safari</span>
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

            <div className="space-y-3 pt-4 border-t border-[#233327] text-xs text-[#a3b2a7]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c49a45] shrink-0" />
                <span>Complimentary AMREF Flying Doctors coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#c49a45] shrink-0" />
                <span>100% Tailor-made & Flexible dates</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#c49a45] shrink-0" />
                <span>Exclusive Private 4x4 Land Cruiser with pop-up roof</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
