import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Article, Language, BrandAd } from './types';
import { ARTICLES_DATA } from './data/articles';
import { UI_TRANSLATIONS } from './data/translations';
import { Header } from './components/Header';
import { NavigationMenu } from './components/NavigationMenu';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { DestinationsSidebar } from './components/DestinationsSidebar';
import { BrandAdScrollShowcase } from './components/BrandAdScrollShowcase';
import { ShareModal } from './components/ShareModal';
import { Footer } from './components/Footer';
import { CookieBadge } from './components/CookieBadge';
import { SeoStructuredData } from './components/SeoStructuredData';
import { InfoModals } from './components/InfoModals';
import { NewsletterPopupModal } from './components/NewsletterPopupModal';
import { Compass, Search, Filter, RefreshCw, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('lifeinnewyork_lang');
    return saved === 'it' ? 'it' : 'en';
  });

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeCategoryKey, setActiveCategoryKey] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [appliedSearch, setAppliedSearch] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [shareModalArticle, setShareModalArticle] = useState<Article | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState<boolean>(false);
  const [activeInfoModal, setActiveInfoModal] = useState<'about' | 'contact' | 'privacy' | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const t = UI_TRANSLATIONS[language];

  // Save language preference
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('lifeinnewyork_lang', lang);
  };

  // Automatic Newsletter Popup timer (pops up after ~3.5 seconds on visit)
  useEffect(() => {
    const alreadySubscribed = localStorage.getItem('lifeinnewyork_newsletter_subscribed');
    const dismissedThisSession = sessionStorage.getItem('lifeinnewyork_newsletter_seen');

    if (!alreadySubscribed && !dismissedThisSession) {
      const timer = setTimeout(() => {
        setIsNewsletterOpen(true);
        sessionStorage.setItem('lifeinnewyork_newsletter_seen', 'true');
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  // Check URL hash on load for deep linking (e.g. #article-beaches-on-lake-bolsena)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#article-')) {
        const slug = hash.replace('#article-', '');
        const found = ARTICLES_DATA.find((a) => a.slug === slug);
        if (found) {
          setActiveArticle(found);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when article modal opens/closes
  const handleOpenArticle = (article: Article) => {
    setActiveArticle(article);
    window.location.hash = `article-${article.slug}`;
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    if (window.location.hash.startsWith('#article-')) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  const handleOpenShare = (article: Article) => {
    setShareModalArticle(article);
    setIsShareModalOpen(true);
  };

  const handleShareSite = () => {
    setShareModalArticle(null);
    setIsShareModalOpen(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSearch(searchQuery.trim());
  };

  const handleClearFilters = () => {
    setActiveCategoryKey(null);
    setSearchQuery('');
    setAppliedSearch('');
  };

  // Filtered articles for the Recent Posts column
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      // Exclude sidebar highlights from the primary list unless filtered
      const matchesHighlight = activeCategoryKey ? true : !article.isSidebarHighlight;

      // Category matching
      const matchesCat = activeCategoryKey ? article.categoryKey === activeCategoryKey : true;

      // Search matching
      const query = appliedSearch.toLowerCase();
      const matchesSearch = query
        ? article.title.en.toLowerCase().includes(query) ||
          article.title.it.toLowerCase().includes(query) ||
          article.excerpt.en.toLowerCase().includes(query) ||
          article.excerpt.it.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query))
        : true;

      return matchesHighlight && matchesCat && matchesSearch;
    });
  }, [activeCategoryKey, appliedSearch]);

  const relatedArticles = useMemo(() => {
    if (!activeArticle) return [];
    return ARTICLES_DATA.filter((a) => a.id !== activeArticle.id);
  }, [activeArticle]);

  return (
    <div className="min-h-screen bg-[#FDFCF9] flex flex-col font-sans text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white">
      {/* SEO, AEO & GEO Structured Data Injector */}
      <SeoStructuredData language={language} currentArticle={activeArticle} />

      {/* Main Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onSearchClick={() => {
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }}
        onShareSite={handleShareSite}
        activeCategoryKey={activeCategoryKey}
        onSelectCategory={(cat) => {
          setActiveCategoryKey(cat);
          setAppliedSearch('');
        }}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
      />

      {/* Dropdown Navigation Menu */}
      <NavigationMenu
        language={language}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectCategory={(cat) => {
          setActiveCategoryKey(cat);
          setAppliedSearch('');
        }}
        activeCategoryKey={activeCategoryKey}
      />

      {/* Primary Page Layout */}
      <main id="main-content" className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-8 pb-12">
        {/* Active Filter Bar (if searching or filtering category) */}
        {(activeCategoryKey || appliedSearch) && (
          <div className="mb-8 p-4 bg-white flex flex-wrap items-center justify-between gap-3 border border-[#1A1A1A]">
            <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-[#1A1A1A]">
              <Filter className="w-3.5 h-3.5 text-[#D23131]" />
              <span>
                {activeCategoryKey ? `Category: ${activeCategoryKey.toUpperCase()}` : ''}
                {appliedSearch ? ` Search: "${appliedSearch}"` : ''}
              </span>
              <span className="text-[#1A1A1A]/60 font-mono text-xs">({filteredArticles.length} results)</span>
            </div>

            <button
              type="button"
              onClick={handleClearFilters}
              className="text-xs font-sans font-bold uppercase tracking-widest text-[#D23131] hover:underline cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{t.clearFilter}</span>
            </button>
          </div>
        )}

        {/* 2-Column Editorial Grid (Main Stream on Left + Destinations Sidebar on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Recent Posts Main Stream */}
          <section className="lg:col-span-8 w-full" aria-label="Recent Posts Feed">
            {/* Section Header with Refined Editorial Divider */}
            <div className="border-b border-[#1A1A1A] pb-3 mb-8 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131] block mb-1">
                  {language === 'en' ? 'Dispatches & Stories' : 'Dispacci e Reportage'}
                </span>
                <h2 className="font-editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                  {activeCategoryKey ? activeCategoryKey.replace('-', ' ') : t.recentPosts}
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[#1A1A1A]/60 uppercase tracking-widest hidden sm:inline">
                {language === 'en' ? 'Edition 2026' : 'Edizione 2026'}
              </span>
            </div>

            {/* Articles Stream */}
            {filteredArticles.length > 0 ? (
              <div className="space-y-8">
                {filteredArticles.map((article, idx) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    language={language}
                    onReadMore={handleOpenArticle}
                    onShare={handleOpenShare}
                    index={idx}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-4 bg-white border border-[#E5E1D8]">
                <Compass className="w-10 h-10 text-[#D23131] mx-auto mb-3" />
                <h3 className="font-editorial-serif text-2xl font-bold text-[#1A1A1A] mb-2">
                  {language === 'en' ? 'No Articles Found' : 'Nessun Articolo Trovato'}
                </h3>
                <p className="font-editorial-body text-[#4A4A4A] text-base max-w-md mx-auto mb-6">{t.noResults}</p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans font-bold uppercase text-xs tracking-widest px-6 py-3 transition-colors cursor-pointer"
                >
                  {t.clearFilter}
                </button>
              </div>
            )}
          </section>

          {/* Right Column: Sidebar (Search, Italian Destinations, Italian Fashion, Pagination) */}
          <section className="lg:col-span-4 w-full" aria-label="Sidebar Widgets">
            <DestinationsSidebar
              language={language}
              articles={ARTICLES_DATA}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              onArticleClick={handleOpenArticle}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </section>
        </div>
      </main>

      {/* Big Brand Ad Scroll Animation Section (Placed right before the footer as requested) */}
      <BrandAdScrollShowcase
        language={language}
        onBrandClick={(brand) => {
          alert(
            language === 'en'
              ? `Exploring ${brand.name} official New York collection & flagship archives.`
              : `Apertura archivio e vetrina ufficiale di ${brand.name} a New York.`
          );
        }}
      />

      {/* Dark Footer */}
      <Footer
        language={language}
        articles={ARTICLES_DATA}
        onArticleClick={handleOpenArticle}
        onOpenAbout={() => setActiveInfoModal('about')}
        onOpenContact={() => setActiveInfoModal('contact')}
        onOpenPrivacy={() => setActiveInfoModal('privacy')}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
      />

      {/* Full Article Reader Modal (Immersive reading + TTS + Social Share) */}
      <ArticleReaderModal
        article={activeArticle}
        language={language}
        onClose={handleCloseArticle}
        onShare={handleOpenShare}
        relatedArticles={relatedArticles}
        onSelectArticle={handleOpenArticle}
      />

      {/* Social Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        article={shareModalArticle}
        language={language}
      />

      {/* Newsletter Popup Modal */}
      <NewsletterPopupModal
        language={language}
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

      {/* Info Modals (About Us, Contact Us, Privacy Policy) */}
      <InfoModals
        language={language}
        activeModal={activeInfoModal}
        onClose={() => setActiveInfoModal(null)}
      />

      {/* Floating Privacy/Cookie Badge (matching screenshot bottom-left) */}
      <CookieBadge language={language} />
    </div>
  );
}
