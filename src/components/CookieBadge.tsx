import React, { useState } from 'react';
import { Language } from '../types';
import { Shield, Check, Lock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CookieBadgeProps {
  language: Language;
}

export const CookieBadge: React.FC<CookieBadgeProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [analyticsAccepted, setAnalyticsAccepted] = useState(true);

  return (
    <>
      {/* Floating Fingerprint/Privacy Blue Circular Button (matching screenshot bottom-left) */}
      <button
        id="cookie-consent-floating-badge"
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
        title={language === 'en' ? 'Privacy & Consent Preferences' : 'Preferenze Privacy & Consensi'}
        aria-label="Privacy settings"
      >
        {/* Stylized Fingerprint / Shield Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
          <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
          <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
          <path d="M2 12a10 10 0 0 1 18-6" />
          <path d="M2 16h.01" />
          <path d="M21.8 16c.2-2 .131-5.354 0-6" />
          <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
          <path d="M8.65 22c.21-.66.45-1.32.57-2" />
          <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
        </svg>
      </button>

      {/* Privacy Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-neutral-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="bg-white w-full max-w-md rounded-t-xl sm:rounded-xl p-6 shadow-2xl border border-neutral-200"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-blue-50 text-blue-600">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-condensed text-lg font-bold uppercase text-neutral-950">
                      {language === 'en' ? 'Privacy & Consent' : 'Privacy & Consensi'}
                    </h3>
                    <p className="text-xs text-neutral-500">Life in Italy</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed my-4">
                {language === 'en'
                  ? 'We use essential cookies to deliver seamless bilingual translation, remember your reading preferences, and keep our Italian stories fast and accessible.'
                  : 'Utilizziamo i cookie essenziali per garantire la traduzione bilingue, memorizzare le preferenze di lettura e offrirti la migliore esperienza sui contenuti italiani.'}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'en' ? 'Strictly Necessary (Always Active)' : 'Strettamente Necessari (Attivi)'}</span>
                  </div>
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>

                <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="text-xs font-semibold text-neutral-800">
                    <span>{language === 'en' ? 'Reading Experience & Analytics' : 'Esperienza di Lettura & Statistiche'}</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsAccepted}
                    onChange={(e) => setAnalyticsAccepted(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-condensed font-bold uppercase text-xs tracking-wider py-3 rounded-md transition-colors"
              >
                {language === 'en' ? 'Save Preferences' : 'Salva Preferenze'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
