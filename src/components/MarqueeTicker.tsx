import React from 'react';

interface MarqueeTickerProps {
  items?: string[];
  className?: string;
  dark?: boolean;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = [
    'MELO DESIGNS',
    'BESPOKE COUTURE',
    'KASARAGOD ATELIER',
    'HANDCRAFTED BRIDAL',
    'CONTEMPORARY DRAPES',
    'LADIES & KIDSWEAR',
    'ONE-ON-ONE CONSULTATIONS',
    'WORLDWIDE DELIVERY'
  ],
  className = '',
  dark = false,
}) => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap py-3 border-y transition-colors ${
      dark 
        ? 'bg-[#181310] border-[#302520] text-[#E6D7C8]' 
        : 'bg-[#F2ECE3] border-beige/60 text-darkbrown'
    } ${className}`}>
      <div className="inline-flex items-center gap-8 animate-marquee text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium">
        {repeated.map((item, idx) => (
          <span key={idx} className="inline-flex items-center gap-8">
            <span>{item}</span>
            <span className="w-1 h-1 rounded-full bg-mocha/60 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};
