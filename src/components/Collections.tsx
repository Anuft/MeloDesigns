import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { COLLECTIONS } from '../data/boutiqueData';
import { CollectionItem } from '../types';

interface CollectionsProps {
  onSelectCategory: (category: string) => void;
  onOpenArchive?: () => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory, onOpenArchive }) => {
  const handleExplore = (item: CollectionItem) => {
    // Scroll to featured section and set filter
    onSelectCategory(item.category);
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      const topOffset = 80;
      const elementPosition = featuredSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="collections" className="py-24 sm:py-32 bg-ivory relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-darkbrown/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/50 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3 h-3 text-mocha" />
            <span>Curated Silhouettes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-darkbrown font-normal tracking-tight uppercase">
            EXPLORE OUR COLLECTIONS
          </h2>

          <div className="w-16 h-[1.5px] bg-mocha/40 mx-auto my-3" />

          <p className="text-sm sm:text-base text-darkbrown/70 font-light leading-relaxed">
            Each creation is sculpted with attention to timeless grace, luxurious fabrics, and impeccable bespoke tailoring for women and children.
          </p>
        </div>

        {/* 4 Premium Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COLLECTIONS.map((item, index) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 border border-beige/60 hover:-translate-y-1.5"
            >
              {/* Image Container with Editorial Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-beige/30">
                <img
                  src={item.image}
                  alt={`${item.title} - MELO DESIGNS Kasaragod`}
                  className="w-full h-full object-cover object-top filter brightness-[0.93] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/80 via-transparent to-black/20 opacity-70 group-hover:opacity-60 transition-opacity" />

                {/* Index Number Badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-ivory/90 backdrop-blur-md flex items-center justify-center font-serif text-xs text-darkbrown font-medium shadow-sm">
                  0{index + 1}
                </div>

                {/* Quick Overlay Highlights on Hover */}
                <div className="absolute bottom-4 inset-x-4 translate-y-2 opacity-95 transition-all duration-300">
                  <span className="text-[10px] tracking-widest uppercase font-medium text-beige">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal mt-0.5 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white space-y-4">
                <div className="space-y-2">
                  <p className="text-xs text-mocha font-medium tracking-wide">
                    {item.tagline}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-[11px] text-darkbrown/75 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-mocha/60 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => handleExplore(item)}
                  className="w-full group/btn inline-flex items-center justify-between pt-4 border-t border-beige/50 text-xs uppercase tracking-[0.2em] font-medium text-darkbrown hover:text-mocha transition-colors"
                >
                  <span>Explore Designs</span>
                  <span className="w-8 h-8 rounded-full bg-ivory group-hover/btn:bg-darkbrown group-hover/btn:text-ivory flex items-center justify-center transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:rotate-45" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Discovery Banner */}
        {onOpenArchive && (
          <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-beige/70 shadow-luxury flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase tracking-widest text-mocha font-semibold">
                Lookbook & Portfolio
              </span>
              <h3 className="font-serif text-2xl text-darkbrown font-normal">
                Looking for our complete archive of bespoke commissions?
              </h3>
              <p className="text-xs text-darkbrown/70 font-light max-w-xl">
                Browse our chronological atelier catalog featuring bridal blouses, designer sarees, bespoke maternity silhouettes, and festive kidswear.
              </p>
            </div>

            <button
              onClick={onOpenArchive}
              className="btn-shine flex-shrink-0 px-7 py-3.5 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium shadow-md hover:bg-mocha transition-all duration-300"
            >
              Explore Atelier Archive →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
