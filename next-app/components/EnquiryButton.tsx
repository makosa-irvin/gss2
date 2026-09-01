'use client';

import { Sparkles } from 'lucide-react';
import { useEnquiry } from './ClientProviders';

export function EnquiryButton({
  label = 'Plan my safari',
  className = 'button primary',
  type,
  destination,
  tourTitle,
  hotelTitle,
  showSparkles = false,
}: {
  label?: string;
  className?: string;
  type?: string;
  destination?: string;
  tourTitle?: string;
  hotelTitle?: string;
  showSparkles?: boolean;
}) {
  const { openEnquiry } = useEnquiry();
  return (
    <button
      type="button"
      className={className}
      onClick={() => openEnquiry({
        ...(type ? { type } : {}),
        ...(destination ? { destination } : {}),
        ...(tourTitle ? { tourTitle } : {}),
        ...(hotelTitle ? { hotelTitle } : {}),
      })}
    >
      {showSparkles && <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />}
      <span>{label}</span>
    </button>
  );
}
