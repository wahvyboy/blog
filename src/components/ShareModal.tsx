import React, { useState } from 'react';
import { Article, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { X, Check, Copy, MessageCircle, Send, Mail, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article | null;
  language: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  article,
  language
}) => {
  const [copied, setCopied] = useState(false);
  const t = UI_TRANSLATIONS[language];

  if (!isOpen) return null;

  const currentUrl = article
    ? `${window.location.origin}${window.location.pathname}#article-${article.slug}`
    : window.location.href;

  const shareTitle = article ? article.title[language] : t.siteTitle;
  const shareSummary = article ? article.excerpt[language] : t.siteTagline;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`*${shareTitle}*\n${shareSummary}\n\n${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleTwitterShare = () => {
    const text = encodeURIComponent(`${shareTitle} - Life in New York`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const handleTelegramShare = () => {
    const text = encodeURIComponent(`${shareTitle}\n${currentUrl}`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${text}`, '_blank');
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Life in New York: ${shareTitle}`);
    const body = encodeURIComponent(`I thought you would love this story about New York City:\n\n${shareTitle}\n\n${currentUrl}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareSummary,
          url: currentUrl
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="bg-[#FDFCF9] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#1A1A1A] relative"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-[#1A1A1A]/60 hover:text-[#D23131] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-4 pr-6">
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#D23131] uppercase tracking-[0.25em] font-sans">
              <Share2 className="w-3.5 h-3.5" />
              <span>{t.shareArticle}</span>
            </div>
            <h3 className="font-editorial-serif text-2xl font-bold tracking-tight text-[#1A1A1A] mt-1.5 leading-snug">
              {shareTitle}
            </h3>
          </div>

          {/* Social Icons Grid */}
          <div className="grid grid-cols-3 gap-3 my-5">
            {/* WhatsApp */}
            <button
              type="button"
              onClick={handleWhatsAppShare}
              className="flex flex-col items-center justify-center gap-1.5 p-3 border border-[#E5E1D8] bg-white hover:border-[#1A1A1A] hover:bg-[#F4F1EA] transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs font-sans font-semibold text-[#1A1A1A]">WhatsApp</span>
            </button>

            {/* Telegram */}
            <button
              type="button"
              onClick={handleTelegramShare}
              className="flex flex-col items-center justify-center gap-1.5 p-3 border border-[#E5E1D8] bg-white hover:border-[#1A1A1A] hover:bg-[#F4F1EA] transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </div>
              <span className="text-xs font-sans font-semibold text-[#1A1A1A]">Telegram</span>
            </button>

            {/* X / Twitter */}
            <button
              type="button"
              onClick={handleTwitterShare}
              className="flex flex-col items-center justify-center gap-1.5 p-3 border border-[#E5E1D8] bg-white hover:border-[#1A1A1A] hover:bg-[#F4F1EA] transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="font-bold text-xs">𝕏</span>
              </div>
              <span className="text-xs font-sans font-semibold text-[#1A1A1A]">X</span>
            </button>

            {/* Facebook */}
            <button
              type="button"
              onClick={handleFacebookShare}
              className="flex flex-col items-center justify-center gap-1.5 p-3 border border-[#E5E1D8] bg-white hover:border-[#1A1A1A] hover:bg-[#F4F1EA] transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="font-bold text-sm">f</span>
              </div>
              <span className="text-xs font-sans font-semibold text-[#1A1A1A]">Facebook</span>
            </button>

            {/* Email */}
            <button
              type="button"
              onClick={handleEmailShare}
              className="flex flex-col items-center justify-center gap-1.5 p-3 border border-[#E5E1D8] bg-white hover:border-[#1A1A1A] hover:bg-[#F4F1EA] transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs font-sans font-semibold text-[#1A1A1A]">Email</span>
            </button>

            {/* Native Share */}
            <button
              type="button"
              onClick={handleNativeShare}
              className="flex flex-col items-center justify-center gap-1.5 p-3 border border-[#E5E1D8] bg-white hover:border-[#1A1A1A] hover:bg-[#F4F1EA] transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#D23131] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Share2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-sans font-semibold text-[#1A1A1A]">{language === 'en' ? 'More' : 'Altro'}</span>
            </button>
          </div>

          {/* Copy URL Input Box */}
          <div className="pt-2">
            <div className="flex items-center gap-2 bg-white p-1.5 border border-[#1A1A1A]">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent px-2 text-xs text-[#1A1A1A] font-mono focus:outline-none"
              />
              <button
                type="button"
                onClick={handleCopyLink}
                className="bg-[#1A1A1A] hover:bg-[#D23131] text-white text-[11px] font-sans font-bold uppercase tracking-widest px-3 py-2 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-300" />
                    <span>{t.linkCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copyLink}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

