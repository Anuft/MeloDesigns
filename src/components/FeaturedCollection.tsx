import React, { useState } from 'react';
import { MessageCircle, Eye, Sparkles, SlidersHorizontal } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/boutiqueData';
import { ProductItem } from '../types';
import { ProductModal } from './ProductModal';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface FeaturedCollectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  activeCategory,
  onCategoryChange
}) => {
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

  const handleQuickEnquire = (product: ProductItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = WHATSAPP_MESSAGES.productEnquiry(product.name, product.categoryLabel);
    openWhatsApp(msg);
  };

  return (
    <section id="featured" className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/40 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3 h-3 text-mocha" />
            <span>Atelier Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-darkbrown font-normal tracking-tight uppercase">
            DESIGNED TO MAKE YOU SPECIAL
          </h2>

          <div className="w-16 h-[1.5px] bg-mocha/40 mx-auto my-3" />

          <p className="text-sm sm:text-base text-darkbrown/70 font-light leading-relaxed">
            A curated look into our bespoke silhouette concepts. Each design can be customised in color, embellishments, and measurements to match your personal grace.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 font-medium ${
                activeCategory === cat.id
                  ? 'bg-darkbrown text-ivory shadow-md scale-105'
                  : 'bg-ivory text-darkbrown/75 hover:bg-beige hover:text-darkbrown'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer flex flex-col bg-ivory/50 rounded-2xl overflow-hidden border border-beige/60 hover:border-mocha/40 hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-1"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-beige/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-full bg-ivory/90 backdrop-blur-md text-[10px] uppercase tracking-widest text-darkbrown font-medium shadow-sm">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Floating Quick Action Overlay */}
                <div className="absolute inset-0 bg-darkbrown/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-3 rounded-full bg-ivory text-darkbrown hover:bg-white hover:scale-110 transition-transform shadow-lg"
                    title="Quick View"
                    aria-label="Quick View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => handleQuickEnquire(product, e)}
                    className="p-3 rounded-full bg-darkbrown text-ivory hover:bg-mocha hover:scale-110 transition-transform shadow-lg"
                    title="WhatsApp Enquiry"
                    aria-label="WhatsApp Enquiry"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-mocha font-semibold">
                    {product.details.fabric.split(' ')[0]} • Bespoke
                  </p>
                  <h3 className="font-serif text-lg text-darkbrown font-normal leading-snug group-hover:text-mocha transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-darkbrown/65 line-clamp-2 pt-1 font-light leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Enquire Button */}
                <div className="pt-2 border-t border-beige/40">
                  <button
                    onClick={(e) => handleQuickEnquire(product, e)}
                    className="btn-shine w-full py-2.5 px-4 rounded-full bg-darkbrown text-ivory text-[11px] uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2 hover:bg-mocha transition-all duration-300 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-beige" />
                    <span>Enquire for Price</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Boutique Transparency Disclaimer */}
        <div className="mt-14 p-6 rounded-2xl bg-ivory border border-beige/60 text-center max-w-2xl mx-auto">
          <p className="text-xs text-mocha font-medium tracking-wider uppercase mb-1">
            Customised Boutique Note
          </p>
          <p className="text-xs text-darkbrown/75 leading-relaxed font-light">
            As a customised ladieswear & kidswear boutique, every piece is made to order to celebrate your individual measurements and taste. Enquire directly on WhatsApp for design consultations, personalized fabric swatches, and bespoke estimates.
          </p>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
