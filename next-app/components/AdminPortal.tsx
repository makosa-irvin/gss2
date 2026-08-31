'use client';

import { useEffect, useMemo, useState } from 'react';
import { FileText, Inbox, MapPin, MessageSquare, Palmtree, Plus, Search, Trash2, X } from 'lucide-react';
import { AdminGrowth } from './admin/AdminGrowth';
import { AdminLayout, type AdminSection } from './admin/AdminLayout';
import { AdminOverview } from './admin/AdminOverview';
import { AdminSettings } from './admin/AdminSettings';

type AdminUser = { id: string; email: string; name: string };
type CatalogKey = 'tours' | 'destinations' | 'hotels' | 'blog' | 'testimonials';
type AnyRecord = Record<string, any>;
const endpoints: Record<CatalogKey, string> = { tours: '/api/admin/tours', destinations: '/api/admin/destinations', hotels: '/api/admin/hotels', blog: '/api/admin/blog', testimonials: '/api/admin/testimonials' };

async function api(path: string, options: RequestInit = {}) {
  const response = await fetch(`/api/backend${path}`, { credentials: 'include', headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options });
  let body: any = null;
  try { body = await response.json(); } catch {}
  if (!response.ok) throw new Error(body?.error || `Request failed (${response.status})`);
  return body;
}
function stripServerFields(record: AnyRecord) { const { id, createdAt, updatedAt, viewsCount, ...rest } = record; return rest; }
function labelOf(record: AnyRecord) { return record.title || record.name || record.reviewerName || record.slug || record.id; }

export function AdminPortal() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const [data, setData] = useState<Record<string, any>>({});
  const [editor, setEditor] = useState<{ key: CatalogKey; id?: string; json: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => { api('/api/auth/me').then(setUser).catch(() => setUser(null)).finally(() => setAuthChecked(true)); }, []);
  useEffect(() => { if (user) refresh(); }, [user]);

  async function refresh() {
    setError('');
    try {
      const [enquiries, settings, ...catalogResults] = await Promise.all([
        api('/api/enquiries'),
        api('/api/settings'),
        ...Object.entries(endpoints).map(async ([key, path]) => [key, await api(path)] as const),
      ]);
      setData({ enquiries, settings, ...Object.fromEntries(catalogResults as any) });
    } catch (err: any) { setError(err.message); }
  }
  async function login(formData: FormData) {
    setError('');
    try { setUser(await api('/api/auth/login', { method: 'POST', body: JSON.stringify({ email: formData.get('email'), password: formData.get('password') }) })); }
    catch (err: any) { setError(err.message); }
  }
  async function logout() { await api('/api/auth/logout', { method: 'POST' }).catch(() => undefined); setUser(null); setData({}); }
  async function updateStatus(id: string, status: string) { try { await api(`/api/enquiries/${id}/status`, { method: 'PUT', body: JSON.stringify({ status }) }); await refresh(); } catch (err: any) { setError(err.message); } }
  async function saveSettings(settings: AnyRecord) { try { const saved = await api('/api/settings', { method: 'PUT', body: JSON.stringify(settings) }); setData(current => ({ ...current, settings: saved })); } catch (err: any) { setError(err.message); throw err; } }
  async function deleteRecord(key: CatalogKey, id: string) { if (!confirm('Delete this record? This cannot be undone.')) return; try { await api(`${endpoints[key]}/${id}`, { method: 'DELETE' }); await refresh(); } catch (err: any) { setError(err.message); } }
  function editRecord(key: CatalogKey, record: AnyRecord) { setEditor({ key, id: record.id, json: JSON.stringify(stripServerFields(record), null, 2) }); }
  function createFromExisting(key: CatalogKey) {
    const sample = data[key]?.[0];
    if (!sample) { setError('Create at least one record before using clone creation for this empty catalog.'); return; }
    const clone = stripServerFields(sample); const stamp = Date.now().toString().slice(-6);
    if (clone.slug) clone.slug = `copy-${stamp}-${clone.slug}`;
    if (clone.title) clone.title = `Copy of ${clone.title}`;
    if (clone.name) clone.name = `Copy of ${clone.name}`;
    if ('published' in clone) clone.published = false;
    setEditor({ key, json: JSON.stringify(clone, null, 2) });
  }
  async function saveEditor() {
    if (!editor) return;
    setBusy(true); setError('');
    try {
      const payload = JSON.parse(editor.json);
      await api(editor.id ? `${endpoints[editor.key]}/${editor.id}` : endpoints[editor.key], { method: editor.id ? 'PUT' : 'POST', body: JSON.stringify(payload) });
      setEditor(null); await refresh();
    } catch (err: any) { setError(err.message || 'Invalid JSON'); }
    finally { setBusy(false); }
  }

  const enquiries = data.enquiries || [];
  const counts = useMemo(() => ({ enquiries: enquiries.length, newEnquiries: enquiries.filter((item: AnyRecord) => item.status === 'New').length, tours: data.tours?.length || 0, hotels: data.hotels?.length || 0, destinations: data.destinations?.length || 0, blog: data.blog?.length || 0, testimonials: data.testimonials?.length || 0 }), [data, enquiries]);

  if (!authChecked) return <div className="min-h-screen bg-[#f7f5ee] flex items-center justify-center p-6 text-sm text-[#707f74]">Checking admin session…</div>;
  if (!user) return <div className="min-h-screen bg-[#f7f5ee] flex items-center justify-center px-4 py-12"><div className="w-full max-w-md rounded-3xl border border-[#e8e4da] bg-white p-7 sm:p-9 shadow-xl"><div className="mb-7"><span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#9e7120]">Authenticated access</span><h1 className="mt-1 font-serif-luxury text-3xl font-bold text-[#161f19]">Good Secrets admin</h1><p className="mt-2 text-sm text-[#707f74]">Sign in to manage enquiries, website content and growth reporting.</p></div><form action={login} className="space-y-4"><label className="block text-sm font-bold text-[#303e35]">Email<input type="email" name="email" required autoComplete="email" className="mt-1.5 w-full min-h-12 rounded-xl border border-[#d7d1c4] bg-[#faf8f2] px-4 text-[#161f19] outline-none focus:border-[#8a611d] focus:ring-2 focus:ring-[#8a611d]/20" /></label><label className="block text-sm font-bold text-[#303e35]">Password<input type="password" name="password" required autoComplete="current-password" className="mt-1.5 w-full min-h-12 rounded-xl border border-[#d7d1c4] bg-[#faf8f2] px-4 text-[#161f19] outline-none focus:border-[#8a611d] focus:ring-2 focus:ring-[#8a611d]/20" /></label>{error ? <p className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">{error}</p> : null}<button className="w-full min-h-12 rounded-xl bg-[#1b4332] text-white font-extrabold text-sm hover:bg-[#123326]">Sign in</button></form></div></div>;

  const catalogKey = activeSection === 'tours' || activeSection === 'hotels' || activeSection === 'destinations' || activeSection === 'blog' || activeSection === 'testimonials' ? activeSection : null;
  const sectionContent = activeSection === 'overview'
    ? <AdminOverview tours={data.tours || []} hotels={data.hotels || []} enquiries={enquiries} whatsapp={data.settings?.contact?.whatsapp || '+254 729 000 410'} onGoToEnquiries={() => setActiveSection('enquiries')} onGoToTours={() => setActiveSection('tours')} />
    : activeSection === 'growth'
      ? <AdminGrowth enquiries={enquiries} />
      : activeSection === 'enquiries'
        ? <EnquiriesPanel enquiries={enquiries} onStatus={updateStatus} />
        : catalogKey
          ? <CatalogPanel keyName={catalogKey} records={data[catalogKey] || []} query={query} setQuery={setQuery} onCreate={() => createFromExisting(catalogKey)} onEdit={record => editRecord(catalogKey, record)} onDelete={id => deleteRecord(catalogKey, id)} />
          : data.settings
            ? <AdminSettings settings={data.settings} onSave={saveSettings} />
            : <div className="rounded-2xl border border-[#e8e4da] bg-white p-6 text-sm text-[#707f74]">Loading company settings…</div>;

  return <AdminLayout active={activeSection} onNavigate={section => { setError(''); setQuery(''); setActiveSection(section); }} adminName={user.name} adminEmail={user.email} onLogout={logout} counts={counts}>
    {error ? <div className="mb-6 flex items-center justify-between gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-800"><span>{error}</span><button onClick={() => setError('')} aria-label="Dismiss error" className="text-rose-600 hover:text-rose-800"><X className="w-4 h-4" /></button></div> : null}
    {sectionContent}
    {editor ? <div className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-black/55 p-3 sm:p-6"><div className="relative my-4 w-full max-w-4xl rounded-3xl border border-[#e8e4da] bg-white p-6 sm:p-8 shadow-2xl"><button type="button" onClick={() => setEditor(null)} aria-label="Close editor" className="absolute right-4 top-4 min-h-10 min-w-10 rounded-full bg-[#f4f1e8] text-[#161f19] flex items-center justify-center"><X className="w-4 h-4" /></button><span className="text-[11px] font-bold uppercase tracking-widest text-[#9e7120]">{editor.id ? 'Edit' : 'Create'} {editor.key}</span><h2 className="mt-1 font-serif-luxury text-2xl font-bold text-[#161f19]">Structured record editor</h2><p className="mt-2 text-sm text-[#707f74]">This remains available while the dedicated field-by-field forms are ported. Backend validation is authoritative.</p><textarea className="mt-5 w-full min-h-[420px] rounded-2xl border border-[#d7d1c4] bg-[#faf8f2] p-4 font-mono text-xs text-[#303e35] outline-none focus:border-[#8a611d]" value={editor.json} onChange={event => setEditor({ ...editor, json: event.target.value })} /><div className="mt-5 flex flex-wrap gap-3"><button className="min-h-11 rounded-xl bg-[#1b4332] px-5 text-sm font-bold text-white hover:bg-[#123326] disabled:opacity-60" disabled={busy} onClick={saveEditor}>{busy ? 'Saving…' : 'Save record'}</button><button className="min-h-11 rounded-xl border border-[#d7d1c4] bg-[#f4f1e8] px-5 text-sm font-bold text-[#303e35]" onClick={() => setEditor(null)}>Cancel</button></div></div></div> : null}
  </AdminLayout>;
}

function EnquiriesPanel({ enquiries, onStatus }: { enquiries: AnyRecord[]; onStatus: (id: string, status: string) => void }) {
  return <div className="space-y-6"><div><div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9e7120]"><Inbox className="w-4 h-4" />CRM</div><h1 className="mt-1 font-serif-luxury text-3xl font-bold text-[#161f19]">Enquiries</h1><p className="mt-2 text-sm text-[#707f74]">Review new leads and move each enquiry through the planning pipeline.</p></div><div className="overflow-hidden rounded-2xl border border-[#e8e4da] bg-white shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-[#faf8f2] text-[11px] uppercase tracking-wider text-[#707f74]"><tr><th className="px-5 py-4">Lead</th><th className="px-5 py-4">Trip</th><th className="px-5 py-4">Created</th><th className="px-5 py-4">Status</th></tr></thead><tbody className="divide-y divide-[#eeebe2]">{enquiries.map(item => <tr key={item.id}><td className="px-5 py-4"><strong className="text-[#161f19]">{item.fullName}</strong><span className="block text-xs text-[#707f74] mt-1">{item.email}</span><span className="block text-xs text-[#707f74]">{item.phone}</span></td><td className="px-5 py-4 text-[#405046]">{item.tourTitle || item.hotelTitle || item.preferredDestination || item.safariType || 'General enquiry'}<span className="block text-xs text-[#9a9184] mt-1">{item.hearAboutUs}</span></td><td className="px-5 py-4 text-[#707f74]">{new Date(item.createdAt).toLocaleDateString()}</td><td className="px-5 py-4"><select value={item.status} onChange={event => onStatus(item.id, event.target.value)} className="min-h-10 rounded-xl border border-[#d7d1c4] bg-[#faf8f2] px-3 font-semibold text-[#303e35]">{['New', 'Contacted', 'Quoted', 'Confirmed', 'Cancelled'].map(status => <option key={status}>{status}</option>)}</select></td></tr>)}</tbody></table></div></div></div>;
}

const catalogMeta: Record<CatalogKey, { title: string; copy: string; icon: React.ComponentType<{ className?: string }> }> = {
  tours: { title: 'Safaris & Tours', copy: 'Manage public safari itineraries, pricing, routes and publishing status.', icon: Search },
  hotels: { title: 'Hotels & Resorts', copy: 'Manage beach stays, lodges, rates and property details.', icon: Palmtree },
  destinations: { title: 'Destinations', copy: 'Manage destination guides, wildlife highlights and travel information.', icon: MapPin },
  blog: { title: 'Blog', copy: 'Manage travel articles, planning content and publishing status.', icon: FileText },
  testimonials: { title: 'Testimonials', copy: 'Manage traveller feedback displayed across the website.', icon: MessageSquare },
};
function CatalogPanel({ keyName, records, query, setQuery, onCreate, onEdit, onDelete }: { keyName: CatalogKey; records: AnyRecord[]; query: string; setQuery: (value: string) => void; onCreate: () => void; onEdit: (record: AnyRecord) => void; onDelete: (id: string) => void }) {
  const meta = catalogMeta[keyName]; const Icon = meta.icon; const filtered = records.filter(record => `${labelOf(record)} ${record.slug || ''}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="space-y-6"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9e7120]"><Icon className="w-4 h-4" />Website content</div><h1 className="mt-1 font-serif-luxury text-3xl font-bold text-[#161f19]">{meta.title}</h1><p className="mt-2 max-w-2xl text-sm text-[#707f74]">{meta.copy}</p></div><button onClick={onCreate} className="min-h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1b4332] px-5 text-sm font-bold text-white hover:bg-[#123326]"><Plus className="w-4 h-4" />Add new</button></div><div className="flex items-center gap-3 rounded-2xl border border-[#e8e4da] bg-white p-3 shadow-sm"><Search className="w-4 h-4 text-[#9e7120]" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder={`Search ${meta.title.toLowerCase()}...`} className="min-h-10 flex-1 bg-transparent text-sm text-[#161f19] outline-none" /><span className="text-xs text-[#707f74]">{filtered.length} records</span></div><div className="overflow-hidden rounded-2xl border border-[#e8e4da] bg-white shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-[#faf8f2] text-[11px] uppercase tracking-wider text-[#707f74]"><tr><th className="px-5 py-4">Record</th><th className="px-5 py-4">Published</th><th className="px-5 py-4 text-right">Actions</th></tr></thead><tbody className="divide-y divide-[#eeebe2]">{filtered.map(item => <tr key={item.id}><td className="px-5 py-4"><strong className="text-[#161f19]">{labelOf(item)}</strong>{item.slug ? <span className="mt-1 block text-xs text-[#9a9184]">/{item.slug}</span> : null}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${item.published === false ? 'bg-stone-100 text-stone-600' : 'bg-emerald-100 text-emerald-800'}`}>{item.published === false ? 'Draft' : item.published === undefined ? '—' : 'Published'}</span></td><td className="px-5 py-4"><div className="flex justify-end gap-2"><button onClick={() => onEdit(item)} className="min-h-10 rounded-xl border border-[#d7d1c4] bg-[#faf8f2] px-4 text-xs font-bold text-[#303e35] hover:border-[#9e7120]">Edit</button><button onClick={() => onDelete(item.id)} aria-label={`Delete ${labelOf(item)}`} className="min-h-10 min-w-10 rounded-xl text-rose-700 hover:bg-rose-50 inline-flex items-center justify-center"><Trash2 className="w-4 h-4" /></button></div></td></tr>)}</tbody></table></div></div></div>;
}
