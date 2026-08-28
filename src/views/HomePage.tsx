import React from 'react';
import { useData } from '../context/DataContext';
import { Tour, Destination, Hotel } from '../types';
import { PageMeta } from '../components/common/PageMeta';
import { unsplashCardImage } from '../lib/imageUrl';
import { SafariFinderBar } from '../components/search/SafariFinderBar';
import { TourCard } from '../components/tours/TourCard';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { HotelCard } from '../components/hotels/HotelCard';
import { SafariBuilderWizard } from '../components/builder/SafariBuilderWizard';
import {
  Sparkles, Star, ShieldCheck, Award, Heart, Compass, CheckCircle2, ArrowRight,
  MessageCircle, Users, Binoculars, Flame, Palmtree, Plane
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (view: string, payload?: any) => void;
  onSelectTour: (tour: Tour) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectHotel: (hotel: Hotel) => void;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectTour, onSelectDestination, onSelectHotel, onOpenEnquiryModal }) => {
  const { tours, destinations, hotels, testimonials, blogPosts, settings, setIsKenyanResidentMode, getWhatsAppUrl } = useData();
  const featuredTours = tours.filter(t => t.featured || t.popular);
  const travelStylesList = [
    { title: 'Big 5 Safaris', icon: Binoculars, desc: "See Africa's most iconic wildlife with private guides who know where and when to look.", tag: 'Big 5' },
    { title: 'Great Wildebeest Migration', icon: Flame, desc: 'Time your journey for one of nature’s greatest spectacles across the Mara and Serengeti.', tag: 'Great Migration' },
    { title: 'Family Safaris', icon: Users, desc: 'Comfortable private journeys with flexible pacing and family-friendly camps.', tag: 'Family' },
    { title: 'Honeymoon Safaris', icon: Heart, desc: 'Private romantic escapes combining exceptional wildlife, intimate camps and beach stays.', tag: 'Honeymoon' },
    { title: 'Senior-Friendly Safaris', icon: ShieldCheck, desc: 'Gentle pacing, private vehicles, thoughtful accommodation choices and personal care.', tag: 'Senior Friendly' },
    { title: 'Luxury Safaris', icon: Sparkles, desc: 'Exceptional lodges, private conservancies and seamless fly-in options.', tag: 'Luxury' },
    { title: 'Budget & Value Safaris', icon: Award, desc: 'Strong wildlife experiences and authentic camps with careful control of unnecessary costs.', tag: 'Budget' },
    { title: 'Safari & Beach', icon: Palmtree, desc: 'Pair savannah game drives with the Indian Ocean shores of Diani or Zanzibar.', tag: 'Safari & Beach' },
    { title: 'Fly-In Safaris', icon: Plane, desc: 'Spend less time transferring and more time in the wilderness with bush flights.', tag: 'Fly-In' }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      <PageMeta title="Good Secrets Safaris" canonicalPath="/" structuredData={{ '@context': 'https://schema.org', '@type': 'TravelAgency', name: settings.companyName, url: 'https://www.goodsecretssafaris.com', description: settings.description, email: settings.contact.email, telephone: settings.contact.phone, address: settings.contact.address, areaServed: ['Kenya', 'Tanzania', 'Zanzibar'] }} />

      <section className="relative min-h-[82vh] flex flex-col justify-between pt-14 pb-10 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=90" alt="Elephants crossing the East African savannah" referrerPolicy="no-referrer" fetchPriority="high" className="w-full h-full object-cover object-center scale-[1.02] animate-in fade-in duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-8 sm:mt-12 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-4 py-2 border border-white/25 text-[#f0ca79] text-xs font-bold uppercase tracking-widest shadow-xl">
            <Sparkles className="w-3.5 h-3.5" /><span>Private safaris · Kenya · Tanzania · Zanzibar</span>
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight">
            Your East Africa safari, <span className="italic font-normal text-[#f0ca79]">designed around you.</span>
          </h1>
          <p className="text-base sm:text-xl text-white max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Private 4x4 journeys, experienced local guides and handpicked stays — tailored to your dates, interests and travel style.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 max-w-xl mx-auto">
            <button onClick={() => onOpenEnquiryModal()} className="min-h-12 px-8 py-3.5 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl active:scale-[0.98]">
              Request a Safari Quote
            </button>
            <button onClick={() => onNavigate('tours')} className="min-h-12 px-8 py-3.5 rounded-xl bg-white/95 hover:bg-white text-[#172019] border border-white font-bold text-sm transition-all shadow-lg">
              Explore Safari Ideas
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-white/95 pt-1">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#f0ca79]" />Private 4x4</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#f0ca79]" />Flexible dates</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#f0ca79]" />Local safari experts</span>
          </div>
        </div>

        <div className="relative z-10 w-full mt-10"><SafariFinderBar onSearch={(filters) => onNavigate('tours', filters)} /></div>
      </section>

      <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-white border border-[#ded8cb] p-7 sm:p-9 grid grid-cols-1 md:grid-cols-12 gap-7 items-center shadow-md">
          <div className="md:col-span-4 flex flex-col gap-3 border-b md:border-b-0 md:border-r border-[#e6e1d7] pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center gap-3"><div className="text-4xl font-extrabold font-serif-luxury text-[#161f19]">4.9/5</div><div><div className="flex text-[#b77905]" aria-label="5 star rating">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div><span className="text-sm text-[#4d5c52] mt-1 block font-medium">10+ verified traveler reviews</span></div></div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-[#eef7f2] px-3 py-2 border border-[#b6d8c3] text-sm font-semibold text-[#1b4332]"><ShieldCheck className="w-4 h-4 text-[#0c756b]" /><span>Local support before and during your trip</span></div>
          </div>
          <div className="md:col-span-8 space-y-2"><h2 className="font-serif-luxury text-2xl font-bold text-[#161f19]">Travel with confidence from first enquiry to final game drive</h2><p className="text-sm sm:text-base text-[#4d5c52] leading-relaxed">Private customized Land Cruisers, experienced driver-guides, 24/7 safari support and complimentary AMREF Flying Doctors emergency evacuation cover are built into the Good Secrets experience.</p></div>
        </div>
      </section>

      <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4"><div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6bc65]"><Compass className="w-4 h-4" /><span>Handpicked itineraries</span></div><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-1">Start with a safari idea. Make it yours.</h2><p className="text-base text-[#c7d2cb] mt-2 max-w-2xl">Browse proven routes, then adjust the dates, pace, accommodation and experiences around you.</p></div><button onClick={() => onNavigate('tours')} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#e6bc65] hover:text-white self-start md:self-auto"><span>View All {tours.length} Safaris</span><ArrowRight className="w-4 h-4" /></button></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{featuredTours.slice(0, 6).map(tour => <TourCard key={tour.id} tour={tour} onSelect={onSelectTour} onEnquire={onOpenEnquiryModal} />)}</div>
      </section>

      <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8 space-y-9">
        <div className="text-center max-w-2xl mx-auto space-y-2"><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Choose your travel style</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">What kind of safari feels right?</h2><p className="text-base text-[#c7d2cb]">Use these as a starting point — every itinerary can be tailored to your pace, priorities and budget.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{travelStylesList.map(item => { const Icon = item.icon; return <button type="button" key={item.title} onClick={() => onNavigate('tours', { travelStyle: item.tag })} className="group p-6 rounded-2xl bg-white border border-[#ded8cb] hover:border-[#8a611d] hover:bg-[#faf8f2] transition-all duration-300 text-left flex flex-col justify-between shadow-sm"><span><span className="w-12 h-12 rounded-xl bg-[#faf8f2] text-[#765217] flex items-center justify-center border border-[#e2ddd2] group-hover:scale-105 transition-transform"><Icon className="w-6 h-6" /></span><span className="font-serif-luxury text-xl font-bold text-[#161f19] mt-4 block group-hover:text-[#765217]">{item.title}</span><span className="text-sm text-[#4d5c52] mt-2 leading-relaxed block">{item.desc}</span></span><span className="mt-5 pt-3 border-t border-[#e6e1d7] flex items-center justify-between text-sm font-bold text-[#765217]"><span>See matching safaris</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span></button>; })}</div>
      </section>

      <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8 space-y-8"><div className="flex flex-col md:flex-row md:items-end justify-between gap-4"><div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">East Africa icons</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-1">Where will Africa take you?</h2><p className="text-base text-[#c7d2cb] mt-2">From the Maasai Mara and Serengeti to the Indian Ocean shores of Zanzibar.</p></div><button onClick={() => onNavigate('destinations')} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#e6bc65] hover:text-white"><span>View All Destinations</span><ArrowRight className="w-4 h-4" /></button></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{destinations.slice(0, 6).map(dest => <DestinationCard key={dest.id} destination={dest} onSelect={onSelectDestination} />)}</div></section>

      <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8"><div className="rounded-3xl bg-white border border-[#ded8cb] p-8 sm:p-12 space-y-10 shadow-sm"><div className="text-center max-w-2xl mx-auto space-y-3"><span className="text-xs font-bold uppercase tracking-widest text-[#765217]">Why Good Secrets</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19]">A private safari should feel personal</h2><p className="text-base text-[#4d5c52]">Thoughtful planning, honest advice and local support — without forcing you into a rigid group itinerary.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{[['01','Personal planning','Your dates, interests and pace shape the itinerary — not a fixed tour-bus schedule.'],['02','Safety & comfort','Private Land Cruisers, vetted stays and AMREF emergency evacuation cover.'],['03','Local expertise','Experienced East African guides add context, flexibility and better wildlife decisions.'],['04','Support that stays with you','Questions answered before departure and local assistance throughout your journey.']].map(([num,title,desc]) => <div key={num} className="p-6 rounded-2xl bg-[#faf8f2] border border-[#e6e1d7] space-y-3"><div className="w-10 h-10 rounded-xl bg-white text-[#765217] border border-[#ded8cb] flex items-center justify-center font-bold">{num}</div><h3 className="font-serif-luxury text-lg font-bold text-[#161f19]">{title}</h3><p className="text-sm text-[#4d5c52] leading-relaxed">{desc}</p></div>)}</div></div></section>

      <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8 space-y-8"><div className="flex flex-col md:flex-row md:items-end justify-between gap-4"><div><div className="inline-flex items-center gap-2 rounded-full bg-[#eef7f2] px-3 py-1.5 text-xs font-bold text-[#1b4332] border border-[#b6d8c3] mb-2">Kenyan resident offers</div><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">Beach escapes closer to home</h2><p className="text-base text-[#c7d2cb] mt-2">Diani, Watamu and Mombasa resort stays with dedicated KES resident pricing.</p></div><button onClick={() => { setIsKenyanResidentMode(true); onNavigate('hotels'); }} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#e6bc65] hover:text-white"><span>View {hotels.length} Beach Resorts</span><ArrowRight className="w-4 h-4" /></button></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{hotels.slice(0, 4).map(hotel => <HotelCard key={hotel.id} hotel={hotel} onSelect={onSelectHotel} onEnquire={onOpenEnquiryModal} />)}</div></section>

      <section id="safari-builder-section" className="cv-auto max-w-7xl mx-auto px-4 sm:px-8 space-y-8"><div className="text-center max-w-2xl mx-auto space-y-2"><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Not sure where to start?</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">Build your safari preferences</h2><p className="text-base text-[#c7d2cb]">Tell us where you want to go, who is traveling and what matters most. We’ll use it to narrow down the right safari ideas.</p></div><SafariBuilderWizard onSelectTour={onSelectTour} onCompleteEnquiry={onOpenEnquiryModal} /></section>

      <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8 space-y-8"><div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Traveler stories</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-1">What guests say after the safari</h2><p className="text-base text-[#c7d2cb] mt-2">Independent feedback from travelers who explored East Africa with Good Secrets.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{testimonials.map(test => <article key={test.id} className="p-6 sm:p-8 rounded-2xl bg-white border border-[#ded8cb] flex flex-col justify-between space-y-4 shadow-sm"><div className="space-y-3"><div className="flex items-center justify-between"><div className="flex text-[#b77905]" aria-label={`${test.rating ?? 5} star review`}>{[...Array(Math.round(test.rating ?? 5))].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div><span className="text-sm text-[#536158] font-medium">{test.platform}</span></div><p className="text-base text-[#3f4e44] italic leading-relaxed">“{test.reviewText}”</p></div><div className="flex items-center gap-3 pt-4 border-t border-[#e6e1d7]"><img src={test.avatarUrl} alt="" className="w-10 h-10 rounded-full object-cover border border-[#b3822a]" /><div><h3 className="text-sm font-bold text-[#161f19]">{test.reviewerName}</h3><span className="text-sm text-[#536158]">{test.reviewerCountry} · {test.tourTaken}</span></div></div></article>)}</div></section>

      <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8 space-y-8"><div className="flex flex-col md:flex-row md:items-end justify-between gap-4"><div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Plan with confidence</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-1">Safari guides & travel inspiration</h2><p className="text-base text-[#c7d2cb] mt-2">Seasonal advice, destination guides and practical tips for planning East Africa.</p></div><button onClick={() => onNavigate('blog')} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#e6bc65] hover:text-white"><span>Read All Articles</span><ArrowRight className="w-4 h-4" /></button></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{blogPosts.slice(0, 3).map(post => <button type="button" key={post.id} onClick={() => onNavigate('blog', { postSlug: post.slug })} className="group text-left rounded-2xl bg-white border border-[#ded8cb] overflow-hidden hover:border-[#8a611d] transition-all flex flex-col shadow-sm"><span className="aspect-[16/10] overflow-hidden bg-[#faf8f2]"><img src={unsplashCardImage(post.featuredImage, 700)} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" /></span><span className="p-5 space-y-2 block"><span className="flex items-center gap-2 text-xs text-[#765217] font-bold"><span>{post.category}</span><span aria-hidden="true">·</span><span className="text-[#536158]">{post.readingTime}</span></span><span className="font-serif-luxury text-lg font-bold text-[#161f19] group-hover:text-[#765217] block">{post.title}</span><span className="text-sm text-[#4d5c52] line-clamp-2 leading-relaxed block">{post.excerpt}</span></span></button>)}</div></section>

      <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8"><div className="relative overflow-hidden rounded-3xl border border-[#5f512f] bg-[#17231b] p-8 sm:p-12 shadow-xl"><div className="absolute -right-20 -top-24 w-72 h-72 rounded-full bg-[#b3822a]/10 blur-3xl" aria-hidden="true" /><div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"><div className="lg:col-span-8 space-y-3"><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Ready when you are</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">Tell us what your ideal safari looks like</h2><p className="text-base text-[#d7dfda] max-w-2xl leading-relaxed">Share your dates, group size and priorities. A safari specialist can help turn those ideas into a practical private itinerary.</p><div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#d7dfda] pt-2"><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />No payment to enquire</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Tailor-made itinerary</span></div></div><div className="lg:col-span-4 flex flex-col gap-3"><button onClick={() => onOpenEnquiryModal()} className="min-h-12 px-6 py-3.5 rounded-xl bg-[#e6bc65] hover:bg-[#f0ca79] text-[#161f19] font-extrabold text-sm uppercase tracking-wider shadow-lg">Request My Quote</button><a href={getWhatsAppUrl({})} target="_blank" rel="noopener noreferrer" className="min-h-12 px-6 py-3 rounded-xl border border-white/30 bg-white/10 hover:bg-white/15 text-white font-bold text-sm flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" />Ask on WhatsApp</a></div></div></div></section>
    </div>
  );
};
