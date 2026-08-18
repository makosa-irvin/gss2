import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { MessageCircle, X, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentTourTitle?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentTourTitle }) => {
  const { getWhatsAppUrl, settings } = useData();
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = getWhatsAppUrl({
    tourTitle: currentTourTitle
  });

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Mini preview popup */}
      {showTooltip && (
        <div className="relative rounded-2xl bg-white border border-[#e8e4da] shadow-2xl p-3.5 max-w-xs text-xs text-[#161f19] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#707f74] hover:text-[#161f19]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-[#128c7e] font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span>Online Safari Specialist</span>
          </div>
          <p className="text-[#5d6e62] text-[11px] leading-relaxed">
            Need safari recommendations or seasonal rates? Chat with our guide right now.
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp with Good Secrets Safaris"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-extrabold text-xs tracking-wide shadow-xl hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95 ring-4 ring-[#25D366]/20"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp Safari Guide</span>
      </a>
    </div>
  );
};
