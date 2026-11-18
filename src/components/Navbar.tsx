import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, MapPin, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenAppointment?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAppointment,
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
    { label: 'Couture', id: 'collections' },
    { label: 'Bespoke Custom', id: 'customise' },
    { label: 'Lookbook Archive', id: 'archive' },
    { label: 'The Atelier', id: 'about' },
    { label: 'Campaigns', id: 'gallery' },
    { label: 'Visit Us', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top Haute Couture Ticker (Amit Aggarwal inspired) */}
      <div className="bg-[#181310] text-[#E6D7C8] text-[9.5px] sm:text-[10.5px] py-2 px-4 tracking-[0.25em] uppercase flex justify-between items-center transition-all border-b border-[#302520]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            <span className="font-light">
              THE BRIDAL & COUTURE EDIT <span className="opacity-40">|</span> NOW LIVE AT KASARAGOD ATELIER
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 opacity-80 text-[10px] whitespace-nowrap font-light">
            <a 
              href={BOUTIQUE_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon className="w-3 h-3 text-[#E6D7C8]" />
              <span>@melo.designss</span>
            </a>
            <span className="opacity-30">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-beige" />
              Thayalangadi, Kasaragod
            </span>
          </div>
        </div>
      </div>

      {/* Main High-Fashion Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F2EC]/95 backdrop-blur-md shadow-sm border-b border-beige/60 py-3'
            : 'bg-[#F7F2EC] border-b border-beige/40 py-4 sm:py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left/Center Wordmark (Amit Aggarwal Architectural Aesthetic) */}
            <div 
              onClick={() => handleLinkClick('home')}
              className="cursor-pointer group flex flex-col items-start transition-opacity hover:opacity-90 flex-shrink-0"
            >
              <span className="font-serif text-2xl sm:text-3xl text-darkbrown tracking-[0.22em] uppercase font-normal leading-none group-hover:text-mocha transition-colors">
                MELO DESIGNS
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-mocha/80 font-light mt-1">
                HAUTE COUTURE • KASARAGOD
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-[11px] uppercase tracking-[0.22em] font-light transition-all relative py-1 ${
                      isActive
                        ? 'text-darkbrown font-medium'
                        : 'text-darkbrown/70 hover:text-darkbrown'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-darkbrown" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* "Book Appointment" (Amit Aggarwal Signature Action) */}
              {onOpenAppointment && (
                <button
                  onClick={onOpenAppointment}
                  className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-darkbrown/60 text-darkbrown hover:bg-darkbrown hover:text-ivory text-[10px] uppercase tracking-[0.2em] font-medium transition-all"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book Appointment</span>
                </button>
              )}

              {/* WhatsApp Concierge */}
              <button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.general)}
                className="btn-shine inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-darkbrown text-ivory text-[10.5px] uppercase tracking-[0.18em] font-medium hover:bg-mocha transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Concierge</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-darkbrown hover:bg-beige/40 transition-colors"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Solid, Opaque Luxury Menu) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-darkbrown/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-[#F7F2EC] h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10 border-l border-beige/60 overflow-y-auto">
            {/* Top Bar with Brand & Close Button */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-beige/60">
                <div>
                  <span className="font-serif text-xl text-darkbrown tracking-[0.2em] uppercase block">
                    MELO DESIGNS
                  </span>
                  <span className="text-[8.5px] tracking-[0.3em] uppercase text-mocha/70 block mt-0.5">
                    HAUTE COUTURE • KASARAGOD
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white hover:bg-beige/50 text-darkbrown transition-colors shadow-sm"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="py-6 space-y-4">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`w-full flex items-center justify-between text-left py-2 px-3 rounded-lg text-xs uppercase tracking-[0.25em] transition-all ${
                        isActive
                          ? 'bg-beige/50 text-darkbrown font-semibold'
                          : 'text-darkbrown/80 hover:text-darkbrown hover:bg-beige/20'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-6 border-t border-beige/60 space-y-3">
              {onOpenAppointment && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full py-3 px-4 rounded-xl border border-darkbrown text-darkbrown text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-darkbrown hover:text-ivory transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp(WHATSAPP_MESSAGES.general);
                }}
                className="w-full py-3 px-4 rounded-xl bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-mocha transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Concierge</span>
              </button>

              <div className="pt-2 text-[10px] text-mocha/70 text-center tracking-wide font-light">
                Thayalangadi, Kasaragod • Kerala 671121
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
