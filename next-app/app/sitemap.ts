import type { MetadataRoute } from 'next';
import { getBlogPosts, getDestinations, getHotels, getTours } from '../lib/api';
import { guides } from '../lib/guides';
import { siteUrl } from '../lib/site';

const staticPaths=['/','/safaris','/destinations','/hotels','/blog','/guides','/reviews','/plan-with-us','/about','/contact','/safari-builder','/privacy','/terms','/booking-conditions'];
type Frequency=NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
const entry=(url:string,lastModified:Date,changeFrequency:Frequency,priority:number):MetadataRoute.Sitemap[number]=>({url,lastModified,changeFrequency,priority});

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const[tours,destinations,hotels,posts]=await Promise.all([getTours(),getDestinations(),getHotels(),getBlogPosts()]);
  const now=new Date();
  return [
    ...staticPaths.map((path)=>entry(siteUrl(path),now,path==='/'?'weekly':'monthly',path==='/'?1:.7)),
    ...guides.map((guide)=>entry(siteUrl(`/guides/${guide.slug}`),now,'monthly',.8)),
    ...tours.map((tour)=>entry(siteUrl(`/safaris/${tour.slug}`),now,'weekly',.9)),
    ...destinations.map((item)=>entry(siteUrl(`/destinations/${item.slug}`),now,'monthly',.8)),
    ...hotels.map((item)=>entry(siteUrl(`/hotels/${item.slug}`),now,'weekly',.7)),
    ...posts.map((post)=>entry(siteUrl(`/blog/${post.slug}`),post.publishedDate?new Date(post.publishedDate):now,'monthly',.7)),
  ];
}
