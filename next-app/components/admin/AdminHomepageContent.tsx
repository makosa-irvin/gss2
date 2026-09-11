'use client';

import { useEffect, useState } from 'react';
import { Check, Layout, Loader2, Save } from 'lucide-react';
import { DEFAULT_HOMEPAGE } from '../../lib/cmsDefaults';
import { ImageListEditor } from './AdminForm';
import { Field, inputClass, SectionCard } from './AdminSettingsShared';

type HomepageContent = {
  eyebrow: string; title: string; highlightedTitle: string; subtitle: string; heroImage: string; primaryCtaLabel: string; secondaryCtaLabel: string;
  personalPlanning: { eyebrow: string; title: string; body: string; steps: { number: string; label: string }[] };
  tours: { eyebrow: string; title: string; subtitle: string };
  styleFinder: { eyebrow: string; title: string; subtitle: string };
  destinations: { eyebrow: string; title: string; subtitle: string };
  whyUs: { eyebrow: string; title: string; items: { title: string; description: string }[] };
  beachStays: { badge: string; title: string; subtitle: string };
  safariBuilder: { eyebrow: string; title: string; subtitle: string };
  guides: { eyebrow: string; title: string; subtitle: string };
  finalCta: { eyebrow: string; title: string; subtitle: string };
};

// A database that hasn't run migration 0007 yet (or a deploy where the
// frontend rolls out before the migration finishes) will return a
// homepage object missing the 9 newer section keys entirely - fill in
// anything missing from the same defaults the public site itself falls
// back to, rather than crashing the whole settings page on a null
// dereference.
function withDefaults(homepage: Partial<HomepageContent> | null | undefined): HomepageContent {
  const base = DEFAULT_HOMEPAGE as HomepageContent;
  return {
    eyebrow: homepage?.eyebrow ?? base.eyebrow,
    title: homepage?.title ?? base.title,
    highlightedTitle: homepage?.highlightedTitle ?? base.highlightedTitle,
    subtitle: homepage?.subtitle ?? base.subtitle,
    heroImage: homepage?.heroImage ?? base.heroImage,
    primaryCtaLabel: homepage?.primaryCtaLabel ?? base.primaryCtaLabel,
    secondaryCtaLabel: homepage?.secondaryCtaLabel ?? base.secondaryCtaLabel,
    personalPlanning: homepage?.personalPlanning ?? base.personalPlanning,
    tours: homepage?.tours ?? base.tours,
    styleFinder: homepage?.styleFinder ?? base.styleFinder,
    destinations: homepage?.destinations ?? base.destinations,
    whyUs: homepage?.whyUs ?? base.whyUs,
    beachStays: homepage?.beachStays ?? base.beachStays,
    safariBuilder: homepage?.safariBuilder ?? base.safariBuilder,
    guides: homepage?.guides ?? base.guides,
    finalCta: homepage?.finalCta ?? base.finalCta,
  };
}

export function AdminHomepageContent({ homepage, onSave }: { homepage: Partial<HomepageContent> | null | undefined; onSave: (homepage: HomepageContent) => Promise<void> }) {
  const [draft, setDraft] = useState(() => withDefaults(homepage));
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => setDraft(withDefaults(homepage)), [homepage]);
  const setSection = <K extends keyof HomepageContent>(key: K, value: HomepageContent[K]) => setDraft(current => ({ ...current, [key]: value }));
  const updatePlanningStep = (index: number, label: string) => setSection('personalPlanning', { ...draft.personalPlanning, steps: draft.personalPlanning.steps.map((step, stepIndex) => stepIndex === index ? { ...step, label } : step) });
  const updateWhyUsItem = (index: number, patch: Partial<{ title: string; description: string }>) => setSection('whyUs', { ...draft.whyUs, items: draft.whyUs.items.map((item, itemIndex) => itemIndex === index ? { ...item, ...patch } : item) });
  async function submit(event: React.FormEvent) { event.preventDefault(); setSaving(true); try { await onSave(draft); setSaved(true); window.setTimeout(() => setSaved(false), 3000); } finally { setSaving(false); } }

  return <div className="space-y-6 max-w-4xl">
    <form onSubmit={submit} className="space-y-6">
      <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]"><Layout className="w-4 h-4" /><span>Website content</span></div><h1 className="font-serif-luxury text-3xl font-bold text-[#161f19] mt-1">Homepage Content</h1><p className="text-sm text-[#707f74] mt-1">Every section heading and supporting text on the public homepage, in the order they appear on the page.</p></div>
      <SectionCard title="Hero" description="The full-height banner at the very top of the homepage.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.eyebrow} onChange={e => setSection('eyebrow', e.target.value)} /></Field><Field label="Main heading"><input className={inputClass} value={draft.title} onChange={e => setSection('title', e.target.value)} /></Field><Field label="Highlighted heading"><input className={inputClass} value={draft.highlightedTitle} onChange={e => setSection('highlightedTitle', e.target.value)} /></Field><Field label="Primary button label"><input className={inputClass} value={draft.primaryCtaLabel} onChange={e => setSection('primaryCtaLabel', e.target.value)} /></Field><Field label="Secondary button label"><input className={inputClass} value={draft.secondaryCtaLabel} onChange={e => setSection('secondaryCtaLabel', e.target.value)} /></Field></div>
        <Field label="Subtitle"><textarea className={`${inputClass} min-h-24`} rows={3} value={draft.subtitle} onChange={e => setSection('subtitle', e.target.value)} /></Field>
        <Field label="Hero image"><ImageListEditor images={draft.heroImage ? [draft.heroImage] : []} maxImages={1} onChange={images => setSection('heroImage', images[0] || '')} /></Field>
      </SectionCard>
      <SectionCard title="Personal planning section" description="The 'A safari is too important to feel anonymous' section, just below the hero.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.personalPlanning.eyebrow} onChange={e => setSection('personalPlanning', { ...draft.personalPlanning, eyebrow: e.target.value })} /></Field><Field label="Heading"><input className={inputClass} value={draft.personalPlanning.title} onChange={e => setSection('personalPlanning', { ...draft.personalPlanning, title: e.target.value })} /></Field></div>
        <Field label="Body text"><textarea className={`${inputClass} min-h-24`} rows={3} value={draft.personalPlanning.body} onChange={e => setSection('personalPlanning', { ...draft.personalPlanning, body: e.target.value })} /></Field>
        <Field label="Four-step process" hint="Shown as a 2x2 grid under the text."><div className="grid gap-3 sm:grid-cols-2">{draft.personalPlanning.steps.map((step, index) => <input key={index} className={inputClass} value={step.label} onChange={e => updatePlanningStep(index, e.target.value)} placeholder={`Step ${step.number}`} />)}</div></Field>
      </SectionCard>
      <SectionCard title="Safari ideas section" description="Heading above the featured tours grid.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.tours.eyebrow} onChange={e => setSection('tours', { ...draft.tours, eyebrow: e.target.value })} /></Field><Field label="Heading"><input className={inputClass} value={draft.tours.title} onChange={e => setSection('tours', { ...draft.tours, title: e.target.value })} /></Field></div>
        <Field label="Subtitle"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.tours.subtitle} onChange={e => setSection('tours', { ...draft.tours, subtitle: e.target.value })} /></Field>
      </SectionCard>
      <SectionCard title="Safari style finder section" description="Heading above the 'Big 5 / Great Migration / Family...' style picker.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.styleFinder.eyebrow} onChange={e => setSection('styleFinder', { ...draft.styleFinder, eyebrow: e.target.value })} /></Field><Field label="Heading"><input className={inputClass} value={draft.styleFinder.title} onChange={e => setSection('styleFinder', { ...draft.styleFinder, title: e.target.value })} /></Field></div>
        <Field label="Subtitle"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.styleFinder.subtitle} onChange={e => setSection('styleFinder', { ...draft.styleFinder, subtitle: e.target.value })} /></Field>
      </SectionCard>
      <SectionCard title="Destinations section" description="Heading above the featured destinations grid.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.destinations.eyebrow} onChange={e => setSection('destinations', { ...draft.destinations, eyebrow: e.target.value })} /></Field><Field label="Heading"><input className={inputClass} value={draft.destinations.title} onChange={e => setSection('destinations', { ...draft.destinations, title: e.target.value })} /></Field></div>
        <Field label="Subtitle"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.destinations.subtitle} onChange={e => setSection('destinations', { ...draft.destinations, subtitle: e.target.value })} /></Field>
      </SectionCard>
      <SectionCard title="Why Good Secrets section" description="The four-point 'why book with us' section, with the sundowner photo.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.whyUs.eyebrow} onChange={e => setSection('whyUs', { ...draft.whyUs, eyebrow: e.target.value })} /></Field><Field label="Heading"><input className={inputClass} value={draft.whyUs.title} onChange={e => setSection('whyUs', { ...draft.whyUs, title: e.target.value })} /></Field></div>
        <Field label="Four points" hint="Each has a short title and one sentence of detail.">
          <div className="space-y-3">{draft.whyUs.items.map((item, index) => <div key={index} className="grid gap-2 sm:grid-cols-[1fr_2fr] rounded-xl border border-[#e8e4da] p-3"><input className={inputClass} value={item.title} onChange={e => updateWhyUsItem(index, { title: e.target.value })} placeholder="Point title" /><input className={inputClass} value={item.description} onChange={e => updateWhyUsItem(index, { description: e.target.value })} placeholder="Point detail" /></div>)}</div>
        </Field>
      </SectionCard>
      <SectionCard title="Beach stays section" description="Only shown when at least one hotel exists.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Badge label"><input className={inputClass} value={draft.beachStays.badge} onChange={e => setSection('beachStays', { ...draft.beachStays, badge: e.target.value })} /></Field><Field label="Heading"><input className={inputClass} value={draft.beachStays.title} onChange={e => setSection('beachStays', { ...draft.beachStays, title: e.target.value })} /></Field></div>
        <Field label="Subtitle"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.beachStays.subtitle} onChange={e => setSection('beachStays', { ...draft.beachStays, subtitle: e.target.value })} /></Field>
      </SectionCard>
      <SectionCard title="Safari builder section" description="Heading above the 'build your preferences' tool.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.safariBuilder.eyebrow} onChange={e => setSection('safariBuilder', { ...draft.safariBuilder, eyebrow: e.target.value })} /></Field><Field label="Heading"><input className={inputClass} value={draft.safariBuilder.title} onChange={e => setSection('safariBuilder', { ...draft.safariBuilder, title: e.target.value })} /></Field></div>
        <Field label="Subtitle"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.safariBuilder.subtitle} onChange={e => setSection('safariBuilder', { ...draft.safariBuilder, subtitle: e.target.value })} /></Field>
      </SectionCard>
      <SectionCard title="Safari guides section" description="Only shown when at least one blog post exists.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.guides.eyebrow} onChange={e => setSection('guides', { ...draft.guides, eyebrow: e.target.value })} /></Field><Field label="Heading"><input className={inputClass} value={draft.guides.title} onChange={e => setSection('guides', { ...draft.guides, title: e.target.value })} /></Field></div>
        <Field label="Subtitle"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.guides.subtitle} onChange={e => setSection('guides', { ...draft.guides, subtitle: e.target.value })} /></Field>
      </SectionCard>
      <SectionCard title="Closing call-to-action" description="Final section before the footer.">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.finalCta.eyebrow} onChange={e => setSection('finalCta', { ...draft.finalCta, eyebrow: e.target.value })} /></Field><Field label="Heading"><input className={inputClass} value={draft.finalCta.title} onChange={e => setSection('finalCta', { ...draft.finalCta, title: e.target.value })} /></Field></div>
        <Field label="Subtitle"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.finalCta.subtitle} onChange={e => setSection('finalCta', { ...draft.finalCta, subtitle: e.target.value })} /></Field>
      </SectionCard>
      <div className="flex items-center justify-between pt-2">{saved ? <span className="text-xs text-[#1b4332] font-bold flex items-center gap-1"><Check className="w-4 h-4 text-[#128c7e]" />Homepage content saved</span> : <span />}<button type="submit" disabled={saving} className="min-h-11 px-8 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] disabled:opacity-60 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95">{saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}<span>{saving ? 'Saving…' : 'Save homepage content'}</span></button></div>
    </form>
  </div>;
}
