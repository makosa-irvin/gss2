'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react';
import type { Tour } from '../lib/types';

type Choice = { id: string; title: string; desc?: string; label?: string };
const destinationChoices: Choice[] = [
  { id: 'Kenya', title: 'Kenya', desc: 'Maasai Mara, Amboseli, Rift Valley and more.' },
  { id: 'Tanzania', title: 'Tanzania', desc: 'Serengeti, Ngorongoro, Tarangire and more.' },
  { id: 'Zanzibar', title: 'Zanzibar & Coast', desc: 'Beach time, Stone Town and Indian Ocean stays.' },
  { id: 'Combined', title: 'Kenya + Tanzania', desc: 'Combine both countries in one route.' },
  { id: 'BushBeach', title: 'Safari + Beach', desc: 'Wildlife first, then time on the coast.' },
];
const durationChoices: Choice[] = [
  { id: '1-3', title: '1–3 days', label: 'Short escape', desc: 'Useful for stopovers, extensions and short breaks.' },
  { id: '4-7', title: '4–7 days', label: 'Classic safari', desc: 'Enough time for a focused route through two or three areas.' },
  { id: '8-14', title: '8–14 days', label: 'In-depth journey', desc: 'More variety, slower pacing and easier cross-border combinations.' },
  { id: '15+', title: '15+ days', label: 'Extended journey', desc: 'For a broad safari, culture and coast itinerary.' },
];
const travelerChoices: Choice[] = [
  { id: 'Solo', title: 'Solo traveler', desc: 'Private or shared options can be discussed.' },
  { id: 'Couple', title: 'Couple', desc: 'Romantic stays and a flexible private pace.' },
  { id: 'Family', title: 'Family', desc: 'Family-friendly stays and practical pacing.' },
  { id: 'Friends', title: 'Friends / small group', desc: 'A private vehicle and shared itinerary.' },
  { id: 'Seniors', title: 'Senior travelers', desc: 'Comfortable pacing and suitable properties.' },
  { id: 'Photography', title: 'Photography focused', desc: 'More time around light, sightings and positioning.' },
];
const comfortChoices: Choice[] = [
  { id: 'Midrange', title: 'Comfortable midrange', desc: 'Reliable lodges and camps with good comfort and value.' },
  { id: 'Luxury', title: 'Luxury', desc: 'Smaller camps, strong locations and elevated service.' },
  { id: 'Ultra Luxury', title: 'Ultra-luxury', desc: 'Top-tier private stays, fly-in options and highly personalized service.' },
];
const experienceChoices = ['Big 5 Tracking', 'Wildebeest Migration', 'Elephants & Kilimanjaro', 'Maasai & Samburu Culture', 'Hot Air Balloon Safari', 'Zanzibar Beach Relaxation', 'Rhino Sanctuary', 'Predators & Big Cats', 'Birdwatching & Rift Lakes', 'Walking Safaris', 'Photography', 'Bush Dining'];
const budgetChoices = ['Not sure yet', 'Under $1,500', '$1,500 – $3,500', '$3,500 – $7,000', '$7,000+'];

export function SafariBuilder({ tours = [] }: { tours?: Tour[] }) {
  const [catalogTours, setCatalogTours] = useState<Tour[]>(tours);
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState<string[]>(['Kenya']);
  const [duration, setDuration] = useState('4-7');
  const [travelerType, setTravelerType] = useState('Couple');
  const [comfortLevel, setComfortLevel] = useState('Luxury');
  const [experiences, setExperiences] = useState<string[]>(['Big 5 Tracking', 'Elephants & Kilimanjaro']);
  const [budgetRange, setBudgetRange] = useState('Not sure yet');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelMonth, setTravelMonth] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (tours.length) { setCatalogTours(tours); return; }
    let cancelled = false;
    fetch('/api/backend/api/tours')
      .then(response => response.ok ? response.json() : [])
      .then(data => { if (!cancelled && Array.isArray(data)) setCatalogTours(data); })
      .catch(() => undefined);
    return () => { cancelled = true; };
  }, [tours.length]);

  const matchingTours = catalogTours.filter(tour => {
    const matchesDest = destinations.some(destination => tour.country.toLowerCase().includes(destination.toLowerCase()) || tour.destinations.some(tourDestination => tourDestination.toLowerCase().includes(destination.toLowerCase())));
    const matchesStyle = experiences.some(experience => tour.travelStyles.some(style => style.toLowerCase().includes(experience.toLowerCase())) || tour.title.toLowerCase().includes(experience.toLowerCase()));
    return matchesDest || matchesStyle;
  }).slice(0, 3);

  const choiceClass = (selected: boolean) => `min-h-24 w-full p-4 sm:p-5 rounded-2xl border text-left transition-all ${selected ? 'bg-[#fdfaf2] border-[#8a611d] shadow-sm' : 'bg-[#faf8f2] border-[#ddd7ca] hover:border-[#8a611d]'}`;
  const navButton = 'min-h-11 inline-flex items-center justify-center gap-2 px-5 rounded-xl text-sm font-bold';
  const inputClass = 'w-full min-h-11 px-3.5 py-2.5 rounded-xl bg-white border border-[#d7d1c4] text-sm text-[#161f19] focus:border-[#8a611d] focus:outline-none';
  const labelClass = 'text-sm font-semibold text-[#303e35] block mb-1.5';
  const toggleDestination = (id: string) => setDestinations(previous => previous.includes(id) ? (previous.length > 1 ? previous.filter(item => item !== id) : previous) : [...previous, id]);
  const toggleExperience = (id: string) => setExperiences(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id]);

  const renderSingleChoice = (items: Choice[], value: string, setValue: (value: string) => void, columns = 'sm:grid-cols-2') => <div role="radiogroup" className={`grid grid-cols-1 ${columns} gap-3`}>{items.map(item => { const selected = value === item.id; return <button type="button" role="radio" aria-checked={selected} key={item.id} onClick={() => setValue(item.id)} className={choiceClass(selected)}><div className="flex items-start justify-between gap-3"><div><span className="font-serif-luxury text-lg font-bold text-[#161f19] block">{item.title}</span>{item.label ? <span className="text-xs font-bold text-[#76541a] block mt-1">{item.label}</span> : null}</div><span aria-hidden="true" className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${selected ? 'bg-[#8a611d] text-white' : 'border border-[#a9a093]'}`}>{selected ? <Check className="w-3 h-3 stroke-[3]" /> : null}</span></div>{item.desc ? <span className="text-sm text-[#46544b] mt-2 leading-relaxed block">{item.desc}</span> : null}</button>; })}</div>;

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSubmitError(''); setIsSubmitting(true);
    const payload = {
      fullName, email, phone: phone || 'Not provided', country: 'Not specified', travelDates: travelMonth || 'Flexible',
      durationDays: duration === '1-3' ? 3 : duration === '4-7' ? 6 : duration === '8-14' ? 10 : 15,
      adults: travelerType === 'Solo' ? 1 : travelerType === 'Couple' ? 2 : 4,
      children: travelerType === 'Family' ? 2 : 0,
      preferredDestination: destinations.join(', '), safariType: `Custom ${comfortLevel} Safari: ${experiences.join(', ')}`,
      budget: budgetRange, accommodationPreference: comfortLevel,
      specialRequests: `Traveler profile: ${travelerType}. Desired experiences: ${experiences.join(', ')}. ${specialRequests}`,
      hearAboutUs: 'Custom Safari Builder',
    };
    try {
      const response = await fetch('/api/backend/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) { const body = await response.json().catch(() => ({})); throw new Error(body.error || 'Something went wrong sending your enquiry.'); }
      setIsSubmitted(true);
    } catch (error) { setSubmitError(error instanceof Error ? error.message : 'Something went wrong sending your enquiry. Please try again or reach us on WhatsApp.'); }
    finally { setIsSubmitting(false); }
  }

  return <section id="custom-safari-builder" aria-labelledby="builder-title" className="rounded-3xl bg-white border border-[#ded8cb] overflow-hidden shadow-xl p-5 sm:p-10 max-w-4xl mx-auto text-[#303e35]">
    <div className="mb-8"><div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-[#46544b] mb-3"><span className="text-[#76541a]">Step {step} of 6</span><span>{['', 'Destination', 'Duration', 'Travel party', 'Comfort', 'Experiences', 'Your plan'][step]}</span></div><div className="h-2.5 w-full bg-[#f2efe6] rounded-full overflow-hidden" role="progressbar" aria-valuemin={1} aria-valuemax={6} aria-valuenow={step} aria-label={`Step ${step} of 6`}><div className="h-full bg-[#8a611d] transition-all duration-300 rounded-full" style={{ width: `${(step / 6) * 100}%` }} /></div></div>

    {step === 1 ? <div className="space-y-6"><div><h2 id="builder-title" className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">Where would you like to go?</h2><p className="text-base text-[#46544b] mt-2">Choose one or combine several places. You can change this later.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{destinationChoices.map(item => { const selected = destinations.includes(item.id); return <button type="button" aria-pressed={selected} key={item.id} onClick={() => toggleDestination(item.id)} className={choiceClass(selected)}><div className="flex items-start justify-between gap-3"><span className="font-serif-luxury text-lg font-bold text-[#161f19]">{item.title}</span><span aria-hidden="true" className={`w-5 h-5 rounded-full flex items-center justify-center ${selected ? 'bg-[#8a611d] text-white' : 'border border-[#a9a093]'}`}>{selected ? <Check className="w-3 h-3 stroke-[3]" /> : null}</span></div><span className="text-sm text-[#46544b] mt-2 block">{item.desc}</span></button>; })}</div><div className="flex justify-end"><button type="button" onClick={() => setStep(2)} className={`${navButton} bg-[#8a611d] hover:bg-[#704d15] text-white`}>Next: trip length <ArrowRight className="w-4 h-4" /></button></div></div> : null}
    {step === 2 ? <div className="space-y-6"><div><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">How long would you like to travel?</h2><p className="text-base text-[#46544b] mt-2">Choose the closest range. The final itinerary can be shorter or longer.</p></div>{renderSingleChoice(durationChoices, duration, setDuration)}<Nav back={() => setStep(1)} next={() => setStep(3)} nextLabel="Next: travelers" /></div> : null}
    {step === 3 ? <div className="space-y-6"><div><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">Who are you traveling with?</h2><p className="text-base text-[#46544b] mt-2">This helps with room setup, vehicle planning and pacing.</p></div>{renderSingleChoice(travelerChoices, travelerType, setTravelerType, 'sm:grid-cols-3')}<Nav back={() => setStep(2)} next={() => setStep(4)} nextLabel="Next: comfort" /></div> : null}
    {step === 4 ? <div className="space-y-6"><div><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">What level of comfort suits you?</h2><p className="text-base text-[#46544b] mt-2">This is a starting preference, not a fixed package.</p></div>{renderSingleChoice(comfortChoices, comfortLevel, setComfortLevel, 'sm:grid-cols-3')}<Nav back={() => setStep(3)} next={() => setStep(5)} nextLabel="Next: experiences" /></div> : null}
    {step === 5 ? <div className="space-y-6"><div><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">What do you most want to experience?</h2><p className="text-base text-[#46544b] mt-2">Pick as many as you like. These choices help shape recommendations.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">{experienceChoices.map(experience => { const selected = experiences.includes(experience); return <button type="button" aria-pressed={selected} key={experience} onClick={() => toggleExperience(experience)} className={`min-h-12 p-3 rounded-xl text-left border text-sm font-semibold transition-all flex items-center justify-between gap-2 ${selected ? 'bg-[#8a611d] text-white border-[#8a611d]' : 'bg-[#faf8f2] text-[#303e35] border-[#ddd7ca] hover:border-[#8a611d]'}`}><span>{experience}</span>{selected ? <Check className="w-4 h-4 shrink-0" /> : null}</button>; })}</div><div className="pt-4 border-t border-[#e6e0d4]"><p className="text-sm font-bold text-[#303e35] mb-2">Approximate budget per person <span className="font-normal text-[#66766b]">(excluding international flights)</span></p><div role="radiogroup" aria-label="Approximate budget" className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2">{budgetChoices.map(budget => <button type="button" role="radio" aria-checked={budgetRange === budget} key={budget} onClick={() => setBudgetRange(budget)} className={`min-h-11 p-3 rounded-xl border text-sm font-bold text-center ${budgetRange === budget ? 'bg-[#fdfaf2] border-[#8a611d] text-[#704d15]' : 'bg-[#faf8f2] border-[#ddd7ca] text-[#46544b]'}`}>{budget}</button>)}</div></div><div className="flex justify-between gap-3"><button type="button" onClick={() => setStep(4)} className={`${navButton} bg-[#f4f1e8] text-[#303e35]`}><ArrowLeft className="w-4 h-4" />Back</button><button type="button" onClick={() => setStep(6)} className={`${navButton} bg-[#8a611d] hover:bg-[#704d15] text-white`}>See my starting points <Sparkles className="w-4 h-4" /></button></div></div> : null}
    {step === 6 ? <div className="space-y-8">{!isSubmitted ? <><div><span className="text-xs font-bold uppercase tracking-wider text-[#76541a]">Your preferences</span><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19] mt-1">A few safari ideas to start from</h2><p className="text-sm text-[#46544b] mt-2">These are examples based on your choices. Your final route can be adjusted around dates, pace, budget and availability.</p></div>{matchingTours.length ? <div className="space-y-3">{matchingTours.map(tour => <article key={tour.id} className="p-4 rounded-2xl bg-[#faf8f2] border border-[#e3ddcf] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div className="flex items-center gap-3"><img src={tour.images[0]} alt="" className="w-16 h-16 rounded-xl object-cover" /><div><h3 className="font-serif-luxury font-bold text-base text-[#161f19]">{tour.title}</h3><span className="text-sm text-[#76541a] block font-semibold">{tour.durationLabel} · {tour.country}</span><span className="text-sm text-[#46544b]">Guide price from ${Number(tour.priceFrom).toLocaleString()} / person</span></div></div><Link href={`/safaris/${tour.slug}`} className="min-h-11 px-4 rounded-lg bg-[#f4f1e8] hover:bg-[#eae5d8] text-[#303e35] text-sm font-bold border border-[#d7d1c4] inline-flex items-center">View details</Link></article>)}</div> : null}<form onSubmit={submit} className="p-5 sm:p-6 rounded-2xl bg-[#faf8f2] border border-[#e3ddcf] space-y-5"><div><h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">Send these preferences to our team</h3><p className="text-sm text-[#46544b] mt-1">Only your name and email are required. You can keep dates and phone flexible.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="builder-name" className={labelClass}>Full name *</label><input id="builder-name" autoComplete="name" required value={fullName} onChange={event => setFullName(event.target.value)} className={inputClass} /></div><div><label htmlFor="builder-email" className={labelClass}>Email *</label><input id="builder-email" type="email" autoComplete="email" required value={email} onChange={event => setEmail(event.target.value)} className={inputClass} /></div><div><label htmlFor="builder-phone" className={labelClass}>Phone / WhatsApp <span className="font-normal text-[#66766b]">(optional)</span></label><input id="builder-phone" type="tel" autoComplete="tel" value={phone} onChange={event => setPhone(event.target.value)} className={inputClass} /></div><div><label htmlFor="builder-dates" className={labelClass}>Travel month or dates</label><input id="builder-dates" value={travelMonth} onChange={event => setTravelMonth(event.target.value)} placeholder="Flexible is fine" className={inputClass} /></div></div><div><label htmlFor="builder-notes" className={labelClass}>Anything else we should know? <span className="font-normal text-[#66766b]">(optional)</span></label><textarea id="builder-notes" rows={3} value={specialRequests} onChange={event => setSpecialRequests(event.target.value)} className={`${inputClass} min-h-24`} /></div>{submitError ? <p role="alert" className="text-sm text-rose-800 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2.5">{submitError}</p> : null}<div className="rounded-xl bg-white border border-[#e3ddcf] p-3 flex gap-2 text-xs text-[#46544b]"><ShieldCheck className="w-4 h-4 text-[#76541a] shrink-0 mt-0.5" /><span>This is a planning enquiry only. No payment is taken and no booking is confirmed.</span></div><div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3"><button type="button" onClick={() => setStep(5)} className={`${navButton} bg-[#f4f1e8] text-[#303e35]`}><ArrowLeft className="w-4 h-4" />Adjust choices</button><button type="submit" disabled={isSubmitting} className={`${navButton} min-h-12 px-7 bg-[#8a611d] hover:bg-[#704d15] disabled:opacity-60 text-white`}><span>{isSubmitting ? 'Sending…' : 'Request my safari plan'}</span><Send className="w-4 h-4" /></button></div></form></> : <div role="status" className="text-center py-10 space-y-4"><div className="w-16 h-16 rounded-full bg-[#1b4332] text-white flex items-center justify-center mx-auto ring-8 ring-[#1b4332]/15"><CheckCircle2 className="w-8 h-8" /></div><h2 className="font-serif-luxury text-3xl font-bold text-[#161f19]">Thanks, {fullName || 'traveler'}.</h2><p className="text-base text-[#46544b] max-w-lg mx-auto">We received your safari preferences. Our team can now review them and follow up with suggested next steps.</p><div className="pt-3 flex flex-wrap justify-center gap-3"><a href={`https://wa.me/254729000410?text=${encodeURIComponent(`Hello Good Secrets Safaris, I just completed the Custom Safari Builder for ${destinations.join(', ')}. My name is ${fullName}.`)}`} target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center justify-center px-5 rounded-xl bg-[#128c5a] hover:bg-[#0f744b] text-white font-bold text-sm">Continue on WhatsApp</a><button type="button" onClick={() => { setIsSubmitted(false); setStep(1); }} className="min-h-11 px-5 rounded-xl bg-[#f4f1e8] text-[#303e35] text-sm font-semibold hover:bg-[#eae5d8]">Build another safari</button></div></div>}</div> : null}
  </section>;
}

function Nav({ back, next, nextLabel }: { back: () => void; next: () => void; nextLabel: string }) {
  return <div className="flex justify-between gap-3"><button type="button" onClick={back} className="min-h-11 inline-flex items-center justify-center gap-2 px-5 rounded-xl text-sm font-bold bg-[#f4f1e8] text-[#303e35]"><ArrowLeft className="w-4 h-4" />Back</button><button type="button" onClick={next} className="min-h-11 inline-flex items-center justify-center gap-2 px-5 rounded-xl text-sm font-bold bg-[#8a611d] hover:bg-[#704d15] text-white">{nextLabel}<ArrowRight className="w-4 h-4" /></button></div>;
}
