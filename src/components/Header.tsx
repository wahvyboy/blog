import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Search, Menu, X, Share2, Mail, Send } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onSearchClick: () => void;
  onShareSite: () => void;
  activeCategoryKey: string | null;
  onSelectCategory: (key: string | null) => void;
  onOpenNewsletter: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  isMenuOpen,
  onToggleMenu,
  onSearchClick,
  onShareSite,
  activeCategoryKey,
  onSelectCategory,
  onOpenNewsletter
}) => {
  const t = UI_TRANSLATIONS[language];

  // Current date formatted in editorial style
  const todayFormatted = new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'it-IT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <header id="site-header" className="w-full bg-[#FDFCF9] border-b border-[#1A1A1A] sticky top-0 z-40">
      {/* Top Editorial Utility Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-3 flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E1D8]">
        {/* Left: Language Toggle Pill + Date */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Editorial Language Toggle Capsule */}
          <div className="inline-flex items-center text-[11px] tracking-widest uppercase font-sans font-bold bg-[#1A1A1A] text-white px-3 py-1 rounded-full shadow-xs">
            <button
              id="lang-btn-it"
              type="button"
              onClick={() => onLanguageChange('it')}
              className={`transition-opacity cursor-pointer ${language === 'it' ? 'opacity-100 font-extrabold' : 'opacity-45 hover:opacity-80'}`}
              title="Edizione Italiana (New York)"
            >
              ITA
            </button>
            <span className="mx-2 text-white/30">|</span>
            <button
              id="lang-btn-en"
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`transition-opacity cursor-pointer ${language === 'en' ? 'opacity-100 font-extrabold' : 'opacity-45 hover:opacity-80'}`}
              title="English Edition"
            >
              ENG
            </button>
          </div>

          <div className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans text-[#1A1A1A]/70 hidden sm:block">
            {todayFormatted}
          </div>
        </div>

        {/* Center Tagline for medium screens */}
        <div className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#1A1A1A]/60 hidden md:block">
          {language === 'en' ? 'Authentic New York Living, News & Dispatches' : 'Storie e Vita Autentica a New York'}
        </div>

        {/* Right: Quick Share & Newsletter & Editorial Badge */}
        <div className="flex items-center gap-3.5 sm:gap-4 text-xs font-sans font-bold uppercase tracking-wider">
          <button
            type="button"
            onClick={onOpenNewsletter}
            className="flex items-center gap-1.5 bg-[#D23131] hover:bg-[#1A1A1A] text-white px-2.5 py-1 text-[10px] sm:text-[11px] tracking-widest uppercase transition-colors cursor-pointer"
            title="Subscribe to Dispatches"
          >
            <Send className="w-3 h-3" />
            <span>{t.newsletterButton}</span>
          </button>

          <button
            type="button"
            onClick={onShareSite}
            className="flex items-center gap-1.5 text-[#1A1A1A] hover:text-[#D23131] transition-colors cursor-pointer"
            title="Share Journal"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'en' ? 'Share' : 'Condividi'}</span>
          </button>
          <span className="w-3 h-[1px] bg-[#1A1A1A]/40 hidden sm:inline-block"></span>
          <span className="text-[10px] tracking-widest text-[#D23131] font-extrabold uppercase">
            {language === 'en' ? 'Vol. XXIV' : 'Ediz. XXIV'}
          </span>
        </div>
      </div>

      {/* Main Masthead Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center">
        <button
          type="button"
          onClick={() => onSelectCategory(null)}
          className="group inline-block text-center cursor-pointer focus:outline-none"
        >
          <h1 className="font-editorial-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic font-bold tracking-tight text-[#1A1A1A] transition-transform group-hover:scale-[1.008] leading-none">
            {t.siteTitle}
          </h1>
          <p className="text-[#4A4A4A] italic text-base sm:text-lg md:text-xl mt-2 font-serif-italic font-normal max-w-2xl mx-auto">
            "{t.siteTagline}"
          </p>
        </button>
      </div>

      {/* Navigation Control Bar with Editorial Lines */}
      <div className="border-t border-[#1A1A1A] bg-[#FDFCF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          {/* Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={onToggleMenu}
            className="flex items-center gap-2 font-sans text-xs sm:text-sm font-bold tracking-[0.15em] text-[#1A1A1A] hover:text-[#D23131] transition-colors uppercase py-1 cursor-pointer"
          >
            {isMenuOpen ? (
              <>
                <X className="w-4 h-4" />
                <span>{t.closeMenu}</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4" />
                <span>{t.menu}</span>
              </>
            )}
          </button>

          {/* Quick Category Chips with Clean Editorial Line Active state */}
          <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-[0.18em] font-sans">
            <button
              onClick={() => onSelectCategory(null)}
              className={`py-1 transition-all cursor-pointer ${
                activeCategoryKey === null
                  ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]'
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              {language === 'en' ? 'ALL STORIES' : 'TUTTI I RACCONTI'}
            </button>
            <button
              onClick={() => onSelectCategory('real-estate')}
              className={`py-1 transition-all cursor-pointer ${
                activeCategoryKey === 'real-estate'
                  ? 'text-[#D23131] border-b-2 border-[#D23131]'
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              {language === 'en' ? 'REAL ESTATE' : 'IMMOBILIARE'}
            </button>
            <button
              onClick={() => onSelectCategory('food')}
              className={`py-1 transition-all cursor-pointer ${
                activeCategoryKey === 'food'
                  ? 'text-[#D23131] border-b-2 border-[#D23131]'
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              {language === 'en' ? 'FOOD & WINE' : 'CUCINA & VINI'}
            </button>
            <button
              onClick={() => onSelectCategory('lifestyle')}
              className={`py-1 transition-all cursor-pointer ${
                activeCategoryKey === 'lifestyle'
                  ? 'text-[#D23131] border-b-2 border-[#D23131]'
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              {language === 'en' ? 'LIFESTYLE' : 'STILE DI VITA'}
            </button>
            <button
              onClick={() => onSelectCategory('travel')}
              className={`py-1 transition-all cursor-pointer ${
                activeCategoryKey === 'travel'
                  ? 'text-[#D23131] border-b-2 border-[#D23131]'
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              {language === 'en' ? 'TRAVEL' : 'VIAGGI'}
            </button>
          </div>

          {/* Search Trigger and Newsletter action */}
          <div className="flex items-center gap-4">
            <button
              id="nav-search-btn"
              type="button"
              onClick={onSearchClick}
              className="flex items-center gap-2 text-xs font-sans font-bold tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#D23131] transition-colors py-1 cursor-pointer"
              title="Search articles"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{t.search}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
