import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Send, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BOUTIQUE_INFO } from '../data/boutiqueData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const LocationContact: React.FC = () => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorDate, setVisitorDate] = useState('');
  const [visitorNotes, setVisitorNotes] = useState('');

  const handleBookVisit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = WHATSAPP_MESSAGES.visitAppointment(visitorName, visitorDate);
    const fullMsg = visitorNotes ? `${msg}\nNote: ${visitorNotes}` : msg;
    openWhatsApp(fullMsg);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ivory relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/50 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
            <MapPin className="w-3.5 h-3.5 text-mocha" />
            <span>Kasaragod Boutique</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-darkbrown font-normal tracking-tight uppercase">
            VISIT MELO DESIGNS
          </h2>

          <div className="w-16 h-[1.5px] bg-mocha/40 mx-auto my-3" />

          <p className="text-sm sm:text-base text-darkbrown/70 font-light leading-relaxed">
            Experience the fabrics, handcrafts, and bespoke consultations in person at our Thayalangadi atelier.
          </p>
        </div>

        {/* Content Grid: Contact Details & Map Card vs Interactive Visit Planner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Address, Google Maps & Quick Links (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Location Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-beige/60 shadow-luxury space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-mocha font-semibold">
                    Flagship Atelier
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-darkbrown font-normal">
                    MELO DESIGNS
                  </h3>
                  <p className="text-xs text-mocha tracking-wider">Thayalangadi, Kasaragod</p>
                </div>

                <a
                  href={BOUTIQUE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivory text-darkbrown text-xs uppercase tracking-wider font-medium hover:bg-beige transition-colors border border-beige self-start"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-mocha" />
                </a>
              </div>

              {/* Address Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-beige/40">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-mocha font-semibold">
                    <MapPin className="w-4 h-4 text-mocha" />
                    <span>Boutique Address</span>
                  </div>
                  <p className="text-sm text-darkbrown/85 font-light leading-relaxed">
                    {BOUTIQUE_INFO.address}
                  </p>
                  <p className="text-[11px] text-mocha">
                    Plus Code: <span className="font-mono font-medium text-darkbrown">FXXP+PHV Kasaragod</span>
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-mocha font-semibold">
                    <Clock className="w-4 h-4 text-mocha" />
                    <span>Atelier Hours</span>
                  </div>
                  <p className="text-sm text-darkbrown/85 font-light leading-relaxed">
                    {BOUTIQUE_INFO.hours}
                  </p>
                  <p className="text-[11px] text-mocha">
                    Private bridal appointments available on request
                  </p>
                </div>
              </div>

              {/* Quick Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* Phone Call */}
                <a
                  href={`tel:${BOUTIQUE_INFO.phoneNumber}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-ivory/60 hover:bg-beige/40 border border-beige/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-darkbrown shadow-sm">
                    <Phone className="w-4 h-4 text-mocha" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] uppercase tracking-wider text-mocha font-medium">Call Us</span>
                    <span className="block text-xs font-medium text-darkbrown truncate">{BOUTIQUE_INFO.phoneDisplay}</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <button
                  onClick={() => openWhatsApp(WHATSAPP_MESSAGES.generalEnquiry())}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-ivory/60 hover:bg-beige/40 border border-beige/50 transition-colors text-left"
                >
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-darkbrown shadow-sm">
                    <MessageCircle className="w-4 h-4 text-mocha" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] uppercase tracking-wider text-mocha font-medium">WhatsApp</span>
                    <span className="block text-xs font-medium text-darkbrown truncate">Instant Chat</span>
                  </div>
                </button>

                {/* Instagram */}
                <a
                  href={BOUTIQUE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-ivory/60 hover:bg-beige/40 border border-beige/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-darkbrown shadow-sm">
                    <InstagramIcon className="w-4 h-4 text-mocha" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] uppercase tracking-wider text-mocha font-medium">Instagram</span>
                    <span className="block text-xs font-medium text-darkbrown truncate">{BOUTIQUE_INFO.instagramHandle}</span>
                  </div>
                </a>
              </div>

              {/* Styled Visual Google Maps Embed / Preview Link */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/7] bg-beige/40 border border-beige/60 group">
                <img
                  src="/images/melo_enhanced/melo_artisan_frame.jpg"
                  alt="Melo Designs Thayalangadi Atelier & Craft Studio"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] opacity-75 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/80 via-darkbrown/30 to-transparent flex flex-col justify-end p-5 text-ivory">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium tracking-wide">Thayalangadi, Kasaragod</p>
                      <p className="text-[10px] text-beige/80">Kerala 671121, India</p>
                    </div>
                    <a
                      href={BOUTIQUE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-darkbrown text-[11px] font-semibold uppercase tracking-wider shadow-md hover:bg-beige transition-colors flex items-center gap-1.5"
                    >
                      <span>Open Directions</span>
                      <ExternalLink className="w-3 h-3 text-mocha" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Plan an Atelier Visit / Inquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-beige/60 shadow-luxury space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/40 text-mocha text-[10px] uppercase tracking-widest font-semibold">
                  <Sparkles className="w-3 h-3 text-mocha" />
                  <span>Personal Consultation</span>
                </div>
                <h3 className="font-serif text-2xl text-darkbrown font-normal">
                  Plan Your Visit
                </h3>
                <p className="text-xs text-darkbrown/70 leading-relaxed font-light">
                  Let us know when you would like to visit or consult regarding a customised outfit. We will prepare fabric swatches suited to your style.
                </p>
              </div>

              <form onSubmit={handleBookVisit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-darkbrown">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="e.g. Ayesha Rahman"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-beige bg-ivory/40 text-xs text-darkbrown placeholder:text-darkbrown/40 focus:outline-none focus:ring-1 focus:ring-mocha"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-darkbrown">
                    Preferred Visit Date / Time
                  </label>
                  <input
                    type="text"
                    value={visitorDate}
                    onChange={(e) => setVisitorDate(e.target.value)}
                    placeholder="e.g. This Saturday afternoon"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-beige bg-ivory/40 text-xs text-darkbrown placeholder:text-darkbrown/40 focus:outline-none focus:ring-1 focus:ring-mocha"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-darkbrown">
                    Outfit Interests or Notes
                  </label>
                  <textarea
                    rows={3}
                    value={visitorNotes}
                    onChange={(e) => setVisitorNotes(e.target.value)}
                    placeholder="e.g. Interested in customising an engagement lehenga and matching kidswear..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-beige bg-ivory/40 text-xs text-darkbrown placeholder:text-darkbrown/40 focus:outline-none focus:ring-1 focus:ring-mocha"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-shine w-full py-3.5 px-6 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 shadow-luxury hover:bg-mocha transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 text-beige" />
                    <span>Send Visit Enquiry via WhatsApp</span>
                  </button>
                  <p className="text-[10px] text-center text-mocha/80 mt-2">
                    Replies typically within 1–2 hours during boutique operating hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
