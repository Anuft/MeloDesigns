import React from 'react';
import { Sparkles, MessageSquare, Scissors, Ruler, CheckCircle2, ArrowRight } from 'lucide-react';
import { CUSTOMISATION_STEPS } from '../data/boutiqueData';

interface CustomisationSectionProps {
  onOpenModal: () => void;
}

export const CustomisationSection: React.FC<CustomisationSectionProps> = ({ onOpenModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Ruler':
        return <Ruler className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      default:
        return <Scissors className="w-5 h-5" />;
    }
  };

  return (
    <section id="customise" className="py-24 sm:py-32 bg-darkbrown text-ivory relative overflow-hidden">
      {/* Background Subtle Gradient & Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-mocha/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-beige/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-beige text-[11px] uppercase tracking-[0.25em] font-light">
            <Sparkles className="w-3.5 h-3.5 text-beige" />
            <span>Bespoke Atelier Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-normal tracking-tight uppercase leading-[1.12]">
            YOUR STYLE. YOUR DESIGN. YOUR MELO.
          </h2>

          <div className="w-16 h-[1.5px] bg-beige/50 mx-auto my-4" />

          <p className="text-base sm:text-lg text-beige/90 font-light max-w-2xl mx-auto leading-relaxed">
            Every detail matters. Explore customised outfits designed to match your preferences, personality and special occasions.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenModal}
              className="btn-shine inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-beige text-darkbrown text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold shadow-luxury hover:bg-ivory transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Scissors className="w-4 h-4 text-mocha" />
              <span>CUSTOMISE YOUR OUTFIT</span>
            </button>
          </div>
        </div>

        {/* 4 Steps Interactive Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {CUSTOMISATION_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-beige/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-2xl text-beige/80 group-hover:text-beige transition-colors font-light">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-beige group-hover:bg-beige group-hover:text-darkbrown transition-all duration-300">
                  {getIcon(step.icon)}
                </div>
              </div>

              <p className="text-[10px] uppercase tracking-widest text-beige/70 font-medium mb-1">
                {step.step}
              </p>

              <h3 className="font-serif text-xl text-ivory font-normal mb-2 leading-snug">
                {step.title}
              </h3>

              <p className="text-xs text-white/70 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Atelier Note */}
        <div className="mt-16 text-center text-xs text-beige/70 font-light flex items-center justify-center gap-2">
          <span>Available for both in-person consultations in Kasaragod and virtual consultations worldwide.</span>
        </div>
      </div>
    </section>
  );
};
