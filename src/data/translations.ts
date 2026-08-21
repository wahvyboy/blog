import { NavigationCategory } from '../types';

export const NAVIGATION_CATEGORIES: NavigationCategory[] = [
  {
    id: 'home',
    title: {
      en: 'HOME',
      it: 'HOME'
    }
  },
  {
    id: 'real-estate',
    categoryKey: 'real-estate',
    title: {
      en: 'REAL ESTATE',
      it: 'IMMOBILIARE'
    },
    subcategories: [
      { id: 'historic-houses', title: { en: 'Historic Houses & Palazzi', it: 'Dimore Storiche & Palazzi' } },
      { id: 'country-villas', title: { en: 'Country Villas & Rustic Casali', it: 'Ville di Campagna & Casali' } },
      { id: 'ghost-towns', title: { en: '1€ Houses & Revived Borghi', it: 'Case a 1€ & Borghi Rinati' } },
      { id: 'relocation-guide', title: { en: 'Moving to Italy Guide', it: 'Guida al Trasferimento' } }
    ]
  },
  {
    id: 'culture',
    categoryKey: 'culture',
    title: {
      en: 'CULTURE',
      it: 'CULTURA'
    },
    subcategories: [
      { id: 'art-history', title: { en: 'Art, Architecture & Masters', it: 'Arte, Architettura & Grandi Maestri' } },
      { id: 'traditions', title: { en: 'Festivals & Local Traditions', it: 'Feste & Tradizioni Popolari' } },
      { id: 'vatican-jubilee', title: { en: 'Jubilee 2025 in Rome', it: 'Giubileo 2025 a Roma' } }
    ]
  },
  {
    id: 'food',
    categoryKey: 'food',
    title: {
      en: 'FOOD',
      it: 'CUCINA & CIBO'
    },
    subcategories: [
      { id: 'local-eating', title: { en: 'Eat Like a Local', it: 'Mangiare da Abitante' } },
      { id: 'wine-olive-oil', title: { en: 'Wine & Extra Virgin Olive Oil', it: 'Vino & Olio Extravergine' } },
      { id: 'village-sagre', title: { en: 'Authentic Village Sagre', it: 'Sagre Paesane Autentiche' } }
    ]
  },
  {
    id: 'media',
    categoryKey: 'news',
    title: {
      en: 'MEDIA',
      it: 'MEDIA & NEWS'
    },
    subcategories: [
      { id: 'breaking-news', title: { en: 'Daily Italian News', it: 'Notizie Quotidiane dall\'Italia' } },
      { id: 'digital-apps', title: { en: 'Digital Travel Tools', it: 'Applicazioni & Guide Digitali' } }
    ]
  },
  {
    id: 'lifestyle',
    categoryKey: 'lifestyle',
    title: {
      en: 'LIFE STYLE',
      it: 'STILE DI VITA'
    },
    subcategories: [
      { id: 'pets-italy', title: { en: 'Living with Pets in Italy', it: 'Vivere con Animali in Italia' } },
      { id: 'horses-rural', title: { en: 'Horses & Country Living', it: 'Cavalli & Vita in Campagna' } },
      { id: 'slow-living', title: { en: 'La Dolce Vita Philosophy', it: 'Filosofia della Dolce Vita' } }
    ]
  },
  {
    id: 'travel',
    categoryKey: 'travel',
    title: {
      en: 'TRAVEL',
      it: 'VIAGGI'
    },
    subcategories: [
      { id: 'hidden-beaches', title: { en: 'Secret Lakes & Beaches', it: 'Laghi Segreti & Spiagge Nascoste' } },
      { id: 'road-trips', title: { en: 'Scenic Panoramic Drives', it: 'Itinerari Panoramici' } },
      { id: 'train-journeys', title: { en: 'Italian Train Journeys', it: 'Viaggiare in Treno' } }
    ]
  },
  {
    id: 'tourism',
    categoryKey: 'destinations',
    title: {
      en: 'TOURISM',
      it: 'TURISMO'
    },
    subcategories: [
      { id: 'rome-rules', title: { en: 'Rome Monument Rules', it: 'Monumenti di Roma & Regolamenti' } },
      { id: 'unesco-sites', title: { en: 'UNESCO Heritage Wonders', it: 'Patrimoni Mondiali UNESCO' } }
    ]
  }
];

export const UI_TRANSLATIONS = {
  en: {
    siteTitle: 'LIFE IN ITALY',
    siteTagline: 'Life in Italy, Real Estate in Italy, Move to Italy',
    menu: 'MENU',
    closeMenu: 'CLOSE MENU',
    recentPosts: 'RECENT POSTS',
    allStories: 'All Stories',
    filterByCategory: 'Filter by category:',
    continueReading: 'CONTINUE READING',
    readArticle: 'Read Full Story',
    by: 'by',
    comments: 'comments',
    search: 'SEARCH',
    searchPlaceholder: 'Enter your keywords...',
    searchButton: 'Search',
    noResults: 'No stories found matching your search. Try another word or view all categories.',
    clearFilter: 'Show all articles',
    shareArticle: 'Share this story',
    copyLink: 'Copy Link',
    linkCopied: 'Link copied to clipboard!',
    shareOn: 'Share on',
    destinations: 'ITALIAN DESTINATIONS',
    fashion: 'ITALIAN FASHION',
    brandSpotlight: 'ITALIAN EXCELLENCE & LUXURY SPOTLIGHT',
    brandSubtitle: 'Discover the world-renowned icons of Italian heritage, speed, design, and high craftsmanship.',
    visitOfficial: 'Official Showcase',
    aboutUsTitle: 'ABOUT US',
    aboutUsText: "Life in Italy is a website about Italy and Italian Culture, Food, and Travel. We are also focusing on Italian news, sharing the most important updates from Italy with you! Check our Work with Us page if you're looking to advertise or collaborate with Life in Italy! Join Our Real Estate ads Group",
    contactUs: 'CONTACT US',
    contactUsLink: 'Contact us',
    aboutUsLink: 'ABOUT US',
    workWithUsLink: 'WORK WITH US',
    siteForSale: 'THIS WEBSITE IS FOR SALE',
    privacyPolicy: 'PRIVACY POLICY',
    copyright: 'Copyright © 2025 Life in Italy LLC. All rights reserved.',
    languageToggleLabel: 'Language',
    switchItalian: 'Passa all\'Italiano (IT)',
    switchEnglish: 'Switch to English (EN)',
    emotionalHighlightLabel: 'Heart of the Story',
    keyTakeawaysLabel: 'Key Insights (AEO / GEO Summary)',
    audioListenLabel: 'Listen to Story',
    audioStopLabel: 'Stop Audio',
    relatedStories: 'More Stories You Will Love',
    closeModal: 'Close article',
    shareSuccessMsg: 'Link copied! Now you can share this story anywhere.',
    cookieConsentText: 'Privacy & Cookie Preferences',
    readTimeLabel: 'Reading time',
    readingProgress: 'Reading Progress'
  },
  it: {
    siteTitle: 'LIFE IN ITALY',
    siteTagline: 'Vivere in Italia, Immobili in Italia, Trasferirsi in Italia',
    menu: 'MENU',
    closeMenu: 'CHIUDI MENU',
    recentPosts: 'ULTIMI ARTICOLI',
    allStories: 'Tutti gli Articoli',
    filterByCategory: 'Filtra per categoria:',
    continueReading: 'CONTINUA A LEGGERE',
    readArticle: 'Leggi la Storia Completa',
    by: 'di',
    comments: 'commenti',
    search: 'CERCA',
    searchPlaceholder: 'Inserisci le parole chiave...',
    searchButton: 'Cerca',
    noResults: 'Nessun articolo trovato con questi termini. Prova con un\'altra parola o mostra tutti gli articoli.',
    clearFilter: 'Mostra tutti gli articoli',
    shareArticle: 'Condividi questa storia',
    copyLink: 'Copia Link',
    linkCopied: 'Link copiato negli appunti!',
    shareOn: 'Condividi su',
    destinations: 'DESTINAZIONI ITALIANE',
    fashion: 'MODA ITALIANA',
    brandSpotlight: 'ECCELLENZE ITALIANE & VETRINA DEL LUSSO',
    brandSubtitle: 'Scopri i grandi marchi iconici del Made in Italy: velocità, alta moda, maestria artigianale e stile di vita.',
    visitOfficial: 'Vetrina Ufficiale',
    aboutUsTitle: 'CHI SIAMO',
    aboutUsText: "Life in Italy è il punto di riferimento su Cultura Italiana, Gastronomia, Viaggi e Mercato Immobiliare. Condividiamo con passione le notizie e gli approfondimenti più preziosi sull'Italia. Visita la sezione 'Lavora con noi' per collaborazioni pubblicitarie e unisciti alla nostra rete immobiliare.",
    contactUs: 'CONTATTACI',
    contactUsLink: 'Contattaci',
    aboutUsLink: 'CHI SIAMO',
    workWithUsLink: 'LAVORA CON NOI',
    siteForSale: 'QUESTO SITO È IN VENDITA',
    privacyPolicy: 'INFORMATIVA PRIVACY',
    copyright: 'Copyright © 2025 Life in Italy LLC. Tutti i diritti riservati.',
    languageToggleLabel: 'Lingua',
    switchItalian: 'Passa all\'Italiano (IT)',
    switchEnglish: 'Switch to English (EN)',
    emotionalHighlightLabel: 'Il Cuore del Racconto',
    keyTakeawaysLabel: 'Punti Chiave (Sintesi per Motori & AI)',
    audioListenLabel: 'Ascolta il Racconto',
    audioStopLabel: 'Ferma Audio',
    relatedStories: 'Altre Storie che Amerai',
    closeModal: 'Chiudi articolo',
    shareSuccessMsg: 'Link copiato! Ora puoi condividere questa storia dove vuoi.',
    cookieConsentText: 'Preferenze Privacy & Cookie',
    readTimeLabel: 'Tempo di lettura',
    readingProgress: 'Avanzamento Lettura'
  }
};
