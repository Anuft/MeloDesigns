import React from 'react';
import { Hero } from '../components/Hero';
import { Sparkles, ArrowRight, Compass, MessageCircle, Scissors, Eye } from 'lucide-react';
import { COLLECTIONS, FEATURED_PRODUCTS, BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenCustomiseModal: () => void;
  onSelectProduct: (product: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCustomiseModal,
  onSelectProduct,
}) => {
  const spotlightProducts = FEATURED_PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 animate-fade-in pb-16">
      {/* Hero Section */}
      <Hero 
        onOpenCustomiseModal={onOpenCustomiseModal}
        onExploreCollections={() => onNavigate('collections')}
      />

      {/* Quick Navigation Strip: The 4 Boutique Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/50 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3 h-3 text-mocha" />
            <span>Curated Silhouettes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-darkbrown font-normal uppercase tracking-tight">
            EXPLORE OUR COLLECTIONS
          </h2>
          <div className="w-12 h-[1px] bg-mocha/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLLECTIONS.map((c, idx) => (
            <div
              key={c.id}
              onClick={() => onNavigate('collections')}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-beige/60 shadow-sm hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-beige/20">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-ivory/90 flex items-center justify-center font-serif text-xs text-darkbrown font-medium">
                  0{idx + 1}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-wider text-beige block font-medium">
                    {c.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-normal leading-snug">
                    {c.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between border-t border-beige/40 text-xs uppercase tracking-wider text-darkbrown font-medium group-hover:text-mocha transition-colors">
                <span>View Collection</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => onNavigate('collections')}
            className="btn-shine inline-flex items-center gap-2 px-7 py-3 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-mocha transition-all shadow-sm"
          >
            <span>View Full Collections Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Spotlight Highlights: 4 Selected Creations */}
      <section className="bg-white py-16 sm:py-20 border-y border-beige/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-mocha font-semibold block">
                Atelier Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-darkbrown font-normal uppercase tracking-tight mt-1">
                DESIGNED TO MAKE YOU SPECIAL
              </h2>
            </div>
            <button
              onClick={() => onNavigate('collections')}
              className="text-xs uppercase tracking-widest text-mocha hover:text-darkbrown font-medium inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              <span>Explore All Designs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlightProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProduct(p)}
                className="group cursor-pointer bg-ivory/40 rounded-2xl overflow-hidden border border-beige/70 hover:border-mocha/40 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-beige/20">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-ivory/90 text-[9px] uppercase tracking-wider text-darkbrown font-medium shadow-xs">
                      {p.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-darkbrown/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="p-2.5 rounded-full bg-ivory text-darkbrown shadow-md">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-3.5">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-mocha font-semibold block">
                      {p.categoryLabel}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-darkbrown font-normal leading-snug group-hover:text-mocha transition-colors">
                      {p.name}
                    </h3>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openWhatsApp(WHATSAPP_MESSAGES.productEnquiry(p.name, p.categoryLabel));
                    }}
                    className="w-full py-2 px-3 rounded-full bg-darkbrown text-ivory text-[10px] uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-1.5 hover:bg-mocha transition-all"
                  >
                    <MessageCircle className="w-3 h-3 text-beige" />
                    <span>Enquire for Price</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Atelier Consultation Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-darkbrown text-ivory relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-mocha/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-widest text-beige font-semibold block">
              Bespoke Experience
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal leading-tight">
              YOUR STYLE. YOUR DESIGN. YOUR MELO.
            </h3>
            <p className="text-xs sm:text-sm text-beige/85 font-light leading-relaxed">
              Every detail matters. Explore customised outfits designed to match your preferences, personality and special occasions at our Thayalangadi, Kasaragod atelier.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigate('customise')}
              className="btn-shine w-full sm:w-auto px-7 py-3.5 rounded-full bg-beige text-darkbrown text-xs uppercase tracking-[0.2em] font-semibold hover:bg-ivory transition-all shadow-md text-center"
            >
              Customise Your Outfit
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-beige/60 text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-white/10 transition-all text-center"
            >
              Visit Boutique
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
