import React from 'react';
import { useData } from '../context/DataContext';
import { PageMeta } from '../components/common/PageMeta';
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
      <PageMeta title="About Us" description="Learn about Good Secrets Safaris and our approach to personalized East Africa travel." canonicalPath="/about" />
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
          <Compass className="w-4 h-4 text-[#9e7120]" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#161f19]">
          Crafting Unforgettable African Journeys
        </h1>
        <p className="text-sm sm:text-base text-[#5d6e62] leading-relaxed">
          Good Secrets Safaris was born from a deep love for East Africa's wild places, vibrant cultures, and untouched landscapes.
        </p>
      </div>

      {/* Main Story & Image Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3] border border-[#e8e4da] shadow-md">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
            alt="East Africa Safari Land Cruiser Guides"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-5 text-sm text-[#4d5c52] leading-relaxed font-normal">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">
            "Your Africa. Your Story. Your Safari."
          </h2>
          <p>
            We believe that no two travelers are alike. While mass tourism rushes visitors from one crowded sighting to another, we believe in slow, meaningful wildlife encounters led by native guides who grew up tracking these landscapes.
          </p>
          <p>
            From the endless golden grasslands of the Serengeti to the mist-wrapped acacia forests of the Great Rift Valley, our journeys are custom-crafted around your specific dreams — whether that is photographing the Great Migration, introducing your children to elephant herds, or celebrating a quiet honeymoon beneath the African stars.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-[#161f19]">
            <div className="p-4 rounded-xl bg-white border border-[#e8e4da] shadow-xs">
              <span className="text-[#9e7120] text-lg font-bold font-serif-luxury block">100%</span>
              <span>Private 4x4 Vehicles</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#e8e4da] shadow-xs">
              <span className="text-[#9e7120] text-lg font-bold font-serif-luxury block">24/7</span>
              <span>Local Concierge Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars / Values */}
      <div className="rounded-3xl bg-white border border-[#e8e4da] p-8 sm:p-12 space-y-8 shadow-xs">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7120]">Core Values</span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">
            What We Stand For
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#faf8f2] border border-[#eeebe2] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#9e7120]" />
            <h4 className="font-serif-luxury text-lg font-bold text-[#161f19]">Safety & Transparency</h4>
            <p className="text-xs text-[#5d6e62] leading-relaxed">
              Every detail is clear from the start — no hidden park fee surprises, verified 5-star safety vehicles, and included AMREF flying doctor cover.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf8f2] border border-[#eeebe2] space-y-3">
            <Heart className="w-8 h-8 text-[#9e7120]" />
            <h4 className="font-serif-luxury text-lg font-bold text-[#161f19]">Conservation First</h4>
            <p className="text-xs text-[#5d6e62] leading-relaxed">
              We partner with local conservancies, respect animal distances, and direct park revenue straight to grassroots community conservation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf8f2] border border-[#eeebe2] space-y-3">
            <Award className="w-8 h-8 text-[#9e7120]" />
            <h4 className="font-serif-luxury text-lg font-bold text-[#161f19]">Master Naturalist Guides</h4>
            <p className="text-xs text-[#5d6e62] leading-relaxed">
              Our guides are gold and silver certified naturalist experts, combining wildlife tracking intuition with warm hospitality.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-10 rounded-3xl bg-white border border-[#e8e4da] space-y-4 shadow-sm">
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">
          Let Us Write Your Safari Story
        </h3>
        <p className="text-xs sm:text-sm text-[#5d6e62] max-w-lg mx-auto">
          Contact our team today to start designing your tailor-made journey across Kenya, Tanzania, and Zanzibar.
        </p>
        <button
          onClick={() => onOpenEnquiryModal()}
          className="px-8 py-3.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
        >
          Plan My Safari
        </button>
      </div>
    </div>
  );
};
