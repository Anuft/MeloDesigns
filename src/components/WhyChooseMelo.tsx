import React from 'react';
import { Scissors, Sparkles, Heart, Palette, Check } from 'lucide-react';
import { WHY_CHOOSE_MELO } from '../data/boutiqueData';

export const WhyChooseMelo: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-mocha" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-mocha" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-mocha" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-mocha" />;
      default:
        return <Sparkles className="w-5 h-5 text-mocha" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/50 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3 h-3 text-mocha" />
            <span>The Melo Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-darkbrown font-normal tracking-tight uppercase">
            WHY CHOOSE MELO
          </h2>

          <div className="w-16 h-[1.5px] bg-mocha/40 mx-auto my-3" />

          <p className="text-sm sm:text-base text-darkbrown/70 font-light leading-relaxed">
            Crafting more than garments — we fashion personal statements that honor your heritage, confidence, and individuality.
          </p>
        </div>

        {/* Four Elegant Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_MELO.map((item, idx) => (
            <div
              key={item.id}
              className="group relative p-8 rounded-2xl bg-white border border-beige/60 hover:border-mocha/40 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div className="space-y-5">
                {/* Minimal Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-ivory border border-beige flex items-center justify-center group-hover:bg-darkbrown group-hover:border-darkbrown transition-all duration-300">
                  <div className="group-hover:text-beige transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-mocha">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-darkbrown font-normal leading-snug group-hover:text-mocha transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-darkbrown/75 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Minimal Bottom Detail */}
              <div className="pt-6 mt-6 border-t border-beige/40 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-mocha font-medium">
                <Check className="w-3 h-3 text-mocha" />
                <span>Boutique Guarantee</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
