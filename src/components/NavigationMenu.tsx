import React, { useState } from 'react';
import { Language, NavigationCategory } from '../types';
import { NAVIGATION_CATEGORIES } from '../data/translations';
import { ChevronDown, ChevronUp, ArrowRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationMenuProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (categoryKey: string | null) => void;
  activeCategoryKey: string | null;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  language,
  isOpen,
  onClose,
  onSelectCategory,
  activeCategoryKey
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'real-estate': true
  });

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCategoryClick = (cat: NavigationCategory) => {
    if (cat.id === 'home') {
      onSelectCategory(null);
      onClose();
      return;
    }

    if (cat.categoryKey) {
      onSelectCategory(cat.categoryKey);
      onClose();
    }
  };

  const handleSubcategoryClick = (catKey: string | undefined) => {
    if (catKey) {
      onSelectCategory(catKey);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="navigation-drawer"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#FDFCF9] border-b border-[#1A1A1A] overflow-hidden z-30"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1A1A1A]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#D23131]">
                <BookOpen className="w-4 h-4" />
                <span>{language === 'en' ? 'Index of Editorial Sections' : 'Indice delle Sezioni Editoriali'}</span>
              </div>
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#1A1A1A]/50">
                LIFE IN NEW YORK • 2026
              </span>
            </div>

            <div className="border border-[#E5E1D8] divide-y divide-[#E5E1D8] bg-white">
              {NAVIGATION_CATEGORIES.map((item) => {
                const isExpanded = !!expandedCategories[item.id];
                const hasSubs = item.subcategories && item.subcategories.length > 0;
                const isSelected = item.categoryKey === activeCategoryKey;

                return (
                  <div key={item.id} className="w-full">
                    <div className="flex items-center justify-between p-4 hover:bg-[#FDFCF9] transition-colors">
                      <button
                        type="button"
                        onClick={() => handleCategoryClick(item)}
                        className={`text-left font-editorial-serif text-xl sm:text-2xl font-bold tracking-tight flex-1 transition-colors cursor-pointer ${
                          isSelected ? 'text-[#D23131] italic' : 'text-[#1A1A1A] hover:text-[#D23131]'
                        }`}
                      >
                        {item.title[language]}
                      </button>

                      {hasSubs && (
                        <button
                          type="button"
                          onClick={() => toggleCategory(item.id)}
                          className="p-1 text-[#1A1A1A] hover:text-[#D23131] transition-colors cursor-pointer"
                          aria-label={`Toggle ${item.title[language]} subcategories`}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Subcategories Accordion Content */}
                    <AnimatePresence>
                      {hasSubs && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-[#FDFCF9] px-6 py-3 border-t border-[#E5E1D8] space-y-2"
                        >
                          {item.subcategories!.map((sub) => (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => handleSubcategoryClick(item.categoryKey)}
                              className="w-full text-left py-2 px-3 text-sm font-sans font-medium text-[#1A1A1A]/80 hover:text-[#D23131] hover:bg-white rounded-none flex items-center justify-between transition-colors border-l-2 border-transparent hover:border-[#D23131]"
                            >
                              <span>{sub.title[language]}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]/40" />
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

