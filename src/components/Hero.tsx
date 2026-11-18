import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, Compass, Calendar, ArrowRight } from 'lucide-react';
import { BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface HeroProps {
  onOpenCustomiseModal: () => void;
  onExploreCollections: () => void;
  onOpenAppointment?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCustomiseModal,
  onExploreCollections,
  onOpenAppointment,
}) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#181310] text-ivory">
      {/* Editorial High-Fashion Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/melo_enhanced/hero_mint_melo.jpg"
          alt="MELO DESIGNS Bespoke Haute Couture Couple"
          className="w-full h-full object-cover object-top filter brightness-[0.78] contrast-[1.05] scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Architectural Vignette Gradient (Amit Aggarwal aesthetic) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181310]/90 via-[#181310]/50 to-[#181310]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181310] via-transparent to-[#181310]/40" />
      </div>

      {/* Content Overlay */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-center items-center text-center">
        
        {/* Atelier Collection Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E6D7C8] text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-light mb-6 sm:mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-beige" />
          <span>HAUTE COUTURE • KASARAGOD ATELIER</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal uppercase tracking-[0.08em] max-w-5xl leading-[1.05] drop-shadow-md">
          STYLE THAT SPEAKS <br />
          <span className="italic font-light text-[#E6D7C8]">YOUR STORY.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-xs sm:text-sm md:text-base text-ivory/85 font-light tracking-[0.1em] leading-relaxed drop-shadow">
          Discover the art of customized fashion, sculpted drapes, and handcrafted heirlooms, thoughtfully tailored for ladies and kids in Thayalangadi, Kasaragod.
        </p>

        {/* Luxury CTA Actions */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={onExploreCollections}
            className="btn-shine w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-darkbrown text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#E6D7C8] transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Explore Couture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenAppointment || onOpenCustomiseModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/60 text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-white/15 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-[#E6D7C8]" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Atelier Quality Ribbon at Bottom */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-white/15 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <span className="block font-serif text-lg sm:text-xl text-[#E6D7C8] font-light">100% Bespoke</span>
            <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ivory/70 font-light">Custom Fit Drafting</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-lg sm:text-xl text-[#E6D7C8] font-light">Hand Artistry</span>
            <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ivory/70 font-light">Zari & Cutwork Detailing</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-lg sm:text-xl text-[#E6D7C8] font-light">Ladies & Kids</span>
            <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ivory/70 font-light">Mom & Daughter Sets</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-lg sm:text-xl text-[#E6D7C8] font-light">Kasaragod Atelier</span>
            <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ivory/70 font-light">Worldwide Delivery</span>
          </div>
        </div>

      </div>

      {/* Floating subtle scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={onExploreCollections}
      >
        <span className="text-[8.5px] uppercase tracking-[0.3em] font-light text-ivory">Explore</span>
        <ArrowDown className="w-3.5 h-3.5 text-beige animate-bounce" />
      </div>
    </section>
  );
};
