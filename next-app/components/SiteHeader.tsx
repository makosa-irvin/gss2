'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Check, ChevronDown, Heart, Menu, Phone, ShieldCheck, Sparkles, X } from 'lucide-react';
import { EnquiryButton } from './EnquiryButton';
import { readShortlist } from './ShortlistButton';

type Currency = 'USD' | 'KES';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [savedCount, setSavedCount] = useState(0);
  const [activeCurrency, setActiveCurrency] = useState<Currency>('USD');
  const [isKenyanResidentMode, setIsKenyanResidentMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const updateShortlist = () => setSavedCount(readShortlist().length);
    const savedCurrency = window.localStorage.getItem('gss-display-currency');
    const savedResident = window.localStorage.getItem('gss-resident-rates');
    if (savedCurrency === 'KES' || savedCurrency === 'USD') setActiveCurrency(savedCurrency);
    if (savedResident === 'true') setIsKenyanResidentMode(true);
    handleScroll();
    updateShortlist();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('gss-shortlist-changed', updateShortlist);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('gss-shortlist-changed', updateShortlist);
    };
  }, []);

  const toggleDropdown = (name: string) => setActiveDropdown(current => current === name ? null : name);
  const dropdownButtonClass = 'min-h-11 px-3.5 py-2 text-sm font-semibold text-ink hover:text-brand-deep transition-colors flex items-center gap-1 rounded-lg';
  const dropdownItemClass = 'w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-ink hover:bg-surface-soft hover:text-brand-deep transition-colors block';
  const closeMenus = () => { setActiveDropdown(null); setMobileMenuOpen(false); };
  const setCurrency = (currency: Currency) => { setActiveCurrency(currency); window.localStorage.setItem('gss-display-currency', currency); window.dispatchEvent(new Event('gss-pricing-preference-changed')); };
  const toggleResident = () => { const next = !isKenyanResidentMode; setIsKenyanResidentMode(next); window.localStorage.setItem('gss-resident-rates', String(next)); window.dispatchEvent(new Event('gss-pricing-preference-changed')); };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      <div className={`bg-surface-soft border-b border-border px-4 sm:px-8 text-xs text-ink-muted overflow-hidden transition-[max-height,opacity,padding] duration-200 ${isScrolled ? 'max-h-0 opacity-0 py-0 sm:max-h-20 sm:opacity-100 sm:py-1.5' : 'max-h-20 opacity-100 py-1.5'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-ink font-medium"><span className="w-2 h-2 rounded-full bg-emerald-700" aria-hidden="true" />East Africa-based safari planning</span>
            <span className="hidden md:inline text-border-strong" aria-hidden="true">|</span>
            <a href="tel:+254729000410" className="hidden md:flex items-center gap-1 min-h-8 text-ink-muted hover:text-brand-deep font-semibold transition-colors"><Phone className="w-3 h-3 text-brand-deep" /><span>+254 729 000 410</span></a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" aria-pressed={isKenyanResidentMode} onClick={toggleResident} className={`min-h-8 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all flex items-center gap-1 ${isKenyanResidentMode ? 'bg-action text-white border-action shadow-sm' : 'bg-white text-ink-muted border-border-strong hover:border-brand'}`}><span className="hidden sm:inline">Kenyan Resident Rates</span><span className="sm:hidden">Resident Rates</span>{isKenyanResidentMode && <Check className="w-3 h-3" />}</button>
            <div className="flex items-center rounded-lg bg-white border border-border-strong p-0.5 text-[11px] font-bold shadow-xs" aria-label="Currency selector">
              <button type="button" aria-pressed={activeCurrency === 'USD'} onClick={() => setCurrency('USD')} className={`min-h-7 px-2 py-0.5 rounded-md transition-colors ${activeCurrency === 'USD' ? 'bg-brand-strong text-white' : 'text-ink-muted hover:text-black'}`}>USD</button>
              <button type="button" aria-pressed={activeCurrency === 'KES'} onClick={() => setCurrency('KES')} className={`min-h-7 px-2 py-0.5 rounded-md transition-colors ${activeCurrency === 'KES' ? 'bg-brand-strong text-white' : 'text-ink-muted hover:text-black'}`}>KES</button>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Main navigation" className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-border shadow-md py-2.5' : 'bg-white/95 backdrop-blur-md border-b border-border py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          <Link href="/" aria-label="Good Secrets Safaris home" className="flex items-center select-none group rounded-xl text-left shrink-0"><Image src="/images/brand/logo.png" alt="Good Secrets Safaris" width={170} height={70} className="h-11 sm:h-14 w-auto object-contain" priority /></Link>

          <div className="hidden lg:flex items-center gap-0.5">
            <div className="relative" onMouseEnter={() => setActiveDropdown('explore')} onMouseLeave={() => setActiveDropdown(null)}><button type="button" onClick={() => toggleDropdown('explore')} aria-expanded={activeDropdown === 'explore'} className={dropdownButtonClass}><span>Destinations</span><ChevronDown className="w-3.5 h-3.5 opacity-60" /></button>{activeDropdown === 'explore' && <div className="absolute top-full left-0 w-64 rounded-2xl bg-white border border-border-strong shadow-2xl p-2.5 z-50">{[{ label: 'Kenya Safaris & Coast', value: 'Kenya' },{ label: 'Tanzania Wilderness', value: 'Tanzania' },{ label: 'Zanzibar Spice Archipelago', value: 'Zanzibar' },{ label: 'Kenya + Tanzania Combined', value: 'Kenya + Tanzania' },{ label: 'Safari & Beach Combo', value: 'Safari + Beach' }].map(item => <Link key={item.value} onClick={closeMenus} href={`/safaris?country=${encodeURIComponent(item.value)}`} className={dropdownItemClass}>{item.label}</Link>)}<div className="pt-1.5 mt-1.5 border-t border-border"><Link onClick={closeMenus} href="/destinations" className="w-full text-left px-3 py-2.5 text-sm font-bold text-brand-deep hover:bg-surface-soft rounded-xl block">View All Destinations →</Link></div></div>}</div>
            <div className="relative" onMouseEnter={() => setActiveDropdown('safaris')} onMouseLeave={() => setActiveDropdown(null)}><button type="button" onClick={() => toggleDropdown('safaris')} aria-expanded={activeDropdown === 'safaris'} className={dropdownButtonClass}><span>Safaris</span><ChevronDown className="w-3.5 h-3.5 opacity-60" /></button>{activeDropdown === 'safaris' && <div className="absolute top-full left-0 w-72 rounded-2xl bg-white border border-border-strong shadow-2xl p-2.5 z-50 grid grid-cols-1 gap-0.5"><Link onClick={closeMenus} href="/safaris" className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-brand-deep bg-surface-muted hover:bg-surface-soft">All Safaris & Packages</Link>{['Big 5','Great Migration','Family','Honeymoon','Senior Friendly','Luxury','Midrange','Budget','Fly-In','Safari & Beach'].map(style => <Link key={style} onClick={closeMenus} href={`/safaris?travelStyle=${encodeURIComponent(style)}`} className={dropdownItemClass}>{style} Safaris</Link>)}</div>}</div>
            <div className="relative" onMouseEnter={() => setActiveDropdown('holidays')} onMouseLeave={() => setActiveDropdown(null)}><button type="button" onClick={() => toggleDropdown('holidays')} aria-expanded={activeDropdown === 'holidays'} className={dropdownButtonClass}><span>Beach & Stays</span><ChevronDown className="w-3.5 h-3.5 opacity-60" /></button>{activeDropdown === 'holidays' && <div className="absolute top-full left-0 w-64 rounded-2xl bg-white border border-border-strong shadow-2xl p-2.5 z-50"><Link onClick={() => { setIsKenyanResidentMode(true); window.localStorage.setItem('gss-resident-rates','true'); closeMenus(); }} href="/hotels?resident=true" className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-action bg-action-soft hover:bg-surface-soft mb-1 block">Kenyan Resident Beach Deals</Link><Link onClick={closeMenus} href="/hotels" className={dropdownItemClass}>All Beach Resorts & Spas</Link><Link onClick={closeMenus} href="/safaris?travelStyle=Safari%20%26%20Beach" className={dropdownItemClass}>Bush & Beach Combos</Link></div>}</div>
            <div className="relative" onMouseEnter={() => setActiveDropdown('discover')} onMouseLeave={() => setActiveDropdown(null)}><button type="button" onClick={() => toggleDropdown('discover')} aria-expanded={activeDropdown === 'discover'} className={dropdownButtonClass}><span>Plan Your Safari</span><ChevronDown className="w-3.5 h-3.5 opacity-60" /></button>{activeDropdown === 'discover' && <div className="absolute top-full right-0 w-64 rounded-2xl bg-white border border-border-strong shadow-2xl p-2.5 z-50"><Link onClick={closeMenus} href="/safari-builder" className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-brand-deep bg-surface-muted hover:bg-surface-soft mb-1 block">Custom Safari Builder</Link><Link onClick={closeMenus} href="/plan-with-us" className={dropdownItemClass}><span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-deep" />How we plan your safari</span></Link><Link onClick={closeMenus} href="/reviews" className={dropdownItemClass}>Independent Reviews</Link><Link onClick={closeMenus} href="/guides" className={dropdownItemClass}>Safari Planning Guides</Link><Link onClick={closeMenus} href="/blog" className={dropdownItemClass}>Travel Magazine & Stories</Link><Link onClick={closeMenus} href="/about" className={dropdownItemClass}>About Good Secrets</Link><Link onClick={closeMenus} href="/contact" className={dropdownItemClass}>Contact Us</Link></div>}</div>
          </div>

          <div className="hidden lg:flex items-center gap-2"><Link href="/shortlist" className="relative min-h-11 inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface-muted hover:bg-white px-3.5 text-sm font-bold text-ink" aria-label={`Open safari shortlist with ${savedCount} saved ${savedCount === 1 ? 'item' : 'items'}`}><Heart className={`w-4 h-4 text-brand-strong ${savedCount > 0 ? 'fill-current' : ''}`} /><span>Shortlist</span>{savedCount > 0 && <span className="min-w-5 h-5 px-1 rounded-full bg-action text-white text-[11px] inline-flex items-center justify-center">{savedCount}</span>}</Link><EnquiryButton label="Request a Quote" className="inline-flex items-center gap-1.5 min-h-11 px-5 py-2.5 rounded-xl bg-brand-strong hover:bg-brand-hover text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98]" /></div>
          <div className="flex items-center gap-2 lg:hidden"><Link href="/shortlist" aria-label={`Open safari shortlist with ${savedCount} saved ${savedCount === 1 ? 'item' : 'items'}`} className="relative min-w-11 min-h-11 flex items-center justify-center rounded-xl bg-surface-soft text-brand-strong border border-border-strong"><Heart className={`w-5 h-5 ${savedCount > 0 ? 'fill-current' : ''}`} />{savedCount > 0 && <span className="absolute -right-1 -top-1 min-w-5 h-5 px-1 rounded-full bg-action text-white text-[10px] inline-flex items-center justify-center border-2 border-white">{savedCount}</span>}</Link><button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} className="min-w-11 min-h-11 flex items-center justify-center rounded-xl bg-surface-soft text-ink border border-border-strong">{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button></div>
        </div>

        {mobileMenuOpen && <div className="lg:hidden bg-white border-b border-border px-4 py-5 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl"><div className="space-y-1">{[['Home','/'],['Safaris & Tours','/safaris'],['Destinations','/destinations'],['Beach Resorts & Stays','/hotels'],[`My Shortlist${savedCount ? ` (${savedCount})` : ''}`,'/shortlist'],['How We Plan Your Safari','/plan-with-us'],['Traveler Reviews','/reviews'],['Custom Safari Builder','/safari-builder'],['Safari Planning Guides','/guides'],['Travel Magazine & Stories','/blog'],['About Good Secrets Safaris','/about'],['Contact Us','/contact']].map(([label,href]) => <Link key={href} href={href} onClick={closeMenus} className="w-full min-h-11 text-left py-2.5 px-4 rounded-xl font-bold text-sm text-ink hover:bg-surface-soft block">{label}</Link>)}</div><div className="pt-4 border-t border-border space-y-2"><EnquiryButton label="Request a Safari Quote" className="w-full min-h-12 py-3 rounded-xl bg-brand-strong hover:bg-brand-hover text-white font-extrabold text-sm uppercase tracking-wider text-center shadow-sm" /><p className="text-center text-xs text-ink-muted">Tell us your dates and travel style. No payment required.</p></div></div>}
      </nav>
    </header>
  );
}
