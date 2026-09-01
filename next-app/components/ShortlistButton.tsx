'use client';

import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export type SavedItem = {
  id: string;
  kind: 'safari' | 'hotel';
  title: string;
  slug: string;
  image?: string;
  priceFrom?: number;
  priceFromKES?: number;
  durationLabel?: string;
  country?: string;
  location?: string;
};

type SaveVariant = 'default' | 'sidebar';
const KEY = 'gss-shortlist-v1';

export function readShortlist(): SavedItem[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]') as Array<Partial<SavedItem>>;
    return raw.map(item => ({ ...item, kind: item.kind || 'safari' } as SavedItem)).filter(item => item.id && item.slug && item.title);
  } catch {
    return [];
  }
}

export function writeShortlist(items: SavedItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event('gss-shortlist-changed'));
}

function SaveButton({ item, compact = false, variant = 'default' }: { item: SavedItem; compact?: boolean; variant?: SaveVariant }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(readShortlist().some(x => x.kind === item.kind && x.id === item.id));
  }, [item.id, item.kind]);

  function toggle(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    const current = readShortlist();
    const exists = current.some(x => x.kind === item.kind && x.id === item.id);
    writeShortlist(exists ? current.filter(x => !(x.kind === item.kind && x.id === item.id)) : [...current, item]);
    setSaved(!exists);
  }

  if (compact) {
    const unsaved = item.kind === 'hotel' ? 'bg-black/55 text-white border-white/35 hover:bg-black/70' : 'bg-black/45 text-white border-white/35 hover:bg-black/65';
    return <button type="button" onClick={toggle} aria-pressed={saved} aria-label={saved ? `Remove ${item.title} from shortlist` : `Save ${item.title} to shortlist`} className={`min-w-11 min-h-11 rounded-full border flex items-center justify-center shadow-md backdrop-blur-md transition-colors ${saved ? 'bg-page text-brand-strong border-white' : unsaved}`}><Heart className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} aria-hidden="true" /></button>;
  }

  if (variant === 'sidebar') {
    return <button type="button" onClick={toggle} aria-pressed={saved} aria-label={saved ? `Remove ${item.title} from shortlist` : `Save ${item.title} to shortlist`} className={`w-full min-h-12 rounded-xl font-bold text-sm border flex items-center justify-center gap-2 transition-colors ${saved ? 'bg-amber-50 text-brand-deep border-brand-soft' : 'bg-surface-muted text-ink-muted border-border-strong hover:border-brand'}`}><Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} aria-hidden="true" /><span>{saved ? 'Saved to shortlist' : 'Save to shortlist'}</span></button>;
  }

  return <button type="button" onClick={toggle} aria-pressed={saved} aria-label={saved ? `Remove ${item.title} from shortlist` : `Save ${item.title} to shortlist`} className={`min-h-11 inline-flex items-center justify-center gap-2 rounded-full px-4 text-sm font-bold border transition-colors ${saved ? 'bg-page text-brand-strong border-white' : 'bg-white/5 text-white border-white/15 hover:bg-white/10'}`}><Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} aria-hidden="true" /><span>{saved ? 'Saved' : 'Save'}</span></button>;
}

export function ShortlistButton({ safari, compact = false, variant = 'default' }: { safari: Omit<SavedItem, 'kind'>; compact?: boolean; variant?: SaveVariant }) {
  return <SaveButton compact={compact} variant={variant} item={{ ...safari, kind: 'safari' }} />;
}

export function HotelShortlistButton({ hotel, compact = false, variant = 'default' }: { hotel: Omit<SavedItem, 'kind'>; compact?: boolean; variant?: SaveVariant }) {
  return <SaveButton compact={compact} variant={variant} item={{ ...hotel, kind: 'hotel' }} />;
}
