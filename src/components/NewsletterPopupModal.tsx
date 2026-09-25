import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { X, Mail, CheckCircle, Send, ExternalLink, BookOpen, Home, Utensils, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NewsletterPopupModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface InterestOption {
  id: string;
  labelEn: string;
  labelIt: string;
  icon: React.ComponentType<{ className?: string }>;
}

const INTERESTS: InterestOption[] = [
  { id: 'real-estate', labelEn: 'Historic Brownstones & Five Borough Rentals', labelIt: 'Brownstone Storiche & Affitti nei 5 Distretti', icon: Home },
  { id: 'food-wine', labelEn: 'Classic Delis, Bodegas & Michelin Dining', labelIt: 'Deli Storici, Bodega & Ristoranti Stellati', icon: Utensils },
  { id: 'transit-lore', labelEn: 'Untapped Lore & Subway Secrets', labelIt: 'Segreti Nascosti & Misteri della Metro', icon: Compass },
  { id: 'culture-arts', labelEn: 'Broadway, Jazz & Neighborhood Arts', labelIt: 'Broadway, Jazz & Arte di Quartiere', icon: BookOpen }
];

export const NewsletterPopupModal: React.FC<NewsletterPopupModalProps> = ({
  language,
  isOpen,
  onClose
}) => {
  const t = UI_TRANSLATIONS[language];
  const supportEmail = 'support@lifeinnewyork.blog';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['real-estate', 'food-wine', 'transit-lore', 'culture-arts']);
  const [messageTemplate, setMessageTemplate] = useState('');
  const [isCustomMessageEdited, setIsCustomMessageEdited] = useState(false);
  const [activePreset, setActivePreset] = useState<string>('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate automated template message based on current selections
  const generateTemplate = (userName: string, interests: string[], lang: Language): string => {
    const interestNames = interests.map(id => {
      const opt = INTERESTS.find(i => i.id === id);
      return opt ? (lang === 'en' ? opt.labelEn : opt.labelIt) : id;
    });

    const interestsListStr = interestNames.length > 0
      ? interestNames.map(item => `  • ${item}`).join('\n')
      : (lang === 'en' ? '  • All Weekly Dispatches' : '  • Tutti i Dispacci Settimanali');

    const displayName = userName.trim() || (lang === 'en' ? '[Subscriber Name]' : '[Nome Iscritto]');

    if (lang === 'en') {
      return `Dear Life in New York Editorial Team,

I would like to subscribe to the Life in New York Weekly Dispatches. Please route breaking city investigations, dining reviews, real estate dispatches, and five-borough culture to my email.

Selected Areas of Interest:
${interestsListStr}

Subscriber Details:
Name: ${displayName}
Email: ${email.trim() || '[subscriber.email@example.com]'}
Language Preference: English (EN)
Requested Dispatches: Weekly NYC Heritage & Urban Gazette

Warm regards,
${displayName}`;
    } else {
      return `Gentile Redazione di Life in New York,

Desidero iscrivermi ai Dispacci Settimanali di Life in New York. Vi prego di inviarmi i reportage di cronaca, le recensioni gastronomiche, le guide immobiliari e la cultura dei cinque distretti.

Aree di Interesse Selezionate:
${interestsListStr}

Dati Iscritto:
Nome: ${displayName}
Email: ${email.trim() || '[tua.email@esempio.it]'}
Preferenza Lingua: Italiano (IT)
Dispacci Richiesti: Gazzetta Settimanale dell'Autenticità Newyorkese

Cordiali saluti,
${displayName}`;
    }
  };

  // Sync auto-fill template whenever name, interests, or language change (unless manually typed)
  useEffect(() => {
    if (!isCustomMessageEdited) {
      setMessageTemplate(generateTemplate(name, selectedInterests, language));
    }
  }, [name, email, selectedInterests, language, isCustomMessageEdited]);

  const toggleInterest = (id: string) => {
    setIsCustomMessageEdited(false);
    setSelectedInterests(prev => {
      const next = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      return next;
    });
  };

  const applyPreset = (preset: 'real-estate' | 'food' | 'travel' | 'all') => {
    setActivePreset(preset);
    setIsCustomMessageEdited(false);
    if (preset === 'real-estate') {
      setSelectedInterests(['real-estate']);
    } else if (preset === 'food') {
      setSelectedInterests(['food-wine']);
    } else if (preset === 'travel') {
      setSelectedInterests(['transit-lore', 'culture-arts']);
    } else {
      setSelectedInterests(['real-estate', 'food-wine', 'transit-lore', 'culture-arts']);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API dispatch to support@lifeinnewyork.blog
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Mark as submitted in localStorage so it doesn't pop up again automatically
      localStorage.setItem('lifeinnewyork_newsletter_subscribed', 'true');
    }, 900);
  };

  const handleMailtoDispatch = () => {
    const subject = encodeURIComponent(`Newsletter Subscription: ${name.trim() || 'New Reader'} [${email.trim()}]`);
    const body = encodeURIComponent(messageTemplate);
    window.open(`mailto:${supportEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#1A1A1A]/85 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="bg-[#FDFCF9] max-w-2xl w-full my-auto shadow-2xl border-2 border-[#1A1A1A] relative max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Top Red Accent Bar */}
          <div className="h-1.5 w-full bg-[#D23131]" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close newsletter popup"
            className="absolute top-4 right-4 z-10 p-1.5 text-[#1A1A1A]/70 hover:text-[#D23131] hover:bg-black/5 transition-colors cursor-pointer border border-transparent hover:border-[#1A1A1A]/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Content Container */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            {!isSubmitted ? (
              <>
                {/* Editorial Header */}
                <div className="text-center max-w-lg mx-auto space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1A1A] text-white text-[10px] font-sans font-bold uppercase tracking-[0.25em]">
                    <Mail className="w-3 h-3 text-[#D23131]" />
                    <span>{language === 'en' ? 'Official Editorial Gazette' : 'Gazzetta Editoriale Ufficiale'}</span>
                  </div>

                  <h2 className="font-editorial-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
                    {t.newsletterTitle}
                  </h2>

                  <p className="font-editorial-body text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
                    {t.newsletterSubtitle}
                  </p>

                  <div className="text-[11px] font-mono text-[#D23131] font-semibold">
                    {t.contactSendTo} <span className="underline decoration-dotted">{supportEmail}</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                        {language === 'en' ? 'Full Name' : 'Nome Completo'} <span className="text-[#D23131]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setIsCustomMessageEdited(false);
                        }}
                        placeholder={t.newsletterNamePlaceholder}
                        className="w-full px-3 py-2 text-sm bg-white border border-[#1A1A1A]/30 focus:border-[#1A1A1A] focus:outline-none font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                        {language === 'en' ? 'Email Address' : 'Indirizzo Email'} <span className="text-[#D23131]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setIsCustomMessageEdited(false);
                        }}
                        placeholder={t.newsletterEmailPlaceholder}
                        className="w-full px-3 py-2 text-sm bg-white border border-[#1A1A1A]/30 focus:border-[#1A1A1A] focus:outline-none font-sans"
                      />
                    </div>
                  </div>

                  {/* Quick Preset Buttons */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#1A1A1A]/70 mb-1.5">
                      {t.newsletterQuickPresets}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => applyPreset('all')}
                        className={`text-[11px] font-sans font-bold px-3 py-1 border transition-colors cursor-pointer ${
                          activePreset === 'all'
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                            : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                        }`}
                      >
                        {t.presetAll}
                      </button>
                      <button
                        type="button"
                        onClick={() => applyPreset('real-estate')}
                        className={`text-[11px] font-sans font-bold px-3 py-1 border transition-colors cursor-pointer ${
                          activePreset === 'real-estate'
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                            : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                        }`}
                      >
                        {t.presetRealEstate}
                      </button>
                      <button
                        type="button"
                        onClick={() => applyPreset('food')}
                        className={`text-[11px] font-sans font-bold px-3 py-1 border transition-colors cursor-pointer ${
                          activePreset === 'food'
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                            : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                        }`}
                      >
                        {t.presetFoodWine}
                      </button>
                      <button
                        type="button"
                        onClick={() => applyPreset('travel')}
                        className={`text-[11px] font-sans font-bold px-3 py-1 border transition-colors cursor-pointer ${
                          activePreset === 'travel'
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                            : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                        }`}
                      >
                        {t.presetTravelCulture}
                      </button>
                    </div>
                  </div>

                  {/* Topics of Interest Checkboxes */}
                  <div>
                    <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                      {t.newsletterTopicsLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {INTERESTS.map((interest) => {
                        const isSelected = selectedInterests.includes(interest.id);
                        const IconComponent = interest.icon;
                        return (
                          <button
                            key={interest.id}
                            type="button"
                            onClick={() => toggleInterest(interest.id)}
                            className={`flex items-center gap-2.5 p-2.5 text-left border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-white border-[#1A1A1A] shadow-xs'
                                : 'bg-neutral-50/50 border-[#E5E1D8] text-[#1A1A1A]/60 hover:border-[#1A1A1A]/40'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-none border flex items-center justify-center text-white shrink-0 ${
                                isSelected ? 'bg-[#D23131] border-[#D23131]' : 'border-[#1A1A1A]/40 bg-white'
                              }`}
                            >
                              {isSelected && <span className="text-[10px] font-bold leading-none">✓</span>}
                            </div>
                            <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#D23131]' : 'text-[#1A1A1A]/40'}`} />
                            <span className="text-xs font-sans font-medium text-[#1A1A1A]">
                              {language === 'en' ? interest.labelEn : interest.labelIt}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit and Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans font-bold uppercase text-xs tracking-[0.2em] py-3.5 px-6 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? (language === 'en' ? 'Subscribing...' : 'Iscrizione in corso...') : t.newsletterSubscribe}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleMailtoDispatch}
                      className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-[#1A1A1A] border border-[#1A1A1A] font-sans font-bold uppercase text-xs tracking-wider py-3.5 px-4 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      title={language === 'en' ? 'Open in your default email client with a pre-filled draft' : 'Apri nella tua app email con una bozza precompilata'}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Email Us' : 'Scrivici via Email'}</span>
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success Confirmation View */
              <div className="py-8 px-4 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9 text-emerald-700" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-editorial-serif text-3xl font-bold text-[#1A1A1A]">
                    {t.newsletterSubscribed}
                  </h3>
                  <p className="font-editorial-body text-[#4A4A4A] text-base max-w-md mx-auto">
                    {language === 'en'
                      ? 'You are now subscribed to Life in New York dispatches. We look forward to delivering the pulse of the five boroughs straight to your inbox.'
                      : 'La tua iscrizione ai dispacci di Life in New York è confermata. Riceverai presto le storie più autentiche dei cinque distretti nella tua casella di posta.'}
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans font-bold uppercase text-xs tracking-widest px-8 py-3 transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Continue Reading' : 'Continua a Leggere'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
