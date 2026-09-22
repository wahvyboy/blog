import React from 'react';
import { Article, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Mail, Heart, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  language: Language;
  articles: Article[];
  onArticleClick: (article: Article) => void;
  onOpenPrivacy: () => void;
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onOpenNewsletter: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  articles,
  onArticleClick,
  onOpenPrivacy,
  onOpenContact,
  onOpenAbout,
  onOpenNewsletter
}) => {
  const t = UI_TRANSLATIONS[language];
  const supportEmail = 'support@lifeinnewyork.blog';

  const foodArticle = articles.find(a => a.slug === 'carnegie-deli-return-pastrami-manhattan-renaissance') || articles[0];
  const secretsArticle = articles.find(a => a.slug === 'secrets-of-the-chrysler-building-cloud-club-m42') || articles[1];
  const realEstateArticle = articles.find(a => a.slug === 'brownstone-renaissance-bed-stuy-park-slope') || articles[2];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="w-full bg-[#1A1A1A] text-[#FDFCF9] pt-16 pb-12 border-t-2 border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer 3-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: About Us */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131]">
              {language === 'en' ? 'Editorial Purpose' : 'Finalità Editoriale'}
            </div>
            <h4 className="font-editorial-serif text-2xl font-bold tracking-tight text-white">
              {t.aboutUsTitle}
            </h4>
            <p className="font-editorial-body text-white/75 text-base leading-relaxed font-normal">
              {t.aboutUsText}
            </p>
            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={onOpenNewsletter}
                className="inline-flex items-center gap-2 bg-[#D23131] hover:bg-white hover:text-[#1A1A1A] text-white font-sans font-bold uppercase text-[11px] tracking-widest px-4 py-2 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.newsletterButton}</span>
              </button>
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 font-sans font-bold uppercase text-[11px] tracking-widest px-4 py-2 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t.contactUs}</span>
              </button>
            </div>
          </div>

          {/* Column 2: Contact Us & Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131]">
              {language === 'en' ? 'Direct Contacts' : 'Contatti Diretti'}
            </div>
            <h4 className="font-editorial-serif text-2xl font-bold tracking-tight text-white">
              {t.contactUs}
            </h4>
            <ul className="space-y-3 text-xs font-sans tracking-widest uppercase">
              <li>
                <button
                  type="button"
                  onClick={onOpenNewsletter}
                  className="text-white/80 hover:text-[#D23131] hover:underline transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{t.newsletterTitle}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-white/80 hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  {t.contactUsLink}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAbout}
                  className="text-white/80 hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  {t.aboutUsLink}
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${supportEmail}`}
                  className="text-white/90 hover:text-[#D23131] transition-colors lowercase font-mono tracking-normal font-medium inline-block"
                >
                  {supportEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured NYC Dispatches mini feed */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131]">
              {language === 'en' ? 'Featured Archive' : 'Archivio in Evidenza'}
            </div>
            <h4 className="font-editorial-serif text-xl font-bold tracking-tight text-white">
              {language === 'en' ? 'Essential NYC Dispatches' : 'Reportage Essenziali da New York'}
            </h4>

            <div className="space-y-3.5 divide-y divide-white/10">
              {foodArticle && (
                <div
                  onClick={() => onArticleClick(foodArticle)}
                  className="pt-2 first:pt-0 flex gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-12 shrink-0 bg-neutral-800 overflow-hidden border border-white/20">
                    <img
                      src={foodArticle.imageUrl}
                      alt={foodArticle.imageAlt[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-editorial-serif text-sm font-bold text-white/90 group-hover:text-[#D23131] transition-colors line-clamp-2">
                      {foodArticle.title[language]}
                    </p>
                  </div>
                </div>
              )}

              {secretsArticle && (
                <div
                  onClick={() => onArticleClick(secretsArticle)}
                  className="pt-3.5 flex gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-12 shrink-0 bg-neutral-800 overflow-hidden border border-white/20">
                    <img
                      src={secretsArticle.imageUrl}
                      alt={secretsArticle.imageAlt[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-editorial-serif text-sm font-bold text-white/90 group-hover:text-[#D23131] transition-colors line-clamp-2">
                      {secretsArticle.title[language]}
                    </p>
                  </div>
                </div>
              )}

              {realEstateArticle && (
                <div
                  onClick={() => onArticleClick(realEstateArticle)}
                  className="pt-3.5 flex gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-12 shrink-0 bg-neutral-800 overflow-hidden border border-white/20">
                    <img
                      src={realEstateArticle.imageUrl}
                      alt={realEstateArticle.imageAlt[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-editorial-serif text-sm font-bold text-white/90 group-hover:text-[#D23131] transition-colors line-clamp-2">
                      {realEstateArticle.title[language]}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Center Editorial Masthead in Footer */}
        <div className="text-center py-12">
          <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl italic font-bold tracking-tight text-white">
            {t.siteTitle}
          </h2>

          {/* Footer Horizontal Link Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs font-sans font-bold uppercase tracking-[0.2em] text-white/70">
            <button type="button" onClick={onOpenNewsletter} className="text-[#D23131] hover:text-white transition-colors cursor-pointer">
              {t.newsletterButton}
            </button>
            <span className="text-white/20 hidden sm:inline">•</span>
            <button type="button" onClick={onOpenAbout} className="hover:text-white transition-colors cursor-pointer">
              {t.aboutUsLink}
            </button>
            <span className="text-white/20 hidden sm:inline">•</span>
            <button type="button" onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">
              {t.workWithUsLink}
            </button>
            <span className="text-white/20 hidden sm:inline">•</span>
            <button type="button" onClick={onOpenContact} className="hover:text-[#D23131] transition-colors cursor-pointer">
              {t.siteForSale}
            </button>
            <span className="text-white/20 hidden sm:inline">•</span>
            <button type="button" onClick={onOpenPrivacy} className="hover:text-white transition-colors cursor-pointer">
              {t.privacyPolicy}
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 font-sans tracking-wider">
          <div>{t.copyright}</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white/70">
              {language === 'en' ? 'Crafted with' : 'Fatto con'} <Heart className="w-3.5 h-3.5 text-[#D23131] fill-[#D23131] inline" /> {language === 'en' ? 'for New York lovers' : 'per chi ama New York'}
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white transition-colors flex items-center gap-1 px-3 uppercase text-[11px] font-bold cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Top' : 'Inizio'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
