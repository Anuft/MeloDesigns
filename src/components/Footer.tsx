import React from 'react';
import { ArrowUp, MessageCircle, MapPin, Phone, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Couture', id: 'collections' },
    { label: 'Bespoke Custom', id: 'customise' },
    { label: 'Lookbook Archive', id: 'archive' },
    { label: 'The Atelier', id: 'about' },
    { label: 'Campaigns', id: 'gallery' },
    { label: 'Visit Kasaragod', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181310] text-ivory pt-16 sm:pt-20 pb-12 border-t border-[#302520] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1.5">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.25em] text-white uppercase font-normal block">
                MELO DESIGNS
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.4em] text-[#E6D7C8] font-light block">
                HAUTE COUTURE • KASARAGOD ATELIER
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#E6D7C8]/90 font-light pt-2">
                "Fashion sculpted around your individuality."
              </p>
            </div>

            <p className="text-xs sm:text-sm text-ivory/70 font-light max-w-sm leading-relaxed">
              Bespoke ladieswear and kidswear atelier situated in Thayalangadi, Kasaragod. Merging traditional South Indian needlework with modern, architectural silhouettes.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BOUTIQUE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-[#E6D7C8] hover:text-darkbrown flex items-center gap-2 text-xs tracking-wider transition-all duration-300"
                aria-label="Instagram Main"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span className="text-[10.5px]">@melo.designss</span>
              </a>

              <a
                href={BOUTIQUE_INFO.studioInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-[#E6D7C8] hover:text-darkbrown flex items-center gap-2 text-xs tracking-wider transition-all duration-300"
                aria-label="Instagram Designer Studio"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span className="text-[10.5px]">@melo_designer.studio</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E6D7C8] font-medium border-b border-white/10 pb-2">
              The Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/80 font-light tracking-wider uppercase">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kasaragod Atelier Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E6D7C8] font-medium border-b border-white/10 pb-2">
              Atelier & Visits
            </h4>
            <div className="space-y-3 text-xs text-ivory/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E6D7C8] flex-shrink-0 mt-0.5" />
                <span>{BOUTIQUE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E6D7C8] flex-shrink-0" />
                <a 
                  href={`tel:${BOUTIQUE_INFO.phoneNumber}`}
                  className="hover:text-white transition-colors"
                >
                  {BOUTIQUE_INFO.phoneDisplay}
                </a>
              </div>
              <p className="text-[11px] text-ivory/60 pt-1">
                {BOUTIQUE_INFO.hours}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.general)}
                className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E6D7C8] text-darkbrown text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>WhatsApp Atelier</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] text-ivory/60 font-light tracking-wider">
          <p>© 2026 MELO DESIGNS. All Rights Reserved. Crafted with bespoke couture artistry.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-ivory/80 hover:text-white uppercase tracking-[0.2em] text-[10px] transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
