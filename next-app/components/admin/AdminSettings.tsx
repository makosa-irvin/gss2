'use client';

import { useEffect, useState } from 'react';
import { Check, KeyRound, Loader2, Save, Settings } from 'lucide-react';

type CompanySettings = {
  companyName: string; tagline: string; description: string; logoUrl: string;
  contact: { email: string; phone: string; whatsapp: string; address: string; businessHours: string };
  social: { instagram: string; facebook: string; tiktok: string; youtube: string; linkedin: string };
  currency: { primary: 'USD' | 'KES'; exchangeRateUsdToKes: number };
  booking: { defaultEnquiryMessage: string; bookingEmail: string; whatsappNumber: string; whatsappDefaultMessage: string };
  seo: { defaultTitle: string; defaultDescription: string; defaultOgImage: string };
};

const inputClass = 'w-full min-h-11 rounded-xl border border-[#d7d1c4] bg-[#faf8f2] px-3.5 py-2.5 text-sm text-[#161f19] outline-none focus:border-[#8a611d] focus:ring-2 focus:ring-[#8a611d]/20';
function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) { return <label className="block"><span className="text-sm font-bold text-[#303e35]">{label}</span>{hint ? <span className="mt-0.5 block text-xs text-[#707f74]">{hint}</span> : null}<div className="mt-1.5">{children}</div></label>; }
function SectionCard({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) { return <section className="rounded-2xl border border-[#e8e4da] bg-white p-5 sm:p-6 shadow-sm"><h2 className="font-serif-luxury text-xl font-bold text-[#161f19]">{title}</h2>{description ? <p className="mt-1 text-xs text-[#707f74]">{description}</p> : null}<div className="mt-5 space-y-4">{children}</div></section>; }

export function AdminSettings({ settings, onSave, onChangePassword }: { settings: CompanySettings; onSave: (settings: CompanySettings) => Promise<void>; onChangePassword: (currentPassword: string, newPassword: string) => Promise<void> }) {
  const [draft, setDraft] = useState(settings);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => setDraft(settings), [settings]);
  const set = <K extends keyof CompanySettings>(key: K, value: CompanySettings[K]) => setDraft(current => ({ ...current, [key]: value }));
  async function submit(event: React.FormEvent) { event.preventDefault(); setSaving(true); try { await onSave(draft); setSaved(true); window.setTimeout(() => setSaved(false), 3000); } finally { setSaving(false); } }

  return <div className="space-y-6 max-w-4xl">
    <form onSubmit={submit} className="space-y-6">
      <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]"><Settings className="w-4 h-4" /><span>Configuration</span></div><h1 className="font-serif-luxury text-3xl font-bold text-[#161f19] mt-1">Company Settings</h1><p className="text-sm text-[#707f74] mt-1">Changes take effect across the whole website and WhatsApp links as soon as you save.</p></div>
      <SectionCard title="Brand"><div className="grid gap-4 sm:grid-cols-2"><Field label="Company name"><input className={inputClass} value={draft.companyName} onChange={e => set('companyName', e.target.value)} /></Field><Field label="Tagline"><input className={inputClass} value={draft.tagline} onChange={e => set('tagline', e.target.value)} /></Field><Field label="Logo URL"><input className={inputClass} type="url" value={draft.logoUrl} onChange={e => set('logoUrl', e.target.value)} /></Field></div><Field label="Company description" hint="Used in the site footer and as a fallback meta description"><textarea className={`${inputClass} min-h-24`} rows={3} value={draft.description} onChange={e => set('description', e.target.value)} /></Field></SectionCard>
      <SectionCard title="Contact"><div className="grid gap-4 sm:grid-cols-2"><Field label="WhatsApp phone number" hint="International format, e.g. +254712345678"><input className={inputClass} value={draft.contact.whatsapp} onChange={e => set('contact', { ...draft.contact, whatsapp: e.target.value })} /></Field><Field label="General telephone"><input className={inputClass} value={draft.contact.phone} onChange={e => set('contact', { ...draft.contact, phone: e.target.value })} /></Field><Field label="Email address"><input className={inputClass} type="email" value={draft.contact.email} onChange={e => set('contact', { ...draft.contact, email: e.target.value })} /></Field><Field label="Business hours"><input className={inputClass} value={draft.contact.businessHours} onChange={e => set('contact', { ...draft.contact, businessHours: e.target.value })} /></Field></div><Field label="Office address"><input className={inputClass} value={draft.contact.address} onChange={e => set('contact', { ...draft.contact, address: e.target.value })} /></Field></SectionCard>
      <SectionCard title="Social media" description="Full profile URLs. Leave blank to hide an icon from the footer."><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{(['instagram','facebook','tiktok','youtube','linkedin'] as const).map(key => <Field key={key} label={key[0].toUpperCase()+key.slice(1)}><input className={inputClass} type="url" value={draft.social[key]} onChange={e => set('social', { ...draft.social, [key]: e.target.value })} /></Field>)}</div></SectionCard>
      <SectionCard title="Currency"><div className="grid gap-4 sm:grid-cols-2"><Field label="Primary display currency"><select className={inputClass} value={draft.currency.primary} onChange={e => set('currency', { ...draft.currency, primary: e.target.value as 'USD'|'KES' })}><option>USD</option><option>KES</option></select></Field><Field label="USD to KES exchange rate" hint="Used to convert prices when a visitor switches currency"><input className={inputClass} type="number" min={1} value={draft.currency.exchangeRateUsdToKes} onChange={e => set('currency', { ...draft.currency, exchangeRateUsdToKes: Number(e.target.value) })} /></Field></div></SectionCard>
      <SectionCard title="Booking & WhatsApp" description="Controls the pre-filled message and address used across every Ask on WhatsApp and enquiry button on the site."><div className="grid gap-4 sm:grid-cols-2"><Field label="WhatsApp number for bookings"><input className={inputClass} value={draft.booking.whatsappNumber} onChange={e => set('booking', { ...draft.booking, whatsappNumber: e.target.value })} /></Field><Field label="Booking notification email"><input className={inputClass} type="email" value={draft.booking.bookingEmail} onChange={e => set('booking', { ...draft.booking, bookingEmail: e.target.value })} /></Field></div><Field label="Default enquiry form message"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.booking.defaultEnquiryMessage} onChange={e => set('booking', { ...draft.booking, defaultEnquiryMessage: e.target.value })} /></Field><Field label="Default WhatsApp message"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.booking.whatsappDefaultMessage} onChange={e => set('booking', { ...draft.booking, whatsappDefaultMessage: e.target.value })} /></Field></SectionCard>
      <SectionCard title="Search engine defaults" description="Used on pages that don't set their own title/description/image."><Field label="Default page title"><input className={inputClass} value={draft.seo.defaultTitle} onChange={e => set('seo', { ...draft.seo, defaultTitle: e.target.value })} /></Field><Field label="Default meta description"><textarea className={`${inputClass} min-h-20`} rows={2} value={draft.seo.defaultDescription} onChange={e => set('seo', { ...draft.seo, defaultDescription: e.target.value })} /></Field><Field label="Default social share image URL"><input className={inputClass} type="url" value={draft.seo.defaultOgImage} onChange={e => set('seo', { ...draft.seo, defaultOgImage: e.target.value })} /></Field></SectionCard>
      <div className="flex items-center justify-between pt-2">{saved ? <span className="text-xs text-[#1b4332] font-bold flex items-center gap-1"><Check className="w-4 h-4 text-[#128c7e]" />Settings saved</span> : <span />}<button type="submit" disabled={saving} className="min-h-11 px-8 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] disabled:opacity-60 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95">{saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}<span>{saving ? 'Saving…' : 'Save settings'}</span></button></div>
    </form>
    <ChangePasswordCard onChangePassword={onChangePassword} />
  </div>;
}

function ChangePasswordCard({ onChangePassword }: { onChangePassword: (currentPassword: string, newPassword: string) => Promise<void> }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError('');
    if (newPassword.length < 8) { setError('New password must be at least 8 characters.'); return; }
    if (newPassword !== confirmPassword) { setError('New password and confirmation do not match.'); return; }
    setSaving(true);
    try {
      await onChangePassword(currentPassword, newPassword);
      setCurrentPassword(''); setNewPassword(''); setConfirmPassword('');
      setSaved(true);
      window.setTimeout(() => setSaved(false), 4000);
    } catch (err: any) {
      setError(err.message || 'Could not change the password.');
    } finally {
      setSaving(false);
    }
  }

  return <form onSubmit={submit}>
    <SectionCard title="Account security" description="Changing your password signs out any other active admin sessions the next time they refresh, and emails a security notification.">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Current password"><input className={inputClass} type="password" autoComplete="current-password" required value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} /></Field>
        <Field label="New password" hint="At least 8 characters"><input className={inputClass} type="password" autoComplete="new-password" required minLength={8} value={newPassword} onChange={e => setNewPassword(e.target.value)} /></Field>
        <Field label="Confirm new password"><input className={inputClass} type="password" autoComplete="new-password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /></Field>
      </div>
      {error ? <p className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">{error}</p> : null}
      <div className="flex items-center justify-between pt-2">
        {saved ? <span className="text-xs text-[#1b4332] font-bold flex items-center gap-1"><Check className="w-4 h-4 text-[#128c7e]" />Password changed</span> : <span />}
        <button type="submit" disabled={saving} className="min-h-11 px-8 rounded-xl bg-[#1b4332] hover:bg-[#123326] disabled:opacity-60 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95">{saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <KeyRound className="w-4 h-4" />}<span>{saving ? 'Updating…' : 'Change password'}</span></button>
      </div>
    </SectionCard>
  </form>;
}
