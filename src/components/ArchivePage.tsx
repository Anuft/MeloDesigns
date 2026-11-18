import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Sparkles,
  MessageCircle,
  Eye,
  X,
  ExternalLink,
  Scissors,
  Check,
  Grid,
  Columns
} from 'lucide-react';
import { ARCHIVE_ITEMS, BOUTIQUE_INFO } from '../data/boutiqueData';
import { ArchiveItem } from '../types';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { InstagramIcon } from './Icons';

interface ArchivePageProps {
  onBackToHome: () => void;
}

export const ArchivePage: React.FC<ArchivePageProps> = ({ onBackToHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'editorial'>('grid');
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Archive' },
    { id: 'bridal', label: 'Bridal & Blouses' },
    { id: 'saree', label: 'Sarees & Drapes' },
    { id: 'ethnic', label: 'Ethnic & Anarkalis' },
    { id: 'western', label: 'Western & Co-ords' },
    { id: 'kids', label: 'Kidswear Couture' },
    { id: 'commission', label: 'Client Commissions' },
  ];

  const years = ['all', '2026', '2025'];

  const filteredItems = useMemo(() => {
    return ARCHIVE_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear =
        selectedYear === 'all' || item.year === selectedYear;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.fabric.toLowerCase().includes(q) ||
        item.craftsmanship.toLowerCase().includes(q) ||
        item.occasion.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const handleEnquire = (item: ArchiveItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = WHATSAPP_MESSAGES.archiveEnquiry(
      item.title,
      item.categoryLabel,
      item.season
    );
    openWhatsApp(msg);
  };

  return (
    <div className="min-h-screen bg-ivory text-darkbrown font-sans flex flex-col animate-fade-in">
      {/* Top Sticky Header for Archive Page */}
      <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-beige/60 py-3.5 px-4 sm:px-6 lg:px-8 transition-all">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-darkbrown hover:text-mocha transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Boutique Home</span>
          </button>

          {/* Logo */}
          <div className="text-center hidden sm:block">
            <span className="font-serif text-lg tracking-[0.25em] font-medium text-darkbrown uppercase">
              MELO DESIGNS
            </span>
            <span className="block text-[9px] tracking-[0.3em] text-mocha uppercase">
              Atelier Archive
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => openWhatsApp(WHATSAPP_MESSAGES.generalEnquiry())}
              className="btn-shine inline-flex items-center gap-2 px-4 py-2 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-wider font-medium hover:bg-mocha transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-beige" />
              <span className="hidden sm:inline">Enquire via WhatsApp</span>
              <span className="sm:hidden">Enquire</span>
            </button>
          </div>
        </div>
      </header>

      {/* Archive Hero Section */}
      <section className="bg-darkbrown text-ivory pt-16 pb-20 sm:pt-20 sm:pb-24 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-mocha/25 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-beige text-[11px] uppercase tracking-[0.25em] font-light">
            <Sparkles className="w-3.5 h-3.5 text-beige" />
            <span>Curated Portfolio & Commissions</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-ivory font-normal tracking-tight uppercase leading-[1.1]">
            THE ATELIER ARCHIVE
          </h1>

          <div className="w-20 h-[1.5px] bg-beige/50 mx-auto my-3" />

          <p className="text-sm sm:text-base text-beige/90 font-light leading-relaxed max-w-2xl mx-auto">
            A chronological curation of bespoke creations, handcrafted bridal blouses, customised sarees, and festive kidswear created at our Thayalangadi, Kasaragod atelier. Every garment can be customized to your measurements.
          </p>

          {/* Quick Stats Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs text-beige/80">
            <span className="px-3 py-1 rounded-full bg-white/[0.07] border border-white/10">
              ✦ {ARCHIVE_ITEMS.length} Archived Creations
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.07] border border-white/10">
              ✦ Thayalangadi, Kasaragod
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.07] border border-white/10">
              ✦ 100% Made-to-Measure
            </span>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="bg-white border-b border-beige/60 py-6 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="container mx-auto space-y-5">
          {/* Top Controls: Search & Layout Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mocha/70" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search archive by garment, fabric, zari, occasion..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-beige bg-ivory/50 text-xs text-darkbrown placeholder:text-darkbrown/40 focus:outline-none focus:ring-1 focus:ring-mocha"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-mocha/60 hover:text-darkbrown"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Layout Toggle & Year Select */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              {/* Year Select */}
              <div className="flex items-center gap-1.5 text-xs text-mocha">
                <span className="text-[11px] uppercase tracking-wider">Year:</span>
                <div className="flex rounded-full bg-ivory p-0.5 border border-beige">
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => setSelectedYear(y)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        selectedYear === y
                          ? 'bg-darkbrown text-ivory shadow-xs'
                          : 'text-darkbrown/70 hover:text-darkbrown'
                      }`}
                    >
                      {y === 'all' ? 'All' : y}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Layout Buttons */}
              <div className="hidden md:flex rounded-full bg-ivory p-0.5 border border-beige">
                <button
                  onClick={() => setLayoutMode('grid')}
                  className={`p-1.5 rounded-full transition-all ${
                    layoutMode === 'grid'
                      ? 'bg-darkbrown text-ivory shadow-xs'
                      : 'text-darkbrown/60 hover:text-darkbrown'
                  }`}
                  title="Grid View (3–4 columns)"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLayoutMode('editorial')}
                  className={`p-1.5 rounded-full transition-all ${
                    layoutMode === 'editorial'
                      ? 'bg-darkbrown text-ivory shadow-xs'
                      : 'text-darkbrown/60 hover:text-darkbrown'
                  }`}
                  title="Editorial View (2 columns)"
                >
                  <Columns className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-darkbrown text-ivory shadow-md scale-105'
                    : 'bg-ivory text-darkbrown/75 hover:bg-beige hover:text-darkbrown border border-beige/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Products Gallery */}
      <main className="flex-grow py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {filteredItems.length === 0 ? (
            <div className="py-24 text-center max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-beige/40 flex items-center justify-center mx-auto text-mocha">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-darkbrown font-normal">
                No archived items found
              </h3>
              <p className="text-xs text-darkbrown/70 leading-relaxed font-light">
                We couldn't find any creations matching your search or filter. Try clearing the search query or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedYear('all');
                }}
                className="px-6 py-2.5 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-wider font-medium hover:bg-mocha transition-all"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div
              className={`grid gap-6 sm:gap-8 ${
                layoutMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1 md:grid-cols-2'
              }`}
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-beige/70 hover:border-mocha/40 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-1.5"
                >
                  {/* Image Frame */}
                  <div
                    className={`relative overflow-hidden bg-beige/25 ${
                      layoutMode === 'grid' ? 'aspect-[3/4]' : 'aspect-[4/5]'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/70 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-ivory/95 backdrop-blur-md text-[10px] uppercase tracking-wider text-darkbrown font-medium shadow-sm">
                        {item.season} • {item.year}
                      </span>
                      {item.isInstagramPost && (
                        <span className="w-6 h-6 rounded-full bg-darkbrown/85 backdrop-blur-md text-beige flex items-center justify-center shadow-sm">
                          <InstagramIcon className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>

                    {/* Hover Floating Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="p-3 rounded-full bg-ivory text-darkbrown hover:bg-white hover:scale-110 transition-transform shadow-lg"
                        title="Quick View Specifications"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => handleEnquire(item, e)}
                        className="p-3 rounded-full bg-darkbrown text-ivory hover:bg-mocha hover:scale-110 transition-transform shadow-lg"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Card Content: Minimal Luxury Styling */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-mocha font-semibold block">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-serif text-lg text-darkbrown font-normal leading-snug group-hover:text-mocha transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={(e) => handleEnquire(item, e)}
                      className="btn-shine w-full py-2.5 px-4 rounded-full bg-darkbrown text-ivory text-[11px] uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2 hover:bg-mocha transition-all duration-300 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-beige" />
                      <span>Enquire for Price</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Detailed Archive Item Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-darkbrown/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedItem(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-ivory rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-beige/60 z-10 flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-ivory/80 backdrop-blur-md text-darkbrown hover:bg-darkbrown hover:text-ivory flex items-center justify-center transition-all shadow-md focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image */}
            <div className="md:w-1/2 relative bg-beige/30 min-h-[340px] md:min-h-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-darkbrown/85 backdrop-blur-md text-ivory text-[10px] uppercase tracking-widest font-medium">
                  {selectedItem.categoryLabel}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-mocha text-[10px] uppercase tracking-wider font-semibold">
                  {selectedItem.year}
                </span>
              </div>
            </div>

            {/* Right: Details & WhatsApp Action */}
            <div className="md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-mocha font-semibold">
                    {selectedItem.categoryLabel}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-darkbrown font-normal mt-1 leading-tight">
                    {selectedItem.title}
                  </h3>
                </div>

                <p className="text-sm text-darkbrown/80 font-light leading-relaxed">
                  Bespoke custom creation handcrafted to your exact measurements, fabric choices, and occasion requirements at our Kasaragod atelier.
                </p>

                {selectedItem.instagramUrl && (
                  <a
                    href={selectedItem.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-mocha hover:text-darkbrown font-medium transition-colors pt-2"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>View on Official Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-beige/40">
                <button
                  onClick={(e) => handleEnquire(selectedItem, e)}
                  className="btn-shine w-full py-4 px-6 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-3 shadow-luxury hover:bg-mocha transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-beige" />
                  <span>Enquire on WhatsApp</span>
                </button>
                <p className="text-[10px] text-center text-mocha tracking-wider">
                  Handcrafted to your measurements at our Thayalangadi, Kasaragod atelier
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Archive Footer Note */}
      <footer className="bg-darkbrown text-ivory py-10 px-4 text-center border-t border-beige/10">
        <div className="container mx-auto space-y-3">
          <p className="font-serif text-2xl tracking-[0.2em] uppercase font-light">
            MELO DESIGNS
          </p>
          <p className="text-xs text-beige/80 font-light">
            Thayalangadi, Kasaragod, Kerala 671121 • WhatsApp: {BOUTIQUE_INFO.phoneDisplay}
          </p>
          <div className="pt-2">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs text-beige hover:text-ivory uppercase tracking-wider underline underline-offset-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Main Boutique Website</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
