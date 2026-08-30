import React from 'react';
import { PageMeta } from '../components/common/PageMeta';
import { Compass, Heart, ShieldCheck, Users, Sparkles, CheckCircle2, ArrowRight, Camera, Car, MessageCircle } from 'lucide-react';

interface AboutViewProps { onOpenEnquiryModal: (payload?: any) => void; }

const planningSteps = [
  ['01', 'Tell us what matters', 'Share your dates, group, interests, pace and rough budget. A first conversation is enough to get started.'],
  ['02', 'Shape the route together', 'We refine parks, nights, accommodation and transfers around your priorities rather than forcing you into a fixed package.'],
  ['03', 'Review before committing', 'You receive the itinerary, inclusions and practical terms before choosing whether to proceed.'],
  ['04', 'Travel with local support', 'The same East Africa-based team remains available while your trip is underway.']
];

// Bios below are drafted from what Good Secrets Safaris' own published
// reviews say about each person's role (SafariBookings/Tripadvisor, and
// the "+10 years" guiding claim from goodsecretssafaris.com's own site
// copy) - not invented. Grey/the team should read and confirm these
// before they're treated as final, and swap the placeholder graphic for
// a real portrait once photos are approved.
const namedTeam = [
  {
    name: 'Elsy',
    role: 'Safari Planner, Nairobi office',
    bio: "Elsy leads itinerary planning - matching lodges, routing and pace to what each traveler is after, and staying in touch by WhatsApp and email from first enquiry through departure. She's the name travelers mention most often for fast, clear, personal communication.",
    photo: '/images/catalog/elsy-safari-planner.jpg'
  },
  {
    name: 'Solomon',
    role: 'Director',
    bio: "Solomon leads game drives across the Mara, Amboseli and beyond, drawing on 10+ years guiding in Kenya's national parks. Travelers consistently point out that he goes beyond driving - sharing local knowledge and looking out for the group throughout the trip.",
    photo: null as string | null
  }
];
const otherGuidesMentioned = ['Fred', 'Kennedy', 'Evans', 'Jeff', 'James', 'Christopher'];

export const AboutView: React.FC<AboutViewProps> = ({ onOpenEnquiryModal }) => (
  <div className="pb-20">
    <PageMeta
      title="About Good Secrets Safaris"
      description="Meet the East Africa-based team and planning approach behind Good Secrets Safaris: private itineraries, local support, experienced guides and direct trip planning."
      canonicalPath="/about"
    />

    <section className="relative min-h-[560px] overflow-hidden border-b border-white/10">
      <img src="/images/catalog/vehicle-next-to-the-great-migration.jpg" alt="Safari vehicle beside the Great Migration in East Africa" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-shell/95 via-shell/70 to-black/25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 min-h-[560px] flex items-end">
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-soft"><Compass className="w-4 h-4" />Local East Africa safari planning</span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">The people planning your safari are here in East Africa.</h1>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl">Good Secrets Safaris plans private journeys across Kenya, Tanzania and the coast with a direct relationship between you and the local team coordinating the trip.</p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2"><button onClick={() => onOpenEnquiryModal()} className="min-h-12 px-7 rounded-xl bg-brand-soft hover:bg-brand-soft text-ink-strong font-extrabold text-sm shadow-lg">Talk to our safari team</button><a href="/reviews" className="min-h-12 px-7 rounded-xl border border-white/30 bg-black/20 hover:bg-black/35 text-white font-bold text-sm inline-flex items-center justify-center gap-2">Read independent reviews <ArrowRight className="w-4 h-4" /></a></div>
        </div>
      </div>
    </section>

    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-20">
      <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 space-y-5"><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">Why direct matters</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">You should know who is responsible for your trip.</h2><p className="text-base text-on-shell-muted leading-relaxed">A safari is a major purchase and often a once-in-a-lifetime journey. Our role is to make the planning clear enough that you understand the route, what is included, where you are staying and who to contact before you decide to proceed.</p><p className="text-base text-on-shell-muted leading-relaxed">The itineraries on this website are starting points. We can slow them down, add nights, change accommodation, combine countries or build around a family, honeymoon, photography trip or a more relaxed pace.</p></div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-4"><div className="col-span-2 sm:col-span-1 rounded-3xl overflow-hidden aspect-[4/5] border border-white/10"><img src="/images/catalog/family-safari-game-drive.jpg" alt="Family enjoying a safari game drive" loading="lazy" className="w-full h-full object-cover" /></div><div className="col-span-2 sm:col-span-1 grid gap-4"><div className="rounded-3xl overflow-hidden aspect-[16/10] border border-white/10"><img src="/images/catalog/picnic-lunch-in-the-wild.jpg" alt="Safari picnic lunch in the wild" loading="lazy" className="w-full h-full object-cover" /></div><div className="rounded-3xl overflow-hidden aspect-[16/10] border border-white/10"><img src="/images/catalog/honey-moon-in-samburu.jpg" alt="Couple on a Samburu safari" loading="lazy" className="w-full h-full object-cover" /></div></div></div>
      </section>

      <section className="rounded-[2rem] bg-page border border-border-strong p-7 sm:p-10 lg:p-12 text-ink-strong shadow-sm">
        <div className="max-w-3xl mb-10"><span className="text-xs font-extrabold uppercase tracking-widest text-brand-deep">What happens after you enquire</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mt-2">A clear planning process, without pressure.</h2><p className="text-base text-ink-muted mt-3 leading-relaxed">You do not need to know every detail before contacting us, and submitting an enquiry does not create a booking or payment obligation.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">{planningSteps.map(([num,title,desc]) => <article key={num} className="border-t-2 border-brand pt-5"><span className="font-serif-luxury text-3xl font-bold text-brand">{num}</span><h3 className="font-serif-luxury text-xl font-bold mt-3">{title}</h3><p className="text-sm text-ink-muted mt-2 leading-relaxed">{desc}</p></article>)}</div>
      </section>

      <section className="space-y-8">
        <div className="max-w-3xl"><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">Meet the team</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-2">Put faces to the people behind your journey.</h2><p className="text-base text-on-shell-muted mt-3 leading-relaxed">The bios below are drawn from what travelers have said about working with each of them. A portrait is still pending for one team member.</p></div>
      <div className="rounded-3xl overflow-hidden aspect-[21/9] border border-white/10 max-w-3xl">
        <img
          src="/images/catalog/team-at-nairobi-national-park.jpg"
          alt="The Good Secrets Safaris team at the Nairobi National Park main gate"
          loading="lazy"
          className="w-full h-full object-cover object-[center_45%]"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">{namedTeam.map(({name,role,bio,photo}) => <article key={name} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"><div className="aspect-[4/3] bg-gradient-to-br from-action to-shell flex flex-col items-center justify-center text-center p-6 overflow-hidden">{photo ? <img src={photo} alt={`${name}, ${role}`} loading="lazy" className="w-full h-full object-cover" /> : <><Camera className="w-8 h-8 text-brand-soft" /><strong className="text-white mt-3">Photo coming soon</strong><span className="text-xs text-on-shell-subtle mt-1">Placeholder pending an approved portrait</span></>}</div><div className="p-6"><h3 className="font-serif-luxury text-xl font-bold text-white">{name}</h3><span className="text-xs font-bold uppercase tracking-wider text-brand-soft">{role}</span><p className="text-sm text-on-shell-muted mt-3 leading-relaxed">{bio}</p></div></article>)}</div>
      <p className="text-sm text-on-shell-subtle max-w-3xl">Guests also frequently thank guides including {otherGuidesMentioned.join(', ')} by name in their reviews - the wider team behind every trip, not just the two above.</p>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        <article className="rounded-3xl bg-white border border-border-strong p-7"><Car className="w-7 h-7 text-brand-deep" /><h3 className="font-serif-luxury text-xl font-bold text-ink-strong mt-4">Private journey design</h3><p className="text-sm text-ink-muted mt-2 leading-relaxed">Routes and pacing can be adjusted around your group rather than a fixed coach-tour schedule.</p></article>
        <article className="rounded-3xl bg-white border border-border-strong p-7"><ShieldCheck className="w-7 h-7 text-brand-deep" /><h3 className="font-serif-luxury text-xl font-bold text-ink-strong mt-4">Clarity before commitment</h3><p className="text-sm text-ink-muted mt-2 leading-relaxed">Review itinerary, inclusions and trip terms before choosing whether to proceed. No payment is taken simply to enquire.</p></article>
        <article className="rounded-3xl bg-white border border-border-strong p-7"><MessageCircle className="w-7 h-7 text-brand-deep" /><h3 className="font-serif-luxury text-xl font-bold text-ink-strong mt-4">Local communication</h3><p className="text-sm text-ink-muted mt-2 leading-relaxed">Email, phone and WhatsApp give you direct channels to the team before and during your East Africa journey.</p></article>
      </section>

      <section className="grid lg:grid-cols-12 gap-8 items-center rounded-[2rem] border border-brand-deep bg-shell p-7 sm:p-10"><div className="lg:col-span-8"><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">Independent feedback</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-2">Do not take our word for it.</h2><p className="text-base text-on-shell-muted mt-3 max-w-2xl">Read traveler feedback published independently on SafariBookings and Tripadvisor, then follow the source links to see the original reviews.</p></div><div className="lg:col-span-4 flex flex-col gap-3"><a href="/reviews" className="min-h-12 rounded-xl bg-brand-soft hover:bg-brand-soft text-ink-strong font-extrabold text-sm inline-flex items-center justify-center gap-2">Read traveler reviews <ArrowRight className="w-4 h-4" /></a><button onClick={() => onOpenEnquiryModal()} className="min-h-12 rounded-xl border border-white/25 bg-white/5 hover:bg-white/10 text-white font-bold text-sm">Start a safari conversation</button></div></section>
    </main>
  </div>
);
