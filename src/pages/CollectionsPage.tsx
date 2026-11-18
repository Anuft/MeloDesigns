import React, { useState } from 'react';
import { Sparkles, ArrowRight, MessageCircle, Eye, Scissors } from 'lucide-react';
import { COLLECTIONS, FEATURED_PRODUCTS } from '../data/boutiqueData';
import { ProductItem, CollectionItem } from '../types';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { ProductModal } from '../components/ProductModal';

interface CollectionsPageProps {
  onOpenCustomise: () => void;
  onOpenArchive: () => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onOpenCustomise,
  onOpenArchive,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'ethnic', label: 'Ethnic Wear' },
    { id: 'western', label: 'Western Wear' },
    { id: 'kids', label: 'Kidswear' },
    { id: 'bespoke', label: 'Bespoke Couture' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === activeCategory);

  const handleExploreCollection = (col: CollectionItem) => {
    setActiveCategory(col.category);
    const target = document.getElementById('featured-grid');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 animate-fade-in">
      {/* Page Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/50 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3 h-3 text-mocha" />
          <span>Curated Silhouettes</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-darkbrown font-normal uppercase tracking-tight">
          EXPLORE OUR COLLECTIONS
        </h1>
        <div className="w-16 h-[1.5px] bg-mocha/40 mx-auto my-2" />
        <p className="text-sm text-darkbrown/75 font-light leading-relaxed">
          Discover handcrafted ladieswear and kidswear, customized around your preferences, measurements, and special occasions.
        </p>
      </section>

      {/* 4 Collection Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((item, idx) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-beige/60 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-beige/25">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/80 via-transparent to-black/20" />
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-ivory/95 flex items-center justify-center font-serif text-xs text-darkbrown font-medium shadow-sm">
                  0{idx + 1}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-widest uppercase font-medium text-beige block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-4">
                <p className="text-xs text-mocha font-medium tracking-wide">
                  {item.tagline}
                </p>

                <button
                  onClick={() => handleExploreCollection(item)}
                  className="w-full pt-3 border-t border-beige/50 text-xs uppercase tracking-[0.18em] font-medium text-darkbrown hover:text-mocha flex items-center justify-between transition-colors"
                >
                  <span>Explore Designs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection Showcase */}
      <section id="featured-grid" className="bg-white py-16 sm:py-24 border-t border-beige/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-mocha font-semibold block">
              Atelier Creations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-darkbrown font-normal uppercase tracking-tight">
              DESIGNED TO MAKE YOU SPECIAL
            </h2>
            <div className="w-14 h-[1px] bg-mocha/40 mx-auto" />
            <p className="text-xs sm:text-sm text-darkbrown/70 font-light">
              Filter by category and enquire for custom tailored pricing and fabric swatches.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-darkbrown text-ivory shadow-md scale-105'
                    : 'bg-ivory text-darkbrown/75 hover:bg-beige hover:text-darkbrown'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                className="group cursor-pointer bg-ivory/40 rounded-2xl overflow-hidden border border-beige/60 hover:border-mocha/40 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-beige/20">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-ivory/90 text-[10px] uppercase tracking-wider text-darkbrown font-medium shadow-xs">
                      {p.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-darkbrown/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="p-3 rounded-full bg-ivory text-darkbrown hover:bg-white transition-transform shadow-lg"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openWhatsApp(WHATSAPP_MESSAGES.productEnquiry(p.name, p.categoryLabel));
                      }}
                      className="p-3 rounded-full bg-darkbrown text-ivory hover:bg-mocha transition-transform shadow-lg"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-mocha font-semibold block">
                      {p.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg text-darkbrown font-normal leading-snug group-hover:text-mocha transition-colors">
                      {p.name}
                    </h3>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openWhatsApp(WHATSAPP_MESSAGES.productEnquiry(p.name, p.categoryLabel));
                    }}
                    className="btn-shine w-full py-2.5 px-4 rounded-full bg-darkbrown text-ivory text-[11px] uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2 hover:bg-mocha transition-all duration-300 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-beige" />
                    <span>Enquire for Price</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Banner to Full Archive */}
          <div className="p-6 sm:p-8 rounded-3xl bg-ivory border border-beige/80 text-center max-w-xl mx-auto space-y-3">
            <h4 className="font-serif text-xl text-darkbrown font-normal">
              Looking for our past commissions & bridal archives?
            </h4>
            <p className="text-xs text-darkbrown/70 font-light">
              Explore 15+ curated heirloom lookbook creations from our Kasaragod atelier.
            </p>
            <button
              onClick={onOpenArchive}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-mocha font-semibold underline underline-offset-4 hover:text-darkbrown"
            >
              <span>Explore Atelier Archive →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
