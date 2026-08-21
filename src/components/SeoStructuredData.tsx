import React, { useEffect } from 'react';
import { Article, Language } from '../types';

interface SeoStructuredDataProps {
  language: Language;
  currentArticle: Article | null;
}

export const SeoStructuredData: React.FC<SeoStructuredDataProps> = ({
  language,
  currentArticle
}) => {
  useEffect(() => {
    // Update document title and lang attribute dynamically
    document.documentElement.lang = language;
    
    if (currentArticle) {
      document.title = `${currentArticle.title[language]} | Life in Italy`;
    } else {
      document.title = language === 'en'
        ? 'Life in Italy - Real Estate, Food, Culture & Travel'
        : 'Life in Italy - Immobili, Gastronomia, Cultura e Viaggi in Italia';
    }

    // Inject JSON-LD
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = currentArticle
      ? {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: currentArticle.title[language],
          image: [currentArticle.imageUrl],
          datePublished: '2025-06-23T08:00:00+02:00',
          dateModified: '2025-06-23T09:30:00+02:00',
          author: [
            {
              '@type': 'Person',
              name: currentArticle.author
            }
          ],
          publisher: {
            '@type': 'Organization',
            name: 'Life in Italy',
            logo: {
              '@type': 'ImageObject',
              url: 'https://lifeinitaly.com/logo.png'
            }
          },
          description: currentArticle.excerpt[language],
          articleBody: currentArticle.fullStory[language].join(' '),
          inLanguage: language === 'en' ? 'en-US' : 'it-IT',
          keywords: currentArticle.tags.join(', ')
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Life in Italy',
          url: 'https://lifeinitaly.com/',
          description:
            'A blog dedicated to real estate, gastronomy, culture, and travel in Italy.',
          inLanguage: ['en-US', 'it-IT'],
          publisher: {
            '@type': 'Organization',
            name: 'Life in Italy LLC'
          }
        };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [language, currentArticle]);

  return null;
};
