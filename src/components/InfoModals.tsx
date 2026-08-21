import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { X, CheckCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InfoModalsProps {
  language: Language;
  activeModal: 'about' | 'contact' | 'privacy' | null;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({
  language,
  activeModal,
  onClose
}) => {
  const t = UI_TRANSLATIONS[language];
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: 'General Inquiry' });

  if (!activeModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="bg-[#FDFCF9] max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#1A1A1A] relative max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-[#1A1A1A]/60 hover:text-[#D23131] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {activeModal === 'about' && (
            <div className="space-y-4">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131]">
                {language === 'en' ? 'Editorial House' : 'Casa Editrice'}
              </div>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                {t.aboutUsTitle}
              </h3>
              <p className="font-editorial-body text-[#333333] leading-relaxed text-base sm:text-lg">
                {t.aboutUsText}
              </p>
              <div className="bg-white p-5 border border-[#E5E1D8] space-y-2 text-xs sm:text-sm font-sans text-[#1A1A1A]/80">
                <p><strong>{language === 'en' ? 'Mission:' : 'Missione:'}</strong> {language === 'en' ? 'To connect curious minds and heartfelt dreamers with authentic Italian living, honest real estate advice, and unforgettable regional cuisine.' : 'Connettere appassionati e sognatori con l\'autenticità della vita italiana, consigli immobiliari trasparenti e la ricchezza gastronomica regionale.'}</p>
                <p><strong>{language === 'en' ? 'Headquarters:' : 'Sede:'}</strong> Rome & Milan, Italy</p>
                <p><strong>{language === 'en' ? 'Publication:' : 'Pubblicazione:'}</strong> Life in Italy Media Group</p>
              </div>
            </div>
          )}

          {activeModal === 'contact' && (
            <div className="space-y-4">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131]">
                {language === 'en' ? 'Direct Correspondance' : 'Corrispondenza Diretta'}
              </div>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                {t.contactUs} & {language === 'en' ? 'Collaborations' : 'Collaborazioni'}
              </h3>
              <p className="font-editorial-body text-[#4A4A4A] text-base">
                {language === 'en'
                  ? 'Reach out for real estate advertising, brand partnerships, guest articles, or site inquiries.'
                  : 'Scrivici per annunci immobiliari, collaborazioni con marchi, articoli sponsorizzati o richieste generali.'}
              </p>

              {formSent ? (
                <div className="bg-emerald-50 border border-emerald-300 p-6 text-center space-y-2">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-editorial-serif text-xl font-bold text-emerald-950">
                    {language === 'en' ? 'Message Sent Successfully!' : 'Messaggio Inviato con Successo!'}
                  </h4>
                  <p className="text-xs font-sans text-emerald-800">
                    {language === 'en' ? 'Grazie! Our Italian editorial team will reply within 24 hours.' : 'Grazie! La nostra redazione ti risponderà entro 24 ore.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
                  <div>
                    <label className="block text-xs font-sans font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Your Name' : 'Il tuo Nome'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-[#E5E1D8] focus:outline-none focus:border-[#1A1A1A] bg-white font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Your Email' : 'La tua Email'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-[#E5E1D8] focus:outline-none focus:border-[#1A1A1A] bg-white font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Subject' : 'Oggetto'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-[#E5E1D8] focus:outline-none focus:border-[#1A1A1A] bg-white font-sans"
                    >
                      <option>{language === 'en' ? 'Real Estate Ads Group' : 'Gruppo Annunci Immobiliari'}</option>
                      <option>{language === 'en' ? 'Work with Us / Brand Sponsor' : 'Lavora con Noi / Sponsor'}</option>
                      <option>{language === 'en' ? 'Website Inquiry' : 'Richiesta sul Sito'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Message' : 'Messaggio'}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-[#E5E1D8] focus:outline-none focus:border-[#1A1A1A] bg-white font-sans"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans font-bold uppercase text-xs tracking-[0.2em] py-3 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Send Message' : 'Invia Messaggio'}</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {activeModal === 'privacy' && (
            <div className="space-y-4">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131]">
                {language === 'en' ? 'GDPR Compliance' : 'Conformità GDPR'}
              </div>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                {t.privacyPolicy}
              </h3>
              <div className="font-editorial-body text-[#333333] text-base leading-relaxed space-y-3">
                <p>
                  {language === 'en'
                    ? 'Life in Italy Media Group is committed to protecting your privacy in full compliance with European GDPR standards. We do not sell personal data to third parties.'
                    : 'Life in Italy Media Group tutela la privacy dei propri lettori in piena conformità con le normative europee GDPR. Nessun dato viene ceduto a terzi.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'We store your preferred language (English/Italian) locally to ensure a consistent reading journey across sessions.'
                    : 'Memorizziamo localmente la preferenza linguistica per garantirti un\'esperienza di lettura fluida e personalizzata.'}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

