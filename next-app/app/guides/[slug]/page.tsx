import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guideBySlug, guides } from '../../../lib/guides';
import { siteUrl } from '../../../lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, type: 'article', url: `/guides/${guide.slug}`, images: [guide.image] },
  };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();
  const url = siteUrl(`/guides/${guide.slug}`);
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.description, image: siteUrl(guide.image), author: { '@type': 'Organization', name: 'Good Secrets Safaris' }, publisher: { '@type': 'Organization', name: 'Good Secrets Safaris' }, mainEntityOfPage: url },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Safari Planning Guides', item: siteUrl('/guides') },
      { '@type': 'ListItem', position: 3, name: guide.title, item: url },
    ] },
  ];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className="page-hero"><div className="container guide-article"><Link className="text-link" href="/guides">← All safari planning guides</Link><p className="eyebrow">Safari buyer guide</p><h1>{guide.title}</h1><p>{guide.description}</p></div></header>
    <article className="section"><div className="container guide-article"><div className="hero-image"><Image src={guide.image} alt="" fill priority sizes="(max-width: 900px) 100vw, 860px" /></div><div className="prose-card"><p className="lede">{guide.intro}</p>{guide.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<section><h2>Confirm the details for your dates</h2><p>Seasonal conditions, park rules, fees, flight schedules and availability change. A dated itinerary should confirm the details that matter for your trip.</p></section></div><nav className="related-links" aria-label="Related safari planning">{guide.related.map((item) => <Link key={item.to} href={item.to}>{item.label} →</Link>)}</nav></div></article>
  </>;
}
