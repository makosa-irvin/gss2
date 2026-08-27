import React from 'react';
import { useData } from '../context/DataContext';
import { Tour, Destination, Hotel } from '../types';
import { PageMeta } from '../components/common/PageMeta';
import { SafariFinderBar } from '../components/search/SafariFinderBar';
import { TourCard } from '../components/tours/TourCard';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { HotelCard } from '../components/hotels/HotelCard';
import { SafariBuilderWizard } from '../components/builder/SafariBuilderWizard';
import {
  Sparkles,
  Star,
  ShieldCheck,
  Award,
  Heart,
  Compass,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Users,
  Calendar,
  Send,
  Binoculars,
  Flame,
  Sun,
  Camera,
  Palmtree,
  Plane
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (view: string, payload?: any) => void;
  onSelectTour: (tour: Tour) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectHotel: (hotel: Hotel) => void;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectTour,
  onSelectDestination,
  onSelectHotel,
  onOpenEnquiryModal
}) => {
  const { tours, destinations, hotels, testimonials, blogPosts, settings, formatPrice, isKenyanResidentMode, setIsKenyanResidentMode, getWhatsAppUrl } = useData();

  // Featured Tours list
  const featuredTours = tours.filter(t => t.featured || t.popular);

  const travelStylesList = [
    { title: 'Big 5 Safaris', icon: Binoculars, desc: "For travelers who want to see Africa's most iconic wildlife: Lion, Leopard, Elephant, Buffalo, and Rhino.", tag: 'Big 5' },
    { title: 'Great Wildebeest Migration', icon: Flame, desc: "Experience one of nature's greatest spectacles across the Maasai Mara and Serengeti plains.", tag: 'Great Migration' },
    { title: 'Family Safaris', icon: Users, desc: 'Comfortable, exciting journeys designed for multi-generational families with kid-friendly camps.', tag: 'Family' },
    { title: 'Honeymoon Safaris', icon: Heart, desc: 'Romantic private escapes, luxury tented suites, and candlelit bush dinners in Kenya, Tanzania & Zanzibar.', tag: 'Honeymoon' },
    { title: 'Senior-Friendly Safaris', icon: ShieldCheck, desc: 'Comfortable pacing, private 4x4 Land Cruisers, step-free access, and personalized care.', tag: 'Senior Friendly' },
    { title: 'Luxury Safaris', icon: Sparkles, desc: 'World-class 5-star lodges, private game conservancies, and elevated bespoke experiences.', tag: 'Luxury' },
    { title: 'Budget & Value Safaris', icon: Award, desc: 'Exceptional wildlife encounters and authentic tented safari camps without unnecessary costs.', tag: 'Budget' },
    { title: 'Safari & Beach', icon: Palmtree, desc: 'Combine thrilling savannah wildlife adventures with the turquoise waters of Diani & Zanzibar.', tag: 'Safari & Beach' },
    { title: 'Fly-In Safaris', icon: Plane, desc: 'Spend less time on the road and more time experiencing Africa with direct bush airstrip flights.', tag: 'Fly-In' }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      <PageMeta
        title="Good Secrets Safaris"
        canonicalPath="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TravelAgency',
          name: settings.companyName,
          url: 'https://www.goodsecretssafaris.com',
          description: settings.description,
          email: settings.contact.email,
          telephone: settings.contact.phone,
          address: settings.contact.address,
          areaServed: ['Kenya', 'Tanzania', 'Zanzibar'],
        }}
      />
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-16 pb-12 px-4 sm:px-8 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=90"
            alt="East Africa Safari Elephants Kilimanjaro"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          />
          {/* Subtle cinematic gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35" />
        </div>

        {/* Hero Top Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-8 sm:mt-16 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 border border-white/20 text-[#e6bc65] text-xs font-bold uppercase tracking-widest shadow-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Kenya · Tanzania · Zanzibar Journeys</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Your Africa. <span className="italic font-normal text-[#e6bc65]">Your Story.</span> Your Safari.
          </h1>

          <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore Kenya, Tanzania and Zanzibar through carefully crafted journeys designed around you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('tours')}
              className="px-8 py-3.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Explore Safaris
            </button>

            <button
              onClick={() => onNavigate('builder')}
              className="px-8 py-3.5 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 font-bold text-sm transition-all"
            >
              Plan My Trip
            </button>
          </div>
        </div>

        {/* Hero Bottom Search Finder Overlay */}
        <div className="relative z-10 w-full mt-12">
          <SafariFinderBar
            onSearch={(filters) => {
              onNavigate('tours', filters);
            }}
          />
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-white border border-[#e8e4da] p-8 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-start gap-4 border-b md:border-b-0 md:border-r border-[#eeebe2] pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-extrabold font-serif-luxury text-[#161f19]">4.9/5</div>
              <div className="flex flex-col">
                <div className="flex text-[#eab308]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#5d6e62] mt-0.5 font-medium">Based on 10+ verified reviews</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-[#eef7f2] px-3 py-1.5 border border-[#c3e2cf] text-xs font-semibold text-[#1b4332]">
              <ShieldCheck className="w-4 h-4 text-[#128c7e]" />
              <span>TripAdvisor & Google Certified Partner</span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-2">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#161f19]">
              Travel with confidence & peace of mind
            </h3>
            <p className="text-sm text-[#4d5c52] leading-relaxed font-normal">
              Every Good Secrets journey is accompanied by experienced native driver-guides, private customized 4x4 Land Cruisers with pop-up photography roofs, 24/7 round-the-clock concierge support, and complimentary AMREF Flying Doctors emergency medical evacuation cover.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SAFARIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
              <Compass className="w-4 h-4" />
              <span>Handpicked Itineraries</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19] mt-1">
              Africa, Waiting to Be Explored
            </h2>
            <p className="text-sm text-[#5d6e62] mt-1">
              Handpicked journeys across Kenya, Tanzania and Zanzibar.
            </p>
          </div>

          <button
            onClick={() => onNavigate('tours')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#9e7120] hover:underline self-start md:self-auto"
          >
            <span>View All {tours.length} Safaris</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.slice(0, 6).map(tour => (
            <TourCard
              key={tour.id}
              tour={tour}
              onSelect={onSelectTour}
              onEnquire={onOpenEnquiryModal}
            />
          ))}
        </div>
      </section>

      {/* 4. DISCOVER BY TRAVEL STYLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7120]">Bespoke Travel Profiles</span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19]">
            Find the Journey That Fits You
          </h2>
          <p className="text-sm text-[#5d6e62]">
            Whether you seek high-adrenaline predator tracking or serene Indian Ocean luxury, your journey is shaped to your personal rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {travelStylesList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onClick={() => onNavigate('tours', { travelStyle: item.tag })}
                className="group p-6 rounded-2xl bg-white border border-[#e8e4da] hover:border-[#b3822a] hover:bg-[#faf8f2] transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#faf8f2] text-[#9e7120] flex items-center justify-center border border-[#eeebe2] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#161f19] mt-4 group-hover:text-[#9e7120] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5d6e62] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#eeebe2] flex items-center justify-between text-xs font-bold text-[#9e7120]">
                  <span>Explore Safaris</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7120]">East Africa Icons</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19] mt-1">
              Where Will Africa Take You?
            </h2>
            <p className="text-sm text-[#5d6e62] mt-1">
              From the savannahs of Maasai Mara to the snows of Kilimanjaro and spice shores of Zanzibar.
            </p>
          </div>

          <button
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#9e7120] hover:underline"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.slice(0, 6).map(dest => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onSelect={onSelectDestination}
            />
          ))}
        </div>
      </section>

      {/* 6. WHY TRAVEL WITH GOOD SECRETS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-white border border-[#e8e4da] p-8 sm:p-14 space-y-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7120]">Our Brand Promise</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19]">
              Why Travel with Good Secrets Safaris
            </h2>
            <p className="text-sm text-[#5d6e62] italic">
              "We'll never rush you, never leave your questions unanswered, and always prioritize your comfort, safety and joy — every step of the way."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf8f2] border border-[#eeebe2] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#9e7120] border border-[#ded8cb] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#161f19]">Personal Care</h3>
              <p className="text-xs text-[#5d6e62] leading-relaxed">
                Your trip is shaped around you. No rigid tour buses or generic schedules — your safari, your timetable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8f2] border border-[#eeebe2] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#9e7120] border border-[#ded8cb] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#161f19]">Safety & Comfort</h3>
              <p className="text-xs text-[#5d6e62] leading-relaxed">
                Your wellbeing comes first. Luxury 4x4 Land Cruisers, vetted accommodations, and emergency AMREF coverage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8f2] border border-[#eeebe2] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#9e7120] border border-[#ded8cb] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#161f19]">Authentic Connections</h3>
              <p className="text-xs text-[#5d6e62] leading-relaxed">
                Meet people, discover culture, and experience East Africa beyond the obvious tourist trail.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8f2] border border-[#eeebe2] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#9e7120] border border-[#ded8cb] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#161f19]">Experience You Can Trust</h3>
              <p className="text-xs text-[#5d6e62] leading-relaxed">
                Native guides with decades of tracking experience bring wildlife stories alive with humor and depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. KENYAN RESIDENT HOLIDAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eef7f2] px-3 py-1 text-xs font-bold text-[#1b4332] border border-[#c3e2cf] mb-2">
              <span>Kenyan Resident & Coastal Offers</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19]">
              Escape Without Leaving Kenya
            </h2>
            <p className="text-sm text-[#5d6e62] mt-1">
              Exclusive all-inclusive beach resort packages in Diani, Watamu, and Mombasa with special KES resident pricing.
            </p>
          </div>

          <button
            onClick={() => {
              setIsKenyanResidentMode(true);
              onNavigate('hotels');
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1b4332] hover:underline"
          >
            <span>View All {hotels.length} Beach Resorts</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.slice(0, 4).map(hotel => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              onSelect={onSelectHotel}
              onEnquire={onOpenEnquiryModal}
            />
          ))}
        </div>
      </section>

      {/* 8. CUSTOM SAFARI BUILDER */}
      <section id="safari-builder-section" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7120]">Interactive Itinerary Designer</span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19]">
            Build Your Safari in 6 Steps
          </h2>
          <p className="text-sm text-[#5d6e62]">
            Select your dream destinations, dates, travel companions, and preferred luxury level for instant tailored recommendations.
          </p>
        </div>

        <SafariBuilderWizard
          onSelectTour={onSelectTour}
          onCompleteEnquiry={onOpenEnquiryModal}
        />
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7120]">Traveler Stories</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19] mt-1">
              4.9/5 Trusted by Travelers
            </h2>
            <p className="text-sm text-[#5d6e62] mt-1">
              Real memories from our private safari guests from across the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(test => (
            <div
              key={test.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e8e4da] flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Array() throws if rating isn't a non-negative integer;
                      round/guard so a decimal or missing rating can't crash
                      the homepage testimonials section. */}
                  <div className="flex text-[#eab308]">
                    {[...Array(Math.round(test.rating ?? 5))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#707f74] font-medium">{test.platform}</span>
                </div>
                <p className="text-sm text-[#4d5c52] italic leading-relaxed">
                  "{test.reviewText}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#eeebe2]">
                <img
                  src={test.avatarUrl}
                  alt={test.reviewerName}
                  className="w-10 h-10 rounded-full object-cover border border-[#b3822a]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#161f19]">{test.reviewerName}</h4>
                  <span className="text-xs text-[#707f74]">{test.reviewerCountry} · {test.tourTaken}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. TRAVEL MAGAZINE / BLOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7120]">Editorial & Guidance</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19] mt-1">
              Travel Inspiration & Safari Guides
            </h2>
            <p className="text-sm text-[#5d6e62] mt-1">
              Insider advice from our naturalists, guide tips, and seasonal wildlife predictions.
            </p>
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#9e7120] hover:underline"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <div
              key={post.id}
              onClick={() => onNavigate('blog', { postSlug: post.slug })}
              className="group cursor-pointer rounded-2xl bg-white border border-[#e8e4da] overflow-hidden hover:border-[#b3822a] transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#faf8f2]">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-[#9e7120] font-bold">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span className="text-[#707f74]">{post.readingTime}</span>
                  </div>
                  <h3 className="font-serif-luxury text-base font-bold text-[#161f19] group-hover:text-[#9e7120] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#5d6e62] line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs text-[#707f74] border-t border-[#eeebe2] mt-3">
                <span>By {post.author.name}</span>
                <span className="text-[#9e7120] font-bold flex items-center gap-1 group-hover:underline">
                  Read Guide <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FINAL BANNER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#e8e4da] p-8 sm:p-16 text-center space-y-6 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=85"
            alt="Safari Sunset Savannah"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs -z-10" />

          <span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">
            Start Your Journey
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white max-w-2xl mx-auto">
            Let's Plan Your Africa
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto">
            Connect directly with our safari specialists for a personalized itinerary, seasonal availability, and no-obligation quote.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenEnquiryModal()}
              className="px-8 py-3.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95"
            >
              Request My Safari Plan
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm inline-flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
