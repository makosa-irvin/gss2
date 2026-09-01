'use client';

import Image from 'next/image';
import { useState } from 'react';

export function TourGallery({images,title}:{images:string[];title:string}){const list=images?.length?images:['/images/catalog/mara-savannah.jpg'];const[index,setIndex]=useState(0);return <div className="space-y-3"><div className="aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden relative bg-surface-soft border border-white/10"><Image src={list[index]} alt={`${title} gallery image ${index+1}`} fill className="object-cover" sizes="(max-width:1024px) 100vw,60vw"/><span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white">{index+1} / {list.length}</span></div>{list.length>1?<div className="flex gap-2 overflow-x-auto pb-1">{list.map((img,i)=><button type="button" key={`${img}-${i}`} onClick={()=>setIndex(i)} aria-pressed={index===i} aria-label={`View photo ${i+1}`} className={`relative shrink-0 w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 ${index===i?'border-brand-soft':'border-transparent opacity-75'}`}><Image src={img} alt="" fill className="object-cover" sizes="112px"/></button>)}</div>:null}</div>}
