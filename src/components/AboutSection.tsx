import React from 'react';
import { Sparkles, Scissors, Heart, Award, MapPin } from 'lucide-react';
import { BOUTIQUE_INFO } from '../data/boutiqueData';

interface AboutSectionProps {
  onOpenCustomiseModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCustomiseModal }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      {/* Decorative Atelier Background Pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-beige/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Editorial Photography Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Main Image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/melo_enhanced/melo_artisan_frame.jpg"
                  alt="MELO DESIGNS Atelier Fabric & Craftsmanship"
                  className="w-full h-full object-cover object-center filter contrast-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/60 via-transparent to-transparent" />
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="/images/melo_curated/melo_mannequin_couture.jpg"
                  alt="Custom Tailoring Atelier Kasaragod - Melo Designs"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-darkbrown text-ivory p-5 rounded-2xl shadow-xl border border-beige/30 flex items-center gap-3.5 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-beige/20 flex items-center justify-center text-beige">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif text-lg tracking-wide leading-tight">Melo Atelier</p>
                  <p className="text-[10px] uppercase tracking-widest text-beige/80">Thayalangadi, Kasaragod</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Storytelling */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-beige/60 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-mocha" />
                <span>Our Boutique Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-darkbrown font-normal tracking-tight uppercase leading-[1.12]">
                WHERE STYLE MEETS PERSONALITY
              </h2>

              <div className="w-20 h-[2px] bg-mocha/50 my-4" />
            </div>

            {/* Required verbatim description */}
            <p className="font-serif text-xl sm:text-2xl text-darkbrown/90 leading-relaxed font-light italic">
              "At MELO DESIGNS, we believe every outfit tells a story. We bring together creativity, craftsmanship and contemporary fashion to create customised outfits for ladies and kids. From timeless ethnic elegance to modern western styles, discover fashion that reflects your individuality."
            </p>

            <p className="text-sm sm:text-base text-darkbrown/70 font-light leading-relaxed">
              Nestled in the heart of Thayalangadi, Kasaragod, MELO DESIGNS is born out of a deep reverence for bespoke garment creation. We understand that true luxury lies not in mass replication, but in garments made with purpose, passion, and personal precision.
            </p>

            {/* Atelier Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-beige/60">
                <div className="p-2 rounded-lg bg-beige/40 text-mocha">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-darkbrown">Customised Precision</h4>
                  <p className="text-[11px] text-darkbrown/70 leading-snug mt-0.5">Drawn to your exact measurements and silhouette needs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-beige/60">
                <div className="p-2 rounded-lg bg-beige/40 text-mocha">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-darkbrown">Mother & Child Harmony</h4>
                  <p className="text-[11px] text-darkbrown/70 leading-snug mt-0.5">Coordinated festive couture for unforgettable family memories.</p>
                </div>
              </div>
            </div>

            {/* Location & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenCustomiseModal}
                className="btn-shine px-8 py-3.5 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium shadow-luxury hover:bg-mocha transition-all duration-300 text-center"
              >
                Experience Customisation
              </button>

              <div className="flex items-center gap-2 text-xs text-mocha px-2">
                <MapPin className="w-4 h-4 text-mocha flex-shrink-0" />
                <span>Boutique Atelier in Thayalangadi, Kasaragod</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
