import React from 'react';
import { PageMeta } from '../components/common/PageMeta';
import { Compass, Heart, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutViewProps { onOpenEnquiryModal: (payload?: any) => void; }

export const AboutView: React.FC<AboutViewProps> = ({ onOpenEnquiryModal }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12 sm:space-y-16">
    <PageMeta title="About Us" description="Learn about Good Secrets Safaris and our approach to personalized East Africa travel." canonicalPath="/about" />

    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#142019] to-[#0c120e] p-7 sm:p-12 text-center">
      <div className="max-w-3xl mx-auto space-y-4"><div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6bc65]"><Compass className="w-4 h-4" /><span>Why Good Secrets Safaris</span></div><h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">A safari designed around the people taking it.</h1><p className="text-base sm:text-lg text-[#c7d2cb] leading-relaxed">We plan private East Africa journeys around your pace, priorities and travel style — with local guidance from the first idea through the final game drive.</p></div>
    </section>

    <section className="grid grid-cols-1 lg:grid-cols-12 gap-9 items-center">
      <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3] border border-white/15 shadow-md"><img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80" alt="Safari landscape in East Africa" className="w-full h-full object-cover" /></div>
      <div className="lg:col-span-6 space-y-5 text-base text-[#c7d2cb] leading-relaxed"><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Our approach</span><h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white">Your Africa. Your story. Your safari.</h2><p>Good safari planning starts by understanding what you want from the journey: more time with wildlife, a gentler pace, family-friendly logistics, photography, a celebration, or a few quiet beach days after the bush.</p><p>Instead of treating an itinerary as fixed, we use it as a starting point. Routes, nights, accommodation and experiences can be shaped around your dates and priorities.</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"><div className="rounded-2xl border border-white/15 bg-white/5 p-4"><CheckCircle2 className="w-5 h-5 text-[#e6bc65] mb-2" /><strong className="text-white block">Private safari planning</strong><span className="text-sm">Routes built around your group and pace.</span></div><div className="rounded-2xl border border-white/15 bg-white/5 p-4"><CheckCircle2 className="w-5 h-5 text-[#e6bc65] mb-2" /><strong className="text-white block">Local trip support</strong><span className="text-sm">A team on the ground when you need help.</span></div></div></div>
    </section>

    <section className="rounded-3xl bg-white border border-[#ded8cb] p-7 sm:p-10 space-y-8 shadow-sm">
      <div className="text-center max-w-2xl mx-auto"><span className="text-xs font-bold uppercase tracking-widest text-[#76541a]">What guides our planning</span><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19] mt-2">Confidence before you travel</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <article className="p-6 rounded-2xl bg-[#faf8f2] border border-[#e3ddcf] space-y-3"><ShieldCheck className="w-8 h-8 text-[#76541a]" /><h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">Clear planning</h3><p className="text-sm text-[#46544b] leading-relaxed">We explain the route, inclusions and practical details so you can understand what you are considering before committing.</p></article>
        <article className="p-6 rounded-2xl bg-[#faf8f2] border border-[#e3ddcf] space-y-3"><Heart className="w-8 h-8 text-[#76541a]" /><h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">Respectful travel</h3><p className="text-sm text-[#46544b] leading-relaxed">Wildlife, communities and landscapes are not a backdrop. Good trips respect the places and people that make them possible.</p></article>
        <article className="p-6 rounded-2xl bg-[#faf8f2] border border-[#e3ddcf] space-y-3"><Users className="w-8 h-8 text-[#76541a]" /><h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">Personal attention</h3><p className="text-sm text-[#46544b] leading-relaxed">The best itinerary for a honeymoon is different from one for a family or photographer. We plan with those differences in mind.</p></article>
      </div>
    </section>

    <section className="text-center p-8 sm:p-12 rounded-3xl bg-[#142019] border border-white/10 space-y-4"><Sparkles className="w-6 h-6 text-[#e6bc65] mx-auto" /><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">Ready to turn an idea into a route?</h2><p className="text-sm sm:text-base text-[#c7d2cb] max-w-xl mx-auto">Tell us your dates, interests and rough budget. We can help shape the next step without requiring payment to enquire.</p><button onClick={() => onOpenEnquiryModal()} className="min-h-12 px-7 rounded-xl bg-[#e6bc65] hover:bg-[#f0cb7a] text-[#161f19] font-extrabold text-sm shadow-md">Request my safari quote</button></section>
  </div>
);
