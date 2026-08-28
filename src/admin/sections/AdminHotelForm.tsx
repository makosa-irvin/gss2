import React, { useState } from 'react';
import { Hotel } from '../../types';
import {
  Field,
  TextInput,
  NumberInput,
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
const CATEGORIES = ['Luxury Safari Lodge', 'Tented Camp', 'Beach Resort & Spa', 'Boutique Hotel', 'Eco Lodge'] as const;

type HotelDraft = Omit<Hotel, 'id'>;
type HotelSeason = Hotel['seasonalPricing'][number];

const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const emptySeason = (): HotelSeason => ({ seasonName: '', dates: '', priceKES: 0, priceUSD: 0 });

function draftFromHotel(hotel?: Hotel | null): HotelDraft {
  if (hotel) {
    const { id, ...rest } = hotel;
    return rest;
  }
  return {
    name: '', slug: '', location: '', country: 'Kenya', description: '',
    category: 'Beach Resort & Spa', images: [],
    priceFromUSD: 0, priceFromKES: 0, soloPriceUSD: 0, sharingPriceUSD: 0,
    seasonalPricing: [], facilities: [], roomTypes: [], inclusions: [], exclusions: [],
    isFamilyFriendly: false, isHoneymoonFriendly: false, isSeniorFriendly: false, isKenyanResidentOffer: false,
    bookingLink: '', rating: undefined,
    seo: { title: '', description: '' }, published: false
  };
}

interface AdminHotelFormProps {
  hotel?: Hotel | null;
  onSave: (draft: HotelDraft) => Promise<void>;
  onCancel: () => void;
}

export const AdminHotelForm: React.FC<AdminHotelFormProps> = ({ hotel, onSave, onCancel }) => {
  const [draft, setDraft] = useState<HotelDraft>(() => draftFromHotel(hotel));
  const [slugTouched, setSlugTouched] = useState(!!hotel);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof HotelDraft>(key: K, value: HotelDraft[K]) => setDraft((d) => ({ ...d, [key]: value }));

  const handleNameChange = (name: string) => {
    set('name', name);
    if (!slugTouched) set('slug', slugify(name));
  };

  const updateSeason = (idx: number, patch: Partial<HotelSeason>) =>
    set('seasonalPricing', draft.seasonalPricing.map((s, i) => (i === idx ? { ...s, ...patch } : s)));
  const addSeason = () => set('seasonalPricing', [...draft.seasonalPricing, emptySeason()]);
  const removeSeason = (idx: number) => set('seasonalPricing', draft.seasonalPricing.filter((_, i) => i !== idx));

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
        seo: { ...draft.seo, title: draft.seo.title || draft.name, description: draft.seo.description || draft.description }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save hotel.');
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onCancel} aria-label="Back to hotels" className="min-h-9 min-w-9 flex items-center justify-center rounded-lg hover:bg-[#f4f1e8] text-[#161f19]">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-serif-luxury text-2xl font-bold text-[#161f19]">{hotel ? 'Edit hotel' : 'New hotel'}</h1>
      </div>

      <SectionCard title="Basics">
        <FormGrid>
          <Field label="Hotel name" required>
            <TextInput value={draft.name} onChange={handleNameChange} placeholder="e.g. Turtle Bay Beach Club" required />
          </Field>
          <Field label="URL slug" required>
            <TextInput value={draft.slug} onChange={(v) => { setSlugTouched(true); set('slug', slugify(v)); }} required />
          </Field>
          <Field label="Location">
            <TextInput value={draft.location} onChange={(v) => set('location', v)} placeholder="Diani Beach, Kenya" />
          </Field>
          <Field label="Country">
            <SelectInput value={draft.country} onChange={(v) => set('country', v as Hotel['country'])} options={COUNTRIES} />
          </Field>
          <Field label="Category">
            <SelectInput value={draft.category} onChange={(v) => set('category', v as Hotel['category'])} options={CATEGORIES} />
          </Field>
          <Field label="Rating (out of 5)" hint="Leave 0 if unrated">
            <NumberInput value={draft.rating || 0} onChange={(v) => set('rating', v || undefined)} min={0} max={5} step={0.1} />
          </Field>
        </FormGrid>
        <Field label="Description">
          <TextArea value={draft.description} onChange={(v) => set('description', v)} rows={3} />
        </Field>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          <ToggleField label="Family friendly" checked={draft.isFamilyFriendly} onChange={(v) => set('isFamilyFriendly', v)} />
          <ToggleField label="Honeymoon friendly" checked={draft.isHoneymoonFriendly} onChange={(v) => set('isHoneymoonFriendly', v)} />
          <ToggleField label="Senior friendly" checked={draft.isSeniorFriendly} onChange={(v) => set('isSeniorFriendly', v)} />
          <ToggleField label="Kenyan resident offer" checked={draft.isKenyanResidentOffer} onChange={(v) => set('isKenyanResidentOffer', v)} />
        </div>
        <ToggleField label="Published" description="Visible to website visitors" checked={!!draft.published} onChange={(v) => set('published', v)} />
      </SectionCard>

      <SectionCard title="Pricing">
        <FormGrid cols={3}>
          <Field label="Price from (USD / night)">
            <NumberInput value={draft.priceFromUSD} onChange={(v) => set('priceFromUSD', v)} min={0} />
          </Field>
          <Field label="Price from (KES / night)">
            <NumberInput value={draft.priceFromKES} onChange={(v) => set('priceFromKES', v)} min={0} />
          </Field>
          <Field label="Booking link" hint="Optional external booking URL">
            <TextInput value={draft.bookingLink || ''} onChange={(v) => set('bookingLink', v)} type="url" />
          </Field>
          <Field label="Solo price (USD)">
            <NumberInput value={draft.soloPriceUSD} onChange={(v) => set('soloPriceUSD', v)} min={0} />
          </Field>
          <Field label="Sharing price (USD)">
            <NumberInput value={draft.sharingPriceUSD} onChange={(v) => set('sharingPriceUSD', v)} min={0} />
          </Field>
        </FormGrid>

        <div className="pt-2 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#76541a]">Seasonal rates</span>
            <button type="button" onClick={addSeason} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9e7120] hover:underline">
              <Plus className="w-3.5 h-3.5" /> Add season
            </button>
          </div>
          {draft.seasonalPricing.map((season, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#faf8f2] border border-[#e3ddcf] space-y-3">
              <div className="flex items-center justify-between gap-2">
                <input
                  value={season.seasonName}
                  onChange={(e) => updateSeason(idx, { seasonName: e.target.value })}
                  placeholder="e.g. Peak Season"
                  className="flex-1 min-h-9 px-3 rounded-lg bg-white border border-[#ded8cb] text-sm font-semibold text-[#161f19]"
                />
                <button type="button" onClick={() => removeSeason(idx)} aria-label="Remove season" className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 shrink-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <label>
                  <span className="text-[#707f74] block mb-1">Dates</span>
                  <input value={season.dates} onChange={(e) => updateSeason(idx, { dates: e.target.value })} placeholder="Jul 1 - Oct 31" className="w-full min-h-9 px-2.5 rounded-lg bg-white border border-[#ded8cb]" />
                </label>
                <label>
                  <span className="text-[#707f74] block mb-1">Price (KES)</span>
                  <input type="number" value={season.priceKES} onChange={(e) => updateSeason(idx, { priceKES: Number(e.target.value) })} className="w-full min-h-9 px-2.5 rounded-lg bg-white border border-[#ded8cb]" />
                </label>
                <label>
                  <span className="text-[#707f74] block mb-1">Price (USD)</span>
                  <input type="number" value={season.priceUSD} onChange={(e) => updateSeason(idx, { priceUSD: Number(e.target.value) })} className="w-full min-h-9 px-2.5 rounded-lg bg-white border border-[#ded8cb]" />
                </label>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Photos">
        <ImageListEditor images={draft.images} onChange={(v) => set('images', v)} />
      </SectionCard>

      <SectionCard title="Amenities & policies">
        <Field label="Facilities">
          <ChipListEditor items={draft.facilities} onChange={(v) => set('facilities', v)} placeholder="e.g. Private white-sand beach access" />
        </Field>
        <Field label="Room types">
          <ChipListEditor items={draft.roomTypes} onChange={(v) => set('roomTypes', v)} placeholder="e.g. Deluxe Ocean View Room" />
        </Field>
        <Field label="Inclusions">
          <ChipListEditor items={draft.inclusions} onChange={(v) => set('inclusions', v)} placeholder="e.g. All-inclusive meals" />
        </Field>
        <Field label="Exclusions">
          <ChipListEditor items={draft.exclusions} onChange={(v) => set('exclusions', v)} placeholder="e.g. Spa treatments" />
        </Field>
      </SectionCard>

      <SectionCard title="Search engine details">
        <Field label="SEO title">
          <TextInput value={draft.seo.title} onChange={(v) => set('seo', { ...draft.seo, title: v })} placeholder={draft.name} />
        </Field>
        <Field label="SEO description">
          <TextArea value={draft.seo.description} onChange={(v) => set('seo', { ...draft.seo, description: v })} rows={2} />
        </Field>
      </SectionCard>

      <FormActionBar onCancel={onCancel} isSaving={isSaving} error={error} saveLabel={hotel ? 'Save changes' : 'Create hotel'} />
    </form>
  );
};
