import React from 'react';
import { Hero } from '../components/Hero';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { Sparkles, ArrowRight, MessageCircle, Scissors, Calendar, MapPin, Eye, Heart, Compass } from 'lucide-react';
import { COLLECTIONS, FEATURED_PRODUCTS, BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { InstagramIcon } from '../components/Icons';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenCustomiseModal: () => void;
  onSelectProduct: (product: any) => void;
  onOpenAppointment?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCustomiseModal,
  onSelectProduct,
  onOpenAppointment,
}) => {
  const spotlightProducts = FEATURED_PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28 animate-fade-in pb-20">
      
      {/* 1. Hero Section (Amit Aggarwal Full-Bleed Editorial) */}
      <Hero 
        onOpenCustomiseModal={onOpenCustomiseModal}
        onExploreCollections={() => onNavigate('collections')}
        onOpenAppointment={onOpenAppointment}
      />

      {/* 2. Haute Couture Marquee Ticker */}
      <MarqueeTicker dark={true} />

      {/* 3. The 4 Campaign Categories (Amit Aggarwal Split Banners) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-mocha font-light block">
            Curated Atelier Silhouettes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-darkbrown font-normal uppercase tracking-tight">
            EXPLORE THE COLLECTIONS
          </h2>
          <div className="w-16 h-[1px] bg-darkbrown/30 mx-auto" />
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((c, idx) => (
            <div
              key={c.id}
              onClick={() => onNavigate('collections')}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-beige/60 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* High Fashion Portrait Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-beige/20">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/85 via-darkbrown/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                
                {/* Index Pill */}
                <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center font-serif text-xs text-darkbrown font-light">
                  0{idx + 1}
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#E6D7C8] block font-light">
                    {c.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight text-white group-hover:text-[#E6D7C8] transition-colors">
                    {c.title}
                  </h3>
                </div>
              </div>

              {/* Minimal Underline CTA */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-beige/40 text-[11px] uppercase tracking-[0.22em] text-darkbrown font-medium group-hover:text-mocha transition-colors">
                <span>Discover The Edit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <button
            onClick={() => onNavigate('collections')}
            className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.25em] font-medium hover:bg-mocha transition-all shadow-md"
          >
            <span>View Full Collections Lookbook</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 4. "World of Melo" (Brand Philosophy — inspired by Amit Aggarwal's "World of AA") */}
      <section className="bg-[#181310] text-ivory py-20 sm:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Atelier Craftsmanship Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/images/melo_enhanced/melo_designer_cutting.jpg"
                  alt="Melo Designs Pattern Drafting & Tailoring Atelier"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181310]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#E6D7C8] font-light block">
                    THE KASARAGOD WORKROOM
                  </span>
                  <span className="font-serif text-lg text-white font-light italic">
                    Precision drafting & hand-embroidered finishes
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#E6D7C8] font-light block">
                  THE ATELIER PHILOSOPHY
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal uppercase tracking-tight leading-[1.1]">
                  WHERE SCULPTED FORM <br />
                  <span className="italic font-light text-[#E6D7C8]">MEETS HERITAGE ARTISTRY.</span>
                </h2>
              </div>

              <p className="text-ivory/80 text-sm sm:text-base font-light leading-relaxed tracking-wide">
                At <strong className="text-white font-medium">MELO DESIGNS</strong>, we believe an ensemble should never be off-the-rack. Situated in the heart of Thayalangadi, Kasaragod, our atelier harmonizes traditional South Indian textile craftsmanship with contemporary, architectural cuts.
              </p>

              {/* 3 Luxury Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                <div className="space-y-1.5">
                  <span className="font-serif text-2xl text-[#E6D7C8] font-light block">01</span>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">Bespoke Fit</h4>
                  <p className="text-[11px] text-ivory/60 font-light leading-normal">
                    Custom pattern drafted to your unique proportions and posture.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="font-serif text-2xl text-[#E6D7C8] font-light block">02</span>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">Zari & Resham</h4>
                  <p className="text-[11px] text-ivory/60 font-light leading-normal">
                    Intricate hand-embroidery, cutwork borders, and crystal accents.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="font-serif text-2xl text-[#E6D7C8] font-light block">03</span>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">Ladies & Kids</h4>
                  <p className="text-[11px] text-ivory/60 font-light leading-normal">
                    Harmonized mother-daughter outfits & bespoke family couture.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-7 py-3 rounded-full border border-white/40 text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-white hover:text-darkbrown transition-all"
                >
                  Read Atelier Story
                </button>
                {onOpenAppointment && (
                  <button
                    onClick={onOpenAppointment}
                    className="btn-shine px-7 py-3 rounded-full bg-[#E6D7C8] text-darkbrown text-xs uppercase tracking-[0.25em] font-medium hover:bg-white transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Private Consultation</span>
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Spotlight Highlights: Curated Lookbook (Clean Minimalist Cards) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border-b border-beige/60 pb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-mocha font-light block">
              Atelier Lookbook
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-darkbrown font-normal uppercase tracking-tight mt-1">
              CURATED HAUTE CREATIONS
            </h2>
          </div>
          <button
            onClick={() => onNavigate('archive')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-darkbrown font-medium hover:text-mocha transition-colors group"
          >
            <span>Explore All 15+ Archive Creations</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Minimalist Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spotlightProducts.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-xl overflow-hidden border border-beige/60 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div 
                className="relative aspect-[3/4] overflow-hidden bg-beige/20 cursor-pointer"
                onClick={() => onSelectProduct(p)}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-darkbrown/10 group-hover:bg-darkbrown/0 transition-colors" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] font-medium text-darkbrown">
                  {p.category}
                </span>
              </div>

              {/* Card Footer: Title & Direct Enquiry */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                <h3 
                  onClick={() => onSelectProduct(p)}
                  className="font-serif text-xl font-normal text-darkbrown leading-snug cursor-pointer hover:text-mocha transition-colors"
                >
                  {p.name}
                </h3>

                <button
                  onClick={() => openWhatsApp(WHATSAPP_MESSAGES.product(p.name))}
                  className="btn-shine w-full py-2.5 px-4 rounded-full bg-darkbrown text-ivory text-[10.5px] uppercase tracking-[0.2em] font-medium hover:bg-mocha transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enquire For Price</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. "Book An Appointment" Couture Experience Banner (Amit Aggarwal Signature) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative rounded-2xl overflow-hidden bg-darkbrown text-ivory p-8 sm:p-14 lg:p-16 border border-beige/30 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="/images/melo_enhanced/hero_vogue_melo.jpg"
              alt="Melo Designs Bridal Background"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="relative z-10 max-w-2xl space-y-4 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#E6D7C8] font-light block">
              PERSONAL ATELIER APPOINTMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal uppercase tracking-tight leading-tight">
              EXPERIENCE BESPOKE LUXURY <br />
              <span className="italic font-light text-[#E6D7C8]">AT THAYALANGADI, KASARAGOD.</span>
            </h2>
            <p className="text-ivory/80 text-xs sm:text-sm font-light leading-relaxed tracking-wide">
              Whether you are planning your bridal trousseau, a sculpted reception gown, or festive outfits for your little ones, our atelier offers one-on-one design consultations in-studio or via virtual styling.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenAppointment || onOpenCustomiseModal}
                className="btn-shine px-8 py-3.5 rounded-full bg-white text-darkbrown text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#E6D7C8] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book In-Studio Appointment</span>
              </button>
              <button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.custom)}
                className="px-8 py-3.5 rounded-full border border-white/60 text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-white/15 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Atelier Chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Instagram Atelier Gallery */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-mocha font-light block">
            Follow Our Atelier Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-darkbrown font-normal uppercase tracking-tight">
            INSTAGRAM ATELIER FEED
          </h2>
          <div className="flex items-center justify-center gap-4 text-xs font-light tracking-wider text-mocha pt-1">
            <a 
              href={BOUTIQUE_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-darkbrown transition-colors flex items-center gap-1 font-medium"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@melo.designss</span>
            </a>
            <span>•</span>
            <a 
              href={BOUTIQUE_INFO.studioInstagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-darkbrown transition-colors flex items-center gap-1 font-medium"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@melo_designer.studio</span>
            </a>
          </div>
        </div>

        {/* 6 High-Fashion Genuine Instagram Photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { img: '/images/melo_enhanced/melo_mannequin_couture.jpg', alt: 'Couture Jacket' },
            { img: '/images/melo_enhanced/studio_bridal_emerald.jpg', alt: 'Emerald Bridal Saree' },
            { img: '/images/melo_enhanced/melo_wedding_pose.jpg', alt: 'Wedding Couple Drapes' },
            { img: '/images/melo_enhanced/studio_purple_kidswear_gown.jpg', alt: 'Bespoke Kidswear Gown' },
            { img: '/images/melo_enhanced/studio_bridal_glam.jpg', alt: 'Bridal Glam Blouse' },
            { img: '/images/melo_enhanced/melo_festive_peach.jpg', alt: 'Peach Festive Lehenga' },
          ].map((item, idx) => (
            <a
              key={idx}
              href={idx % 2 === 0 ? BOUTIQUE_INFO.instagramUrl : BOUTIQUE_INFO.studioInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-beige/20 border border-beige/60 shadow-sm block"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-darkbrown/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 8. Visit Melo Designs — Thayalangadi, Kasaragod */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-beige/60 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-mocha font-light block">
              Atelier Location
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-darkbrown font-normal uppercase tracking-tight">
              VISIT MELO DESIGNS IN KASARAGOD
            </h3>
            <p className="text-xs sm:text-sm text-mocha/80 font-light max-w-xl">
              {BOUTIQUE_INFO.address}
            </p>
            <p className="text-[11px] text-mocha/70 font-light pt-1">
              {BOUTIQUE_INFO.hours}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={BOUTIQUE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-darkbrown/60 text-darkbrown text-xs uppercase tracking-[0.2em] font-medium hover:bg-darkbrown hover:text-white transition-all flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-mocha" />
              <span>Get Directions</span>
            </a>
            <button
              onClick={() => openWhatsApp(WHATSAPP_MESSAGES.visit)}
              className="btn-shine px-6 py-3 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-mocha transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
