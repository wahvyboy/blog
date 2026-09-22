import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { X, CheckCircle, Send, ExternalLink, Mail, Building, Newspaper, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InfoModalsProps {
  language: Language;
  activeModal: 'about' | 'contact' | 'privacy' | null;
  onClose: () => void;
}

interface InquiryDepartment {
  id: string;
  labelEn: string;
  labelIt: string;
}

const INQUIRY_DEPARTMENTS: InquiryDepartment[] = [
  {
    id: 'news-tips',
    labelEn: 'News Tips, Leaks & Local Reporting',
    labelIt: 'Segnalazioni Notizie & Cronaca'
  },
  {
    id: 'real-estate',
    labelEn: 'Brownstones & Real Estate Listings',
    labelIt: 'Brownstone & Annunci Immobiliari'
  },
  {
    id: 'sponsorship',
    labelEn: 'Brand Sponsorships & Advertising',
    labelIt: 'Pubblicità & Sponsorizzazioni'
  },
  {
    id: 'editorial',
    labelEn: 'Story Pitches & Guest Writers',
    labelIt: 'Proposte Articoli & Autori Ospiti'
  },
  {
    id: 'general',
    labelEn: 'General Feedback & Support',
    labelIt: 'Feedback Generale & Assistenza'
  }
];

export const InfoModals: React.FC<InfoModalsProps> = ({
  language,
  activeModal,
  onClose
}) => {
  const t = UI_TRANSLATIONS[language];
  const supportEmail = 'support@lifeinnewyork.blog';

  const [formSent, setFormSent] = useState(false);
  const [selectedDeptId, setSelectedDeptId] = useState<string>('news-tips');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (!activeModal) return null;

  // Compiles the structured templated email behind the scenes (never shown on website)
  const compileEmailDraft = () => {
    const dept = INQUIRY_DEPARTMENTS.find(d => d.id === selectedDeptId) || INQUIRY_DEPARTMENTS[0];
    const deptLabel = language === 'en' ? dept.labelEn : dept.labelIt;
    const senderName = formData.name.trim() || (language === 'en' ? 'Reader' : 'Lettore');
    const senderEmail = formData.email.trim() || 'reader@example.com';
    const timestamp = new Date().toLocaleString();

    const subject = `[Life in New York] ${deptLabel} - from ${senderName}`;
    
    let body = '';
    if (language === 'en') {
      body = `To: Life in New York Editorial Desk <${supportEmail}>
From: ${senderName} <${senderEmail}>
Date: ${timestamp}
Department: ${deptLabel}
Reference Domain: https://lifeinnewyork.blog

--- INQUIRY DETAILS ---
${formData.message.trim() || '(No additional message provided)'}

---
Sent via Life in New York Official Reader Dispatch
https://lifeinnewyork.blog`;
    } else {
      body = `A: Redazione Life in New York <${supportEmail}>
Da: ${senderName} <${senderEmail}>
Data: ${timestamp}
Dipartimento: ${deptLabel}
Dominio: https://lifeinnewyork.blog

--- DETTAGLI RICHIESTA ---
${formData.message.trim() || '(Nessun messaggio aggiuntivo inserito)'}

---
Inviato tramite il portale ufficiale di Life in New York
https://lifeinnewyork.blog`;
    }

    return { subject, body };
  };

  const dispatchEmailClient = () => {
    const { subject, body } = compileEmailDraft();
    const mailtoUrl = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with prefilled templated email
    dispatchEmailClient();
    setFormSent(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#1A1A1A]/85 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="bg-[#FDFCF9] max-w-2xl w-full my-auto shadow-2xl border-2 border-[#1A1A1A] relative max-h-[92vh] overflow-y-auto flex flex-col"
        >
          {/* Top Red NYC Broadsheet Accent Bar */}
          <div className="h-1.5 w-full bg-[#D23131]" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 p-1.5 text-[#1A1A1A]/60 hover:text-[#D23131] hover:bg-black/5 transition-colors cursor-pointer border border-transparent hover:border-[#1A1A1A]/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 space-y-6">
            {activeModal === 'about' && (
              <div className="space-y-5">
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131]">
                  {language === 'en' ? 'Editorial Newsroom' : 'Redazione Giornalistica'}
                </div>
                <h3 className="font-editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                  {t.aboutUsTitle}
                </h3>
                <p className="font-editorial-body text-[#333333] leading-relaxed text-base sm:text-lg">
                  {t.aboutUsText}
                </p>
                <div className="bg-white p-5 border border-[#E5E1D8] space-y-2.5 text-xs sm:text-sm font-sans text-[#1A1A1A]/85 shadow-xs">
                  <p><strong>{language === 'en' ? 'Mission:' : 'Missione:'}</strong> {language === 'en' ? 'Independent, fact-checked reporting for New Yorkers across all five boroughs. We champion neighborhood voices, uncover untold urban history, and spotlight culinary and architectural excellence.' : 'Giornalismo indipendente e verificato per i residenti di tutti i cinque distretti di New York. Diamo voce ai quartieri e raccontiamo la storia urbana e gastronomica della metropoli.'}</p>
                  <p><strong>{language === 'en' ? 'Borough Desks:' : 'Sedi Operative:'}</strong> Manhattan, Brooklyn, Queens, The Bronx, Staten Island</p>
                  <p><strong>{language === 'en' ? 'Publication Domain:' : 'Dominio Ufficiale:'}</strong> <span className="font-mono text-[#D23131] font-bold">lifeinnewyork.blog</span></p>
                  <p><strong>{language === 'en' ? 'Desk Direct Contact:' : 'Email Redazione:'}</strong> <a href={`mailto:${supportEmail}`} className="text-[#D23131] font-mono hover:underline">{supportEmail}</a></p>
                </div>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-4">
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131]">
                  {language === 'en' ? 'Editorial Dispatch' : 'Corrispondenza Redazionale'}
                </div>
                <div>
                  <h3 className="font-editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                    {t.contactUs}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-mono text-[#D23131]">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{t.contactSendTo} <strong>{supportEmail}</strong></span>
                  </div>
                </div>

                <p className="font-editorial-body text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
                  {language === 'en'
                    ? 'Submit news tips, real estate listings, brand collaborations, or story pitches directly to our editors. Fill out your details below and submit to open your ready-to-send draft in your email app.'
                    : 'Invia segnalazioni di cronaca, annunci di brownstone, collaborazioni o proposte di reportage ai nostri redattori. Compila il modulo per generare automaticamente il messaggio pronto nel tuo client email.'}
                </p>

                {formSent ? (
                  <div className="bg-emerald-50 border border-emerald-400 p-6 text-center space-y-4 shadow-xs">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="font-editorial-serif text-2xl font-bold text-emerald-950">
                      {language === 'en' ? 'Email Client Opened!' : 'Client Email Aperto!'}
                    </h4>
                    <p className="text-xs font-sans text-emerald-800 leading-relaxed max-w-md mx-auto">
                      {language === 'en'
                        ? `Your formatted dispatch has been generated and opened in your email application addressed to ${supportEmail}. Simply review your message and press Send in your mail app.`
                        : `La tua richiesta formattata è stata generata e aperta nella tua applicazione email all'indirizzo ${supportEmail}. Controlla il messaggio e premi Invia nella tua app.`}
                    </p>
                    <div className="flex justify-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={dispatchEmailClient}
                        className="bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans font-bold uppercase text-xs tracking-wider px-5 py-2.5 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? 'Re-open Email App' : 'Riapri App Email'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSent(false);
                          onClose();
                        }}
                        className="bg-white border border-[#1A1A1A] text-[#1A1A1A] hover:bg-neutral-100 font-sans font-bold uppercase text-xs tracking-wider px-5 py-2.5 transition-colors cursor-pointer"
                      >
                        {language === 'en' ? 'Done' : 'Chiudi'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-sans font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                          {language === 'en' ? 'Your Name' : 'Il tuo Nome'} <span className="text-[#D23131]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={language === 'en' ? 'e.g., Alex Chen' : 'es., Alex Rossi'}
                          className="w-full px-3 py-2 text-sm border border-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] bg-white font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-sans font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                          {language === 'en' ? 'Your Email Address' : 'La tua Email'} <span className="text-[#D23131]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={language === 'en' ? 'your.email@example.com' : 'tua.email@esempio.com'}
                          className="w-full px-3 py-2 text-sm border border-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] bg-white font-sans"
                        />
                      </div>
                    </div>

                    {/* Department Selection */}
                    <div>
                      <label className="block text-[10px] font-sans font-bold text-[#1A1A1A]/80 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <Building className="w-3 h-3 text-[#D23131]" />
                        <span>{language === 'en' ? 'Select Destination Desk / Topic' : 'Seleziona Reparto / Argomento'}</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {INQUIRY_DEPARTMENTS.map((dept) => {
                          const isSelected = selectedDeptId === dept.id;
                          return (
                            <button
                              key={dept.id}
                              type="button"
                              onClick={() => setSelectedDeptId(dept.id)}
                              className={`text-left text-xs font-sans p-2 border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                                  : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]/60'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <span className={isSelected ? 'text-[#D23131]' : 'text-neutral-400'}>•</span>
                                <span>{language === 'en' ? dept.labelEn : dept.labelIt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Clean Message / Inquiry Input (NO raw template shown on website) */}
                    <div>
                      <label className="block text-[11px] font-sans font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Your Message & Inquiry Details' : 'Il tuo Messaggio & Note'} <span className="text-[#D23131]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={
                          language === 'en'
                            ? 'Please provide details about your story tip, partnership pitch, or inquiry...'
                            : 'Inserisci qui i dettagli della tua segnalazione o richiesta...'
                        }
                        className="w-full p-3 text-sm border border-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] bg-white font-sans leading-relaxed"
                      />
                    </div>

                    {/* Submit Button (Automatically compiles template and opens mail client) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#1A1A1A] hover:bg-[#D23131] text-white font-sans font-bold uppercase text-xs tracking-[0.2em] py-3.5 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? 'Submit & Open Email Client' : 'Invia & Apri Client Email'}</span>
                      </button>
                      <p className="text-[11px] text-center text-[#1A1A1A]/60 mt-1.5 font-sans">
                        {language === 'en'
                          ? 'Clicking submit automatically opens your email app with a pre-filled draft addressed to support@lifeinnewyork.blog.'
                          : 'L\'invio apre direttamente la tua app di posta con il messaggio precompilato pronto per support@lifeinnewyork.blog.'}
                      </p>
                    </div>
                  </form>
                )}
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D23131]">
                  {language === 'en' ? 'Journalistic Integrity & Reader Privacy' : 'Informativa sulla Privacy'}
                </div>
                <h3 className="font-editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                  {t.privacyPolicy}
                </h3>
                <div className="font-editorial-body text-[#333333] text-base leading-relaxed space-y-3">
                  <p>
                    {language === 'en'
                      ? 'Life in New York Media LLC (lifeinnewyork.blog) is dedicated to protecting reader privacy and source confidentiality under state and federal Shield Laws.'
                      : 'Life in New York Media LLC (lifeinnewyork.blog) garantisce la massima riservatezza delle fonti giornalistiche e tutela la privacy dei propri lettori.'}
                  </p>
                  <p>
                    {language === 'en'
                      ? 'Correspondence and tips sent to support@lifeinnewyork.blog are handled strictly by credentialed staff writers and editors. We never sell or share contact details with advertisers or external data brokers.'
                      : 'Le comunicazioni e le segnalazioni inviate a support@lifeinnewyork.blog sono trattate esclusivamente dalla redazione e non vengono cedute a terzi.'}
                  </p>
                  <p>
                    {language === 'en'
                      ? 'We store your preferred reading language locally in your browser to maintain a seamless editorial reading experience across sessions.'
                      : 'Memorizziamo localmente nel browser la tua lingua di lettura preferita per offrirti un\'esperienza sempre coerente.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
