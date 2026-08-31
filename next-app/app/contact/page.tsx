import type { Metadata } from 'next';
import { EnquiryButton } from '../../components/EnquiryButton';
import { companyContact } from '../../lib/site';

export const metadata: Metadata = { title: 'Contact Good Secrets Safaris', description: 'Contact the Nairobi-based Good Secrets Safaris team about a private Kenya, Tanzania or Zanzibar safari.', alternates: { canonical: '/contact' } };

export default function ContactPage() {
  return <>
    <header className="page-hero"><div className="container"><p className="eyebrow">Talk to a safari planner</p><h1>Tell us what you want the trip to feel like.</h1><p>You do not need a finished itinerary. Dates, group size, interests and a rough comfort level are enough to start a useful planning conversation.</p></div></header>
    <section className="section"><div className="container grid-2"><div className="prose-card"><h2>Start a safari enquiry</h2><p className="lede">Use the planning form to share your dates and priorities. Submitting an enquiry does not take payment or reserve accommodation.</p><div className="hero-actions"><EnquiryButton label="Request my safari plan" type="General safari planning" /><a className="button dark" href="https://wa.me/254729000410" target="_blank" rel="noreferrer">Chat on WhatsApp</a></div></div><div className="prose-card"><h2>Contact details</h2><p><strong>Phone / WhatsApp</strong><br/><a href={`tel:${companyContact.phone.replace(/\s/g,'')}`}>{companyContact.phone}</a></p><p><strong>Email</strong><br/><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a></p><p><strong>Office</strong><br/>{companyContact.address}</p><p>Safari schedules can make response patterns vary, but direct enquiries are handled by the Good Secrets team rather than an automated checkout process.</p></div></div></section>
  </>;
}
