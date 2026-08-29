import React, { useMemo, useState } from 'react';
import { Testimonial } from '../../types';
import { Field, TextInput, TextArea, NumberInput, SelectInput, ToggleField, SectionCard, FormActionBar, FormGrid } from '../shared/AdminForm';
import { Plus, Edit2, Trash2, Search, MessageSquare, ArrowLeft, Star } from 'lucide-react';

const PLATFORMS = ['TripAdvisor', 'Google Reviews', 'Direct Feedback', 'SafariBookings'] as const;
type TestimonialDraft = Omit<Testimonial, 'id'>;

function draftFromTestimonial(t?: Testimonial | null): TestimonialDraft {
  if (t) {
    const { id, ...rest } = t;
    return rest;
  }
  return {
    reviewerName: '', reviewerCountry: '', avatarUrl: '', rating: 5, tourTaken: '',
    reviewText: '', date: new Date().toISOString().slice(0, 10), featured: false,
    platform: 'Direct Feedback', published: false
  };
}

const TestimonialForm: React.FC<{
  testimonial?: Testimonial | null;
  onSave: (draft: TestimonialDraft) => Promise<void>;
  onCancel: () => void;
}> = ({ testimonial, onSave, onCancel }) => {
  const [draft, setDraft] = useState<TestimonialDraft>(() => draftFromTestimonial(testimonial));
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set = <K extends keyof TestimonialDraft>(key: K, value: TestimonialDraft[K]) => setDraft((d) => ({ ...d, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!draft.reviewerName.trim() || !draft.reviewText.trim()) {
      setError('Reviewer name and review text are required.');
      return;
    }
    setIsSaving(true);
    try {
      await onSave(draft);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save testimonial.');
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onCancel} aria-label="Back to testimonials" className="min-h-9 min-w-9 flex items-center justify-center rounded-lg hover:bg-[#f4f1e8] text-[#161f19]">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-serif-luxury text-2xl font-bold text-[#161f19]">{testimonial ? 'Edit testimonial' : 'New testimonial'}</h1>
      </div>

      <SectionCard title="Review">
        <FormGrid>
          <Field label="Reviewer name" required>
            <TextInput value={draft.reviewerName} onChange={(v) => set('reviewerName', v)} required />
          </Field>
          <Field label="Reviewer country">
            <TextInput value={draft.reviewerCountry} onChange={(v) => set('reviewerCountry', v)} placeholder="United States" />
          </Field>
          <Field label="Tour taken">
            <TextInput value={draft.tourTaken} onChange={(v) => set('tourTaken', v)} placeholder="3-Day Masai Mara Luxury Safari" />
          </Field>
          <Field label="Date">
            <TextInput value={draft.date.slice(0, 10)} onChange={(v) => set('date', v)} type="date" />
          </Field>
          <Field label="Platform">
            <SelectInput value={draft.platform} onChange={(v) => set('platform', v as Testimonial['platform'])} options={PLATFORMS} />
          </Field>
          <Field label="Rating (1-5)">
            <NumberInput value={draft.rating} onChange={(v) => set('rating', Math.min(5, Math.max(1, v)))} min={1} max={5} />
          </Field>
          <Field label="Avatar image URL">
            <TextInput value={draft.avatarUrl} onChange={(v) => set('avatarUrl', v)} type="url" />
          </Field>
        </FormGrid>
        <Field label="Review text" required>
          <TextArea value={draft.reviewText} onChange={(v) => set('reviewText', v)} rows={4} />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ToggleField label="Featured" description="Shown prominently on the homepage" checked={draft.featured} onChange={(v) => set('featured', v)} />
          <ToggleField label="Published" description="Visible to website visitors" checked={!!draft.published} onChange={(v) => set('published', v)} />
        </div>
      </SectionCard>

      <FormActionBar onCancel={onCancel} isSaving={isSaving} error={error} saveLabel={testimonial ? 'Save changes' : 'Publish testimonial'} />
    </form>
  );
};

interface AdminTestimonialsProps {
  testimonials: Testimonial[];
  onCreate: (draft: Omit<Testimonial, 'id'>) => Promise<void>;
  onUpdate: (id: string, updated: Partial<Testimonial>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onError: (message: string) => void;
}

export const AdminTestimonials: React.FC<AdminTestimonialsProps> = ({ testimonials, onCreate, onUpdate, onDelete, onError }) => {
  const [mode, setMode] = useState<'list' | 'create' | 'edit'>('list');
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [query, setQuery] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return testimonials;
    return testimonials.filter((t) => t.reviewerName.toLowerCase().includes(q));
  }, [testimonials, query]);

  const handleDelete = async (t: Testimonial) => {
    if (!window.confirm(`Delete the testimonial from "${t.reviewerName}"? This can't be undone.`)) return;
    setDeletingId(t.id);
    try {
      await onDelete(t.id);
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Failed to delete testimonial.');
    } finally {
      setDeletingId(null);
    }
  };

  if (mode === 'create') {
    return <TestimonialForm onCancel={() => setMode('list')} onSave={async (draft) => { await onCreate(draft); setMode('list'); }} />;
  }
  if (mode === 'edit' && editing) {
    return (
      <TestimonialForm
        testimonial={editing}
        onCancel={() => { setMode('list'); setEditing(null); }}
        onSave={async (draft) => { await onUpdate(editing.id, draft); setMode('list'); setEditing(null); }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
            <MessageSquare className="w-4 h-4" />
            <span>Content management</span>
          </div>
          <h1 className="font-serif-luxury text-3xl font-bold text-[#161f19] mt-1">Testimonials ({testimonials.length})</h1>
        </div>
        <button onClick={() => setMode('create')} className="inline-flex items-center gap-1.5 min-h-11 px-4 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-bold text-sm shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Add testimonial</span>
        </button>
      </div>

      <label className="relative block max-w-md">
        <span className="sr-only">Search testimonials</span>
        <Search className="w-4 h-4 text-[#707f74] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by reviewer name…" className="w-full min-h-11 pl-10 pr-4 rounded-xl bg-white border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none" />
      </label>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-white border border-dashed border-[#ded8cb]">
            <MessageSquare className="w-8 h-8 text-[#c7bfb1] mx-auto mb-2" />
            <p className="text-sm text-[#707f74]">{testimonials.length === 0 ? 'No testimonials yet — add your first one.' : 'No testimonials match your search.'}</p>
          </div>
        ) : (
          filtered.map((t) => (
            <div key={t.id} className="p-4 rounded-2xl bg-white border border-[#e8e4da] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-serif-luxury font-bold text-sm text-[#161f19]">{t.reviewerName}</h4>
                  <span className="flex items-center gap-0.5 text-[#b77905]">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </span>
                  {!t.published && <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">Draft</span>}
                  {t.featured && <span className="px-2 py-0.5 rounded-full bg-[#eef7f2] text-[#1b4332] text-[10px] font-bold uppercase">Featured</span>}
                </div>
                <p className="text-xs text-[#707f74] line-clamp-1 mt-0.5">{t.reviewText}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => { setEditing(t); setMode('edit'); }} title="Edit testimonial" className="p-2 rounded-lg bg-[#faf8f2] hover:bg-[#eeebe2] text-[#161f19] border border-[#ded8cb]">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(t)} disabled={deletingId === t.id} title="Delete testimonial" className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 disabled:opacity-40 text-rose-700 border border-rose-200">
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
