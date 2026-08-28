import React, { useState } from 'react';
import { CompanySettings } from '../../types';
import { Field, TextInput, NumberInput, TextArea, SelectInput, SectionCard, FormGrid } from '../shared/AdminForm';
import { Settings, Save, Check, Loader2 } from 'lucide-react';

interface AdminSettingsProps {
  settings: CompanySettings;
  onSave: (settings: Partial<CompanySettings>) => Promise<void>;
  onError: (message: string) => void;
}

export const AdminSettings: React.FC<AdminSettingsProps> = ({ settings, onSave, onError }) => {
  const [draft, setDraft] = useState<CompanySettings>(settings);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const set = <K extends keyof CompanySettings>(key: K, value: CompanySettings[K]) => setDraft((d) => ({ ...d, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await onSave(draft);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Failed to save settings.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
          <Settings className="w-4 h-4" />
          <span>Configuration</span>
        </div>
        <h1 className="font-serif-luxury text-3xl font-bold text-[#161f19] mt-1">Company Settings</h1>
        <p className="text-sm text-[#707f74] mt-1">Changes take effect across the whole website and WhatsApp links as soon as you save.</p>
      </div>

      <SectionCard title="Brand">
        <FormGrid>
          <Field label="Company name">
            <TextInput value={draft.companyName} onChange={(v) => set('companyName', v)} />
          </Field>
          <Field label="Tagline">
            <TextInput value={draft.tagline} onChange={(v) => set('tagline', v)} />
          </Field>
          <Field label="Logo URL">
            <TextInput value={draft.logoUrl} onChange={(v) => set('logoUrl', v)} type="url" />
          </Field>
        </FormGrid>
        <Field label="Company description" hint="Used in the site footer and as a fallback meta description">
          <TextArea value={draft.description} onChange={(v) => set('description', v)} rows={3} />
        </Field>
      </SectionCard>

      <SectionCard title="Contact">
        <FormGrid>
          <Field label="WhatsApp phone number" required hint="International format, e.g. +254712345678">
            <TextInput value={draft.contact.whatsapp} onChange={(v) => set('contact', { ...draft.contact, whatsapp: v })} placeholder="+254712345678" />
          </Field>
          <Field label="General telephone">
            <TextInput value={draft.contact.phone} onChange={(v) => set('contact', { ...draft.contact, phone: v })} />
          </Field>
          <Field label="Email address">
            <TextInput value={draft.contact.email} onChange={(v) => set('contact', { ...draft.contact, email: v })} type="email" />
          </Field>
          <Field label="Business hours">
            <TextInput value={draft.contact.businessHours} onChange={(v) => set('contact', { ...draft.contact, businessHours: v })} placeholder="24/7 Concierge Support" />
          </Field>
        </FormGrid>
        <Field label="Office address">
          <TextInput value={draft.contact.address} onChange={(v) => set('contact', { ...draft.contact, address: v })} />
        </Field>
      </SectionCard>

      <SectionCard title="Social media" description="Full profile URLs. Leave blank to hide an icon from the footer.">
        <FormGrid cols={3}>
          <Field label="Instagram">
            <TextInput value={draft.social.instagram} onChange={(v) => set('social', { ...draft.social, instagram: v })} type="url" />
          </Field>
          <Field label="Facebook">
            <TextInput value={draft.social.facebook} onChange={(v) => set('social', { ...draft.social, facebook: v })} type="url" />
          </Field>
          <Field label="TikTok">
            <TextInput value={draft.social.tiktok} onChange={(v) => set('social', { ...draft.social, tiktok: v })} type="url" />
          </Field>
          <Field label="YouTube">
            <TextInput value={draft.social.youtube} onChange={(v) => set('social', { ...draft.social, youtube: v })} type="url" />
          </Field>
          <Field label="LinkedIn">
            <TextInput value={draft.social.linkedin} onChange={(v) => set('social', { ...draft.social, linkedin: v })} type="url" />
          </Field>
        </FormGrid>
      </SectionCard>

      <SectionCard title="Currency">
        <FormGrid>
          <Field label="Primary display currency">
            <SelectInput value={draft.currency.primary} onChange={(v) => set('currency', { ...draft.currency, primary: v as 'USD' | 'KES' })} options={['USD', 'KES']} />
          </Field>
          <Field label="USD to KES exchange rate" hint="Used to convert prices when a visitor switches currency">
            <NumberInput value={draft.currency.exchangeRateUsdToKes} onChange={(v) => set('currency', { ...draft.currency, exchangeRateUsdToKes: v })} min={1} />
          </Field>
        </FormGrid>
      </SectionCard>

      <SectionCard title="Booking & WhatsApp" description="Controls the pre-filled message and address used across every 'Ask on WhatsApp' and enquiry button on the site.">
        <FormGrid>
          <Field label="WhatsApp number for bookings" hint="Can differ from the general contact number above">
            <TextInput value={draft.booking.whatsappNumber} onChange={(v) => set('booking', { ...draft.booking, whatsappNumber: v })} placeholder="+254712345678" />
          </Field>
          <Field label="Booking notification email">
            <TextInput value={draft.booking.bookingEmail} onChange={(v) => set('booking', { ...draft.booking, bookingEmail: v })} type="email" />
          </Field>
        </FormGrid>
        <Field label="Default enquiry form message" hint="Pre-filled note shown when someone opens the enquiry form without a specific tour">
          <TextArea value={draft.booking.defaultEnquiryMessage} onChange={(v) => set('booking', { ...draft.booking, defaultEnquiryMessage: v })} rows={2} />
        </Field>
        <Field label="Default WhatsApp message" hint="Pre-filled text when a visitor taps a WhatsApp button">
          <TextArea value={draft.booking.whatsappDefaultMessage} onChange={(v) => set('booking', { ...draft.booking, whatsappDefaultMessage: v })} rows={2} />
        </Field>
      </SectionCard>

      <SectionCard title="Search engine defaults" description="Used on pages that don't set their own title/description/image.">
        <Field label="Default page title">
          <TextInput value={draft.seo.defaultTitle} onChange={(v) => set('seo', { ...draft.seo, defaultTitle: v })} />
        </Field>
        <Field label="Default meta description">
          <TextArea value={draft.seo.defaultDescription} onChange={(v) => set('seo', { ...draft.seo, defaultDescription: v })} rows={2} />
        </Field>
        <Field label="Default social share image URL">
          <TextInput value={draft.seo.defaultOgImage} onChange={(v) => set('seo', { ...draft.seo, defaultOgImage: v })} type="url" />
        </Field>
      </SectionCard>

      <div className="flex items-center justify-between pt-2">
        {saved ? (
          <span className="text-xs text-[#1b4332] font-bold flex items-center gap-1">
            <Check className="w-4 h-4 text-[#128c7e]" /> Settings saved
          </span>
        ) : <span />}
        <button
          type="submit"
          disabled={isSaving}
          className="min-h-11 px-8 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] disabled:opacity-60 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95"
        >
          {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          <span>{isSaving ? 'Saving…' : 'Save settings'}</span>
        </button>
      </div>
    </form>
  );
};
