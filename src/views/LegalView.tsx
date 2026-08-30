import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageMeta } from '../components/common/PageMeta';

const UPDATED = '30 August 2026';

const sections = {
  '/privacy': {
    title: 'Privacy Policy',
    description: 'How Good Secrets Safaris handles information submitted through safari enquiries, website analytics and direct communication.',
    blocks: [
      ['Information we collect', 'When you make an enquiry we may collect your name, email address, phone or WhatsApp number, country, travel dates, party size, budget range, accommodation preferences and trip notes. We also retain basic marketing attribution such as the page you first visited, referral source and UTM campaign values when available.'],
      ['How we use it', 'We use this information to respond to your enquiry, prepare and refine safari proposals, provide trip support, manage follow-ups, understand which marketing channels generate useful enquiries, and improve the website and planning experience.'],
      ['Analytics', 'Optional website analytics are enabled only after you choose to allow analytics. If enabled, we may use a configured analytics provider to measure page views and interactions. You can decline analytics and still use every safari-planning and enquiry feature.'],
      ['Sharing and service providers', 'We do not sell traveller information. We may share only the information necessary with service providers involved in operating the website, communicating with you, processing an eventual booking, or delivering your safari.'],
      ['Data retention and security', 'We retain enquiry and booking information for as long as reasonably necessary for customer service, operational, accounting and legal purposes. Administrative access is restricted and authenticated.'],
      ['Your choices', 'You may ask us to correct or delete personal information we hold about you, subject to legal or operational retention requirements. You can also decline optional analytics from the website consent prompt.'],
      ['Contact', 'For privacy questions or requests, contact Good Secrets Safaris using the email address or telephone details shown in the website footer.']
    ]
  },
  '/terms': {
    title: 'Website Terms',
    description: 'Terms governing use of the Good Secrets Safaris website, safari ideas, pricing information and enquiry tools.',
    blocks: [
      ['Website purpose', 'This website provides safari inspiration, indicative pricing, destination information and enquiry tools. Submitting an enquiry does not create a booking, reserve accommodation or take payment.'],
      ['Accuracy and availability', 'We work to keep itinerary, lodge, pricing and destination information accurate, but safari conditions, park fees, exchange rates, accommodation availability and supplier terms can change. Your final proposal and booking documents take precedence over general website content.'],
      ['Pricing', 'Prices shown on the website are starting or guide prices unless explicitly stated otherwise. A final safari price depends on travel dates, party size, accommodation, route, transport, park fees and supplier availability.'],
      ['Intellectual property', 'Unless otherwise stated, the Good Secrets Safaris name, original written content, layouts and owned photography on this website may not be republished commercially without permission.'],
      ['External links', 'The website links to independent platforms and third-party suppliers for useful context. Good Secrets Safaris is not responsible for the availability, accuracy or privacy practices of third-party websites.'],
      ['Changes', 'We may update these website terms as the service evolves. The current version is the version published on this page.']
    ]
  },
  '/booking-conditions': {
    title: 'Booking Conditions',
    description: 'Important information about safari quotations, deposits, confirmations, supplier availability, changes and cancellations.',
    blocks: [
      ['Before a booking exists', 'A website enquiry or itinerary discussion is not a confirmed reservation. A booking becomes binding only after you accept the final proposal and booking conditions, any required deposit or payment is received, and Good Secrets Safaris confirms the reservation in writing.'],
      ['Final proposal', 'Your final proposal should identify the itinerary, dates, accommodation, transport, inclusions, exclusions, traveller count, price, payment schedule and any special conditions that apply to your trip. Review it carefully before paying.'],
      ['Supplier availability', 'Lodges, camps, airlines, transfer providers and other safari suppliers remain subject to availability until confirmed. If a requested option becomes unavailable, we will discuss a suitable alternative before proceeding where possible.'],
      ['Changes and cancellations', 'Deposit, amendment, cancellation and refund conditions can vary by supplier and travel date. The specific terms supplied with your quotation or booking confirmation apply to your trip and should be reviewed before payment.'],
      ['Travel documents and requirements', 'Travellers are responsible for valid passports, visas, vaccination or health requirements, travel insurance and any entry requirements applicable to their journey. We can provide planning guidance, but official requirements should be checked with the relevant authorities.'],
      ['Travel insurance', 'Comprehensive travel insurance is strongly recommended, including medical care, cancellation, interruption and evacuation coverage appropriate to your itinerary.'],
      ['Questions before payment', 'If any part of your itinerary, pricing, payment schedule or cancellation terms is unclear, ask the safari team before making a payment. We want the commercial terms to be understood before you commit.']
    ]
  }
} as const;

export const LegalView: React.FC = () => {
  const location = useLocation();
  const page = sections[location.pathname as keyof typeof sections] || sections['/terms'];
  return (
    <div className="pb-20">
      <PageMeta title={`${page.title} | Good Secrets Safaris`} description={page.description} canonicalPath={location.pathname} />
      <header className="border-b border-white/10 bg-shell px-4 py-14 sm:px-8 sm:py-18">
        <div className="mx-auto max-w-4xl"><span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-soft">Good Secrets Safaris</span><h1 className="mt-2 font-serif-luxury text-4xl font-bold text-white sm:text-6xl">{page.title}</h1><p className="mt-4 max-w-3xl text-base leading-relaxed text-on-shell-muted">{page.description}</p><p className="mt-3 text-xs text-on-shell-subtle">Last updated {UPDATED}</p></div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="rounded-3xl border border-border-strong bg-white p-6 text-ink-strong shadow-sm sm:p-9">
          <div className="space-y-8">{page.blocks.map(([heading, body]) => <section key={heading}><h2 className="font-serif-luxury text-2xl font-bold">{heading}</h2><p className="mt-2 text-sm leading-7 text-ink-muted sm:text-base">{body}</p></section>)}</div>
        </div>
      </main>
    </div>
  );
};
