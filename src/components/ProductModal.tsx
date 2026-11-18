import React from 'react';
import { X, MessageCircle, Sparkles, CheckCircle2, Scissors, ShieldCheck } from 'lucide-react';
import { ProductItem } from '../types';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const handleWhatsAppEnquiry = () => {
    const msg = WHATSAPP_MESSAGES.productEnquiry(product.name, product.categoryLabel);
    openWhatsApp(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-darkbrown/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-ivory rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-beige/60 z-10 flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-ivory/80 backdrop-blur-md text-darkbrown hover:bg-darkbrown hover:text-ivory flex items-center justify-center transition-all shadow-md focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Imagery */}
        <div className="md:w-1/2 relative bg-beige/30 min-h-[320px] md:min-h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-darkbrown/85 backdrop-blur-md text-ivory text-[10px] uppercase tracking-widest font-medium">
              {product.categoryLabel}
            </span>
          </div>
          {product.sampleTag && (
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1.5 rounded-lg bg-ivory/95 backdrop-blur-md text-mocha text-[11px] font-medium tracking-wide shadow-sm">
                ✦ {product.sampleTag}
              </span>
            </div>
          )}
        </div>

        {/* Product Details & Enquiry */}
        <div className="md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-mocha font-semibold">
                {product.categoryLabel}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-darkbrown font-normal mt-1 leading-tight">
                {product.name}
              </h3>
            </div>

            <p className="text-sm text-darkbrown/80 font-light leading-relaxed">
              Bespoke custom creation handcrafted to your measurements, personal style, and special occasion at our Kasaragod atelier.
            </p>

            <div className="p-4 rounded-2xl bg-white/70 border border-beige/60 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-mocha font-semibold block">
                Atelier Service
              </span>
              <p className="text-xs text-darkbrown/75 leading-relaxed font-light">
                Connect directly with our design team on WhatsApp to discuss custom fabrics, tailoring timelines, and personalized pricing.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleWhatsAppEnquiry}
              className="btn-shine w-full py-4 px-6 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-3 shadow-luxury hover:bg-mocha transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-beige" />
              <span>Enquire for Price via WhatsApp</span>
            </button>

            <p className="text-[10px] text-center text-mocha tracking-wider">
              Thayalangadi, Kasaragod • Fast WhatsApp response
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
