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
    id: 'news',
    categoryKey: 'news',
    title: {
      en: 'NYC NEWS',
      it: 'NOTIZIE NYC'
    },
    subcategories: [
      { id: 'breaking-news', title: { en: 'Breaking News & NYPD', it: 'Cronaca & NYPD' } },
      { id: 'city-hall', title: { en: 'City Hall & Albany Politics', it: 'Comune & Politica Statale' } },
      { id: 'transit-mta', title: { en: 'Subway & Transit Watch', it: 'Metropolitana & Trasporti MTA' } },
      { id: 'investigations', title: { en: 'Deep Investigations', it: 'Inchieste Speciali' } }
    ]
  },
  {
    id: 'food',
    categoryKey: 'food',
    title: {
      en: 'FOOD & DINING',
      it: 'CIBO & RISTORANTI'
    },
    subcategories: [
      { id: 'delis-appetizing', title: { en: 'Classic Delis & Pastrami', it: 'Deli Storici & Pastrami' } },
      { id: 'pizza-slice', title: { en: 'NYC Slice & Coal Ovens', it: 'Pizza Newyorkese & Forni a Carbone' } },
      { id: 'street-food-bodegas', title: { en: 'Bodegas & Night Markets', it: 'Bodega & Street Food' } },
      { id: 'chef-counters', title: { en: 'Michelin & Speakeasies', it: 'Alta Cucina & Speakeasy' } }
    ]
  },
  {
    id: 'culture',
    categoryKey: 'culture',
    title: {
      en: 'CULTURE & SECRETS',
      it: 'CULTURA & SEGRETI'
    },
    subcategories: [
      { id: 'broadway-theater', title: { en: 'Broadway & Off-Broadway', it: 'Broadway & Teatro' } },
      { id: 'untapped-history', title: { en: 'Untapped Architecture & Lore', it: 'Architettura & Luoghi Segreti' } },
      { id: 'museums-galleries', title: { en: 'MoMA, Met & Bushwick Art', it: 'Musei, MoMA & Arte di Bushwick' } },
      { id: 'nightlife-jazz', title: { en: 'Harlem Jazz & Indie Music', it: 'Jazz ad Harlem & Club Indie' } }
    ]
  },
  {
    id: 'real-estate',
    categoryKey: 'real-estate',
    title: {
      en: 'REAL ESTATE',
      it: 'IMMOBILIARE'
    },
    subcategories: [
      { id: 'brownstones', title: { en: 'Historic Brownstones & Stoops', it: 'Brownstone & Dimore Storiche' } },
      { id: 'loft-living', title: { en: 'SoHo & DUMBO Lofts', it: 'Loft a SoHo & DUMBO' } },
      { id: 'coops-condos', title: { en: 'Co-op Boards & Buying Guide', it: 'Guida all\'Acquisto & Co-op' } },
      { id: 'rent-stabilization', title: { en: 'Tenant Rights & Rent Laws', it: 'Affitti & Diritti dei Locatari' } }
    ]
  },
  {
    id: 'lifestyle',
    categoryKey: 'lifestyle',
    title: {
      en: 'NYC LIFE',
      it: 'VITA A NEW YORK'
    },
    subcategories: [
      { id: 'subway-tales', title: { en: 'Subway Chronicles', it: 'Storie dalla Metro' } },
      { id: 'parks-waterfront', title: { en: 'Central Park & Waterfronts', it: 'Central Park & Lungofiume' } },
      { id: 'fashion-vintage', title: { en: 'Fashion & Thrift Gems', it: 'Moda & Negozi Vintage' } },
      { id: 'borough-living', title: { en: 'Everyday Borough Survival', it: 'Guida alla Vita nei Borough' } }
    ]
  },
  {
    id: 'destinations',
    categoryKey: 'destinations',
    title: {
      en: 'BOROUGHS',
      it: 'I 5 DISTRETTI'
    },
    subcategories: [
      { id: 'manhattan', title: { en: 'Manhattan', it: 'Manhattan' } },
      { id: 'brooklyn', title: { en: 'Brooklyn', it: 'Brooklyn' } },
      { id: 'queens', title: { en: 'Queens', it: 'Queens' } },
      { id: 'bronx', title: { en: 'The Bronx', it: 'The Bronx' } },
      { id: 'staten-island', title: { en: 'Staten Island', it: 'Staten Island' } }
    ]
  }
];

export const UI_TRANSLATIONS = {
  en: {
    siteTitle: 'LIFE IN NEW YORK',
    siteTagline: 'New York City Local News, Culture, Real Estate & Food • lifeinnewyork.blog',
    menu: 'MENU',
    closeMenu: 'CLOSE MENU',
    recentPosts: 'RECENT STORIES & DISPATCHES',
    allStories: 'All Stories',
    filterByCategory: 'Filter by category:',
    continueReading: 'READ FULL ARTICLE',
    readArticle: 'Read Full Story',
    by: 'by',
    comments: 'comments',
    views: 'views',
    search: 'SEARCH NYC',
    searchPlaceholder: 'Search news, boroughs, food, landmarks...',
    searchButton: 'Search',
    noResults: 'No dispatches found matching your search. Try another neighborhood or topic.',
    clearFilter: 'Show all articles',
    shareArticle: 'Share this story',
    copyLink: 'Copy Link',
    linkCopied: 'Link copied to clipboard!',
    shareOn: 'Share on',
    destinations: 'NYC BOROUGHS & NEIGHBORHOODS',
    fashion: 'NEW YORK ICONS & INSTITUTIONS',
    brandSpotlight: 'NEW YORK EXCELLENCE & HERITAGE SPOTLIGHT',
    brandSubtitle: 'Discover the world-renowned icons of New York architecture, fashion, craft, and century-old institutions.',
    visitOfficial: 'Explore Institution',
    aboutUsTitle: 'ABOUT LIFE IN NEW YORK',
    aboutUsText: "Life in New York (lifeinnewyork.blog) is an independent digital publication committed to authentic journalism and neighborhood storytelling across the five boroughs. From breaking local news and municipal investigations to historic Brooklyn brownstone restorations, Untapped architectural secrets, and legendary street food, we report the pulse of New York City.",
    contactUs: 'CONTACT THE EDITORIAL DESK',
    contactUsLink: 'Contact the Desk',
    aboutUsLink: 'ABOUT US',
    workWithUsLink: 'PRESS & SPONSORSHIPS',
    siteForSale: 'LIFEINNEWYORK.BLOG OFFICIAL PUBLICATION',
    privacyPolicy: 'PRIVACY POLICY',
    copyright: 'Copyright © 2026 Life in New York Media LLC. All rights reserved. lifeinnewyork.blog',
    languageToggleLabel: 'Language',
    switchItalian: 'Passa all\'Italiano (IT)',
    switchEnglish: 'Switch to English (EN)',
    emotionalHighlightLabel: 'The Soul of the Story',
    keyTakeawaysLabel: 'Key Takeaways (AEO / GEO Summary)',
    audioListenLabel: 'Listen to Audio',
    audioStopLabel: 'Stop Audio',
    relatedStories: 'More Essential New York Stories',
    closeModal: 'Close article',
    shareSuccessMsg: 'Link copied! Share this dispatch with fellow New Yorkers.',
    cookieConsentText: 'Privacy & Reader Preferences',
    readTimeLabel: 'Reading time',
    readingProgress: 'Reading Progress',
    supportEmail: 'support@lifeinnewyork.blog',
    newsletterTitle: 'GET THE NYC DAILY DISPATCH',
    newsletterSubtitle: 'Essential New York City headlines, neighborhood scoops, real estate finds, and food guides delivered to your inbox.',
    newsletterButton: 'Daily Newsletter',
    newsletterSubscribe: 'Subscribe Now',
    newsletterSubscribed: 'Welcome to the Life in New York Dispatch!',
    newsletterSentTo: 'Your subscription inquiry has been compiled and routed to',
    newsletterTopicsLabel: 'Your Borough & Interest Focus',
    newsletterNamePlaceholder: 'Your Name (e.g., Alex Chen)',
    newsletterEmailPlaceholder: 'your.email@example.com',
    newsletterQuickPresets: 'Quick Focus',
    presetRealEstate: 'Brownstones & Real Estate',
    presetFoodWine: 'NYC Food & Dining Reviews',
    presetTravelCulture: 'Untapped History & Secrets',
    presetAll: 'All Five-Borough Dispatches',
    contactSendTo: 'Inquiries routed directly to:',
    contactSubmitButton: 'Send Message via Email Client',
    contactAutoFillTemplates: 'Select Department / Inquiry Topic',
    contactQuickFill: 'Quick Department Select'
  },
  it: {
    siteTitle: 'LIFE IN NEW YORK',
    siteTagline: 'Notizie Locali, Cultura, Mercato Immobiliare e Cucina a New York • lifeinnewyork.blog',
    menu: 'MENU',
    closeMenu: 'CHIUDI MENU',
    recentPosts: 'ULTIMI REPORTAGE & CRONACA',
    allStories: 'Tutti gli Articoli',
    filterByCategory: 'Filtra per categoria:',
    continueReading: 'LEGGI L\'ARTICOLO COMPLETO',
    readArticle: 'Leggi la Storia Completa',
    by: 'di',
    comments: 'commenti',
    views: 'visualizzazioni',
    search: 'CERCA A NEW YORK',
    searchPlaceholder: 'Cerca notizie, quartieri, cucina, monumenti...',
    searchButton: 'Cerca',
    noResults: 'Nessun articolo trovato per questi termini. Prova con un altro quartiere o categoria.',
    clearFilter: 'Mostra tutti gli articoli',
    shareArticle: 'Condividi questo articolo',
    copyLink: 'Copia Link',
    linkCopied: 'Link copiato negli appunti!',
    shareOn: 'Condividi su',
    destinations: 'I 5 DISTRETTI & QUARTIERI DI NYC',
    fashion: 'ECCELLENZE & ICONE DI NEW YORK',
    brandSpotlight: 'ECCELLENZE & ICONE STORICHE DI NEW YORK',
    brandSubtitle: 'Scopri i marchi leggendari, le istituzioni culturali e i simboli dell\'eccellenza newyorkese nel mondo.',
    visitOfficial: 'Visita Istituzione',
    aboutUsTitle: 'CHI SIAMO - LIFE IN NEW YORK',
    aboutUsText: "Life in New York (lifeinnewyork.blog) è la testata digitale indipendente dedicata al battito autentico della metropoli. Dalle notizie di cronaca e le inchieste municipali al restauro dei brownstone ottocenteschi, ai segreti architettonici e allo street food più celebre, raccontiamo la vera essenza di New York.",
    contactUs: 'CONTATTA LA REDAZIONE',
    contactUsLink: 'Contatta la Redazione',
    aboutUsLink: 'CHI SIAMO',
    workWithUsLink: 'STAMPA & PUBBLICITÀ',
    siteForSale: 'TESTATA UFFICIALE LIFEINNEWYORK.BLOG',
    privacyPolicy: 'INFORMATIVA PRIVACY',
    copyright: 'Copyright © 2026 Life in New York Media LLC. Tutti i diritti riservati. lifeinnewyork.blog',
    languageToggleLabel: 'Lingua',
    switchItalian: 'Passa all\'Italiano (IT)',
    switchEnglish: 'Switch to English (EN)',
    emotionalHighlightLabel: 'Il Cuore del Racconto',
    keyTakeawaysLabel: 'Punti Chiave (Sintesi per Motori & AI)',
    audioListenLabel: 'Ascolta Audio',
    audioStopLabel: 'Ferma Audio',
    relatedStories: 'Altre Storie da non Perdere',
    closeModal: 'Chiudi articolo',
    shareSuccessMsg: 'Link copiato! Condividi questa notizia con altri lettori.',
    cookieConsentText: 'Preferenze Privacy & Lettore',
    readTimeLabel: 'Tempo di lettura',
    readingProgress: 'Avanzamento Lettura',
    supportEmail: 'support@lifeinnewyork.blog',
    newsletterTitle: 'ISCRIVITI AI REPORTAGE QUOTIDIANI',
    newsletterSubtitle: 'Ricevi ogni giorno i titoli più importanti, i retroscena dei quartieri, annunci immobiliari e guide gastronomiche esclusive.',
    newsletterButton: 'Newsletter Quotidiana',
    newsletterSubscribe: 'Iscriviti Ora',
    newsletterSubscribed: 'Iscrizione Effettuata con Successo!',
    newsletterSentTo: 'La tua richiesta è stata compilata e inoltrata a',
    newsletterTopicsLabel: 'Seleziona le tue Aree di Interesse',
    newsletterNamePlaceholder: 'Il tuo Nome (es. Alex Rossi)',
    newsletterEmailPlaceholder: 'tua.email@esempio.com',
    newsletterQuickPresets: 'Interesse Principale',
    presetRealEstate: 'Brownstone & Immobili',
    presetFoodWine: 'Cucina & Recensioni Gastronomiche',
    presetTravelCulture: 'Storia & Luoghi Segreti',
    presetAll: 'Tutti i Reportage dei Cinque Distretti',
    contactSendTo: 'Richieste indirizzate direttamente a:',
    contactSubmitButton: 'Invia Messaggio Tramite Email',
    contactAutoFillTemplates: 'Seleziona Reparto / Argomento',
    contactQuickFill: 'Selezione Rapida Reparto'
  }
};
