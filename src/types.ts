export type Language = 'en' | 'it';

export interface Article {
  id: string;
  slug: string;
  title: {
    en: string;
    it: string;
  };
  category: {
    en: string;
    it: string;
  };
  categoryKey: 'news' | 'real-estate' | 'food' | 'culture' | 'lifestyle' | 'travel' | 'destinations' | 'fashion';
  date: {
    en: string;
    it: string;
  };
  author: string;
  commentsCount: number;
  readTime: {
    en: string;
    it: string;
  };
  imageUrl: string;
  imageAlt: {
    en: string;
    it: string;
  };
  excerpt: {
    en: string;
    it: string;
  };
  fullStory: {
    en: string[];
    it: string[];
  };
  emotionalHighlight: {
    en: string;
    it: string;
  };
  keyTakeaways: {
    en: string[];
    it: string[];
  };
  location: {
    en: string;
    it: string;
  };
  tags: string[];
  isFeatured?: boolean;
  isSidebarHighlight?: boolean;
  views?: string;
}

export interface BrandAd {
  id: string;
  name: string;
  tagline: {
    en: string;
    it: string;
  };
  description: {
    en: string;
    it: string;
  };
  category: {
    en: string;
    it: string;
  };
  imageUrl: string;
  ctaText: {
    en: string;
    it: string;
  };
  badge: {
    en: string;
    it: string;
  };
  yearFounded: string;
  origin: string;
}

export interface NavigationCategory {
  id: string;
  title: {
    en: string;
    it: string;
  };
  categoryKey?: 'news' | 'real-estate' | 'food' | 'culture' | 'lifestyle' | 'travel' | 'destinations' | 'fashion';
  subcategories?: {
    id: string;
    title: {
      en: string;
      it: string;
    };
  }[];
}
