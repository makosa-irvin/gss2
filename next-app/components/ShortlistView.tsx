'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, Heart, Hotel as HotelIcon, MapPin, Sparkles, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { readShortlist, writeShortlist, type SavedItem } from './ShortlistButton';
import { useEnquiry } from './ClientProviders';

const CURRENCY_KEY = 'gss_currency_v1';
const RESIDENT_KEY = 'gss_resident_mode_v1';

function usePricingPrefs() {
  const [currency, setCurrency] = useState<'USD' | 'KES'>('USD');
  const [resident, setResident] = useState(false);
  useEffect(() => {
    const load = () => {
      const current = localStorage.getItem(CURRENCY_KEY);
      setCurrency(current === 'KES' ? 'KES' : 'USD');
      setResident(localStorage.getItem(RESIDENT_KEY) === 'true');
    };
    load();
    window.addEventListener('gss-pricing-preference-changed', load);
    return () => window.removeEventListener('gss-pricing-preference-changed', load);
  }, []);
  return { currency, resident };
}

function formatPrice(item: SavedItem, currency: 'USD' | 'KES') {
  const usd = Number(item.priceFrom || 0);
  if (currency === 'KES') {
    const kes = item.priceFromKES && item.priceFromKES > 0 ? item.priceFromKES : Math.round(usd * 130);
    return `KSH ${Number(kes).toLocaleString()}`;
  }
  return `$${usd.toLocaleString()}`;
}

export function ShortlistView() {
  const [items, setItems] = useState<SavedItem[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const { openEnquiry } = useEnquiry();
  const { currency } = usePricingPrefs();

  useEffect(() => {
    const load = () => {
      const next = readShortlist();
      setItems(next);
      setSelected(current => {
        const valid = current.filter(k => next.some(i => `${i.kind}:${i.id}` === k));
        return valid.length ? valid : next.map(i => `${i.kind}:${i.id}`);
      });
    };
    load();
    window.addEventListener('gss-shortlist-changed', load);
    return () => window.removeEventListener('gss-shortlist-changed', load);
  }, []);

  const key = (i: SavedItem) => `${i.kind}:${i.id}`;
  const basket = useMemo(() => items.filter(i => selected.includes(key(i))), [items, selected]);
  const safaris = items.filter(i => i.kind === 'safari');
  const hotels = items.filter(i => i.kind === 'hotel');
  const remove = (item: SavedItem) => writeShortlist(items.filter(i => key(i) !== key(item)));
  const clear = () => { writeShortlist([]); setSelected([]); };
  const toggleBasket = (item: SavedItem) => {
    const k = key(item);
    setSelected(v => v.includes(k) ? v.filter(x => x !== k) : [...v, k]);
  };

  if (!items.length) {
    return <section className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 sm:p-12 text-center space-y-5"><div className="w-14 h-14 rounded-full bg-brand-soft/10 text-brand-soft flex items-center justify-center mx-auto"><Heart className="w-7 h-7" /></div><div><h2 className="font-serif-luxury text-2xl font-bold text-white">Nothing saved yet</h2><p className="text-sm text-on-shell-muted mt-2 max-w-lg mx-auto">Tap the heart on any safari or hotel to keep it here for later.</p></div><div className="flex flex-col sm:flex-row justify-center gap-3"><Link href="/safaris" className="min-h-11 rounded-xl bg-brand-strong hover:bg-brand-hover px-5 text-sm font-bold text-white inline-flex items-center justify-center">Explore safaris</Link><Link href="/hotels" className="min-h-11 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-5 text-sm font-bold text-white inline-flex items-center justify-center">Browse stays</Link></div></section>;
  }

  const all = selected.length === items.length;
  return <div className="space-y-10">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"><div><p className="text-sm text-on-shell-muted"><strong className="text-white">{items.length}</strong> saved · <strong className="text-brand-soft">{basket.length}</strong> in this quote basket</p><p className="text-xs text-on-shell-subtle mt-1">Selecting an item for the basket does not remove it from your shortlist.</p></div><div className="flex flex-wrap gap-2"><button type="button" onClick={() => setSelected(all ? [] : items.map(key))} className="min-h-10 px-4 rounded-xl border border-white/15 text-sm font-semibold text-white hover:bg-white/10">{all ? 'Select none' : 'Select all'}</button><button type="button" onClick={clear} className="min-h-10 px-4 inline-flex items-center gap-2 text-sm font-semibold text-on-shell-muted hover:text-white"><Trash2 className="w-4 h-4" />Clear saved list</button></div></div>
    {safaris.length ? <SavedSection title="Safari ideas" eyebrow="Saved safaris" items={safaris} selected={selected} toggleBasket={toggleBasket} remove={remove} currency={currency} /> : null}
    {hotels.length ? <SavedSection title="Hotels & lodges" eyebrow="Saved stays" items={hotels} selected={selected} toggleBasket={toggleBasket} remove={remove} currency={currency} /> : null}
    <section className="rounded-3xl border border-brand-deep bg-shell p-6 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"><div className="max-w-2xl"><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">Your quote basket</span><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">Compare {basket.length || 'your'} selected option{basket.length === 1 ? '' : 's'} in one conversation.</h2><p className="text-sm text-on-shell-muted mt-2 leading-relaxed">We’ll receive exactly the items you selected, so the safari team can compare routes, stays, timing and combinations without making you submit separate forms.</p></div><button disabled={!basket.length} onClick={() => openEnquiry({ type: `Shortlist enquiry · ${basket.map(i => `${i.kind === 'safari' ? 'Safari' : 'Stay'}: ${i.title}`).join(' | ')}` })} className="min-h-12 shrink-0 rounded-xl bg-brand-soft hover:bg-brand-soft disabled:bg-ink-subtle disabled:text-border disabled:cursor-not-allowed px-6 text-sm font-extrabold text-ink-strong inline-flex items-center justify-center gap-2"><Sparkles className="w-4 h-4" />{basket.length ? `Request quote for ${basket.length}` : 'Choose items first'}</button></section>
  </div>;
}

function SavedSection({ title, eyebrow, items, selected, toggleBasket, remove, currency }: { title: string; eyebrow: string; items: SavedItem[]; selected: string[]; toggleBasket: (i: SavedItem) => void; remove: (i: SavedItem) => void; currency: 'USD' | 'KES' }) {
  return <section className="space-y-5"><div><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">{eyebrow}</span><h2 className="font-serif-luxury text-3xl font-bold text-white mt-1">{title}</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{items.map(item => {
    const k = `${item.kind}:${item.id}`;
    const inBasket = selected.includes(k);
    const href = item.kind === 'safari' ? `/safaris/${item.slug}` : `/hotels/${item.slug}`;
    return <article key={k} className={`overflow-hidden rounded-2xl bg-white border shadow-sm transition text-ink ${inBasket ? 'border-brand-soft ring-2 ring-brand-soft/25' : 'border-border-strong'}`}><div className="relative aspect-[16/10] overflow-hidden">{item.image ? <Image src={item.image} alt={item.title} fill className="object-cover" /> : null}<button type="button" onClick={() => remove(item)} aria-label={`Remove ${item.title} from saved shortlist`} className="absolute right-3 top-3 min-w-11 min-h-11 rounded-full bg-white/95 text-brand-strong flex items-center justify-center shadow-md"><Heart className="w-5 h-5 fill-current" /></button></div><div className="p-5 space-y-4"><button type="button" aria-pressed={inBasket} onClick={() => toggleBasket(item)} className={`w-full min-h-11 rounded-xl border px-3 text-sm font-bold flex items-center justify-center gap-2 ${inBasket ? 'bg-action border-action text-white' : 'bg-surface-muted border-border-strong text-ink'}`}>{inBasket && <Check className="w-4 h-4" />}{inBasket ? 'Included in quote basket' : 'Add to quote basket'}</button><div><h3 className="font-serif-luxury text-xl font-bold text-ink-strong">{item.title}</h3><p className="mt-2 flex items-center gap-1.5 text-sm text-ink-muted">{item.kind === 'safari' ? <MapPin className="w-4 h-4 text-brand-deep" /> : <HotelIcon className="w-4 h-4 text-brand-deep" />}{item.kind === 'safari' ? `${item.country || ''} · ${item.durationLabel || ''}` : item.location}</p></div><div className="flex items-end justify-between gap-3 border-t border-border pt-4"><div><span className="text-xs text-ink-muted">From</span><strong className="block font-serif-luxury text-xl text-ink-strong">{formatPrice(item, currency)}</strong></div><Link href={href} className="min-h-11 rounded-xl bg-action hover:bg-action-strong px-4 text-sm font-bold text-white inline-flex items-center">View {item.kind === 'safari' ? 'safari' : 'stay'}</Link></div></div></article>;
  })}</div></section>;
}
