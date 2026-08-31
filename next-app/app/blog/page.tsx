import type { Metadata } from 'next';
import { BlogCard } from '../../components/CatalogCards';
import { getBlogPosts } from '../../lib/api';

export const revalidate=900;
export const metadata:Metadata={title:'Safari Stories & Advice',description:'Safari stories, practical travel advice and destination inspiration from Good Secrets Safaris.',alternates:{canonical:'/blog'}};
export default async function BlogPage(){const posts=await getBlogPosts();return <><header className="page-hero"><div className="container"><p className="eyebrow">Stories from the route</p><h1>Safari stories and practical advice</h1><p>Destination context, planning ideas and field notes to help you make better itinerary decisions.</p></div></header><section className="section"><div className="container">{posts.length?<div className="grid-3">{posts.map((post)=><BlogCard key={post.id} post={post}/>)}</div>:<div className="empty-state">Blog content is temporarily unavailable from the catalog API. Our evergreen planning guides are still available under Guides.</div>}</div></section></>}
