import React from 'react';
import { Sparkles, Scissors, Heart, Palette, MapPin, Check } from 'lucide-react';
import { WHY_CHOOSE_MELO, BOUTIQUE_INFO } from '../data/boutiqueData';

interface AboutPageProps {
  onNavigateToCustomise: () => void;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateToCustomise,
  onNavigateToContact,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-mocha" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-mocha" />;
      case 'Heart': return <Heart className="w-5 h-5 text-mocha" />;
      case 'Palette': return <Palette className="w-5 h-5 text-mocha" />;
      default: return <Sparkles className="w-5 h-5 text-mocha" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 animate-fade-in">
      {/* Page Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/50 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5 text-mocha" />
          <span>Our Boutique Heritage</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-darkbrown font-normal uppercase tracking-tight">
          WHERE STYLE MEETS PERSONALITY
        </h1>
        <div className="w-16 h-[1.5px] bg-mocha/40 mx-auto my-2" />
        <p className="text-sm text-darkbrown/75 font-light leading-relaxed">
          Customised ladieswear and kidswear crafted with intention, love, and artisanal precision in Thayalangadi, Kasaragod.
        </p>
      </section>

      {/* Story & Split Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-beige/30">
                <img
                  src="/images/melo_enhanced/melo_artisan_frame.jpg"
                  alt="MELO DESIGNS Atelier Handcraft"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block bg-beige/30">
                <img
                  src="/images/melo_enhanced/melo_mannequin_couture.jpg"
                  alt="Custom Tailoring Kasaragod - Melo Designs"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -top-6 -left-4 sm:-left-6 bg-darkbrown text-ivory p-4 rounded-2xl shadow-xl border border-beige/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-beige/20 flex items-center justify-center text-beige">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif text-base tracking-wide leading-tight">Melo Atelier</p>
                  <p className="text-[9px] uppercase tracking-widest text-beige/80">Thayalangadi, Kasaragod</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-mocha font-semibold block">
                Atelier Philosophy
              </span>
              <p className="font-serif text-xl sm:text-2xl text-darkbrown/90 leading-relaxed font-light italic">
                "At MELO DESIGNS, we believe every outfit tells a story. We bring together creativity, craftsmanship and contemporary fashion to create customised outfits for ladies and kids. From timeless ethnic elegance to modern western styles, discover fashion that reflects your individuality."
              </p>
            </div>

            <p className="text-sm text-darkbrown/75 font-light leading-relaxed">
              Nestled in the heart of Thayalangadi, Kasaragod, MELO DESIGNS is born out of a deep reverence for bespoke garment creation. We believe true luxury lies not in mass replication, but in garments made with purpose, passion, and personal precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-beige/60">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-darkbrown">Customised Precision</h4>
                <p className="text-[11px] text-darkbrown/70 leading-snug mt-1">Drawn to your exact measurements and silhouette requirements.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-beige/60">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-darkbrown">Mother & Child Harmony</h4>
                <p className="text-[11px] text-darkbrown/70 leading-snug mt-1">Coordinated festive couture for unforgettable family memories.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onNavigateToCustomise}
                className="btn-shine px-6 py-3 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.18em] font-medium hover:bg-mocha transition-all shadow-sm"
              >
                Customise Your Outfit
              </button>
              <button
                onClick={onNavigateToContact}
                className="px-6 py-3 rounded-full border border-beige text-darkbrown text-xs uppercase tracking-[0.18em] font-medium hover:bg-beige/40 transition-all"
              >
                Visit Boutique in Kasaragod
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Melo - 4 Pillars */}
      <section className="bg-white py-16 sm:py-20 border-y border-beige/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-mocha font-semibold block">
              The Melo Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-darkbrown font-normal uppercase tracking-tight">
              WHY CHOOSE MELO
            </h2>
            <div className="w-12 h-[1px] bg-mocha/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_MELO.map((item, idx) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-ivory/50 border border-beige/70 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-beige flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-mocha font-semibold block mb-1">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl text-darkbrown font-normal">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-darkbrown/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-beige/40 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-mocha font-medium">
                  <Check className="w-3 h-3 text-mocha" />
                  <span>Boutique Guarantee</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
