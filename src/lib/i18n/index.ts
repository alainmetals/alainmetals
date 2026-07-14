export type Locale = 'en' | 'fr' | 'ar'

export const defaultLocale: Locale = 'en'

export const locales: Locale[] = ['en', 'fr', 'ar']

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
}

export const dir: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  fr: 'ltr',
  ar: 'rtl',
}

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      products: 'Products',
      sourcing: 'Sourcing',
      destinations: 'Destinations',
      resources: 'Resources',
      downloads: 'Downloads',
      trust: 'Trust',
      compliance: 'Compliance',
      contact: 'Contact',
      getQuote: 'Get a Quote',
    },
    hero: {
      title: 'Africa\'s Premier Commodity Trading Partner',
      subtitle: 'Connecting global buyers with Africa\'s finest precious metals, gemstones and strategic minerals.',
      cta: 'Request a Quote',
      secondary: 'View Our Products',
    },
    footer: {
      description: 'Connecting global buyers with Africa\'s finest precious metals, gemstones and strategic minerals through trusted partnerships and responsible sourcing.',
      quickLinks: 'Quick Links',
      ourProducts: 'Our Products',
      sourcingRegions: 'Sourcing Regions',
      resources: 'Resources',
      industries: 'Industries',
      globalTrade: 'Global Trade',
      contactUs: 'Contact Us',
      rights: 'All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      products: 'Produits',
      sourcing: 'Approvisionnement',
      destinations: 'Destinations',
      resources: 'Ressources',
      downloads: 'Téléchargements',
      trust: 'Confiance',
      compliance: 'Conformité',
      contact: 'Contact',
      getQuote: 'Demander un devis',
    },
    hero: {
      title: 'Partenaire Commercial de Première Classe en Afrique',
      subtitle: 'Connecter les acheteurs du monde entier aux meilleurs métaux précieux, pierres précieuses et minéraux stratégiques d\'Afrique.',
      cta: 'Demander un devis',
      secondary: 'Voir nos produits',
    },
    footer: {
      description: 'Connecter les acheteurs du monde entier aux meilleurs métaux précieux, pierres précieuses et minéraux stratégiques d\'Afrique grâce à des partenariats de confiance et un approvisionnement responsable.',
      quickLinks: 'Liens rapides',
      ourProducts: 'Nos produits',
      sourcingRegions: 'Régions d\'approvisionnement',
      resources: 'Ressources',
      industries: 'Industries',
      globalTrade: 'Commerce mondial',
      contactUs: 'Contactez-nous',
      rights: 'Tous droits réservés.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      products: 'المنتجات',
      sourcing: 'المصادر',
      destinations: 'الوجهات',
      resources: 'الموارد',
      downloads: 'التنزيلات',
      trust: 'الثقة',
      compliance: 'الامتثال',
      contact: 'اتصل بنا',
      getQuote: 'احصل على عرض سعر',
    },
    hero: {
      title: 'شريك التجارة الأول في أفريقيا',
      subtitle: 'ربط المشترين العالميين بأجود المعادن الثمينة والأحجار الكريمة والمعادن الاستراتيجية في أفريقيا.',
      cta: 'طلب عرض سعر',
      secondary: 'عرض المنتجات',
    },
    footer: {
      description: 'ربط المشترين العالميين بأجود المعادن الثمينة والأحجار الكريمة والمعادن الاستراتيجية في أفريقيا من خلال شراكات موثوقة ومسؤولية في التوريد.',
      quickLinks: 'روابط سريعة',
      ourProducts: 'منتجاتنا',
      sourcingRegions: 'مناطق التوريد',
      resources: 'الموارد',
      industries: 'الصناعات',
      globalTrade: 'التجارة العالمية',
      contactUs: 'اتصل بنا',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
}

export function getTranslation(locale: Locale, path: string): string {
  const keys = path.split('.')
  let result: unknown = translations[locale]
  for (const key of keys) {
    if (result && typeof result === 'object' && key in (result as Record<string, unknown>)) {
      result = (result as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return typeof result === 'string' ? result : path
}
