import React, { useState, useEffect } from 'react';
import { Article, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { X, Share2, Volume2, VolumeX, Sparkles, MapPin, Clock, Calendar, ArrowLeft, Check, Heart, MessageSquare, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ArticleReaderModalProps {
  article: Article | null;
  language: Language;
  onClose: () => void;
  onShare: (article: Article) => void;
  relatedArticles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  language,
  onClose,
  onShare,
  relatedArticles,
  onSelectArticle
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [likesCount, setLikesCount] = useState(12);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [userComments, setUserComments] = useState<Array<{ name: string; text: string; date: string }>>([
    {
      name: language === 'en' ? 'Sarah Jenkins' : 'Marco Moretti',
      text: language === 'en'
        ? 'Such a sharp and vivid piece of NYC reporting! Captures the true grit and pulse of the neighborhood.'
        : 'Un reportage vivido e autentico. Racconta perfettamente il battito e l\'energia indomabile di New York.',
      date: '2 days ago'
    }
  ]);

  const t = UI_TRANSLATIONS[language];

  // Stop audio on close or article change
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [article]);

  if (!article) return null;

  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert(language === 'en' ? 'Audio speech synthesis is not supported on this browser.' : 'La sintesi vocale non è supportata da questo browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      const textToRead = `${article.title[language]}. ${article.excerpt[language]}. ${article.fullStory[language].join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = language === 'en' ? 'en-US' : 'it-IT';
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#article-${article.slug}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount(prev => prev + 1);
      setHasLiked(true);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setUserComments(prev => [
      ...prev,
      {
        name: language === 'en' ? 'Reader Friend' : 'Lettore Appassionato',
        text: commentText.trim(),
        date: language === 'en' ? 'Just now' : 'Adesso'
      }
    ]);
    setCommentText('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/80 backdrop-blur-xs flex justify-center p-0 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FDFCF9] w-full max-w-4xl min-h-screen sm:min-h-0 border border-[#1A1A1A] shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-30 bg-[#FDFCF9]/95 backdrop-blur-md border-b border-[#1A1A1A] px-4 sm:px-6 py-3 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#D23131] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.closeModal}</span>
            </button>

            <div className="flex items-center gap-2">
              {/* Text to Speech Button */}
              <button
                type="button"
                onClick={handleToggleAudio}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] animate-pulse'
                    : 'bg-white hover:bg-[#FDFCF9] text-[#1A1A1A] border-[#E5E1D8]'
                }`}
                title={isPlayingAudio ? t.audioStopLabel : t.audioListenLabel}
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-amber-300" />
                    <span>{t.audioStopLabel}</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    <span>{t.audioListenLabel}</span>
                  </>
                )}
              </button>

              {/* Direct Copy Link Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#FDFCF9] text-[#1A1A1A] border border-[#E5E1D8] text-xs font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer"
                title="Copy shareable link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#D23131]" />
                    <span className="text-[#D23131]">{t.linkCopied}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    <span className="hidden sm:inline">{t.copyLink}</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-1 text-[#1A1A1A] hover:text-[#D23131] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Article Full Scroll Body */}
          <div className="p-6 sm:p-10 md:p-12 space-y-8">
            {/* Category & Region */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E1D8] pb-3">
              <span className="font-sans font-bold tracking-[0.25em] text-xs sm:text-sm text-[#D23131] uppercase">
                {article.category[language]}
              </span>

              {article.location && (
                <span className="inline-flex items-center gap-1 text-[11px] font-sans tracking-wider uppercase text-[#1A1A1A]/70 bg-white border border-[#E5E1D8] px-2.5 py-0.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#D23131]" />
                  <span>{article.location[language]}</span>
                </span>
              )}
            </div>

            {/* Article Headline */}
            <h1 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
              {article.title[language]}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#1A1A1A]/70 border-y border-[#1A1A1A] py-3 font-sans tracking-widest uppercase">
              <span className="flex items-center gap-1.5 text-[#1A1A1A] font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#D23131]" />
                {article.date[language]}
              </span>
              <span>/</span>
              <span>{t.by} <strong className="text-[#1A1A1A] font-bold">{article.author}</strong></span>
              {article.views && (
                <>
                  <span>/</span>
                  <span className="flex items-center gap-1.5 font-medium text-[#1A1A1A]/85">
                    <Eye className="w-3.5 h-3.5 text-[#D23131]" />
                    <span>{article.views} {t.views || 'views'}</span>
                  </span>
                </>
              )}
              <span>/</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D23131]" />
                {article.readTime[language]}
              </span>
            </div>

            {/* Main Featured Photo */}
            <div className="relative overflow-hidden bg-neutral-100 border border-[#E5E1D8] aspect-16/9">
              <img
                src={article.imageUrl}
                alt={article.imageAlt[language]}
                className="w-full h-full object-cover filter contrast-[1.02]"
              />
            </div>

            {/* Emotional Highlight Callout */}
            <div className="bg-[#F4F1EA] border-l-3 border-[#D23131] p-5 sm:p-7 my-6">
              <div className="flex items-center gap-2 text-[#D23131] font-sans font-bold text-xs uppercase tracking-[0.2em] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D23131]" />
                <span>{t.emotionalHighlightLabel}</span>
              </div>
              <p className="text-[#1A1A1A] font-serif-italic italic text-xl sm:text-2xl leading-relaxed">
                "{article.emotionalHighlight[language]}"
              </p>
            </div>

            {/* AEO / GEO Structured Key Insights Box */}
            <div className="bg-white border border-[#1A1A1A] p-6 sm:p-7">
              <h4 className="font-editorial-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D23131]" />
                {t.keyTakeawaysLabel}
              </h4>
              <ul className="space-y-3 font-editorial-body text-base sm:text-lg text-[#333333]">
                {article.keyTakeaways[language].map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#D23131] shrink-0 mt-1" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Story Paragraphs */}
            <div className="prose prose-neutral max-w-none text-[#1A1A1A] font-editorial-body text-lg sm:text-xl leading-relaxed space-y-6">
              {article.fullStory[language].map((para, index) => (
                <p key={index} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Interactive Love / Share Toolbar */}
            <div className="border-t border-b border-[#1A1A1A] py-6 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 border text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  hasLiked
                    ? 'bg-rose-50 text-rose-700 border-rose-300'
                    : 'bg-white hover:bg-[#FDFCF9] text-[#1A1A1A] border-[#E5E1D8]'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-600 text-rose-600' : 'text-[#1A1A1A]'}`} />
                <span>{likesCount} {language === 'en' ? 'Loved this story' : 'Hanno amato questa storia'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onShare(article)}
                  className="bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans font-bold uppercase tracking-[0.2em] text-xs px-5 py-2.5 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{t.shareArticle}</span>
                </button>
              </div>
            </div>

            {/* Reader Comments Section */}
            <div className="space-y-4 pt-2">
              <h4 className="font-editorial-serif text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#D23131]" />
                <span>{language === 'en' ? 'Community Thoughts' : 'Commenti dei Lettori'}</span>
              </h4>

              <form onSubmit={handleAddComment} className="space-y-3">
                <textarea
                  rows={2}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder={language === 'en' ? 'Share your thoughts about this story...' : 'Condividi un pensiero su questa storia...'}
                  className="w-full p-3 text-sm font-sans border border-[#E5E1D8] focus:outline-none focus:border-[#1A1A1A] bg-white"
                />
                <button
                  type="submit"
                  className="bg-[#1A1A1A] hover:bg-[#D23131] text-white text-xs font-sans font-bold uppercase tracking-widest px-4 py-2 transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Post Comment' : 'Invia Commento'}
                </button>
              </form>

              <div className="space-y-3 pt-2">
                {userComments.map((c, i) => (
                  <div key={i} className="bg-white p-4 border border-[#E5E1D8]">
                    <div className="flex items-center justify-between text-xs text-[#1A1A1A]/60 font-sans uppercase tracking-wider mb-1">
                      <strong className="text-[#1A1A1A] font-bold">{c.name}</strong>
                      <span>{c.date}</span>
                    </div>
                    <p className="font-editorial-body text-base text-[#333333]">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Stories */}
            {relatedArticles.length > 0 && (
              <div className="pt-6 border-t border-[#1A1A1A]">
                <h4 className="font-editorial-serif text-2xl font-bold tracking-tight text-[#1A1A1A] mb-4">
                  {t.relatedStories}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedArticles.slice(0, 2).map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onSelectArticle(rel)}
                      className="group cursor-pointer bg-white border border-[#E5E1D8] p-3.5 hover:border-[#1A1A1A] transition-all flex gap-3.5"
                    >
                      <div className="w-20 h-20 shrink-0 overflow-hidden bg-neutral-200 border border-[#E5E1D8]">
                        <img
                          src={rel.imageUrl}
                          alt={rel.imageAlt[language]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-[#D23131] uppercase font-sans tracking-widest">
                          {rel.category[language]}
                        </span>
                        <h5 className="font-editorial-serif text-sm sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#D23131] line-clamp-2 mt-0.5">
                          {rel.title[language]}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
