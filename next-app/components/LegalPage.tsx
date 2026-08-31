import type { Metadata } from 'next';
import { LEGAL_UPDATED, type LegalPageContent } from '../lib/legal';

export function legalMetadata(path: string, page: LegalPageContent): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: path,
      siteName: 'Good Secrets Safaris',
      type: 'website',
    },
  };
}

export function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <main className="page">
      <span className="eyebrow">Good Secrets Safaris</span>
      <h1>{page.title}</h1>
      <p className="lede">{page.description}</p>
      <p className="meta">Last updated {LEGAL_UPDATED}</p>
      <div className="card">
        {page.blocks.map(([heading, body]) => (
          <section className="section" key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
