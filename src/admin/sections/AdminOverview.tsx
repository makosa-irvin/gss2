import React from 'react';
import { Tour, Hotel, Enquiry } from '../../types';
import { Inbox, TrendingUp, MessageCircle, Compass, ArrowRight, Clock } from 'lucide-react';

interface AdminOverviewProps {
  tours: Tour[];
  hotels: Hotel[];
  enquiries: Enquiry[];
  whatsapp: string;
  onGoToEnquiries: () => void;
  onGoToTours: () => void;
}

const STATUS_ORDER: Enquiry['status'][] = ['New', 'Contacted', 'Quoted', 'Confirmed'];
const STATUS_COLOR: Record<Enquiry['status'], string> = {
  New: 'bg-amber-400',
  Contacted: 'bg-sky-400',
  Quoted: 'bg-violet-400',
  Confirmed: 'bg-emerald-500',
  Cancelled: 'bg-rose-300'
};

function timeAgo(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${Math.max(mins, 0)}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}

export const AdminOverview: React.FC<AdminOverviewProps> = ({
  tours,
  hotels,
  enquiries,
  whatsapp,
  onGoToEnquiries,
  onGoToTours
}) => {
  const activeEnquiries = enquiries.filter((e) => e.status !== 'Cancelled');
  const last7Days = enquiries.filter((e) => Date.now() - new Date(e.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000);
  const statusCounts = STATUS_ORDER.map((status) => ({
    status,
    count: enquiries.filter((e) => e.status === status).length
  }));
  const maxStatusCount = Math.max(1, ...statusCounts.map((s) => s.count));

  const tourEnquiryCounts = new Map<string, number>();
  enquiries.forEach((e) => {
    if (e.tourId) tourEnquiryCounts.set(e.tourId, (tourEnquiryCounts.get(e.tourId) || 0) + 1);
  });
  const topTours = tours
    .map((t) => ({ tour: t, count: tourEnquiryCounts.get(t.id) || 0 }))
    .filter((t) => t.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
          <TrendingUp className="w-4 h-4" />
          <span>Business snapshot</span>
        </div>
        <h1 className="font-serif-luxury text-3xl font-bold text-[#161f19] mt-1">Dashboard</h1>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-1 shadow-xs">
          <span className="text-xs text-[#707f74] uppercase tracking-wider block">Active safaris</span>
          <span className="text-3xl font-extrabold font-serif-luxury text-[#161f19]">{tours.length}</span>
          <span className="text-[11px] text-[#9e7120] block font-medium">Kenya, Tanzania, Zanzibar</span>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-1 shadow-xs">
          <span className="text-xs text-[#707f74] uppercase tracking-wider block">Hotels &amp; resorts</span>
          <span className="text-3xl font-extrabold font-serif-luxury text-[#1b4332]">{hotels.length}</span>
          <span className="text-[11px] text-[#1b4332] block font-medium">Listed on the site</span>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-1 shadow-xs">
          <span className="text-xs text-[#707f74] uppercase tracking-wider block">Open enquiries</span>
          <span className="text-3xl font-extrabold font-serif-luxury text-[#161f19]">{activeEnquiries.length}</span>
          <span className="text-[11px] text-[#707f74] block">
            {statusCounts[0].count} awaiting first reply
          </span>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-1 shadow-xs">
          <span className="text-xs text-[#707f74] uppercase tracking-wider block">New this week</span>
          <span className="text-3xl font-extrabold font-serif-luxury text-[#161f19]">{last7Days.length}</span>
          <span className="text-[11px] text-[#707f74] block flex items-center gap-1">
            <MessageCircle className="w-3 h-3 text-[#128c7e]" /> {whatsapp}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Enquiry funnel */}
        <div className="lg:col-span-3 p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-5 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-luxury text-lg font-bold text-[#161f19]">Enquiry pipeline</h3>
            <button onClick={onGoToEnquiries} className="text-xs text-[#9e7120] font-bold hover:underline flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          {enquiries.length === 0 ? (
            <p className="text-sm text-[#707f74]">No enquiries yet. New submissions from the website will appear here.</p>
          ) : (
            <div className="space-y-3">
              {statusCounts.map(({ status, count }) => (
                <div key={status} className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#405046] w-20 shrink-0">{status}</span>
                  <div className="flex-1 h-6 rounded-full bg-[#f4f1e8] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${STATUS_COLOR[status]} transition-all`}
                      style={{ width: `${(count / maxStatusCount) * 100}%`, minWidth: count > 0 ? '1.5rem' : 0 }}
                    />
                  </div>
                  <span className="text-xs font-bold text-[#161f19] w-6 text-right shrink-0">{count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top requested tours */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-luxury text-lg font-bold text-[#161f19]">Most requested</h3>
            <button onClick={onGoToTours} className="text-xs text-[#9e7120] font-bold hover:underline flex items-center gap-1">
              Manage <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          {topTours.length === 0 ? (
            <p className="text-sm text-[#707f74]">No tour-linked enquiries yet.</p>
          ) : (
            <div className="space-y-3">
              {topTours.map(({ tour, count }) => (
                <div key={tour.id} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#faf8f2] border border-[#e3ddcf] flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4 text-[#9e7120]" />
                  </div>
                  <span className="text-sm text-[#303e35] font-medium truncate flex-1">{tour.title}</span>
                  <span className="text-xs font-bold text-[#9e7120] shrink-0">{count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent activity */}
      <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <h3 className="font-serif-luxury text-lg font-bold text-[#161f19] flex items-center gap-2">
            <Inbox className="w-4 h-4 text-[#9e7120]" /> Recent enquiries
          </h3>
          <button onClick={onGoToEnquiries} className="text-xs text-[#9e7120] font-bold hover:underline">
            View all enquiries →
          </button>
        </div>
        {enquiries.length === 0 ? (
          <div className="py-8 text-center text-sm text-[#707f74]">
            Nothing yet — enquiries submitted through the website will show up here as soon as they arrive.
          </div>
        ) : (
          <div className="divide-y divide-[#eeebe2]">
            {enquiries.slice(0, 6).map((enq) => (
              <div key={enq.id} className="py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-sm font-bold text-[#161f19] block truncate">{enq.fullName}</span>
                  <span className="text-xs text-[#707f74] block truncate">
                    {enq.tourTitle || enq.hotelTitle || enq.preferredDestination || 'General enquiry'}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] text-[#a89f8f] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {timeAgo(enq.createdAt)}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-bold uppercase text-[10px] ${
                      enq.status === 'New' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {enq.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
