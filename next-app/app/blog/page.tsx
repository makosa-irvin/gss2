import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { getBlogPosts } from '../../lib/api';

export const revalidate = 900;
export const metadata: Metadata = { title: 'Travel Guides & Blog', description: 'Safari planning guides, wildlife migration timing, and travel tips for Kenya, Tanzania, and Zanzibar.', alternates: { canonical: '/blog' } };

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  return <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-9">
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#142019] to-[#0c120e] p-7 sm:p-10 text-center shadow-xl"><div className="max-w-3xl mx-auto space-y-4"><div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6bc65]"><BookOpen className="w-4 h-4" /><span>Safari planning guides</span></div><h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">Plan with more confidence before you enquire.</h1><p className="text-base text-[#c7d2cb] leading-relaxed">Explore destination comparisons, seasonal considerations and practical safari planning advice for Kenya, Tanzania and the coast.</p></div></section>

    {blogPosts.length ? <div className="grid grid-cols-1 md:grid-cols-3 gap-7">{blogPosts.map(post => <article key={post.id} className="group rounded-2xl bg-white border border-[#ded8cb] overflow-hidden hover:border-[#8a611d] hover:shadow-md transition-all flex flex-col"><Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`} className="text-left flex flex-col flex-1 focus-visible:outline-offset-[-3px]"><div className="aspect-[16/10] overflow-hidden bg-[#faf8f2] relative"><Image src={post.featuredImage || '/images/catalog/mara-savannah.jpg'} alt={post.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" sizes="(max-width:768px) 100vw,33vw" /></div><div className="p-6 space-y-3 flex-1"><div className="flex items-center gap-2 text-xs font-bold text-[#76541a]"><span>{post.category}</span><span aria-hidden="true">·</span><span className="text-[#66766b]">{post.readingTime}</span></div><h2 className="font-serif-luxury text-xl font-bold text-[#161f19] group-hover:text-[#704d15] transition-colors line-clamp-2">{post.title}</h2><p className="text-sm text-[#46544b] line-clamp-3 leading-relaxed">{post.excerpt}</p></div><div className="px-6 pb-6 pt-4 flex items-center justify-between text-sm text-[#66766b] border-t border-[#eeebe2]"><span>{post.author?.name}</span><span className="text-[#76541a] font-bold flex items-center gap-1">Read guide <ArrowRight className="w-4 h-4" /></span></div></Link></article>)}</div> : <div className="rounded-3xl bg-white border border-[#ded8cb] p-8 text-center text-[#46544b]">Blog content is temporarily unavailable from the catalog API.</div>}
  </div>;
}
