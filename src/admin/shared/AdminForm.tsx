import React, { useState } from 'react';
import { Plus, X, ImageOff, Save, Loader2 } from 'lucide-react';

/**
 * Shared visual language for every admin form field: cream input on a
 * white card, gold focus ring, small bold uppercase label. Matches the
 * public site's existing form styling (EnquiryModal, SafariFinderBar)
 * rather than inventing a separate admin visual language.
 */
const fieldBaseClass =
  'w-full min-h-11 px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none focus:ring-2 focus:ring-[#b3822a]/15 transition-colors';

interface FieldWrapperProps {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Field: React.FC<FieldWrapperProps> = ({ label, hint, required, children, className }) => (
  <label className={`block ${className || ''}`}>
    <span className="text-xs font-bold uppercase tracking-wider text-[#76541a] mb-1.5 block">
      {label}
      {required && <span className="text-rose-600 ml-0.5">*</span>}
    </span>
    {children}
    {hint && <span className="text-xs text-[#707f74] mt-1 block">{hint}</span>}
  </label>
);

export const TextInput: React.FC<{
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}> = ({ value, onChange, placeholder, type = 'text', required }) => (
  <input
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    required={required}
    className={fieldBaseClass}
  />
);

export const NumberInput: React.FC<{
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
}> = ({ value, onChange, min, max, step }) => (
  <input
    type="number"
    value={Number.isFinite(value) ? value : 0}
    onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
    min={min}
    max={max}
    step={step}
    className={fieldBaseClass}
  />
);

export const TextArea: React.FC<{
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}> = ({ value, onChange, rows = 3, placeholder }) => (
  <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    rows={rows}
    placeholder={placeholder}
    className={`${fieldBaseClass} resize-y leading-relaxed`}
  />
);

export const SelectInput: React.FC<{
  value: string;
  onChange: (v: string) => void;
  options: readonly string[] | { value: string; label: string }[];
}> = ({ value, onChange, options }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className={`${fieldBaseClass} cursor-pointer`}>
    {options.map((opt) => {
      const o = typeof opt === 'string' ? { value: opt, label: opt } : opt;
      return (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      );
    })}
  </select>
);

export const ToggleField: React.FC<{
  label: string;
  description?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}> = ({ label, description, checked, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    aria-pressed={checked}
    className={`w-full flex items-center justify-between gap-3 p-3.5 rounded-xl border text-left transition-colors ${
      checked ? 'bg-[#eef7f2] border-[#b6d8c3]' : 'bg-[#faf8f2] border-[#ded8cb]'
    }`}
  >
    <span>
      <span className="text-sm font-semibold text-[#161f19] block">{label}</span>
      {description && <span className="text-xs text-[#707f74] block mt-0.5">{description}</span>}
    </span>
    <span
      className={`shrink-0 w-10 h-6 rounded-full relative transition-colors ${checked ? 'bg-[#1b4332]' : 'bg-[#d7d1c4]'}`}
    >
      <span
        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
          checked ? 'translate-x-[18px]' : 'translate-x-0.5'
        }`}
      />
    </span>
  </button>
);

/** Editable list of short strings - facilities, inclusions, tags, wildlife, activities, etc. */
export const ChipListEditor: React.FC<{
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}> = ({ items, onChange, placeholder = 'Add an item and press Enter' }) => {
  const [draft, setDraft] = useState('');

  const commit = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    onChange([...items, trimmed]);
    setDraft('');
  };

  return (
    <div className="space-y-2.5">
      {items.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {items.map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-lg bg-[#f4f1e8] border border-[#e2ddd0] text-xs font-medium text-[#303e35]"
            >
              {item}
              <button
                type="button"
                onClick={() => onChange(items.filter((_, i) => i !== idx))}
                aria-label={`Remove ${item}`}
                className="text-[#9a917f] hover:text-rose-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              commit();
            }
          }}
          placeholder={placeholder}
          className={fieldBaseClass}
        />
        <button
          type="button"
          onClick={commit}
          className="shrink-0 min-h-11 px-3.5 rounded-xl bg-[#f4f1e8] hover:bg-[#eae5d8] border border-[#ded8cb] text-[#161f19]"
          aria-label="Add item"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/** Editable list of image URLs with live thumbnail previews. */
export const ImageListEditor: React.FC<{
  images: string[];
  onChange: (images: string[]) => void;
}> = ({ images, onChange }) => {
  const [draft, setDraft] = useState('');

  const commit = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    onChange([...images, trimmed]);
    setDraft('');
  };

  return (
    <div className="space-y-3">
      {images.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
          {images.map((src, idx) => (
            <div key={`${src}-${idx}`} className="relative group aspect-square rounded-xl overflow-hidden border border-[#ded8cb] bg-[#f4f1e8]">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                src={src}
                alt={`Image ${idx + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <button
                type="button"
                onClick={() => onChange(images.filter((_, i) => i !== idx))}
                aria-label={`Remove image ${idx + 1}`}
                className="absolute top-1 right-1 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              {idx === 0 && (
                <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/60 text-white text-[10px] font-bold uppercase">
                  Cover
                </span>
              )}
            </div>
          ))}
        </div>
      )}
      {images.length === 0 && (
        <div className="flex items-center gap-2 p-3 rounded-xl border border-dashed border-[#d7d1c4] text-xs text-[#707f74]">
          <ImageOff className="w-4 h-4 shrink-0" />
          No images yet. The first image added becomes the cover photo.
        </div>
      )}
      <div className="flex gap-2">
        <input
          type="url"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              commit();
            }
          }}
          placeholder="Paste an image URL"
          className={fieldBaseClass}
        />
        <button
          type="button"
          onClick={commit}
          className="shrink-0 min-h-11 px-3.5 rounded-xl bg-[#f4f1e8] hover:bg-[#eae5d8] border border-[#ded8cb] text-[#161f19]"
          aria-label="Add image"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/** Multi-select for a fixed set of options (e.g. TravelStyle, TravelerType union values) - toggle chips rather than freeform text, so the data stays valid against the type. */
export const MultiSelectChips: React.FC<{
  options: readonly string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}> = ({ options, selected, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {options.map((opt) => {
      const isSelected = selected.includes(opt);
      return (
        <button
          key={opt}
          type="button"
          aria-pressed={isSelected}
          onClick={() => onChange(isSelected ? selected.filter((s) => s !== opt) : [...selected, opt])}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
            isSelected
              ? 'bg-[#1b4332] text-white border-[#1b4332]'
              : 'bg-[#faf8f2] text-[#405046] border-[#ded8cb] hover:border-[#b3822a]'
          }`}
        >
          {opt}
        </button>
      );
    })}
  </div>
);

export const SectionCard: React.FC<{ title: string; description?: string; children: React.ReactNode }> = ({
  title,
  description,
  children
}) => (
  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-4 shadow-xs">
    <div>
      <h3 className="font-serif-luxury text-lg font-bold text-[#161f19]">{title}</h3>
      {description && <p className="text-xs text-[#707f74] mt-0.5">{description}</p>}
    </div>
    {children}
  </div>
);

/** Sticky save/cancel bar pinned to the bottom of a form, matching the pattern used across the public site's own persistent CTAs. */
export const FormActionBar: React.FC<{
  onCancel: () => void;
  isSaving: boolean;
  saveLabel?: string;
  error?: string | null;
}> = ({ onCancel, isSaving, saveLabel = 'Save changes', error }) => (
  <div className="sticky bottom-0 -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 bg-[#faf8f2]/95 backdrop-blur-xl border-t border-[#e8e4da] flex items-center justify-between gap-4">
    <span className="text-xs text-rose-700 font-medium">{error}</span>
    <div className="flex items-center gap-3 ml-auto">
      <button
        type="button"
        onClick={onCancel}
        className="min-h-11 px-5 rounded-xl bg-white border border-[#ded8cb] text-[#161f19] text-sm font-semibold hover:bg-[#f4f1e8]"
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={isSaving}
        className="min-h-11 px-6 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] disabled:opacity-60 text-white text-sm font-bold flex items-center gap-2 shadow-sm"
      >
        {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
        <span>{isSaving ? 'Saving…' : saveLabel}</span>
      </button>
    </div>
  </div>
);

export const FormGrid: React.FC<{ children: React.ReactNode; cols?: 2 | 3 }> = ({ children, cols = 2 }) => (
  <div className={`grid grid-cols-1 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-4`}>{children}</div>
);
