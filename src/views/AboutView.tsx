import React from 'react';
import { useData } from '../context/DataContext';
import {
  Compass,
  Heart,
  ShieldCheck,
  Users,
  Award,
  TreePine,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface AboutViewProps {
  onOpenEnquiryModal: (payload?: any) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenEnquiryModal }) => {
  const { settings } = useData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c49a45]">
          <Compass className="w-4 h-4" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4f2eb]">
          Crafting Unforgettable African Journeys
        </h1>
        <p className="text-sm sm:text-base text-[#a3b2a7] leading-relaxed">
          Good Secrets Safaris was born from a deep love for East Africa's wild places, vibrant cultures, and untouched landscapes.
        </p>
      </div>

      {/* Main Story & Image Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3] border border-[#233327] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
            alt="East Africa Safari Land Cruiser Guides"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-5 text-sm text-[#c4d4c8] leading-relaxed">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb]">
            "Your Africa. Your Story. Your Safari."
          </h2>
          <p>
            We believe that no two travelers are alike. While mass tourism rushes visitors from one crowded sighting to another, we believe in slow, meaningful wildlife encounters led by native guides who grew up tracking these landscapes.
          </p>
          <p>
            From the endless golden grasslands of the Serengeti to the mist-wrapped acacia forests of the Great Rift Valley, our journeys are custom-crafted around your specific dreams — whether that is photographing the Great Migration, introducing your children to elephant herds, or celebrating a quiet honeymoon beneath the African stars.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-[#f4f2eb]">
            <div className="p-3 rounded-xl bg-[#141e17] border border-[#233327]">
              <span className="text-[#c49a45] text-lg font-bold font-serif-luxury block">100%</span>
              <span>Private 4x4 Vehicles</span>
            </div>
            <div className="p-3 rounded-xl bg-[#141e17] border border-[#233327]">
              <span className="text-[#c49a45] text-lg font-bold font-serif-luxury block">24/7</span>
              <span>Local Concierge Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars / Values */}
      <div className="rounded-3xl bg-[#141e17] border border-[#233327] p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c49a45]">Core Values</span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb]">
            What We Stand For
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0c120e] border border-[#233327] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#c49a45]" />
            <h4 className="font-serif-luxury text-lg font-bold text-[#f4f2eb]">Safety & Transparency</h4>
            <p className="text-xs text-[#a3b2a7] leading-relaxed">
              Every detail is clear from the start — no hidden park fee surprises, verified 5-star safety vehicles, and included AMREF flying doctor cover.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c120e] border border-[#233327] space-y-3">
            <Heart className="w-8 h-8 text-[#c49a45]" />
            <h4 className="font-serif-luxury text-lg font-bold text-[#f4f2eb]">Conservation First</h4>
            <p className="text-xs text-[#a3b2a7] leading-relaxed">
              We partner with local conservancies, respect animal distances, and direct park revenue straight to grassroots community conservation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c120e] border border-[#233327] space-y-3">
            <Award className="w-8 h-8 text-[#c49a45]" />
            <h4 className="font-serif-luxury text-lg font-bold text-[#f4f2eb]">Master Naturalist Guides</h4>
            <p className="text-xs text-[#a3b2a7] leading-relaxed">
              Our guides are gold and silver certified naturalist experts, combining wildlife tracking intuition with warm hospitality.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-[#141e17] via-[#1b2920] to-[#141e17] border border-[#233327] space-y-4">
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb]">
          Let Us Write Your Safari Story
        </h3>
        <p className="text-xs sm:text-sm text-[#c4d4c8] max-w-lg mx-auto">
          Contact our team today to start designing your tailor-made journey across Kenya, Tanzania, and Zanzibar.
        </p>
        <button
          onClick={() => onOpenEnquiryModal()}
          className="px-8 py-3.5 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-black font-extrabold text-xs uppercase tracking-wider"
        >
          Plan My Safari
        </button>
      </div>
    </div>
  );
};
