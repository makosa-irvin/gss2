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
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Good Secrets Safaris</p>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          <p style={{ fontSize: '.8rem' }}>Last updated {LEGAL_UPDATED}</p>
        </div>
      </header>
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="prose-card">
            {page.blocks.map(([heading, body]) => (
              <section key={heading}>
                <h2>{heading}</h2>
                <p>{body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
