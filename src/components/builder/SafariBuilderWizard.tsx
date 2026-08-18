import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Tour } from '../../types';
import {
  Compass,
  Calendar,
  Users,
  Sparkles,
  Heart,
  Camera,
  Sun,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  DollarSign,
  Send
} from 'lucide-react';

interface SafariBuilderWizardProps {
  onSelectTour?: (tour: Tour) => void;
  onCompleteEnquiry?: (enquiryData: any) => void;
}

export const SafariBuilderWizard: React.FC<SafariBuilderWizardProps> = ({
  onSelectTour,
  onCompleteEnquiry
}) => {
  const { tours, addEnquiry, getWhatsAppUrl, formatPrice } = useData();
  const [step, setStep] = useState<number>(1);

  // Wizard state
  const [destinations, setDestinations] = useState<string[]>(['Kenya']);
  const [duration, setDuration] = useState<string>('4-7');
  const [travelerType, setTravelerType] = useState<string>('Couple');
  const [comfortLevel, setComfortLevel] = useState<string>('Luxury');
  const [experiences, setExperiences] = useState<string[]>(['Big 5', 'Elephants', 'Migration']);
  const [budgetRange, setBudgetRange] = useState<string>('$3,000 - $6,000 / person');

  // Contact for final step
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [travelMonth, setTravelMonth] = useState<string>('July - October 2026');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Toggle multi-select items
  const toggleDestination = (dest: string) => {
    setDestinations(prev =>
      prev.includes(dest) ? (prev.length > 1 ? prev.filter(d => d !== dest) : prev) : [...prev, dest]
    );
  };

  const toggleExperience = (exp: string) => {
    setExperiences(prev =>
      prev.includes(exp) ? prev.filter(e => e !== exp) : [...prev, exp]
    );
  };

  // Find matching tours from dataset
  const matchingTours = tours.filter(tour => {
    const matchesDest = destinations.some(d =>
      tour.country.toLowerCase().includes(d.toLowerCase()) ||
      tour.destinations.some(td => td.toLowerCase().includes(d.toLowerCase()))
    );
    const matchesStyle = experiences.some(exp =>
      tour.travelStyles.some(ts => ts.toLowerCase().includes(exp.toLowerCase())) ||
      tour.title.toLowerCase().includes(exp.toLowerCase())
    );
    return matchesDest || matchesStyle;
  }).slice(0, 3);

  const handleSubmitCustomSafari = (e: React.FormEvent) => {
    e.preventDefault();
    const newEnquiry = addEnquiry({
      fullName,
      email,
      phone,
      country: 'International Visitor',
      travelDates: travelMonth,
      durationDays: duration === '1-3' ? 3 : duration === '4-7' ? 6 : duration === '8-14' ? 10 : 15,
      numberOfTravelers: {
        adults: travelerType === 'Solo' ? 1 : travelerType === 'Couple' ? 2 : 4,
        children: travelerType === 'Family' ? 2 : 0
      },
      preferredDestination: destinations.join(', '),
      safariType: `Custom ${comfortLevel} Safari: ${experiences.join(', ')}`,
      budget: budgetRange,
      accommodationPreference: comfortLevel,
      specialRequests: `Traveler Profile: ${travelerType}. Desired experiences: ${experiences.join(', ')}. ${specialRequests}`,
      hearAboutUs: 'Custom Safari Builder'
    });

    setIsSubmitted(true);
    if (onCompleteEnquiry) onCompleteEnquiry(newEnquiry);
  };

  return (
    <div id="custom-safari-builder" className="rounded-3xl bg-[#141e17] border border-[#233327] overflow-hidden shadow-2xl p-6 sm:p-10 max-w-4xl mx-auto">
      {/* Wizard Step Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#a3b2a7] mb-3">
          <span className="text-[#c49a45]">Step {step} of 6</span>
          <span>{step === 1 ? 'Destination' : step === 2 ? 'Duration' : step === 3 ? 'Companions' : step === 4 ? 'Comfort & Style' : step === 5 ? 'Experiences' : 'Your Customized Plan'}</span>
        </div>
        <div className="h-1.5 w-full bg-[#0c120e] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#c49a45] transition-all duration-500 rounded-full"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP 1: WHERE DO YOU WANT TO GO */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb]">
              Where in East Africa calls to you?
            </h3>
            <p className="text-sm text-[#a3b2a7] mt-1">
              Select one or combine multiple destinations for your tailor-made route.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'Kenya', title: 'Kenya', desc: 'Maasai Mara, Amboseli Elephants & Rift Valley' },
              { id: 'Tanzania', title: 'Tanzania', desc: 'Serengeti Migration, Ngorongoro Crater & Tarangire' },
              { id: 'Zanzibar', title: 'Zanzibar & Coast', desc: 'Turquoise beaches, Stone Town & Spice Tours' },
              { id: 'Combined', title: 'Kenya + Tanzania Grand Safari', desc: 'The ultimate 2-country wildlife expedition' },
              { id: 'BushBeach', title: 'Bush & Beach Combo', desc: 'Big 5 savannah safari followed by Indian Ocean relaxation' }
            ].map(item => {
              const selected = destinations.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleDestination(item.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    selected
                      ? 'bg-[#1b2920] border-[#c49a45] shadow-lg shadow-[#c49a45]/10'
                      : 'bg-[#0c120e] border-[#233327] hover:border-[#384e3e]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif-luxury text-lg font-bold text-[#f4f2eb]">{item.title}</h4>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${selected ? 'bg-[#c49a45] text-black' : 'border border-[#384e3e]'}`}>
                      {selected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                  <p className="text-xs text-[#8b9e90] mt-1.5">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-bold text-sm transition-all"
            >
              <span>Next: How Many Days?</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: HOW MANY DAYS */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb]">
              How long is your ideal journey?
            </h3>
            <p className="text-sm text-[#a3b2a7] mt-1">
              Every itinerary is completely flexible and can be customized down to the day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: '1-3', title: '1 – 3 Days', label: 'Short Break / Day Excursion', desc: 'Ideal for quick stopovers, Nairobi day trips or Amboseli/Mara weekend getaways.' },
              { id: '4-7', title: '4 – 7 Days', label: 'Classic African Safari', desc: 'The most popular duration for visiting 2 to 3 world-class national reserves.' },
              { id: '8-14', title: '8 – 14 Days', label: 'In-Depth Expedition', desc: 'Ample time for cross-border Kenya + Tanzania or complete Bush & Beach.' },
              { id: '15+', title: '15+ Days', label: 'Grand Bespoke Odyssey', desc: 'Unrushed luxury encompassing wildlife, culture, mountains, and tropical islands.' }
            ].map(item => {
              const selected = duration === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setDuration(item.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    selected
                      ? 'bg-[#1b2920] border-[#c49a45] shadow-lg shadow-[#c49a45]/10'
                      : 'bg-[#0c120e] border-[#233327] hover:border-[#384e3e]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif-luxury text-lg font-bold text-[#f4f2eb]">{item.title}</h4>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${selected ? 'bg-[#c49a45] text-black' : 'border border-[#384e3e]'}`}>
                      {selected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#c49a45] block mt-1">{item.label}</span>
                  <p className="text-xs text-[#8b9e90] mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1b2920] text-[#c4d4c8] text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-bold text-sm transition-all"
            >
              <span>Next: Who is Traveling?</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: WHO ARE YOU TRAVELING WITH */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb]">
              Who are you traveling with?
            </h3>
            <p className="text-sm text-[#a3b2a7] mt-1">
              We tailor lodge room arrangements, private safari vehicles, and pacing accordingly.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { id: 'Solo', title: 'Solo Explorer', desc: 'Private or small group matching' },
              { id: 'Couple', title: 'Couple / Romance', desc: 'Romantic camps & candlelit dining' },
              { id: 'Family', title: 'Family with Children', desc: 'Interconnecting tents & child safety' },
              { id: 'Friends', title: 'Friends & Small Group', desc: 'Private 4x4 Land Cruiser exclusivity' },
              { id: 'Seniors', title: 'Senior Travelers', desc: 'Gentle pacing & accessible lodges' },
              { id: 'Photography', title: 'Photo Enthusiasts', desc: 'Dedicated angles & golden hour timing' }
            ].map(item => {
              const selected = travelerType === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setTravelerType(item.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all text-center ${
                    selected
                      ? 'bg-[#1b2920] border-[#c49a45] shadow-lg shadow-[#c49a45]/10'
                      : 'bg-[#0c120e] border-[#233327] hover:border-[#384e3e]'
                  }`}
                >
                  <h4 className="font-serif-luxury text-base font-bold text-[#f4f2eb]">{item.title}</h4>
                  <p className="text-[11px] text-[#8b9e90] mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1b2920] text-[#c4d4c8] text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-bold text-sm transition-all"
            >
              <span>Next: Travel Style</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: COMFORT & TRAVEL STYLE */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb]">
              What level of comfort do you prefer?
            </h3>
            <p className="text-sm text-[#a3b2a7] mt-1">
              Choose your accommodation standard and luxury level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'Midrange', title: 'Classic Midrange', desc: 'Comfortable 3 to 4-star safari lodges with en-suite baths, swimming pools, and great meals.' },
              { id: 'Luxury', title: '5-Star Luxury', desc: 'Intimate boutique tented camps, fine dining, private decks, and prime wildlife locations.' },
              { id: 'Ultra Luxury', title: 'Ultra Luxury & Private Fly-In', desc: 'Top-tier luxury estates, private planes, personal butler service, and private conservancies.' }
            ].map(item => {
              const selected = comfortLevel === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setComfortLevel(item.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    selected
                      ? 'bg-[#1b2920] border-[#c49a45] shadow-lg shadow-[#c49a45]/10'
                      : 'bg-[#0c120e] border-[#233327] hover:border-[#384e3e]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif-luxury text-lg font-bold text-[#f4f2eb]">{item.title}</h4>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${selected ? 'bg-[#c49a45] text-black' : 'border border-[#384e3e]'}`}>
                      {selected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                  <p className="text-xs text-[#8b9e90] mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1b2920] text-[#c4d4c8] text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(5)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-bold text-sm transition-all"
            >
              <span>Next: Experiences</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: EXPERIENCES & BUCKET LIST */}
      {step === 5 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb]">
              What do you most want to experience?
            </h3>
            <p className="text-sm text-[#a3b2a7] mt-1">
              Pick as many highlights as you like to help us shape your dream itinerary.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              'Big 5 Tracking',
              'Wildebeest Migration',
              'Elephants & Kilimanjaro',
              'Maasai & Samburu Culture',
              'Hot Air Balloon Safari',
              'Zanzibar Beach Relaxation',
              'Rhino Sanctuary',
              'Predator Action & Big Cats',
              'Birdwatching & Rift Lakes',
              'Walking Safaris',
              'Photography Angles',
              'Gourmet Bush Dining'
            ].map(exp => {
              const selected = experiences.includes(exp);
              return (
                <button
                  type="button"
                  key={exp}
                  onClick={() => toggleExperience(exp)}
                  className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-[#c49a45] text-black border-[#c49a45]'
                      : 'bg-[#0c120e] text-[#e0ded6] border-[#233327] hover:border-[#384e3e]'
                  }`}
                >
                  <span>{exp}</span>
                  {selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
              );
            })}
          </div>

          {/* Budget Range Selection */}
          <div className="pt-4 border-t border-[#233327]">
            <label className="text-xs font-bold uppercase tracking-wider text-[#c49a45] block mb-2">
              Approximate Budget per Person (Excluding International Flights)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                'Under $1,500',
                '$1,500 – $3,500',
                '$3,500 – $7,000',
                '$7,000+'
              ].map(b => (
                <button
                  type="button"
                  key={b}
                  onClick={() => setBudgetRange(b)}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                    budgetRange === b
                      ? 'bg-[#1b2920] border-[#c49a45] text-[#c49a45]'
                      : 'bg-[#0c120e] border-[#233327] text-[#a3b2a7]'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(4)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1b2920] text-[#c4d4c8] text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-bold text-sm transition-all shadow-lg"
            >
              <span>Build My Safari Plan</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 6: RECOMMENDED SAFARIS & SUBMISSION */}
      {step === 6 && (
        <div className="space-y-8">
          {!isSubmitted ? (
            <>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c49a45]">Your Tailored Plan</span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb] mt-1">
                  Here are Recommended Matches for You
                </h3>
                <p className="text-xs text-[#a3b2a7] mt-1">
                  Based on: {destinations.join(', ')} · {duration} Days · {travelerType} · {comfortLevel} · {budgetRange}
                </p>
              </div>

              {/* Recommended tours matching */}
              <div className="space-y-3">
                {matchingTours.map(tour => (
                  <div
                    key={tour.id}
                    className="p-4 rounded-2xl bg-[#0c120e] border border-[#233327] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={tour.images[0]}
                        alt={tour.title}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div>
                        <h4 className="font-serif-luxury font-bold text-sm text-[#f4f2eb] line-clamp-1">{tour.title}</h4>
                        <span className="text-xs text-[#c49a45] block">{tour.durationLabel} · {tour.country}</span>
                        <span className="text-xs text-[#8b9e90]">From {formatPrice(tour.priceFrom)} / person</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      {onSelectTour && (
                        <button
                          type="button"
                          onClick={() => onSelectTour(tour)}
                          className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-[#1b2920] hover:bg-[#233327] text-[#c4d4c8] text-xs font-semibold transition-colors"
                        >
                          View Full Details
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information Form */}
              <form onSubmit={handleSubmitCustomSafari} className="p-6 rounded-2xl bg-[#0c120e] border border-[#233327] space-y-4">
                <h4 className="font-serif-luxury text-lg font-bold text-[#f4f2eb] flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#c49a45]" />
                  Receive Your Personalized Proposal & Exact Quote
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[#a3b2a7] block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e17] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#a3b2a7] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="eleanor@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e17] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#a3b2a7] block mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e17] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#a3b2a7] block mb-1">Preferred Travel Month / Dates</label>
                    <input
                      type="text"
                      value={travelMonth}
                      onChange={(e) => setTravelMonth(e.target.value)}
                      placeholder="e.g. October 2026"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e17] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#a3b2a7] block mb-1">Any Specific Requests or Must-See Animals?</label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Celebrating our anniversary, want hot air balloon safari, need vegetarian meals..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e17] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(5)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1b2920] text-[#c4d4c8] text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" /> Adjust Choices
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-extrabold text-sm transition-all shadow-lg active:scale-95"
                  >
                    <span>Request My Custom Safari Plan</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1b4332] text-[#86efac] flex items-center justify-center mx-auto ring-8 ring-[#1b4332]/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-3xl font-bold text-[#f4f2eb]">
                Thank you, {fullName || 'Traveler'}!
              </h3>
              <p className="text-base text-[#c4d4c8] max-w-lg mx-auto">
                Your safari journey starts here. Our lead safari designer is reviewing your requirements and will contact you via email & WhatsApp within 12 hours with your day-by-day proposal.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={getWhatsAppUrl({ customMessage: `Hello Good Secrets Safaris, I just completed the Custom Safari Builder for a trip to ${destinations.join(', ')}. My name is ${fullName}.` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-sm"
                >
                  Chat with Safari Specialist on WhatsApp
                </a>
                <button
                  onClick={() => { setIsSubmitted(false); setStep(1); }}
                  className="px-6 py-3 rounded-xl bg-[#1b2920] text-[#c4d4c8] text-sm font-semibold"
                >
                  Build Another Safari
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
