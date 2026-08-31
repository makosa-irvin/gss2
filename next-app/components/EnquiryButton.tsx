'use client';

import { useEnquiry } from './ClientProviders';

export function EnquiryButton({ label = 'Plan my safari', className = 'button primary', type, destination, tourTitle, hotelTitle }: { label?: string; className?: string; type?: string; destination?: string; tourTitle?: string; hotelTitle?: string }) {
  const { openEnquiry } = useEnquiry();
  return <button type="button" className={className} onClick={() => openEnquiry({ ...(type ? { type } : {}), ...(destination ? { destination } : {}), ...(tourTitle ? { tourTitle } : {}), ...(hotelTitle ? { hotelTitle } : {}) })}>{label}</button>;
}
