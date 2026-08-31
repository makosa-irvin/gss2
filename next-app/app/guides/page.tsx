import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { guides } from '../../lib/guides';

export const metadata: Metadata = {
  title: 'Safari Planning Guides',
  description: 'Practical safari planning guides for Kenya, Tanzania and Zanzibar: cost, timing, routes, family travel, honeymoons, first safaris and booking decisions.',
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  return <>
    <header className="page-hero"><div className="container"><p className="eyebrow">Plan with context</p><h1>Safari planning guides</h1><p>Use these guides to understand the trade-offs behind route, timing, cost and comfort before you compare individual safari ideas.</p></div></header>
    <section className="section"><div className="container"><div className="guide-grid">{guides.map((guide) => <article className="guide-card" key={guide.slug}><Link className="card-image" href={`/guides/${guide.slug}`}><Image src={guide.image} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" /></Link><div className="card-body"><p className="card-kicker">Safari planning guide</p><h3><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h3><p>{guide.description}</p><Link className="text-link" href={`/guides/${guide.slug}`}>Read guide →</Link></div></article>)}</div></div></section>
  </>;
}
