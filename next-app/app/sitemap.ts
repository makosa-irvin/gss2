import type { MetadataRoute } from 'next';
import { getBlogPosts, getDestinations, getHotels, getTours } from '../lib/api';
import { guides } from '../lib/guides';
import { siteUrl } from '../lib/site';

const staticPaths=['/','/safaris','/destinations','/hotels','/blog','/guides','/reviews','/plan-with-us','/about','/contact','/safari-builder','/privacy','/terms','/booking-conditions'];

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const[tours,destinations,hotels,posts]=await Promise.all([getTours(),getDestinations(),getHotels(),getBlogPosts()]);
  const now=new Date();
  return [
    ...staticPaths.map((path)=>({url:siteUrl(path),lastModified:now,changeFrequency:path==='/'?'weekly':'monthly' as const,priority:path==='/'?1:.7})),
    ...guides.map((guide)=>({url:siteUrl(`/guides/${guide.slug}`),lastModified:now,changeFrequency:'monthly' as const,priority:.8})),
    ...tours.map((tour)=>({url:siteUrl(`/safaris/${tour.slug}`),lastModified:now,changeFrequency:'weekly' as const,priority:.9})),
    ...destinations.map((item)=>({url:siteUrl(`/destinations/${item.slug}`),lastModified:now,changeFrequency:'monthly' as const,priority:.8})),
    ...hotels.map((item)=>({url:siteUrl(`/hotels/${item.slug}`),lastModified:now,changeFrequency:'weekly' as const,priority:.7})),
    ...posts.map((post)=>({url:siteUrl(`/blog/${post.slug}`),lastModified:post.publishedDate?new Date(post.publishedDate):now,changeFrequency:'monthly' as const,priority:.7})),
  ];
}
