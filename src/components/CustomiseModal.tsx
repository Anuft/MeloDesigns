import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, Scissors, Check, Send } from 'lucide-react';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface CustomiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomiseModal: React.FC<CustomiseModalProps> = ({ isOpen, onClose }) => {
  const [outfitType, setOutfitType] = useState('Ladies Ethnic Wear');
  const [fabric, setFabric] = useState('Silk Organza & Raw Silk');
  const [occasion, setOccasion] = useState('Wedding / Festive Celebration');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-darkbrown/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-ivory rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-beige/60 z-10 p-6 sm:p-8 lg:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-beige/40 text-darkbrown hover:bg-darkbrown hover:text-ivory flex items-center justify-center transition-all focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/50 text-mocha text-[10px] uppercase tracking-widest font-semibold">
            <Sparkles className="w-3 h-3 text-mocha" />
            <span>Melo Atelier Bespoke Studio</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-darkbrown font-normal leading-tight">
            CUSTOMISE YOUR OUTFIT
          </h3>

          <p className="text-xs sm:text-sm text-darkbrown/70 font-light leading-relaxed">
            Select your preferences below to launch a bespoke design consultation directly with our Kasaragod atelier via WhatsApp.
          </p>
        </div>

        {/* Customisation Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Outfit Type */}
          <div className="space-y-2.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-darkbrown flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-darkbrown text-ivory text-[10px] flex items-center justify-center font-mono">1</span>
              <span>Select Outfit Silhouette</span>
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
                      : 'bg-white text-darkbrown/80 border-beige hover:border-mocha/50'
                  }`}
                >
                  <span>{opt}</span>
                  {outfitType === opt && <Check className="w-3.5 h-3.5 text-beige" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Fabric Preference */}
          <div className="space-y-2.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-darkbrown flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-darkbrown text-ivory text-[10px] flex items-center justify-center font-mono">2</span>
              <span>Preferred Fabric & Material</span>
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
                      : 'bg-white text-darkbrown/80 border-beige hover:border-mocha/50'
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
                      : 'bg-white text-darkbrown/80 border-beige hover:border-mocha/50'
                  }`}
                >
                  {occ}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Notes or References */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-darkbrown flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-darkbrown text-ivory text-[10px] flex items-center justify-center font-mono">4</span>
                <span>Special Details & Color Wishes (Optional)</span>
              </span>
              <span className="text-[10px] text-mocha font-normal lowercase">optional</span>
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Looking for a pastel peach lehenga with delicate moti work for sister's wedding in December..."
              className="w-full p-3.5 rounded-xl border border-beige bg-white text-xs text-darkbrown placeholder:text-darkbrown/40 focus:outline-none focus:ring-1 focus:ring-mocha"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="btn-shine w-full py-4 px-6 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2.5 shadow-luxury hover:bg-mocha transition-all duration-300 active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 text-beige" />
              <span>Launch WhatsApp Consultation</span>
            </button>
            <p className="text-[10px] text-center text-mocha/80 mt-2">
              Direct connection with our head designer in Thayalangadi, Kasaragod
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
