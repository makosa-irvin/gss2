'use client';

import { useState } from 'react';
import { BarChart3, Compass, ExternalLink, FileText, Inbox, LayoutDashboard, LogOut, MapPin, Menu, MessageSquare, Palmtree, Settings, X } from 'lucide-react';

export type AdminSection = 'overview' | 'growth' | 'enquiries' | 'tours' | 'hotels' | 'destinations' | 'blog' | 'testimonials' | 'settings';
type NavItem = { id: AdminSection; label: string; icon: React.ComponentType<{ className?: string }>; count?: number; badge?: number };

export function AdminLayout({ active, onNavigate, adminName, adminEmail, onLogout, counts, children }: { active: AdminSection; onNavigate: (section: AdminSection) => void; adminName?: string; adminEmail?: string; onLogout: () => void; counts: { enquiries: number; newEnquiries: number; tours: number; hotels: number; destinations: number; blog: number; testimonials: number }; children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const crmItems: NavItem[] = [{ id: 'overview', label: 'Dashboard', icon: LayoutDashboard }, { id: 'growth', label: 'Growth', icon: BarChart3 }, { id: 'enquiries', label: 'Enquiries', icon: Inbox, count: counts.enquiries, badge: counts.newEnquiries }];
  const cmsItems: NavItem[] = [{ id: 'tours', label: 'Safaris & Tours', icon: Compass, count: counts.tours }, { id: 'hotels', label: 'Hotels & Resorts', icon: Palmtree, count: counts.hotels }, { id: 'destinations', label: 'Destinations', icon: MapPin, count: counts.destinations }, { id: 'blog', label: 'Blog', icon: FileText, count: counts.blog }, { id: 'testimonials', label: 'Testimonials', icon: MessageSquare, count: counts.testimonials }];

  const navButton = (item: NavItem) => {
    const Icon = item.icon;
    const isActive = active === item.id;
    return <button key={item.id} type="button" onClick={() => { onNavigate(item.id); setMobileNavOpen(false); }} className={`w-full min-h-11 flex items-center gap-3 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive ? 'bg-[#1b4332] text-white shadow-sm' : 'text-[#3f4e44] hover:bg-[#f4f1e8]'}`}><Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#e6bc65]' : 'text-[#9e7120]'}`} /><span className="flex-1 text-left truncate">{item.label}</span>{typeof item.count === 'number' ? <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/15 text-white' : 'bg-[#f4f1e8] text-[#707f74]'}`}>{item.count}</span> : null}{item.badge ? <span className="w-2 h-2 rounded-full bg-[#b3822a] shrink-0" aria-label={`${item.badge} new`} /> : null}</button>;
  };

  const sidebarContent = <div className="flex flex-col h-full">
    <div className="p-5 border-b border-[#e8e4da]"><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-lg bg-[#8a611d] p-0.5 shrink-0"><div className="w-full h-full bg-[#161f19] rounded-[7px] flex items-center justify-center"><Compass className="w-4 h-4 text-[#f4f2eb]" /></div></div><div className="min-w-0"><span className="font-serif-luxury text-base font-bold text-[#161f19] block leading-tight truncate">Good Secrets</span><span className="text-[10px] font-bold uppercase tracking-widest text-[#9e7120] block">Admin CMS</span></div></div></div>
    <nav className="flex-1 overflow-y-auto p-4 space-y-6"><div className="space-y-1"><span className="text-[10px] font-bold uppercase tracking-widest text-[#a89f8f] px-3.5 block mb-1.5">CRM & Growth</span>{crmItems.map(navButton)}</div><div className="space-y-1"><span className="text-[10px] font-bold uppercase tracking-widest text-[#a89f8f] px-3.5 block mb-1.5">Website content</span>{cmsItems.map(navButton)}</div><div className="space-y-1"><span className="text-[10px] font-bold uppercase tracking-widest text-[#a89f8f] px-3.5 block mb-1.5">Configuration</span>{navButton({ id: 'settings', label: 'Company Settings', icon: Settings })}</div></nav>
    <div className="p-4 border-t border-[#e8e4da] space-y-2"><a href="/" className="w-full min-h-10 flex items-center gap-2.5 px-3.5 rounded-xl text-sm font-semibold text-[#3f4e44] hover:bg-[#f4f1e8]"><ExternalLink className="w-4 h-4 text-[#9e7120]" />View live website</a><div className="flex items-center justify-between gap-2 px-3.5 pt-2"><span className="text-xs text-[#707f74] truncate" title={adminEmail}>{adminName || adminEmail}</span><button type="button" onClick={onLogout} aria-label="Log out" className="p-2 rounded-lg text-rose-700 hover:bg-rose-50 shrink-0"><LogOut className="w-4 h-4" /></button></div></div>
  </div>;

  return <div className="min-h-screen bg-[#f7f5ee] lg:flex text-[#303e35]">
    <aside className="hidden lg:block w-64 shrink-0 border-r border-[#e8e4da] bg-white sticky top-0 h-screen">{sidebarContent}</aside>
    <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between gap-3 px-4 py-3 bg-white border-b border-[#e8e4da]"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-[#8a611d] p-0.5"><div className="w-full h-full bg-[#161f19] rounded-[6px] flex items-center justify-center"><Compass className="w-3.5 h-3.5 text-[#f4f2eb]" /></div></div><span className="font-serif-luxury text-sm font-bold text-[#161f19]">Admin CMS</span></div><button type="button" onClick={() => setMobileNavOpen(true)} aria-label="Open admin menu" className="min-h-11 min-w-11 flex items-center justify-center rounded-xl bg-[#f4f1e8] border border-[#e0dcce] text-[#161f19]"><Menu className="w-5 h-5" /></button></div>
    {mobileNavOpen ? <div className="lg:hidden fixed inset-0 z-50 flex"><div className="absolute inset-0 bg-black/50" onClick={() => setMobileNavOpen(false)} aria-hidden="true" /><div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl"><button type="button" onClick={() => setMobileNavOpen(false)} aria-label="Close admin menu" className="absolute top-4 right-4 min-h-9 min-w-9 flex items-center justify-center rounded-full bg-[#f4f1e8] text-[#161f19]"><X className="w-4 h-4" /></button>{sidebarContent}</div></div> : null}
    <main className="flex-1 min-w-0"><div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8">{children}</div></main>
  </div>;
}
