import type { Metadata } from 'next';
import { SafariBuilder } from '../../components/SafariBuilder';
import { getTours } from '../../lib/api';

export const metadata: Metadata = { title: 'Custom Safari Builder', description: 'Answer a few quick questions to get a tailor-made Kenya, Tanzania, or Zanzibar safari itinerary and pricing estimate.', alternates: { canonical: '/safari-builder' } };
export const revalidate = 900;

export default async function SafariBuilderPage() {
  const tours = await getTours();
  return <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8"><div className="text-center max-w-3xl mx-auto space-y-3"><span className="text-xs font-bold uppercase tracking-widest text-brand">Tailor-Made Journey Engine</span><h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-on-shell">Custom Safari Builder</h1><p className="text-sm text-on-shell-subtle">Answer 6 quick questions to narrow down a route and receive a bespoke itinerary proposal from the safari team.</p></div><SafariBuilder tours={tours} /></div>;
}
