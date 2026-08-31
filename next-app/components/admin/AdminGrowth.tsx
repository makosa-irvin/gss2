'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BarChart3, Eye, FileCheck2, MousePointerClick, Users } from 'lucide-react';

type AnyRecord = Record<string, any>;
type MetricListItem = { label: string; value: number };
type PeriodAnalytics = { visitors: number; pageViews: number; shortlistAdds: number; enquiryOpens: number; enquirySubmits: number; whatsappClicks: number; topPages: MetricListItem[]; sources: MetricListItem[]; campaigns: MetricListItem[] };
type GrowthResponse = { days: number; currentStart: string; previousStart: string; generatedAt: string; current: PeriodAnalytics; previous: PeriodAnalytics };
const pct = (value: number) => `${Math.round(value * 100)}%`;
const change = (current: number, previous: number) => previous === 0 ? (current > 0 ? 1 : 0) : (current - previous) / previous;
async function api(path: string) { const response = await fetch(`/api/backend${path}`, { credentials: 'include' }); if (!response.ok) throw new Error('Request failed'); return response.json(); }

function MetricCard({ label, value, delta, helper, icon: Icon }: { label: string; value: string | number; delta?: number; helper?: string; icon: React.ComponentType<{ className?: string }> }) {
  return <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm"><div className="flex items-start justify-between gap-3"><div><p className="text-[11px] font-bold uppercase tracking-widest text-ink-subtle">{label}</p><p className="mt-2 text-3xl font-bold text-ink-strong">{value}</p></div><div className="rounded-xl bg-surface-soft p-2.5 text-brand-deep"><Icon className="h-5 w-5" /></div></div>{delta !== undefined ? <div className={`mt-3 flex items-center gap-1 text-xs font-semibold ${delta >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>{delta >= 0 ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}{Math.abs(Math.round(delta * 100))}% vs previous period</div> : null}{helper ? <p className="mt-2 text-xs leading-relaxed text-ink-subtle">{helper}</p> : null}</div>;
}

function RankedList({ title, items, empty }: { title: string; items: MetricListItem[]; empty: string }) {
  const max = Math.max(...items.map(item => item.value), 1);
  return <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm"><h3 className="font-serif-luxury text-xl font-bold text-ink-strong">{title}</h3><div className="mt-5 space-y-4">{items.length === 0 ? <p className="text-sm text-ink-subtle">{empty}</p> : null}{items.map(item => <div key={item.label}><div className="mb-1.5 flex items-center justify-between gap-3 text-sm"><span className="truncate font-semibold text-ink-muted" title={item.label}>{item.label}</span><span className="font-bold text-ink-strong">{item.value}</span></div><div className="h-2 overflow-hidden rounded-full bg-surface-soft"><div className="h-full rounded-full bg-brand-strong" style={{ width: `${Math.max(4, (item.value / max) * 100)}%` }} /></div></div>)}</div></div>;
}

export function AdminGrowth({ enquiries }: { enquiries: AnyRecord[] }) {
  const [days, setDays] = useState(30);
  const [data, setData] = useState<GrowthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true); setError(null);
    api(`/api/analytics/growth?days=${days}`).then(result => { if (!cancelled) setData(result); }).catch(() => { if (!cancelled) setError('Could not load visitor analytics. Enquiry metrics below still use CRM data.'); }).finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [days]);

  const crm = useMemo(() => {
    const now = Date.now(); const periodMs = days * 24 * 60 * 60 * 1000; const currentStart = now - periodMs; const previousStart = currentStart - periodMs;
    const current = enquiries.filter(enquiry => new Date(enquiry.createdAt).getTime() >= currentStart);
    const previous = enquiries.filter(enquiry => { const time = new Date(enquiry.createdAt).getTime(); return time >= previousStart && time < currentStart; });
    const confirmed = current.filter(enquiry => enquiry.status === 'Confirmed').length;
    const quoted = current.filter(enquiry => ['Quoted', 'Confirmed'].includes(enquiry.status)).length;
    const contacted = current.filter(enquiry => ['Contacted', 'Quoted', 'Confirmed'].includes(enquiry.status)).length;
    const nonSafariBookings = current.filter(enquiry => enquiry.marketingAttribution?.source !== 'safaribookings').length;
    const sources = new Map<string, number>(); const tours = new Map<string, number>();
    current.forEach(enquiry => { const source = enquiry.marketingAttribution ? `${enquiry.marketingAttribution.source} / ${enquiry.marketingAttribution.medium}` : (enquiry.hearAboutUs || 'unknown'); sources.set(source, (sources.get(source) ?? 0) + 1); const tour = enquiry.tourTitle || enquiry.preferredDestination || 'General enquiry'; tours.set(tour, (tours.get(tour) ?? 0) + 1); });
    const ranked = (map: Map<string, number>) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([label, value]) => ({ label, value }));
    return { current, previous, confirmed, quoted, contacted, websiteLedShare: current.length ? nonSafariBookings / current.length : 0, sources: ranked(sources), tours: ranked(tours) };
  }, [enquiries, days]);

  const visitors = data?.current.visitors ?? 0;
  const visitorConversion = visitors ? crm.current.length / visitors : 0;
  const previousVisitors = data?.previous.visitors ?? 0;
  const previousVisitorConversion = previousVisitors ? crm.previous.length / previousVisitors : 0;

  return <div className="space-y-7">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-strong">Growth intelligence</p><h1 className="mt-1 font-serif-luxury text-3xl font-bold text-ink-strong">Website growth</h1><p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">Follow acquisition, enquiry quality and CRM progression. Visitor metrics include only travellers who allowed analytics; enquiry totals include every submitted enquiry.</p></div><div className="inline-flex rounded-xl border border-border-strong bg-surface p-1 shadow-sm">{[7, 30, 90].map(value => <button key={value} type="button" onClick={() => setDays(value)} className={`rounded-lg px-3 py-2 text-xs font-bold ${days === value ? 'bg-action text-white' : 'text-ink-muted hover:bg-surface-soft'}`}>{value} days</button>)}</div></div>
    {error ? <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{error}</div> : null}
    {loading && !data ? <div className="rounded-xl border border-border bg-surface p-5 text-sm text-ink-muted">Loading growth metrics…</div> : null}
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><MetricCard label="Consented visitors" value={visitors} delta={data ? change(data.current.visitors, data.previous.visitors) : undefined} helper="Anonymous browser sessions with analytics permission." icon={Users} /><MetricCard label="Enquiries" value={crm.current.length} delta={change(crm.current.length, crm.previous.length)} helper="All CRM enquiries, regardless of analytics consent." icon={FileCheck2} /><MetricCard label="Visitor → enquiry" value={pct(visitorConversion)} delta={previousVisitorConversion ? change(visitorConversion, previousVisitorConversion) : undefined} helper="Directional only because the visitor denominator is consented traffic." icon={MousePointerClick} /><MetricCard label="Website-led share" value={pct(crm.websiteLedShare)} helper="Share of enquiries not attributed to SafariBookings. Use this to track marketplace dependence." icon={BarChart3} /></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><MetricCard label="Page views" value={data?.current.pageViews ?? 0} delta={data ? change(data.current.pageViews, data.previous.pageViews) : undefined} icon={Eye} /><MetricCard label="Shortlist adds" value={data?.current.shortlistAdds ?? 0} delta={data ? change(data.current.shortlistAdds, data.previous.shortlistAdds) : undefined} icon={MousePointerClick} /><MetricCard label="Quoted" value={crm.quoted} helper="Leads that reached Quoted or Confirmed." icon={FileCheck2} /><MetricCard label="Confirmed" value={crm.confirmed} helper="Confirmed CRM enquiries in this period." icon={FileCheck2} /></div>
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm"><div className="flex items-center justify-between gap-3"><div><h2 className="font-serif-luxury text-xl font-bold text-ink-strong">CRM funnel</h2><p className="mt-1 text-xs text-ink-subtle">Based on the current status of enquiries created in the selected period.</p></div><span className="text-xs font-bold text-brand-strong">{days}-day cohort</span></div><div className="mt-5 grid gap-3 sm:grid-cols-4">{[['Enquiries', crm.current.length], ['Contacted+', crm.contacted], ['Quoted+', crm.quoted], ['Confirmed', crm.confirmed]].map(([label, value]) => <div key={String(label)} className="rounded-xl bg-page p-4"><p className="text-xs font-semibold text-ink-subtle">{label}</p><p className="mt-1 text-2xl font-bold text-ink-strong">{value}</p><p className="mt-1 text-[11px] text-ink-subtle">{crm.current.length ? pct(Number(value) / crm.current.length) : '0%'} of enquiries</p></div>)}</div></div>
    <div className="grid gap-5 lg:grid-cols-2"><RankedList title="Enquiries by source" items={crm.sources} empty="No attributed enquiries in this period yet." /><RankedList title="Top enquiry interests" items={crm.tours} empty="No safari or destination enquiries in this period yet." /><RankedList title="Most viewed pages" items={data?.current.topPages ?? []} empty="No consented page-view data in this period yet." /><RankedList title="Active campaigns" items={data?.current.campaigns ?? []} empty="No UTM campaign traffic recorded in this period yet." /></div>
  </div>;
}
