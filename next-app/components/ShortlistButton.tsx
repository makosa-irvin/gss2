'use client';

import { useEffect, useState } from 'react';

type SavedSafari = { id: string; title: string; slug: string; image?: string; priceFrom?: number; durationLabel?: string; country?: string };
const KEY = 'gss-shortlist-v1';

export function readShortlist(): SavedSafari[] { try { return JSON.parse(localStorage.getItem(KEY) || '[]') as SavedSafari[]; } catch { return []; } }
export function writeShortlist(items: SavedSafari[]) { localStorage.setItem(KEY, JSON.stringify(items)); window.dispatchEvent(new Event('gss-shortlist-changed')); }

export function ShortlistButton({ safari }: { safari: SavedSafari }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => { setSaved(readShortlist().some((item) => item.id === safari.id)); }, [safari.id]);
  function toggle() {
    const current = readShortlist();
    const next = current.some((item) => item.id === safari.id) ? current.filter((item) => item.id !== safari.id) : [...current, safari];
    writeShortlist(next); setSaved(!saved);
  }
  return <button type="button" className="button secondary" onClick={toggle}>{saved ? 'Saved to shortlist ✓' : 'Save to shortlist'}</button>;
}
