import type { Metadata } from 'next';
import { LEGAL_UPDATED, type LegalPageContent } from '../lib/legal';

export function legalMetadata(path: string, page: LegalPageContent): Metadata {
  return { title: page.title, description: page.description, alternates: { canonical: path }, openGraph: { title: page.title, description: page.description, url: path, siteName: 'Good Secrets Safaris', type: 'website' } };
}

export function LegalPage({ page }: { page: LegalPageContent }) {
  return <div className="pb-20">
    <header className="border-b border-white/10 bg-shell px-4 py-14 sm:px-8 sm:py-20"><div className="mx-auto max-w-4xl"><span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-soft">Good Secrets Safaris</span><h1 className="mt-2 font-serif-luxury text-4xl font-bold text-white sm:text-6xl">{page.title}</h1><p className="mt-4 max-w-3xl text-base leading-relaxed text-on-shell-muted">{page.description}</p><p className="mt-3 text-xs text-on-shell-subtle">Last updated {LEGAL_UPDATED}</p></div></header>
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-8 sm:py-14"><div className="rounded-3xl border border-border-strong bg-white p-6 text-ink-strong shadow-sm sm:p-9"><div className="space-y-8">{page.blocks.map(([heading, body]) => <section key={heading}><h2 className="font-serif-luxury text-2xl font-bold">{heading}</h2><p className="mt-2 text-sm leading-7 text-ink-muted sm:text-base">{body}</p></section>)}</div></div></main>
  </div>;
}
