import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, Compass } from 'lucide-react';
import { BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface HeroProps {
  onOpenCustomiseModal?: () => void;
  onExploreCollections?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenCustomiseModal,
  onExploreCollections,
}) => {
  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreCollections) {
      onExploreCollections();
    } else {
      window.location.hash = '#collections';
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-darkbrown">
      {/* Background Editorial Image with subtle zoom effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/melo_enhanced/hero_mint_melo.jpg"
          alt="Bespoke Couture Creation - MELO DESIGNS Kasaragod"
          className="w-full h-full object-cover object-right filter brightness-[0.92] contrast-[1.03] transform scale-100 animate-slow-zoom"
          loading="eager"
        />
        {/* Luxury Vignette & Multi-layer Overlay: deep elegant contrast on left for typography, open on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-darkbrown/95 via-darkbrown/65 to-darkbrown/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/90 via-transparent to-darkbrown/40" />
      </div>

      {/* Decorative Atelier Border Frames */}
      <div className="absolute inset-4 sm:inset-8 border border-white/10 pointer-events-none z-10 hidden md:block" />

      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28 text-white">
        <div className="max-w-3xl space-y-6 sm:space-y-8 animate-fade-up">
          {/* Subtle Tagline / Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-beige text-xs tracking-[0.25em] uppercase font-light">
            <Sparkles className="w-3.5 h-3.5 text-beige" />
            <span>Kasaragod Couture & Bespoke Atelier</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] font-normal text-ivory">
            STYLE THAT <br className="hidden sm:inline" />
            <span className="italic font-light text-beige">SPEAKS YOUR</span> <br />
            STORY.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-beige/90 font-light max-w-xl leading-relaxed tracking-wide">
            {BOUTIQUE_INFO.heroSubtitle}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 sm:pt-6">
            <button
              onClick={handleExplore}
              className="btn-shine inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-ivory text-darkbrown font-medium text-xs sm:text-sm uppercase tracking-[0.2em] shadow-luxury hover:bg-beige transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4 text-mocha" />
              <span>EXPLORE COLLECTION</span>
            </button>

            <button
              onClick={() => {
                if (onOpenCustomiseModal) {
                  onOpenCustomiseModal();
                } else {
                  openWhatsApp(WHATSAPP_MESSAGES.generalEnquiry());
                }
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-transparent border border-beige/60 text-ivory font-medium text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-white/10 hover:border-ivory transition-all duration-300 backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 text-beige" />
              <span>ENQUIRE NOW</span>
            </button>
          </div>

          {/* Editorial Markers */}
          <div className="grid grid-cols-3 gap-6 pt-10 sm:pt-14 border-t border-white/15 max-w-lg text-ivory">
            <div>
              <p className="font-serif text-xl sm:text-2xl text-beige font-light">100%</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70">Custom Tailored</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl text-beige font-light">Bespoke</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70">Ladies & Kids</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl text-beige font-light">Kerala</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70">Thayalangadi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
        <button
          onClick={handleExplore}
          className="flex flex-col items-center gap-1.5 text-beige/80 hover:text-beige transition-colors text-[10px] tracking-[0.3em] uppercase"
        >
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-beige" />
        </button>
      </div>
    </section>
  );
};
