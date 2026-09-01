'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp(){
  const href=`https://wa.me/254729000410?text=${encodeURIComponent("Hello Good Secrets Safaris, I'd like to enquire about a safari.")}`;
  return <div id="floating-whatsapp-container" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"><a id="floating-whatsapp-btn" href={href} target="_blank" rel="noopener noreferrer" aria-label="Ask Good Secrets Safaris on WhatsApp" className="group min-h-12 min-w-12 sm:min-h-14 inline-flex items-center justify-center gap-2.5 px-3.5 sm:px-5 rounded-full bg-[#128c5a] hover:bg-[#0f744b] text-white font-extrabold text-sm shadow-xl transition-transform hover:-translate-y-0.5 ring-4 ring-white/20"><MessageCircle className="w-5 h-5" aria-hidden="true"/><span className="hidden sm:inline">Ask on WhatsApp</span></a></div>
}
