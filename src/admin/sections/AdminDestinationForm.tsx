import React, { useState } from 'react';
import { Destination } from '../../types';
import {
  Field,
  TextInput,
  TextArea,
  SelectInput,
  ToggleField,
  ChipListEditor,
  ImageListEditor,
  SectionCard,
  FormActionBar,
  FormGrid
} from '../shared/AdminForm';
import { Plus, Trash2, ArrowLeft } from 'lucide-react';

const COUNTRIES = ['Kenya', 'Tanzania', 'Zanzibar'] as const;
type DestinationDraft = Omit<Destination, 'id'>;

const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function draftFromDestination(dest?: Destination | null): DestinationDraft {
  if (dest) {
    const { id, ...rest } = dest;
    return rest;
  }
  return {
    name: '', slug: '', country: 'Kenya', subtitle: '', description: '',
    heroImage: '', gallery: [], bestTimeToVisit: 'Year-round', wildlife: [], activities: [],
    recommendedDuration: '2-3 days', thingsToDo: [], whereToStay: '',
    featured: false, faqs: [], seo: { title: '', description: '' }, published: false
  };
}

interface AdminDestinationFormProps {
  destination?: Destination | null;
  onSave: (draft: DestinationDraft) => Promise<void>;
  onCancel: () => void;
}

export const AdminDestinationForm: React.FC<AdminDestinationFormProps> = ({ destination, onSave, onCancel }) => {
  const [draft, setDraft] = useState<DestinationDraft>(() => draftFromDestination(destination));
  const [slugTouched, setSlugTouched] = useState(!!destination);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof DestinationDraft>(key: K, value: DestinationDraft[K]) => setDraft((d) => ({ ...d, [key]: value }));

  const handleNameChange = (name: string) => {
    set('name', name);
    if (!slugTouched) set('slug', slugify(name));
  };

  const updateFaq = (idx: number, patch: Partial<{ question: string; answer: string }>) =>
    set('faqs', draft.faqs.map((f, i) => (i === idx ? { ...f, ...patch } : f)));
  const addFaq = () => set('faqs', [...draft.faqs, { question: '', answer: '' }]);
  const removeFaq = (idx: number) => set('faqs', draft.faqs.filter((_, i) => i !== idx));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!draft.name.trim() || !draft.slug.trim()) {
      setError('Name and slug are required.');
      return;
    }
    setIsSaving(true);
    try {
      await onSave({
        ...draft,
        seo: { title: draft.seo.title || draft.name, description: draft.seo.description || draft.description }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save destination.');
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onCancel} aria-label="Back to destinations" className="min-h-9 min-w-9 flex items-center justify-center rounded-lg hover:bg-[#f4f1e8] text-[#161f19]">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-serif-luxury text-2xl font-bold text-[#161f19]">{destination ? 'Edit destination' : 'New destination'}</h1>
      </div>

      <SectionCard title="Basics">
        <FormGrid>
          <Field label="Name" required>
            <TextInput value={draft.name} onChange={handleNameChange} placeholder="e.g. Maasai Mara National Reserve" required />
          </Field>
          <Field label="URL slug" required>
            <TextInput value={draft.slug} onChange={(v) => { setSlugTouched(true); set('slug', slugify(v)); }} required />
          </Field>
          <Field label="Country">
            <SelectInput value={draft.country} onChange={(v) => set('country', v as Destination['country'])} options={COUNTRIES} />
          </Field>
          <Field label="Recommended duration">
            <TextInput value={draft.recommendedDuration} onChange={(v) => set('recommendedDuration', v)} placeholder="2 - 4 Days" />
          </Field>
          <Field label="Best time to visit">
            <TextInput value={draft.bestTimeToVisit} onChange={(v) => set('bestTimeToVisit', v)} placeholder="July to October for the Great Migration" />
          </Field>
        </FormGrid>
        <Field label="Subtitle" hint="Short tagline shown under the name">
          <TextInput value={draft.subtitle} onChange={(v) => set('subtitle', v)} placeholder="The Crown Jewel of African Wildlife" />
        </Field>
        <Field label="Description">
          <TextArea value={draft.description} onChange={(v) => set('description', v)} rows={3} />
        </Field>
        <Field label="Where to stay">
          <TextArea value={draft.whereToStay} onChange={(v) => set('whereToStay', v)} rows={2} />
        </Field>
        <ToggleField label="Featured" description="Highlighted on the homepage" checked={draft.featured} onChange={(v) => set('featured', v)} />
        <ToggleField label="Published" description="Visible to website visitors" checked={!!draft.published} onChange={(v) => set('published', v)} />
      </SectionCard>

      <SectionCard title="Photos">
        <Field label="Hero image URL">
          <TextInput value={draft.heroImage} onChange={(v) => set('heroImage', v)} type="url" />
        </Field>
        <Field label="Gallery">
          <ImageListEditor images={draft.gallery} onChange={(v) => set('gallery', v)} />
        </Field>
      </SectionCard>

      <SectionCard title="Wildlife & activities">
        <Field label="Iconic wildlife">
          <ChipListEditor items={draft.wildlife} onChange={(v) => set('wildlife', v)} placeholder="e.g. Lions, Cheetahs, Wildebeest" />
        </Field>
        <Field label="Activities">
          <ChipListEditor items={draft.activities} onChange={(v) => set('activities', v)} placeholder="e.g. Hot air balloon safari" />
        </Field>
        <Field label="Things to do">
          <ChipListEditor items={draft.thingsToDo || []} onChange={(v) => set('thingsToDo', v)} placeholder="e.g. Visit a Maasai village" />
        </Field>
      </SectionCard>

      <SectionCard title="Frequently asked questions">
        <div className="space-y-3">
          {draft.faqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#faf8f2] border border-[#e3ddcf] space-y-2">
              <div className="flex items-center gap-2">
                <input
                  value={faq.question}
                  onChange={(e) => updateFaq(idx, { question: e.target.value })}
                  placeholder="Question"
                  className="flex-1 min-h-9 px-3 rounded-lg bg-white border border-[#ded8cb] text-sm font-semibold text-[#161f19]"
                />
                <button type="button" onClick={() => removeFaq(idx)} aria-label="Remove question" className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 shrink-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <textarea
                value={faq.answer}
                onChange={(e) => updateFaq(idx, { answer: e.target.value })}
                placeholder="Answer"
                rows={2}
                className="w-full px-3 py-2 rounded-lg bg-white border border-[#ded8cb] text-sm text-[#161f19] resize-y"
              />
            </div>
          ))}
          <button type="button" onClick={addFaq} className="w-full min-h-11 rounded-xl border border-dashed border-[#ded8cb] text-sm font-bold text-[#9e7120] hover:bg-[#faf8f2] flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add question
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Search engine details">
        <Field label="SEO title">
          <TextInput value={draft.seo.title} onChange={(v) => set('seo', { ...draft.seo, title: v })} placeholder={draft.name} />
        </Field>
        <Field label="SEO description">
          <TextArea value={draft.seo.description} onChange={(v) => set('seo', { ...draft.seo, description: v })} rows={2} />
        </Field>
      </SectionCard>

      <FormActionBar onCancel={onCancel} isSaving={isSaving} error={error} saveLabel={destination ? 'Save changes' : 'Create destination'} />
    </form>
  );
};
