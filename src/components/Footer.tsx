import React from 'react';
import { ArrowUp, MessageCircle, MapPin, Phone } from 'lucide-react';
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
    { label: 'Home', id: 'home' },
    { label: 'Collections', id: 'collections' },
    { label: 'Customise', id: 'customise' },
    { label: 'Archive Lookbook', id: 'archive' },
    { label: 'About Us', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkbrown text-ivory pt-16 pb-12 border-t border-beige/10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.22em] text-ivory uppercase font-normal">
                MELO DESIGNS
              </span>
              <p className="font-serif italic text-base sm:text-lg text-beige/90 font-light">
                "{BOUTIQUE_INFO.tagline}"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-ivory/70 font-light max-w-sm leading-relaxed">
              Customised ladieswear and kidswear boutique in Kasaragod, Kerala. Blending traditional craftsmanship, bespoke cuts, and contemporary grace.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={BOUTIQUE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-beige hover:text-darkbrown flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.generalEnquiry())}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-beige hover:text-darkbrown flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-beige font-semibold">
              Boutique Pages
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-xs text-ivory/75 hover:text-beige tracking-wider uppercase transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Atelier Contact & Kasaragod Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-beige font-semibold">
              Kasaragod Atelier
            </h4>
            <div className="space-y-3 text-xs text-ivory/75 font-light leading-relaxed">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-beige flex-shrink-0 mt-0.5" />
                <span>{BOUTIQUE_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-beige flex-shrink-0" />
                <a href={`tel:${BOUTIQUE_INFO.phoneNumber}`} className="hover:text-beige transition-colors">
                  {BOUTIQUE_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-beige flex-shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={BOUTIQUE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-beige transition-colors font-medium"
                  >
                    {BOUTIQUE_INFO.instagramHandle}
                  </a>
                  <a
                    href={BOUTIQUE_INFO.studioInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-beige transition-colors text-[11px] opacity-80"
                  >
                    {BOUTIQUE_INFO.studioInstagramHandle} (Studio)
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60 font-light">
          <p className="tracking-wider text-center sm:text-left">
            Copyright © 2026 MELO DESIGNS. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={BOUTIQUE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-beige/80 hover:text-beige transition-colors"
            >
              {BOUTIQUE_INFO.instagramHandle}
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-beige/80 hover:text-beige uppercase tracking-widest text-[11px] transition-colors group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
