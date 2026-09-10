'use client';

import { useState } from 'react';
import { ArrowLeft, Inbox } from 'lucide-react';

type AnyRecord = Record<string, any>;

const STATUSES = ['New', 'Contacted', 'Quoted', 'Confirmed', 'Cancelled'];

const statusTone: Record<string, string> = {
  New: 'bg-[#eef2ff] text-[#3730a3]',
  Contacted: 'bg-[#fef3c7] text-[#92400e]',
  Quoted: 'bg-[#e0f2fe] text-[#075985]',
  Confirmed: 'bg-[#dcfce7] text-[#166534]',
  Cancelled: 'bg-rose-100 text-rose-800',
};

function EnquiryDetail({ enquiry, onBack, onSave }: { enquiry: AnyRecord; onBack: () => void; onSave: (id: string, status: string, notes: string) => Promise<void> }) {
  const [status, setStatus] = useState(enquiry.status);
  const [notes, setNotes] = useState(enquiry.notes || '');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  async function save() {
    setIsSaving(true); setError(null);
    try { await onSave(enquiry.id, status, notes); setSaved(true); window.setTimeout(() => setSaved(false), 2500); }
    catch (err) { setError(err instanceof Error ? err.message : 'Failed to save.'); }
    finally { setIsSaving(false); }
  }

  const details: [string, React.ReactNode][] = [
    ['Email', enquiry.email],
    ['Phone / WhatsApp', enquiry.phone],
    ['Country', enquiry.country],
    ['Travel dates', enquiry.travelDates],
    ['Trip length', enquiry.durationDays ? `${enquiry.durationDays} days` : null],
    ['Travelers', `${enquiry.adults} adult${enquiry.adults === 1 ? '' : 's'}${enquiry.children ? `, ${enquiry.children} child${enquiry.children === 1 ? '' : 'ren'}` : ''}`],
    ['Tour', enquiry.tourTitle],
    ['Hotel', enquiry.hotelTitle],
    ['Preferred destination', enquiry.preferredDestination],
    ['Safari type', enquiry.safariType],
    ['Budget', enquiry.budget],
    ['Accommodation preference', enquiry.accommodationPreference],
    ['How they heard about us', enquiry.hearAboutUs],
  ].filter((row): row is [string, React.ReactNode] => Boolean(row[1]));

  const attribution = enquiry.marketingAttribution;
  const timeline = [
    ['Contacted', enquiry.contactedAt],
    ['Quoted', enquiry.quotedAt],
    ['Confirmed', enquiry.confirmedAt],
    ['Cancelled', enquiry.cancelledAt],
  ].filter(([, value]) => value) as [string, string][];

  return <div className="space-y-6">
    <div className="flex items-center gap-3">
      <button type="button" onClick={onBack} aria-label="Back to enquiries" className="min-h-9 min-w-9 flex items-center justify-center rounded-lg hover:bg-[#f4f1e8] text-[#161f19]"><ArrowLeft className="w-4 h-4" /></button>
      <div><h1 className="font-serif-luxury text-2xl font-bold text-[#161f19]">{enquiry.fullName}</h1><p className="text-xs text-[#707f74]">Submitted {new Date(enquiry.createdAt).toLocaleString()}</p></div>
    </div>
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4 min-w-0">
        <div className="rounded-2xl border border-[#e8e4da] bg-white p-5"><h2 className="font-bold text-sm text-[#161f19] mb-3">Trip details</h2><dl className="grid sm:grid-cols-2 gap-4">{details.map(([label, value]) => <div key={label}><dt className="text-xs font-bold uppercase tracking-wider text-[#9e7120]">{label}</dt><dd className="text-sm text-[#303e35] mt-0.5">{value}</dd></div>)}</dl></div>
        {enquiry.specialRequests ? <div className="rounded-2xl border border-[#e8e4da] bg-white p-5"><h2 className="font-bold text-sm text-[#161f19] mb-2">What would make this trip special</h2><p className="text-sm text-[#405046] whitespace-pre-wrap">{enquiry.specialRequests}</p></div> : null}
        {attribution ? <div className="rounded-2xl border border-[#e8e4da] bg-white p-5"><h2 className="font-bold text-sm text-[#161f19] mb-3">How they found us</h2><dl className="grid sm:grid-cols-2 gap-4"><div><dt className="text-xs font-bold uppercase tracking-wider text-[#9e7120]">Source</dt><dd className="text-sm text-[#303e35] mt-0.5">{attribution.source} / {attribution.medium}</dd></div>{attribution.campaign ? <div><dt className="text-xs font-bold uppercase tracking-wider text-[#9e7120]">Campaign</dt><dd className="text-sm text-[#303e35] mt-0.5">{attribution.campaign}</dd></div> : null}{attribution.landingPage ? <div className="sm:col-span-2 min-w-0"><dt className="text-xs font-bold uppercase tracking-wider text-[#9e7120]">Landing page</dt><dd className="text-sm text-[#303e35] mt-0.5 break-all">{attribution.landingPage}</dd></div> : null}</dl></div> : null}
        {timeline.length ? <div className="rounded-2xl border border-[#e8e4da] bg-white p-5"><h2 className="font-bold text-sm text-[#161f19] mb-3">Pipeline history</h2><ul className="space-y-1.5 text-xs text-[#707f74]">{timeline.map(([label, at]) => <li key={label}>{label} — {new Date(at).toLocaleString()}</li>)}</ul></div> : null}
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl border border-[#e8e4da] bg-white p-5 space-y-4">
          <div><span className="text-xs font-bold uppercase tracking-wider text-[#9e7120] block mb-1.5">Status</span><select value={status} onChange={event => setStatus(event.target.value)} className="w-full min-h-11 rounded-xl border border-[#d7d1c4] bg-[#faf8f2] px-3 font-semibold text-[#303e35]">{STATUSES.map(item => <option key={item}>{item}</option>)}</select></div>
          <div><span className="text-xs font-bold uppercase tracking-wider text-[#9e7120] block mb-1.5">Internal notes</span><textarea value={notes} onChange={event => setNotes(event.target.value)} rows={5} placeholder="Not visible to the client" className="w-full rounded-xl border border-[#d7d1c4] bg-[#faf8f2] px-3 py-2.5 text-sm text-[#161f19] outline-none focus:border-[#8a611d] focus:ring-2 focus:ring-[#8a611d]/20" /></div>
          {error ? <p className="text-xs font-semibold text-rose-700">{error}</p> : null}
          <button type="button" onClick={save} disabled={isSaving} className="w-full min-h-11 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] disabled:opacity-60 text-white font-bold text-sm">{isSaving ? 'Saving…' : saved ? 'Saved' : 'Save changes'}</button>
        </div>
      </div>
    </div>
  </div>;
}

export function AdminEnquiries({ enquiries, onSave }: { enquiries: AnyRecord[]; onSave: (id: string, status: string, notes: string) => Promise<void> }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = enquiries.find(item => item.id === selectedId);
  if (selected) return <EnquiryDetail enquiry={selected} onBack={() => setSelectedId(null)} onSave={onSave} />;

  return <div className="space-y-6">
    <div><div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9e7120]"><Inbox className="w-4 h-4" />CRM</div><h1 className="mt-1 font-serif-luxury text-3xl font-bold text-[#161f19]">Enquiries</h1><p className="mt-2 text-sm text-[#707f74]">Select any lead to see full trip details, marketing source and internal notes.</p></div>
    <div className="overflow-hidden rounded-2xl border border-[#e8e4da] bg-white shadow-sm">
      <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-[#faf8f2] text-[11px] uppercase tracking-wider text-[#707f74]"><tr><th className="px-5 py-4">Lead</th><th className="px-5 py-4">Trip</th><th className="px-5 py-4">Created</th><th className="px-5 py-4">Status</th></tr></thead><tbody className="divide-y divide-[#eeebe2]">{enquiries.map(item => <tr key={item.id} onClick={() => setSelectedId(item.id)} role="button" tabIndex={0} onKeyDown={event => { if (event.key === 'Enter') setSelectedId(item.id); }} aria-label={`View enquiry from ${item.fullName}`} className="cursor-pointer hover:bg-[#faf8f2] transition-colors focus:outline-none focus:bg-[#faf8f2]"><td className="px-5 py-4"><strong className="text-[#161f19]">{item.fullName}</strong><span className="block text-xs text-[#707f74] mt-1">{item.email}</span><span className="block text-xs text-[#707f74]">{item.phone}</span></td><td className="px-5 py-4 text-[#405046]">{item.tourTitle || item.hotelTitle || item.preferredDestination || item.safariType || 'General enquiry'}<span className="block text-xs text-[#9a9184] mt-1">{item.hearAboutUs}</span></td><td className="px-5 py-4 text-[#707f74]">{new Date(item.createdAt).toLocaleDateString()}</td><td className="px-5 py-4"><span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${statusTone[item.status] || 'bg-[#f4f1e8] text-[#405046]'}`}>{item.status}</span></td></tr>)}</tbody></table></div>
      {enquiries.length === 0 ? <div className="py-16 text-center"><Inbox className="w-8 h-8 text-[#c7bfb1] mx-auto mb-2" /><p className="text-sm text-[#707f74]">No enquiries yet.</p></div> : null}
    </div>
  </div>;
}
