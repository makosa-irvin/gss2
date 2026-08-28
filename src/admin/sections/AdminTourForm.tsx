import React, { useState } from 'react';
import { Tour, SeasonalPrice, ItineraryDay, Country, TravelStyle, ComfortLevel, TravelerType } from '../../types';
import {
  Field,
  TextInput,
  NumberInput,
  TextArea,
  SelectInput,
  ToggleField,
  ChipListEditor,
  ImageListEditor,
  MultiSelectChips,
  SectionCard,
  FormActionBar,
  FormGrid
} from '../shared/AdminForm';
import { Plus, Trash2, ArrowLeft, GripVertical } from 'lucide-react';

const COUNTRIES: Country[] = ['Kenya', 'Tanzania', 'Zanzibar', 'Kenya + Tanzania', 'Safari + Beach'];
const TRAVEL_STYLES: TravelStyle[] = [
  'Big 5', 'Great Migration', 'Family', 'Honeymoon', 'Senior Friendly', 'Luxury',
  'Budget', 'Midrange', 'Safari & Beach', 'Fly-In', 'Photography', 'Cultural Encounters'
];
const COMFORT_LEVELS: ComfortLevel[] = ['Budget', 'Midrange', 'Luxury', 'Ultra Luxury'];
const TRAVELER_TYPES: TravelerType[] = [
  'Solo', 'Couples', 'Families', 'Seniors', 'Groups', 'Honeymooners', 'Photographers', 'Adventure Seekers'
];
const BOOKING_AVAILABILITY = ['Available', 'Limited Seats', 'On Request'] as const;

type TourDraft = Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>;

const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const emptyItineraryDay = (day: number): ItineraryDay => ({
  day, title: '', subtitle: '', description: '', accommodation: '', meals: '', transport: '', activities: []
});

const emptySeasonalPrice = (): SeasonalPrice => ({
  id: `season-${Date.now()}`, name: '', startDate: '', endDate: '', soloPrice: 0, sharingPrice: 0, currency: 'USD'
});

function draftFromTour(tour?: Tour | null): TourDraft {
  if (tour) {
    const { id, createdAt, updatedAt, ...rest } = tour;
    return rest;
  }
  return {
    title: '', slug: '', shortDescription: '', fullDescription: '',
    country: 'Kenya', destinations: [], durationDays: 3, durationLabel: '3 Days / 2 Nights',
    startingLocation: 'Nairobi, Kenya', endingLocation: 'Nairobi, Kenya',
    categories: [], travelStyles: [], comfortLevel: 'Luxury', travelerTypes: [],
    featured: false, popular: false, recommended: false,
    priceFrom: 0, currency: 'USD', soloPrice: 0, sharingPrice: 0, residentPriceKES: undefined,
    seasonalPricing: [], images: [], itinerary: [emptyItineraryDay(1)],
    accommodationSummary: '', mealsSummary: '',
    includedActivities: [], includedServices: [], exclusions: [], importantInformation: [],
    childrenPolicy: '', startingDates: 'Daily Departures (Year-Round)', bookingAvailability: 'Available',
    seo: { title: '', description: '' }, published: false
  };
}

interface AdminTourFormProps {
  tour?: Tour | null;
  onSave: (draft: TourDraft) => Promise<void>;
  onCancel: () => void;
}

export const AdminTourForm: React.FC<AdminTourFormProps> = ({ tour, onSave, onCancel }) => {
  const [draft, setDraft] = useState<TourDraft>(() => draftFromTour(tour));
  const [slugTouched, setSlugTouched] = useState(!!tour);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof TourDraft>(key: K, value: TourDraft[K]) => setDraft((d) => ({ ...d, [key]: value }));

  const handleTitleChange = (title: string) => {
    set('title', title);
    if (!slugTouched) set('slug', slugify(title));
  };

  const updateItineraryDay = (idx: number, patch: Partial<ItineraryDay>) => {
    set('itinerary', draft.itinerary.map((d, i) => (i === idx ? { ...d, ...patch } : d)));
  };
  const addItineraryDay = () => set('itinerary', [...draft.itinerary, emptyItineraryDay(draft.itinerary.length + 1)]);
  const removeItineraryDay = (idx: number) =>
    set('itinerary', draft.itinerary.filter((_, i) => i !== idx).map((d, i) => ({ ...d, day: i + 1 })));

  const updateSeason = (idx: number, patch: Partial<SeasonalPrice>) => {
    set('seasonalPricing', draft.seasonalPricing.map((s, i) => (i === idx ? { ...s, ...patch } : s)));
  };
  const addSeason = () => set('seasonalPricing', [...draft.seasonalPricing, emptySeasonalPrice()]);
  const removeSeason = (idx: number) => set('seasonalPricing', draft.seasonalPricing.filter((_, i) => i !== idx));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!draft.title.trim() || !draft.slug.trim()) {
      setError('Title and slug are required.');
      return;
    }
    setIsSaving(true);
    try {
      await onSave({
        ...draft,
        durationLabel: draft.durationLabel || `${draft.durationDays} Days / ${Math.max(draft.durationDays - 1, 0)} Nights`,
        seo: { ...draft.seo, title: draft.seo.title || draft.title, description: draft.seo.description || draft.shortDescription }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save tour.');
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onCancel} aria-label="Back to tours" className="min-h-9 min-w-9 flex items-center justify-center rounded-lg hover:bg-[#f4f1e8] text-[#161f19]">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-serif-luxury text-2xl font-bold text-[#161f19]">{tour ? 'Edit safari' : 'New safari'}</h1>
      </div>

      <SectionCard title="Basics">
        <FormGrid>
          <Field label="Tour title" required>
            <TextInput value={draft.title} onChange={handleTitleChange} placeholder="e.g. 5-Day Masai Mara & Lake Nakuru Safari" required />
          </Field>
          <Field label="URL slug" required hint="Used in the tour's web address">
            <TextInput value={draft.slug} onChange={(v) => { setSlugTouched(true); set('slug', slugify(v)); }} placeholder="5-day-masai-mara-lake-nakuru-safari" required />
          </Field>
          <Field label="Country / region">
            <SelectInput value={draft.country} onChange={(v) => set('country', v as Country)} options={COUNTRIES} />
          </Field>
          <Field label="Comfort level">
            <SelectInput value={draft.comfortLevel} onChange={(v) => set('comfortLevel', v as ComfortLevel)} options={COMFORT_LEVELS} />
          </Field>
          <Field label="Duration (days)">
            <NumberInput value={draft.durationDays} onChange={(v) => set('durationDays', v)} min={1} />
          </Field>
          <Field label="Duration label" hint="Shown on cards, e.g. '5 Days / 4 Nights'">
            <TextInput value={draft.durationLabel} onChange={(v) => set('durationLabel', v)} placeholder="5 Days / 4 Nights" />
          </Field>
          <Field label="Starting location">
            <TextInput value={draft.startingLocation} onChange={(v) => set('startingLocation', v)} />
          </Field>
          <Field label="Ending location">
            <TextInput value={draft.endingLocation} onChange={(v) => set('endingLocation', v)} />
          </Field>
        </FormGrid>
        <Field label="Destinations visited" hint="Parks, reserves, or towns this itinerary covers">
          <ChipListEditor items={draft.destinations} onChange={(v) => set('destinations', v)} placeholder="e.g. Maasai Mara National Reserve" />
        </Field>
        <Field label="Categories" hint="Free-form tags used for internal grouping">
          <ChipListEditor items={draft.categories} onChange={(v) => set('categories', v)} placeholder="e.g. Big 5 Safari" />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <ToggleField label="Featured" description="Highlighted across the site" checked={draft.featured} onChange={(v) => set('featured', v)} />
          <ToggleField label="Popular" description="Shown with a Popular badge" checked={draft.popular} onChange={(v) => set('popular', v)} />
          <ToggleField label="Published" description="Visible to website visitors" checked={!!draft.published} onChange={(v) => set('published', v)} />
        </div>
      </SectionCard>

      <SectionCard title="Descriptions" description="Keep these tight - one punchy sentence for the short version, 2-3 sentences for the full overview.">
        <Field label="Short description" required hint="Used on tour cards and listings">
          <TextArea value={draft.shortDescription} onChange={(v) => set('shortDescription', v)} rows={2} />
        </Field>
        <Field label="Full description" required hint="Shown as the 'Safari overview' on the tour page">
          <TextArea value={draft.fullDescription} onChange={(v) => set('fullDescription', v)} rows={4} />
        </Field>
      </SectionCard>

      <SectionCard title="Classification">
        <Field label="Travel styles">
          <MultiSelectChips options={TRAVEL_STYLES} selected={draft.travelStyles} onChange={(v) => set('travelStyles', v as TravelStyle[])} />
        </Field>
        <Field label="Best suited for">
          <MultiSelectChips options={TRAVELER_TYPES} selected={draft.travelerTypes} onChange={(v) => set('travelerTypes', v as TravelerType[])} />
        </Field>
        <FormGrid>
          <Field label="Booking availability">
            <SelectInput value={draft.bookingAvailability} onChange={(v) => set('bookingAvailability', v as Tour['bookingAvailability'])} options={BOOKING_AVAILABILITY} />
          </Field>
          <Field label="Starting dates">
            <TextInput value={draft.startingDates} onChange={(v) => set('startingDates', v)} placeholder="Daily Departures (Year-Round)" />
          </Field>
        </FormGrid>
      </SectionCard>

      <SectionCard title="Pricing">
        <FormGrid cols={3}>
          <Field label="Currency">
            <SelectInput value={draft.currency} onChange={(v) => set('currency', v as 'USD' | 'KES')} options={['USD', 'KES']} />
          </Field>
          <Field label="Price from" required hint="Headline price shown on cards">
            <NumberInput value={draft.priceFrom} onChange={(v) => set('priceFrom', v)} min={0} />
          </Field>
          <Field label="Solo traveler price">
            <NumberInput value={draft.soloPrice} onChange={(v) => set('soloPrice', v)} min={0} />
          </Field>
          <Field label="Sharing price (per person)">
            <NumberInput value={draft.sharingPrice} onChange={(v) => set('sharingPrice', v)} min={0} />
          </Field>
          <Field label="Kenyan resident price (KES)" hint="Leave 0 if not applicable">
            <NumberInput value={draft.residentPriceKES || 0} onChange={(v) => set('residentPriceKES', v || undefined)} min={0} />
          </Field>
        </FormGrid>

        <div className="pt-2 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#76541a]">Seasonal rates</span>
            <button type="button" onClick={addSeason} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9e7120] hover:underline">
              <Plus className="w-3.5 h-3.5" /> Add season
            </button>
          </div>
          {draft.seasonalPricing.length === 0 && (
            <p className="text-xs text-[#707f74]">No seasonal rates set - the base price above applies year-round.</p>
          )}
          {draft.seasonalPricing.map((season, idx) => (
            <div key={season.id} className="p-4 rounded-xl bg-[#faf8f2] border border-[#e3ddcf] space-y-3">
              <div className="flex items-center justify-between gap-2">
                <input
                  value={season.name}
                  onChange={(e) => updateSeason(idx, { name: e.target.value })}
                  placeholder="e.g. Peak Season (Jul - Oct)"
                  className="flex-1 min-h-9 px-3 rounded-lg bg-white border border-[#ded8cb] text-sm font-semibold text-[#161f19]"
                />
                <button type="button" onClick={() => removeSeason(idx)} aria-label="Remove season" className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 shrink-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <label>
                  <span className="text-[#707f74] block mb-1">Start (MM-DD)</span>
                  <input value={season.startDate} onChange={(e) => updateSeason(idx, { startDate: e.target.value })} placeholder="07-01" className="w-full min-h-9 px-2.5 rounded-lg bg-white border border-[#ded8cb]" />
                </label>
                <label>
                  <span className="text-[#707f74] block mb-1">End (MM-DD)</span>
                  <input value={season.endDate} onChange={(e) => updateSeason(idx, { endDate: e.target.value })} placeholder="10-31" className="w-full min-h-9 px-2.5 rounded-lg bg-white border border-[#ded8cb]" />
                </label>
                <label>
                  <span className="text-[#707f74] block mb-1">Solo price</span>
                  <input type="number" value={season.soloPrice} onChange={(e) => updateSeason(idx, { soloPrice: Number(e.target.value) })} className="w-full min-h-9 px-2.5 rounded-lg bg-white border border-[#ded8cb]" />
                </label>
                <label>
                  <span className="text-[#707f74] block mb-1">Sharing price</span>
                  <input type="number" value={season.sharingPrice} onChange={(e) => updateSeason(idx, { sharingPrice: Number(e.target.value) })} className="w-full min-h-9 px-2.5 rounded-lg bg-white border border-[#ded8cb]" />
                </label>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Photos">
        <ImageListEditor images={draft.images} onChange={(v) => set('images', v)} />
      </SectionCard>

      <SectionCard title="Day-by-day itinerary">
        <div className="space-y-4">
          {draft.itinerary.map((day, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#faf8f2] border border-[#e3ddcf] space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#161f19]">
                  <GripVertical className="w-4 h-4 text-[#c7bfb1]" /> Day {day.day}
                </span>
                <button type="button" onClick={() => removeItineraryDay(idx)} aria-label={`Remove day ${day.day}`} className="p-2 rounded-lg text-rose-600 hover:bg-rose-50">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <FormGrid>
                <Field label="Day title">
                  <TextInput value={day.title} onChange={(v) => updateItineraryDay(idx, { title: v })} placeholder="Nairobi to Maasai Mara" />
                </Field>
                <Field label="Subtitle">
                  <TextInput value={day.subtitle} onChange={(v) => updateItineraryDay(idx, { subtitle: v })} placeholder="Into Big Cat Country" />
                </Field>
              </FormGrid>
              <Field label="Description">
                <TextArea value={day.description} onChange={(v) => updateItineraryDay(idx, { description: v })} rows={2} />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Field label="Accommodation">
                  <TextInput value={day.accommodation} onChange={(v) => updateItineraryDay(idx, { accommodation: v })} />
                </Field>
                <Field label="Meals">
                  <TextInput value={day.meals} onChange={(v) => updateItineraryDay(idx, { meals: v })} placeholder="Breakfast, Lunch, Dinner" />
                </Field>
                <Field label="Transport">
                  <TextInput value={day.transport} onChange={(v) => updateItineraryDay(idx, { transport: v })} placeholder="4x4 Land Cruiser" />
                </Field>
              </div>
              <Field label="Key highlights">
                <ChipListEditor items={day.activities} onChange={(v) => updateItineraryDay(idx, { activities: v })} placeholder="e.g. Sunset predator drive" />
              </Field>
            </div>
          ))}
          <button type="button" onClick={addItineraryDay} className="w-full min-h-11 rounded-xl border border-dashed border-[#ded8cb] text-sm font-bold text-[#9e7120] hover:bg-[#faf8f2] flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add day {draft.itinerary.length + 1}
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Inclusions & practical info">
        <FormGrid>
          <Field label="Accommodation summary">
            <TextInput value={draft.accommodationSummary} onChange={(v) => set('accommodationSummary', v)} placeholder="Luxury tented camps and lodges" />
          </Field>
          <Field label="Meals summary">
            <TextInput value={draft.mealsSummary} onChange={(v) => set('mealsSummary', v)} placeholder="All meals included" />
          </Field>
        </FormGrid>
        <Field label="Included services">
          <ChipListEditor items={draft.includedServices} onChange={(v) => set('includedServices', v)} placeholder="e.g. Private 4x4 Land Cruiser" />
        </Field>
        <Field label="Included activities">
          <ChipListEditor items={draft.includedActivities} onChange={(v) => set('includedActivities', v)} placeholder="e.g. Game drives" />
        </Field>
        <Field label="What's excluded">
          <ChipListEditor items={draft.exclusions} onChange={(v) => set('exclusions', v)} placeholder="e.g. International flights" />
        </Field>
        <Field label="Important information">
          <ChipListEditor items={draft.importantInformation} onChange={(v) => set('importantInformation', v)} placeholder="e.g. Yellow fever certificate required" />
        </Field>
        <Field label="Children's policy">
          <TextInput value={draft.childrenPolicy} onChange={(v) => set('childrenPolicy', v)} placeholder="Children of all ages welcome." />
        </Field>
      </SectionCard>

      <SectionCard title="Search engine details" description="Leave blank to fall back to the title and short description automatically.">
        <Field label="SEO title">
          <TextInput value={draft.seo.title} onChange={(v) => set('seo', { ...draft.seo, title: v })} placeholder={draft.title} />
        </Field>
        <Field label="SEO description">
          <TextArea value={draft.seo.description} onChange={(v) => set('seo', { ...draft.seo, description: v })} rows={2} placeholder={draft.shortDescription} />
        </Field>
      </SectionCard>

      <FormActionBar onCancel={onCancel} isSaving={isSaving} error={error} saveLabel={tour ? 'Save changes' : 'Create safari'} />
    </form>
  );
};
