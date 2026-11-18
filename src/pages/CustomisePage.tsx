import React, { useState } from 'react';
import { Sparkles, Scissors, MessageSquare, Ruler, CheckCircle2, Check, MessageCircle } from 'lucide-react';
import { CUSTOMISATION_STEPS, BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const CustomisePage: React.FC = () => {
  const [outfitType, setOutfitType] = useState('Ladies Ethnic Wear');
  const [fabric, setFabric] = useState('Silk Organza & Raw Silk');
  const [occasion, setOccasion] = useState('Wedding / Festive Celebration');
  const [notes, setNotes] = useState('');

  const outfitOptions = [
    'Ladies Ethnic Wear',
    'Ladies Western Wear',
    'Customised Kidswear',
    'Mother & Daughter Matching Duo',
    'Bridal / Reception Gown'
  ];

  const fabricOptions = [
    'Silk Organza & Raw Silk',
    'Pure Georgette & Crepe',
    'Brocade & Banarasi Zari',
    'European Washed Linen',
    'Kerala Handloom & Kasavu',
    'Open to Atelier Recommendations'
  ];

  const occasionOptions = [
    'Wedding / Festive Celebration',
    'Engagement / Ring Ceremony',
    'Birthday / Milestone Event',
    'Cocktail / Evening Party',
    'Executive & Everyday Chic'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = WHATSAPP_MESSAGES.customisationEnquiry({
      outfitType,
      fabric,
      occasion,
      notes: notes.trim() || undefined
    });
    openWhatsApp(msg);
  };

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-mocha" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-mocha" />;
      case 'Ruler': return <Ruler className="w-5 h-5 text-mocha" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-mocha" />;
      default: return <Scissors className="w-5 h-5 text-mocha" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 animate-fade-in">
      {/* Page Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/50 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
          <Scissors className="w-3.5 h-3.5 text-mocha" />
          <span>Bespoke Atelier Studio</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-darkbrown font-normal uppercase tracking-tight">
          YOUR STYLE. YOUR DESIGN. YOUR MELO.
        </h1>
        <div className="w-16 h-[1.5px] bg-mocha/40 mx-auto my-2" />
        <p className="text-sm sm:text-base text-darkbrown/75 font-light leading-relaxed max-w-xl mx-auto">
          Every detail matters. Explore customised outfits designed to match your preferences, personality and special occasions.
        </p>
      </section>

      {/* 4 Steps Breakdown */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CUSTOMISATION_STEPS.map((s) => (
            <div
              key={s.number}
              className="p-6 rounded-2xl bg-white border border-beige/70 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-mocha font-light">
                  {s.number}
                </span>
                <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center">
                  {getStepIcon(s.icon)}
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-mocha font-semibold block mb-1">
                  {s.step}
                </span>
                <h3 className="font-serif text-lg text-darkbrown font-normal mb-1.5">
                  {s.title}
                </h3>
                <p className="text-xs text-darkbrown/70 font-light leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Studio Consultation Form */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-beige/70 shadow-luxury space-y-8">
          <div className="space-y-2 border-b border-beige/50 pb-5">
            <span className="text-[10px] uppercase tracking-widest text-mocha font-semibold block">
              Bespoke Questionnaire
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-darkbrown font-normal">
              Design Your Custom Outfit
            </h2>
            <p className="text-xs text-darkbrown/70 font-light">
              Select your garment preferences to instantly generate a tailored consultation with our head designer via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Outfit Silhouette */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-darkbrown flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-darkbrown text-ivory text-[10px] flex items-center justify-center font-mono">1</span>
                <span>Select Silhouette / Category</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {outfitOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setOutfitType(opt)}
                    className={`py-2.5 px-3.5 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                      outfitType === opt
                        ? 'bg-darkbrown text-ivory border-darkbrown shadow-sm'
                        : 'bg-ivory/40 text-darkbrown/80 border-beige hover:border-mocha/50'
                    }`}
                  >
                    <span>{opt}</span>
                    {outfitType === opt && <Check className="w-3.5 h-3.5 text-beige" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fabric & Material */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-darkbrown flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-darkbrown text-ivory text-[10px] flex items-center justify-center font-mono">2</span>
                <span>Fabric & Material Preference</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {fabricOptions.map((f) => (
                  <button
                    type="button"
                    key={f}
                    onClick={() => setFabric(f)}
                    className={`py-2 px-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                      fabric === f
                        ? 'bg-darkbrown text-ivory border-darkbrown shadow-sm'
                        : 'bg-ivory/40 text-darkbrown/80 border-beige hover:border-mocha/50'
                    }`}
                  >
                    <span>{f}</span>
                    {fabric === f && <Check className="w-3.5 h-3.5 text-beige" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Occasion */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-darkbrown flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-darkbrown text-ivory text-[10px] flex items-center justify-center font-mono">3</span>
                <span>Occasion or Target Date</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {occasionOptions.map((occ) => (
                  <button
                    type="button"
                    key={occ}
                    onClick={() => setOccasion(occ)}
                    className={`py-2 px-3 rounded-full text-xs font-medium border transition-all ${
                      occasion === occ
                        ? 'bg-mocha text-ivory border-mocha shadow-sm'
                        : 'bg-ivory/40 text-darkbrown/80 border-beige hover:border-mocha/50'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Notes */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-darkbrown flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-darkbrown text-ivory text-[10px] flex items-center justify-center font-mono">4</span>
                  <span>Special Details & Color Wishes</span>
                </span>
                <span className="text-[10px] text-mocha font-normal lowercase">optional</span>
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Looking for a pastel peach anarkali with delicate zari neckline for an engagement celebration..."
                className="w-full p-3.5 rounded-xl border border-beige bg-ivory/30 text-xs text-darkbrown placeholder:text-darkbrown/40 focus:outline-none focus:ring-1 focus:ring-mocha"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-shine w-full py-4 px-6 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2.5 shadow-luxury hover:bg-mocha transition-all duration-300 active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-beige" />
                <span>Launch WhatsApp Consultation</span>
              </button>
              <p className="text-[10px] text-center text-mocha/80 mt-2">
                Direct connection with our Kasaragod atelier • In-person visits & worldwide shipping
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
