import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2 pointer-events-none">
      {/* Elegant Concierge Tooltip - Only on hover or discreet */}
      <div
        className={`pointer-events-auto transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2 pointer-events-none'
        } bg-darkbrown text-ivory text-xs px-3.5 py-2 rounded-2xl shadow-luxury border border-beige/30 flex items-center gap-2`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Chat with Melo Atelier on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => openWhatsApp(WHATSAPP_MESSAGES.generalEnquiry())}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="pointer-events-auto btn-shine relative group w-14 h-14 rounded-full bg-darkbrown hover:bg-mocha text-ivory shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-beige/50 focus:outline-none"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with Melo Designs"
      >
        <MessageCircle className="w-6 h-6 text-beige group-hover:scale-110 transition-transform" />

        {/* Subtle Online Badge */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beige opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-mocha border-2 border-ivory"></span>
        </span>
      </button>
    </div>
  );
};
