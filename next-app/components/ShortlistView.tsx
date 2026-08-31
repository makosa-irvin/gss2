'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { readShortlist, writeShortlist } from './ShortlistButton';
import { useEnquiry } from './ClientProviders';

type SavedSafari = ReturnType<typeof readShortlist>[number];

export function ShortlistView(){const[items,setItems]=useState<SavedSafari[]>([]);const{openEnquiry}=useEnquiry();useEffect(()=>{const load=()=>setItems(readShortlist());load();window.addEventListener('gss-shortlist-changed',load);return()=>window.removeEventListener('gss-shortlist-changed',load)},[]);function remove(id:string){const next=items.filter((item)=>item.id!==id);writeShortlist(next);setItems(next)}if(!items.length)return <div className="empty-state"><h2>Your shortlist is empty.</h2><p>Save safari ideas while you compare routes, then send the shortlist as context for a planning conversation.</p><Link className="button dark" href="/safaris">Explore safaris</Link></div>;return <><div className="shortlist-grid">{items.map((item)=><article className="catalog-card" key={item.id}>{item.image?<Link href={`/safaris/${item.slug}`} className="card-image"><Image src={item.image} alt={item.title} fill sizes="(max-width:720px) 100vw,33vw"/></Link>:null}<div className="card-body"><p className="card-kicker">{item.country} · {item.durationLabel}</p><h3><Link href={`/safaris/${item.slug}`}>{item.title}</Link></h3>{item.priceFrom?<p>From ${Number(item.priceFrom).toLocaleString()}</p>:null}<button className="button secondary" onClick={()=>remove(item.id)}>Remove</button></div></article>)}</div><div className="prose-card" style={{marginTop:28}}><h2>Plan from this shortlist</h2><p>We can compare the routes you saved and explain which combination best matches your dates and priorities.</p><button className="button primary" onClick={()=>openEnquiry({type:`Shortlist enquiry · ${items.map((item)=>item.title).join(' | ')}`})}>Send shortlist to a planner</button></div></>}
