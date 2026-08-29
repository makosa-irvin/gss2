import React, { useMemo, useState } from 'react';
import { Enquiry } from '../../types';
import { Search, Mail, Phone, Calendar, Trash2, ChevronDown, ChevronUp, Save, Inbox } from 'lucide-react';

interface AdminEnquiriesProps {
  enquiries: Enquiry[];
  onUpdateStatus: (id: string, status: Enquiry['status'], notes?: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onError: (message: string) => void;
}

const STATUS_OPTIONS: { value: Enquiry['status']; label: string }[] = [
  { value: 'New', label: 'New / Unread' },
  { value: 'Contacted', label: 'Contacted' },
  { value: 'Quoted', label: 'Proposal Quoted' },
  { value: 'Confirmed', label: 'Booked & Confirmed' },
  { value: 'Cancelled', label: 'Cancelled' }
];

const STATUS_STYLE: Record<Enquiry['status'], string> = {
  New: 'bg-amber-100 text-amber-800',
  Contacted: 'bg-sky-100 text-sky-800',
  Quoted: 'bg-violet-100 text-violet-800',
  Confirmed: 'bg-emerald-100 text-emerald-800',
  Cancelled: 'bg-rose-100 text-rose-800'
};

const EnquiryRow: React.FC<{
  enquiry: Enquiry;
  expanded: boolean;
  onToggle: () => void;
  onUpdateStatus: AdminEnquiriesProps['onUpdateStatus'];
  onDelete: AdminEnquiriesProps['onDelete'];
  onError: (message: string) => void;
}> = ({ enquiry, expanded, onToggle, onUpdateStatus, onDelete, onError }) => {
  const [notesDraft, setNotesDraft] = useState(enquiry.notes || '');
  const [savingNotes, setSavingNotes] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const notesChanged = notesDraft !== (enquiry.notes || '');

  const saveNotes = async () => {
    setSavingNotes(true);
    try {
      await onUpdateStatus(enquiry.id, enquiry.status, notesDraft);
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Failed to save notes.');
    } finally {
      setSavingNotes(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete the enquiry from ${enquiry.fullName}? This can't be undone.`)) return;
    setDeleting(true);
    try {
      await onDelete(enquiry.id);
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Failed to delete enquiry.');
      setDeleting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white border border-[#e8e4da] shadow-xs overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 text-left hover:bg-[#faf8f2]/60"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-serif-luxury text-base font-bold text-[#161f19]">{enquiry.fullName}</h3>
            <span className="text-xs text-[#707f74]">{enquiry.country}</span>
          </div>
          <p className="text-xs text-[#707f74] truncate mt-0.5">
            {enquiry.tourTitle || enquiry.hotelTitle || enquiry.preferredDestination || enquiry.safariType || 'General enquiry'}
            {' · '}
            {new Date(enquiry.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`px-2.5 py-1 rounded-full font-bold uppercase text-[10px] ${STATUS_STYLE[enquiry.status]}`}>
            {enquiry.status}
          </span>
          {expanded ? <ChevronUp className="w-4 h-4 text-[#707f74]" /> : <ChevronDown className="w-4 h-4 text-[#707f74]" />}
        </div>
      </button>

      {expanded && (
        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#eeebe2] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#4d5c52] pt-4">
            <div>
              <span className="text-[#707f74] block font-medium mb-0.5 flex items-center gap-1"><Mail className="w-3 h-3" /> Email</span>
              <a href={`mailto:${enquiry.email}`} className="font-semibold text-[#161f19] hover:underline break-all">{enquiry.email}</a>
            </div>
            <div>
              <span className="text-[#707f74] block font-medium mb-0.5 flex items-center gap-1"><Phone className="w-3 h-3" /> Phone / WhatsApp</span>
              <a href={`tel:${enquiry.phone}`} className="font-semibold text-[#161f19] hover:underline">{enquiry.phone}</a>
            </div>
            <div>
              <span className="text-[#707f74] block font-medium mb-0.5 flex items-center gap-1"><Calendar className="w-3 h-3" /> Travel dates</span>
              <span className="font-semibold text-[#161f19]">{enquiry.travelDates || 'Flexible'}{enquiry.durationDays ? ` (${enquiry.durationDays} days)` : ''}</span>
            </div>
            <div>
              <span className="text-[#707f74] block font-medium mb-0.5">Travelers</span>
              <span className="font-semibold text-[#161f19]">
                {enquiry.numberOfTravelers.adults} adults{enquiry.numberOfTravelers.children > 0 ? `, ${enquiry.numberOfTravelers.children} children` : ''}
              </span>
            </div>
            <div>
              <span className="text-[#707f74] block font-medium mb-0.5">Budget</span>
              <span className="font-semibold text-[#9e7120]">{enquiry.budget || 'Not specified'}</span>
            </div>
            <div>
              <span className="text-[#707f74] block font-medium mb-0.5">Accommodation preference</span>
              <span className="font-semibold text-[#161f19]">{enquiry.accommodationPreference || 'Open'}</span>
            </div>
            <div>
              <span className="text-[#707f74] block font-medium mb-0.5">Heard about us via</span>
              <span className="font-semibold text-[#161f19]">{enquiry.hearAboutUs || 'Not specified'}</span>
            </div>
            <div>
              <span className="text-[#707f74] block font-medium mb-0.5">Enquiry ID</span>
              <span className="font-mono text-[#a89f8f]">{enquiry.id}</span>
            </div>
          </div>

          {enquiry.specialRequests && (
            <div className="p-3.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] text-xs text-[#5d6e62]">
              <strong className="text-[#161f19] block mb-1">Special requests</strong>
              {enquiry.specialRequests}
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-end gap-3 pt-1">
            <label className="flex-1 min-w-0">
              <span className="text-xs font-bold uppercase tracking-wider text-[#76541a] mb-1.5 block">Internal notes</span>
              <textarea
                value={notesDraft}
                onChange={(e) => setNotesDraft(e.target.value)}
                rows={2}
                placeholder="Not visible to the customer - call notes, quote sent, follow-up date..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none resize-y"
              />
            </label>
            <div className="flex items-center gap-2 shrink-0">
              <select
                value={enquiry.status}
                onChange={(e) =>
                  onUpdateStatus(enquiry.id, e.target.value as Enquiry['status'], notesDraft).catch((err) =>
                    onError(err instanceof Error ? err.message : 'Failed to update status.')
                  )
                }
                className="min-h-11 px-3 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-xs font-bold text-[#161f19]"
              >
                {STATUS_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={saveNotes}
                disabled={!notesChanged || savingNotes}
                className="min-h-11 px-3.5 rounded-xl bg-[#1b4332] hover:bg-[#123524] disabled:opacity-40 text-white flex items-center gap-1.5 text-xs font-bold"
              >
                <Save className="w-3.5 h-3.5" /> {savingNotes ? 'Saving…' : 'Save note'}
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                aria-label="Delete enquiry"
                className="min-h-11 min-w-11 flex items-center justify-center rounded-xl bg-rose-50 hover:bg-rose-100 disabled:opacity-40 text-rose-700 border border-rose-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const AdminEnquiries: React.FC<AdminEnquiriesProps> = ({ enquiries, onUpdateStatus, onDelete, onError }) => {
  const [statusFilter, setStatusFilter] = useState<'all' | Enquiry['status']>('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = enquiries.filter((e) => {
      if (statusFilter !== 'all' && e.status !== statusFilter) return false;
      if (!q) return true;
      return (
        e.fullName.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.phone.toLowerCase().includes(q) ||
        (e.tourTitle || '').toLowerCase().includes(q) ||
        (e.hotelTitle || '').toLowerCase().includes(q)
      );
    });
    rows = [...rows].sort((a, b) => {
      const diff = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      return sort === 'newest' ? -diff : diff;
    });
    return rows;
  }, [enquiries, statusFilter, query, sort]);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
          <Inbox className="w-4 h-4" />
          <span>Customer relationship management</span>
        </div>
        <h1 className="font-serif-luxury text-3xl font-bold text-[#161f19] mt-1">Enquiries</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <label className="relative flex-1">
          <span className="sr-only">Search enquiries</span>
          <Search className="w-4 h-4 text-[#707f74] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, email, phone, or tour…"
            className="w-full min-h-11 pl-10 pr-4 rounded-xl bg-white border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
          />
        </label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as 'newest' | 'oldest')}
          className="min-h-11 px-3.5 rounded-xl bg-white border border-[#ded8cb] text-sm font-semibold text-[#161f19]"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {(['all', ...STATUS_OPTIONS.map((o) => o.value)] as const).map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setStatusFilter(status)}
            className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              statusFilter === status
                ? 'bg-[#b3822a] text-white shadow-sm'
                : 'bg-white text-[#5d6e62] border border-[#e8e4da] hover:text-[#161f19]'
            }`}
          >
            {status === 'all' ? `All (${enquiries.length})` : `${status} (${enquiries.filter((e) => e.status === status).length})`}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-white border border-dashed border-[#ded8cb]">
            <Inbox className="w-8 h-8 text-[#c7bfb1] mx-auto mb-2" />
            <p className="text-sm text-[#707f74]">
              {enquiries.length === 0 ? 'No enquiries yet.' : 'No enquiries match your search or filter.'}
            </p>
          </div>
        ) : (
          filtered.map((enq) => (
            <EnquiryRow
              key={enq.id}
              enquiry={enq}
              expanded={expandedId === enq.id}
              onToggle={() => setExpandedId(expandedId === enq.id ? null : enq.id)}
              onUpdateStatus={onUpdateStatus}
              onDelete={onDelete}
              onError={onError}
            />
          ))
        )}
      </div>
    </div>
  );
};
