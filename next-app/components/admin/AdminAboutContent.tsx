'use client';

import { useEffect, useState } from 'react';
import { Check, Loader2, Plus, Save, Trash2, Users } from 'lucide-react';
import { DEFAULT_ABOUT } from '../../lib/cmsDefaults';
import { ImageListEditor, ToggleField } from './AdminForm';
import { Field, inputClass, SectionCard } from './AdminSettingsShared';

type TeamMember = { id: string; name: string; role: string; bio: string; imageUrl: string; active: boolean };
type AboutContent = { eyebrow: string; title: string; intro: string; storyTitle: string; storyParagraphs: string[]; teamPhoto: string; teamMembers: TeamMember[] };

// Same defensive fallback as AdminHomepageContent - never crash the
// settings page on a database that's missing a field this component
// expects, whatever the reason.
function withDefaults(about: Partial<AboutContent> | null | undefined): AboutContent {
  const base = DEFAULT_ABOUT as AboutContent;
  return {
    eyebrow: about?.eyebrow ?? base.eyebrow,
    title: about?.title ?? base.title,
    intro: about?.intro ?? base.intro,
    storyTitle: about?.storyTitle ?? base.storyTitle,
    storyParagraphs: about?.storyParagraphs ?? base.storyParagraphs,
    teamPhoto: about?.teamPhoto ?? base.teamPhoto,
    teamMembers: about?.teamMembers ?? base.teamMembers,
  };
}

export function AdminAboutContent({ about, onSave }: { about: Partial<AboutContent> | null | undefined; onSave: (about: AboutContent) => Promise<void> }) {
  const [draft, setDraft] = useState(() => withDefaults(about));
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => setDraft(withDefaults(about)), [about]);
  const set = <K extends keyof AboutContent>(key: K, value: AboutContent[K]) => setDraft(current => ({ ...current, [key]: value }));
  const updateTeamMember = (index: number, patch: Partial<TeamMember>) => set('teamMembers', draft.teamMembers.map((member, memberIndex) => memberIndex === index ? { ...member, ...patch } : member));
  async function submit(event: React.FormEvent) { event.preventDefault(); setSaving(true); try { await onSave(draft); setSaved(true); window.setTimeout(() => setSaved(false), 3000); } finally { setSaving(false); } }

  return <div className="space-y-6 max-w-4xl">
    <form onSubmit={submit} className="space-y-6">
      <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]"><Users className="w-4 h-4" /><span>Website content</span></div><h1 className="font-serif-luxury text-3xl font-bold text-[#161f19] mt-1">About Page</h1><p className="text-sm text-[#707f74] mt-1">Controls the public About page story, team image and individual profiles.</p></div>
      <SectionCard title="Story">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Eyebrow"><input className={inputClass} value={draft.eyebrow} onChange={e => set('eyebrow', e.target.value)} /></Field><Field label="Page title"><input className={inputClass} value={draft.title} onChange={e => set('title', e.target.value)} /></Field><Field label="Story heading"><input className={inputClass} value={draft.storyTitle} onChange={e => set('storyTitle', e.target.value)} /></Field></div>
        <Field label="Introduction"><textarea className={`${inputClass} min-h-24`} rows={3} value={draft.intro} onChange={e => set('intro', e.target.value)} /></Field>
        <Field label="Story paragraphs" hint="Enter one paragraph per line."><textarea className={`${inputClass} min-h-32`} rows={5} value={draft.storyParagraphs.join('\n')} onChange={e => set('storyParagraphs', e.target.value.split('\n').filter(Boolean))} /></Field>
        <Field label="Team photo"><ImageListEditor images={draft.teamPhoto ? [draft.teamPhoto] : []} maxImages={1} onChange={images => set('teamPhoto', images[0] || '')} /></Field>
      </SectionCard>
      <SectionCard title="Individual team members" description="Profiles can be hidden without deleting them.">
        <div className="flex items-center justify-end"><button type="button" onClick={() => set('teamMembers', [...draft.teamMembers, { id: `team-${Date.now()}`, name: 'New team member', role: 'Safari Specialist', bio: '', imageUrl: '', active: true }])} className="min-h-10 px-3 rounded-xl bg-[#1b4332] text-white text-xs font-bold inline-flex items-center gap-1.5"><Plus className="w-4 h-4" />Add member</button></div>
        {draft.teamMembers.map((member, index) => <div key={member.id} className="rounded-2xl border border-[#e3ddcf] bg-[#faf8f2] p-4 space-y-4"><div className="grid gap-4 sm:grid-cols-2"><Field label="Name"><input className={inputClass} value={member.name} onChange={e => updateTeamMember(index, { name: e.target.value })} /></Field><Field label="Role"><input className={inputClass} value={member.role} onChange={e => updateTeamMember(index, { role: e.target.value })} /></Field></div><Field label="Biography"><textarea className={`${inputClass} min-h-24`} rows={3} value={member.bio} onChange={e => updateTeamMember(index, { bio: e.target.value })} /></Field><Field label="Portrait"><ImageListEditor images={member.imageUrl ? [member.imageUrl] : []} maxImages={1} onChange={images => updateTeamMember(index, { imageUrl: images[0] || '' })} /></Field><div className="flex items-center gap-3"><div className="flex-1"><ToggleField label="Show publicly" checked={member.active} onChange={active => updateTeamMember(index, { active })} /></div><button type="button" onClick={() => set('teamMembers', draft.teamMembers.filter(item => item.id !== member.id))} aria-label={`Remove ${member.name}`} className="min-h-11 min-w-11 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 inline-flex items-center justify-center"><Trash2 className="w-4 h-4" /></button></div></div>)}
      </SectionCard>
      <div className="flex items-center justify-between pt-2">{saved ? <span className="text-xs text-[#1b4332] font-bold flex items-center gap-1"><Check className="w-4 h-4 text-[#128c7e]" />About page saved</span> : <span />}<button type="submit" disabled={saving} className="min-h-11 px-8 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] disabled:opacity-60 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95">{saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}<span>{saving ? 'Saving…' : 'Save about page'}</span></button></div>
    </form>
  </div>;
}
