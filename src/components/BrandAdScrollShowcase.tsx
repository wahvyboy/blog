import React, { useState } from 'react';
import { Language, BrandAd } from '../types';
import { LUXURY_BRANDS } from '../data/brands';
import { UI_TRANSLATIONS } from '../data/translations';
import { Sparkles, ExternalLink, ShieldCheck, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BrandAdScrollShowcaseProps {
  language: Language;
  onBrandClick?: (brand: BrandAd) => void;
}

export const BrandAdScrollShowcase: React.FC<BrandAdScrollShowcaseProps> = ({
  language,
  onBrandClick
}) => {
  const t = UI_TRANSLATIONS[language];
  const [selectedBrandIndex, setSelectedBrandIndex] = useState<number>(0);
  const activeBrand = LUXURY_BRANDS[selectedBrandIndex];

  const handleNext = () => {
    setSelectedBrandIndex((prev) => (prev + 1) % LUXURY_BRANDS.length);
  };

  const handlePrev = () => {
    setSelectedBrandIndex((prev) => (prev - 1 + LUXURY_BRANDS.length) % LUXURY_BRANDS.length);
  };

  return (
    <motion.section
      id="brand-ad-showcase-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#F4F1EA] text-[#1A1A1A] my-16 py-12 px-4 sm:px-6 relative overflow-hidden border-y-2 border-[#1A1A1A]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-[#1A1A1A] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white text-[10px] sm:text-xs font-sans font-bold px-2.5 py-0.5 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>{language === 'en' ? 'Official Partner Spotlight' : 'Vetrina Partner Ufficiali'}</span>
              </span>
              <span className="text-[#D23131] text-xs tracking-[0.2em] uppercase font-sans font-bold">
                {language === 'en' ? 'Made in Italy Icons' : 'Icone del Made in Italy'}
              </span>
            </div>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
              {t.brandSpotlight}
            </h2>
            <p className="text-[#4A4A4A] italic text-base sm:text-lg mt-1 max-w-2xl font-serif-italic font-normal">
              "{t.brandSubtitle}"
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              type="button"
              className="p-2 bg-white hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A] text-[#1A1A1A] transition-colors cursor-pointer"
              aria-label="Previous brand"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-[#1A1A1A] px-2">
              {selectedBrandIndex + 1} / {LUXURY_BRANDS.length}
            </span>
            <button
              onClick={handleNext}
              type="button"
              className="p-2 bg-white hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A] text-[#1A1A1A] transition-colors cursor-pointer"
              aria-label="Next brand"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Brand Showcase Hero Box */}
        <motion.div
          key={activeBrand.id}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-[#1A1A1A] p-6 sm:p-8 relative"
        >
          {/* Brand Visual Media */}
          <div className="lg:col-span-7 relative group bg-neutral-950 aspect-16/10 border border-[#E5E1D8] overflow-hidden">
            <img
              src={activeBrand.imageUrl}
              alt={activeBrand.name}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 filter contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-[#1A1A1A] text-white text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-1">
                {activeBrand.badge[language]}
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 font-sans tracking-wider uppercase">
              <span className="flex items-center gap-1.5 font-bold">
                <Compass className="w-3.5 h-3.5 text-amber-300" />
                {activeBrand.origin}
              </span>
              <span className="font-mono text-white/80">Est. {activeBrand.yearFounded}</span>
            </div>
          </div>

          {/* Brand Story & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D23131] font-bold font-sans">
                {activeBrand.category[language]}
              </span>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] mt-1 mb-2">
                {activeBrand.name}
              </h3>
              <blockquote className="text-base sm:text-lg italic text-[#1A1A1A] font-serif-italic border-l-2 border-[#D23131] pl-3.5 my-3">
                "{activeBrand.tagline[language]}"
              </blockquote>
              <p className="font-editorial-body text-[#4A4A4A] text-base leading-relaxed mb-6 font-normal">
                {activeBrand.description[language]}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#E5E1D8]">
              <div className="flex items-center gap-2 text-xs font-sans text-[#1A1A1A]/70 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#D23131]" />
                <span>
                  {language === 'en'
                    ? 'Certified Authentic Italian Craftsmanship'
                    : 'Artigianato Italiano Autentico Certificato'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onBrandClick && onBrandClick(activeBrand)}
                  className="flex-1 bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans font-bold uppercase tracking-[0.2em] text-xs py-3 px-5 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{activeBrand.ctaText[language]}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brand Selector Interactive Strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {LUXURY_BRANDS.map((brand, idx) => (
            <button
              key={brand.id}
              type="button"
              onClick={() => setSelectedBrandIndex(idx)}
              className={`p-3 border text-left transition-all cursor-pointer ${
                selectedBrandIndex === idx
                  ? 'bg-white border-[#1A1A1A] shadow-xs'
                  : 'bg-white/60 border-[#E5E1D8] hover:bg-white hover:border-[#1A1A1A]'
              }`}
            >
              <div className="text-[10px] text-[#D23131] font-mono font-bold">0{idx + 1}</div>
              <div className="font-editorial-serif font-bold text-base text-[#1A1A1A] truncate">
                {brand.name}
              </div>
              <div className="text-[10px] font-sans uppercase tracking-wider text-[#1A1A1A]/60 truncate">
                {brand.badge[language]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

