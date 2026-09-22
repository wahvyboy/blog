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
      document.title = `${currentArticle.title[language]} | Life in New York`;
    } else {
      document.title = language === 'en'
        ? 'Life in New York - NYC Local News, Culture, Real Estate & Food | lifeinnewyork.blog'
        : 'Life in New York - Notizie Locali, Cultura, Immobili e Cucina a New York';
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
          datePublished: '2026-09-10T08:00:00-04:00',
          dateModified: '2026-09-11T09:30:00-04:00',
          author: [
            {
              '@type': 'Person',
              name: currentArticle.author
            }
          ],
          publisher: {
            '@type': 'Organization',
            name: 'Life in New York',
            logo: {
              '@type': 'ImageObject',
              url: 'https://lifeinnewyork.blog/logo.png'
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
          name: 'Life in New York',
          url: 'https://lifeinnewyork.blog/',
          description:
            'Essential New York City reporting: breaking news from Gothamist & The City, Brooklyn brownstones, Manhattan dining, subway lore, and borough culture at lifeinnewyork.blog.',
          inLanguage: ['en-US', 'it-IT'],
          publisher: {
            '@type': 'Organization',
            name: 'Life in New York Media LLC'
          }
        };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [language, currentArticle]);

  return null;
};
