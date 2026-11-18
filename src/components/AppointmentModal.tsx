import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, MessageCircle, CheckCircle, MapPin, User, Phone, Scissors } from 'lucide-react';
import { BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp } from '../utils/whatsapp';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consultationType, setConsultationType] = useState('Bridal Couture & Blouses');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (11:00 AM - 1:00 PM)');
  const [consultationMode, setConsultationMode] = useState<'in-studio' | 'virtual'>('in-studio');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*MELO DESIGNS — ATELIER APPOINTMENT REQUEST* ✨\n\n` +
      `• *Client Name:* ${name || 'Prospective Client'}\n` +
      `• *Phone:* ${phone || 'Not provided'}\n` +
      `• *Consultation Type:* ${consultationType}\n` +
      `• *Mode:* ${consultationMode === 'in-studio' ? 'In-Studio (Thayalangadi, Kasaragod)' : 'Virtual Video Styling Session'}\n` +
      `• *Preferred Date:* ${preferredDate || 'Earliest available'}\n` +
      `• *Preferred Slot:* ${preferredTime}\n` +
      (notes ? `• *Design Vision / Occasion:* ${notes}\n\n` : '\n') +
      `I would like to confirm my consultation with the MELO DESIGNS atelier. Please let me know your available slots.`;

    openWhatsApp(message);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkbrown/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-ivory text-darkbrown rounded-2xl shadow-2xl overflow-hidden border border-beige/60 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-white border-b border-beige/60 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-beige/40 text-mocha text-[10px] uppercase tracking-[0.25em] font-medium mb-1.5">
              <Sparkles className="w-3 h-3 text-mocha" />
              <span>Private Atelier Consultation</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-darkbrown font-normal uppercase tracking-tight">
              BOOK AN APPOINTMENT
            </h3>
            <p className="text-xs text-mocha/80 mt-1 font-light tracking-wide">
              Thayalangadi Atelier, Kasaragod • Personal 1-on-1 Designer Session
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-beige/40 text-darkbrown/60 hover:text-darkbrown transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5 overflow-y-auto">
          {/* Consultation Mode */}
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-darkbrown mb-2">
              Consultation Format
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setConsultationMode('in-studio')}
                className={`py-3 px-4 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${
                  consultationMode === 'in-studio'
                    ? 'border-darkbrown bg-darkbrown text-ivory shadow-sm'
                    : 'border-beige bg-white text-darkbrown/80 hover:bg-beige/20'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Atelier Visit (Kasaragod)</span>
              </button>
              <button
                type="button"
                onClick={() => setConsultationMode('virtual')}
                className={`py-3 px-4 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${
                  consultationMode === 'virtual'
                    ? 'border-darkbrown bg-darkbrown text-ivory shadow-sm'
                    : 'border-beige bg-white text-darkbrown/80 hover:bg-beige/20'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Virtual Consultation</span>
              </button>
            </div>
          </div>

          {/* Consultation Type */}
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-darkbrown mb-2">
              Bespoke Service
            </label>
            <select
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-beige/80 bg-white text-darkbrown text-xs focus:outline-none focus:border-mocha transition-all"
            >
              <option value="Bridal Couture & Blouses">Bridal Couture & Embroidered Blouses</option>
              <option value="Custom Saree Ensembles">Bespoke Silk & Georgette Saree Ensembles</option>
              <option value="Contemporary Western Gown">Contemporary Western / Reception Gown</option>
              <option value="Bespoke Kidswear Couture">Bespoke Kidswear & Mom-Child Matching Sets</option>
              <option value="Festive Anarkalis & Lehengas">Festive Heirloom Anarkalis & Lehengas</option>
              <option value="General Atelier Consultation">General Couture Consultation</option>
            </select>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-darkbrown mb-1.5">
                Your Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Fatima / Anjali"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-beige/80 bg-white text-darkbrown text-xs focus:outline-none focus:border-mocha"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-darkbrown mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-beige/80 bg-white text-darkbrown text-xs focus:outline-none focus:border-mocha"
              />
            </div>
          </div>

          {/* Date & Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-darkbrown mb-1.5">
                Preferred Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-beige/80 bg-white text-darkbrown text-xs focus:outline-none focus:border-mocha"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-darkbrown mb-1.5">
                Time Preference
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-beige/80 bg-white text-darkbrown text-xs focus:outline-none focus:border-mocha"
              >
                <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                <option value="Evening (5:30 PM - 8:00 PM)">Evening (5:30 PM - 8:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Special Notes */}
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-darkbrown mb-1.5">
              Occasion & Design Notes (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Tell us about the upcoming occasion, fabric preferences, or reference styles..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-beige/80 bg-white text-darkbrown text-xs focus:outline-none focus:border-mocha resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="btn-shine w-full py-3.5 px-6 rounded-xl bg-darkbrown text-ivory text-xs uppercase tracking-[0.25em] font-medium hover:bg-mocha transition-all flex items-center justify-center gap-2 shadow-luxury"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Confirm Appointment via WhatsApp Concierge</span>
            </button>
            <p className="text-[10px] text-center text-mocha/70 mt-2">
              Our bespoke design coordinator will promptly confirm your appointment slot.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
