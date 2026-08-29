import React, { useMemo, useState } from 'react';
import { Hotel } from '../../types';
import { AdminHotelForm } from './AdminHotelForm';
import { Plus, Edit2, Trash2, Search, Palmtree } from 'lucide-react';

interface AdminHotelsProps {
  hotels: Hotel[];
  onCreate: (draft: Omit<Hotel, 'id'>) => Promise<void>;
  onUpdate: (id: string, updated: Partial<Hotel>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onError: (message: string) => void;
}

export const AdminHotels: React.FC<AdminHotelsProps> = ({ hotels, onCreate, onUpdate, onDelete, onError }) => {
  const [mode, setMode] = useState<'list' | 'create' | 'edit'>('list');
  const [editingHotel, setEditingHotel] = useState<Hotel | null>(null);
  const [query, setQuery] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return hotels;
    return hotels.filter((h) => h.name.toLowerCase().includes(q) || h.location.toLowerCase().includes(q));
  }, [hotels, query]);

  const handleDelete = async (hotel: Hotel) => {
    if (!window.confirm(`Delete "${hotel.name}"? This can't be undone.`)) return;
    setDeletingId(hotel.id);
    try {
      await onDelete(hotel.id);
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Failed to delete hotel.');
    } finally {
      setDeletingId(null);
    }
  };

  if (mode === 'create') {
    return <AdminHotelForm onCancel={() => setMode('list')} onSave={async (draft) => { await onCreate(draft); setMode('list'); }} />;
  }
  if (mode === 'edit' && editingHotel) {
    return (
      <AdminHotelForm
        hotel={editingHotel}
        onCancel={() => { setMode('list'); setEditingHotel(null); }}
        onSave={async (draft) => { await onUpdate(editingHotel.id, draft); setMode('list'); setEditingHotel(null); }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
            <Palmtree className="w-4 h-4" />
            <span>Content management</span>
          </div>
          <h1 className="font-serif-luxury text-3xl font-bold text-[#161f19] mt-1">Hotels &amp; Resorts ({hotels.length})</h1>
        </div>
        <button onClick={() => setMode('create')} className="inline-flex items-center gap-1.5 min-h-11 px-4 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-bold text-sm shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Add hotel</span>
        </button>
      </div>

      <label className="relative block max-w-md">
        <span className="sr-only">Search hotels</span>
        <Search className="w-4 h-4 text-[#707f74] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or location…" className="w-full min-h-11 pl-10 pr-4 rounded-xl bg-white border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none" />
      </label>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-white border border-dashed border-[#ded8cb]">
            <Palmtree className="w-8 h-8 text-[#c7bfb1] mx-auto mb-2" />
            <p className="text-sm text-[#707f74]">{hotels.length === 0 ? 'No hotels yet — add your first one.' : 'No hotels match your search.'}</p>
          </div>
        ) : (
          filtered.map((hotel) => (
            <div key={hotel.id} className="p-4 rounded-2xl bg-white border border-[#e8e4da] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3 min-w-0">
                <img src={hotel.images[0]} alt={hotel.name} className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#f4f1e8]" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-serif-luxury font-bold text-sm text-[#161f19] truncate">{hotel.name}</h4>
                    {!hotel.published && <span className="shrink-0 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">Draft</span>}
                  </div>
                  <span className="text-xs text-[#1b4332] font-semibold block">KSH {(hotel.priceFromKES ?? 0).toLocaleString()} / night</span>
                  <span className="text-xs text-[#707f74]">{hotel.location}, {hotel.country}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => { setEditingHotel(hotel); setMode('edit'); }} title="Edit hotel" className="p-2 rounded-lg bg-[#faf8f2] hover:bg-[#eeebe2] text-[#161f19] border border-[#ded8cb]">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(hotel)} disabled={deletingId === hotel.id} title="Delete hotel" className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 disabled:opacity-40 text-rose-700 border border-rose-200">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
