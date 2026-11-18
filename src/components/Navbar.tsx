import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Collections', id: 'collections' },
    { label: 'Customise', id: 'customise' },
    { label: 'Archive', id: 'archive' },
    { label: 'About', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top subtle announcement bar */}
      <div className="bg-darkbrown text-ivory text-[10px] sm:text-xs py-1.5 px-4 tracking-wider uppercase flex justify-between items-center transition-all">
        <div className="container mx-auto flex justify-between items-center">
          <span className="flex items-center gap-1.5 opacity-90 mx-auto sm:mx-0 whitespace-nowrap">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-beige animate-pulse" />
            Bespoke Ladieswear & Kidswear Atelier • Kasaragod, Kerala
          </span>
          <div className="hidden sm:flex items-center gap-6 opacity-85 text-[11px] whitespace-nowrap">
            <a 
              href={BOUTIQUE_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-beige transition-colors flex items-center gap-1"
            >
              <InstagramIcon className="w-3 h-3" />
              <span>@melo.designss</span>
            </a>
            <span className="opacity-40">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Thayalangadi, Kasaragod
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F2EC]/98 backdrop-blur-md shadow-luxury py-2.5 sm:py-3 border-b border-beige/60'
            : 'bg-[#F7F2EC] py-3.5 sm:py-4 border-b border-beige/40'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="group flex flex-col items-start focus:outline-none text-left shrink-0"
            >
              <span className="font-serif text-xl sm:text-2xl lg:text-2xl tracking-[0.18em] xl:tracking-[0.22em] font-medium text-darkbrown uppercase transition-colors group-hover:text-mocha whitespace-nowrap">
                MELO DESIGNS
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.28em] text-mocha uppercase font-sans font-light -mt-0.5 whitespace-nowrap">
                Bespoke Atelier • Kasaragod
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-6">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`whitespace-nowrap text-[11px] xl:text-xs uppercase tracking-[0.14em] xl:tracking-[0.2em] font-medium transition-all duration-200 relative py-1 flex items-center gap-1 ${
                      isActive
                        ? 'text-mocha font-semibold after:w-full'
                        : 'text-darkbrown/85 hover:text-mocha after:w-0'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-mocha hover:after:w-full after:transition-all after:duration-300`}
                  >
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.generalEnquiry())}
                className="btn-shine group inline-flex items-center gap-2 px-3.5 py-2 xl:px-4 xl:py-2.5 rounded-full bg-darkbrown text-ivory text-[11px] xl:text-xs uppercase tracking-[0.14em] xl:tracking-[0.16em] font-medium shadow-sm hover:bg-mocha hover:shadow-luxury transition-all duration-300 active:scale-95 whitespace-nowrap"
                title="Chat directly on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-beige group-hover:scale-110 transition-transform" />
                <span>WhatsApp Enquiry</span>
              </button>
            </div>

            {/* Mobile / Tablet Actions (< lg) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.generalEnquiry())}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-darkbrown text-ivory text-[10px] uppercase tracking-wider hover:bg-mocha transition-colors whitespace-nowrap"
                aria-label="WhatsApp Enquiry"
              >
                <MessageCircle className="w-3.5 h-3.5 text-beige" />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md text-darkbrown hover:text-mocha hover:bg-beige/40 transition-colors focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu: Fully Opaque Solid Background with High Z-Index */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-between bg-[#F7F2EC] p-6 sm:p-8 overflow-y-auto animate-fade-in">
          {/* Header Inside Drawer */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-5 border-b border-beige/70">
              <div className="flex flex-col items-start text-left">
                <span className="font-serif text-2xl tracking-[0.2em] font-medium text-darkbrown uppercase">
                  MELO DESIGNS
                </span>
                <span className="text-[9px] tracking-[0.3em] text-mocha uppercase font-sans font-light">
                  Bespoke Atelier • Kasaragod
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-white/70 border border-beige/60 text-darkbrown hover:text-mocha hover:bg-beige/30 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`font-serif text-2xl text-left tracking-wider py-2.5 px-3 rounded-xl transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-beige/40 text-mocha font-medium pl-4' 
                        : 'text-darkbrown hover:text-mocha hover:bg-white/50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-sans text-mocha opacity-70">→</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="mt-8 space-y-4 pt-6 border-t border-beige/70">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp(WHATSAPP_MESSAGES.generalEnquiry());
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-darkbrown text-ivory rounded-full text-xs uppercase tracking-widest font-medium hover:bg-mocha transition-all shadow-md active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-beige" />
              <span>WhatsApp Enquiry</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs text-mocha pt-1">
              <a
                href={BOUTIQUE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-beige/60 bg-white/60 hover:bg-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-mocha" />
                <span>@melo.designss</span>
              </a>
              <a
                href={`tel:${BOUTIQUE_INFO.phoneNumber}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-beige/60 bg-white/60 hover:bg-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-mocha" />
                <span>Call Atelier</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-mocha/80 tracking-wider">
              {BOUTIQUE_INFO.address}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
