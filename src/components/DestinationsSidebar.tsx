import React from 'react';
import { Article, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { ChevronRight } from 'lucide-react';

interface DestinationsSidebarProps {
  language: Language;
  articles: Article[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onArticleClick: (article: Article) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const DestinationsSidebar: React.FC<DestinationsSidebarProps> = ({
  language,
  articles,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onArticleClick,
  currentPage,
  onPageChange
}) => {
  const t = UI_TRANSLATIONS[language];

  const treviArticle = articles.find(a => a.slug === 'trevi-fountain-reopening-all-the-new-rules') || articles[0];
  const navonaArticle = articles.find(a => a.slug === 'piazza-navona-fountain-of-the-four-rivers-restoration') || articles[1];
  const vaticanArticle = articles.find(a => a.slug === 'the-vatican-launches-an-app-for-the-jubilee-2025') || articles[2];
  const fashionArticle = articles.find(a => a.slug === 'italian-fashion-craftsmanship-timeless-elegance') || articles[3];

  return (
    <aside id="sidebar-destinations" className="w-full space-y-12">
      {/* Search Widget Box */}
      <div className="bg-white border border-[#1A1A1A] p-5 shadow-xs">
        <div className="bg-[#1A1A1A] text-white text-center py-2 px-4 font-sans font-bold tracking-[0.25em] text-xs sm:text-sm uppercase mb-4">
          {t.search}
        </div>
        <form onSubmit={onSearchSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full px-3.5 py-2.5 text-sm border border-[#E5E1D8] font-sans focus:outline-none focus:border-[#1A1A1A] bg-[#FDFCF9]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans font-bold tracking-[0.2em] text-xs uppercase px-5 py-2.5 transition-colors cursor-pointer"
          >
            {t.searchButton}
          </button>
        </form>
      </div>

      {/* Italian Destinations Section */}
      <div>
        <div className="border-b border-[#1A1A1A] pb-2 mb-6 flex items-baseline justify-between">
          <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
            {t.destinations}
          </h3>
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D23131]">
            {language === 'en' ? 'Guides' : 'Guide'}
          </span>
        </div>

        {/* Big Featured Item: Trevi Fountain */}
        {treviArticle && (
          <div
            onClick={() => onArticleClick(treviArticle)}
            className="group cursor-pointer mb-6"
          >
            <div className="relative overflow-hidden bg-neutral-100 mb-3 aspect-16/10 border border-[#E5E1D8]">
              <img
                src={treviArticle.imageUrl}
                alt={treviArticle.imageAlt[language]}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <h4 className="font-editorial-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#D23131] transition-colors leading-snug">
              {treviArticle.title[language]}
            </h4>
          </div>
        )}

        {/* Sub Thumbnail List */}
        <div className="space-y-4 divide-y divide-[#E5E1D8]">
          {navonaArticle && (
            <div
              onClick={() => onArticleClick(navonaArticle)}
              className="pt-4 first:pt-0 flex gap-3.5 group cursor-pointer"
            >
              <div className="w-24 h-18 sm:w-28 sm:h-20 shrink-0 bg-neutral-100 overflow-hidden border border-[#E5E1D8]">
                <img
                  src={navonaArticle.imageUrl}
                  alt={navonaArticle.imageAlt[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-editorial-serif text-base font-bold text-[#1A1A1A] group-hover:text-[#D23131] transition-colors leading-snug line-clamp-3">
                  {navonaArticle.title[language]}
                </h5>
              </div>
            </div>
          )}

          {vaticanArticle && (
            <div
              onClick={() => onArticleClick(vaticanArticle)}
              className="pt-4 flex gap-3.5 group cursor-pointer"
            >
              <div className="w-24 h-18 sm:w-28 sm:h-20 shrink-0 bg-neutral-100 overflow-hidden border border-[#E5E1D8]">
                <img
                  src={vaticanArticle.imageUrl}
                  alt={vaticanArticle.imageAlt[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-editorial-serif text-base font-bold text-[#1A1A1A] group-hover:text-[#D23131] transition-colors leading-snug line-clamp-3">
                  {vaticanArticle.title[language]}
                </h5>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Italian Fashion Section */}
      <div>
        <div className="border-b border-[#1A1A1A] pb-2 mb-6 flex items-baseline justify-between">
          <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
            {t.fashion}
          </h3>
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D23131]">
            {language === 'en' ? 'Style' : 'Stile'}
          </span>
        </div>

        {fashionArticle && (
          <div
            onClick={() => onArticleClick(fashionArticle)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-neutral-100 mb-3 aspect-16/10 border border-[#E5E1D8]">
              <img
                src={fashionArticle.imageUrl}
                alt={fashionArticle.imageAlt[language]}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <h4 className="font-editorial-serif text-lg sm:text-xl font-bold text-[#1A1A1A] group-hover:text-[#D23131] transition-colors leading-snug">
              {fashionArticle.title[language]}
            </h4>
          </div>
        )}
      </div>

      {/* Pagination Strip */}
      <div className="pt-6 border-t border-[#1A1A1A]">
        <div className="flex items-center justify-between text-[#1A1A1A] font-sans text-xs font-bold tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onPageChange(1)}
              className={`px-2 py-1 transition-colors cursor-pointer ${currentPage === 1 ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A]' : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'}`}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => onPageChange(2)}
              className={`px-2 py-1 transition-colors cursor-pointer ${currentPage === 2 ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A]' : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'}`}
            >
              2
            </button>
            <button
              type="button"
              onClick={() => onPageChange(3)}
              className={`px-2 py-1 transition-colors cursor-pointer ${currentPage === 3 ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A]' : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'}`}
            >
              3
            </button>
            <span className="text-[#1A1A1A]/30">...</span>
            <button
              type="button"
              onClick={() => onPageChange(253)}
              className={`px-2 py-1 transition-colors cursor-pointer ${currentPage === 253 ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A]' : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'}`}
            >
              253
            </button>
          </div>

          <button
            type="button"
            onClick={() => onPageChange(Math.min(currentPage + 1, 253))}
            className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#D23131] transition-colors cursor-pointer"
          >
            <span>{language === 'en' ? 'Next' : 'Avanti'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

