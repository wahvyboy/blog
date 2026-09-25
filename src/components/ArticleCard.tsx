import React from 'react';
import { Article, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Share2, Clock, MapPin, Sparkles, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface ArticleCardProps {
  article: Article;
  language: Language;
  onReadMore: (article: Article) => void;
  onShare: (article: Article) => void;
  index: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  language,
  onReadMore,
  onShare,
  index
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <motion.article
      id={`article-card-${article.slug}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.25), ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#FDFCF9] border-b border-[#1A1A1A] pb-12 pt-6 first:pt-0"
    >
      {/* Editorial Category Tag & Location */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-[11px] sm:text-xs font-sans font-bold tracking-[0.25em] text-[#D23131] uppercase hover:underline transition-all">
          {article.category[language]}
        </span>

        <div className="flex items-center gap-3">
          {article.location && (
            <span className="inline-flex items-center gap-1 text-[11px] font-sans tracking-wider uppercase text-[#1A1A1A]/70 bg-[#E5E1D8]/50 px-2 py-0.5 rounded-none font-semibold border border-[#E5E1D8]">
              <MapPin className="w-3 h-3 text-[#D23131]" />
              <span>{article.location[language]}</span>
            </span>
          )}

          {/* Quick Share Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onShare(article);
            }}
            className="p-1.5 text-[#1A1A1A]/60 hover:text-[#D23131] hover:bg-[#E5E1D8]/40 transition-colors cursor-pointer"
            title={t.shareArticle}
            aria-label={`Share ${article.title[language]}`}
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Title in Luxurious Editorial Serif */}
      <h2 className="mb-3">
        <button
          type="button"
          onClick={() => onReadMore(article)}
          className="text-left font-editorial-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] hover:text-[#D23131] transition-colors leading-[1.12] cursor-pointer"
        >
          {article.title[language]}
        </button>
      </h2>

      {/* Metadata Bar */}
      <div className="flex flex-wrap items-center text-xs text-[#1A1A1A]/70 gap-x-2.5 gap-y-1 mb-5 font-sans uppercase tracking-widest">
        <time dateTime="2026-09-23" className="font-semibold text-[#1A1A1A]">{article.date[language]}</time>
        <span className="text-[#1A1A1A]/30">/</span>
        <span>{t.by} <strong className="text-[#1A1A1A] font-bold">{article.author}</strong></span>
        {article.views && (
          <>
            <span className="text-[#1A1A1A]/30">/</span>
            <span className="inline-flex items-center gap-1 font-bold text-[#D23131]">
              <Eye className="w-3.5 h-3.5" />
              <span>{article.views} {language === 'en' ? 'VIEWS' : 'VISUALIZZAZIONI'}</span>
            </span>
          </>
        )}
        <span className="text-[#1A1A1A]/30">/</span>
        <span>{article.commentsCount} {t.comments}</span>
        <span className="hidden sm:inline text-[#1A1A1A]/30">/</span>
        <span className="hidden sm:inline-flex items-center gap-1 text-[#1A1A1A]/70">
          <Clock className="w-3 h-3 text-[#D23131]" />
          {article.readTime[language]}
        </span>
      </div>

      {/* Excerpt Body with Editorial Warmth */}
      <p className="font-editorial-body text-[#333333] text-lg sm:text-xl leading-relaxed mb-6 font-normal">
        {article.excerpt[language]}
      </p>

      {/* Action Row & Button */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          id={`btn-continue-${article.slug}`}
          type="button"
          onClick={() => onReadMore(article)}
          className="bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans text-xs sm:text-sm font-bold tracking-[0.2em] uppercase px-6 py-3 transition-all hover:translate-x-1 active:scale-98 shadow-xs inline-flex items-center gap-2 cursor-pointer"
        >
          <span>{t.continueReading}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => onShare(article)}
          className="text-xs font-sans font-bold tracking-widest uppercase text-[#1A1A1A]/70 hover:text-[#D23131] flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{t.shareArticle}</span>
        </button>
      </div>

      {/* Featured Photo in Editorial Frame */}
      <div
        onClick={() => onReadMore(article)}
        className="relative overflow-hidden border border-[#E5E1D8] cursor-pointer group bg-neutral-100 aspect-16/10 sm:aspect-21/10"
      >
        <img
          src={article.imageUrl}
          alt={article.imageAlt[language]}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102 filter contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
          <span className="text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-widest drop-shadow-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            {t.readArticle}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

