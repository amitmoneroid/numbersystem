// Shared navigation and footer strings for each locale.

import type { Locale } from './routing';

export interface NavUi {
  main: string;
  language: string;
  menu: string;
  themeToLight: string;
  themeToDark: string;
  links: {
    naming: string;
    base: string;
    reference: string;
    about: string;
    contact: string;
    catalog: string;
  };
}

export const navUi: Record<Locale, NavUi> = {
  en: {
    main: 'Main',
    language: 'Language',
    menu: 'Toggle navigation',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    links: {
      naming: 'Lakh & Crore',
      base: 'Base Converter',
      reference: 'Reference',
      about: 'About',
      contact: 'Contact',
      catalog: 'Knowledge Catalog',
    },
  },
  es: {
    main: 'Principal',
    language: 'Idioma',
    menu: 'Abrir o cerrar el menú',
    themeToLight: 'Cambiar al modo claro',
    themeToDark: 'Cambiar al modo oscuro',
    links: {
      naming: 'Lakh y crore',
      base: 'Conversor de bases',
      reference: 'Referencia',
      about: 'Acerca de',
      contact: 'Contacto',
      catalog: 'Catálogo de guías',
    },
  },
  fr: {
    main: 'Principale',
    language: 'Langue',
    menu: 'Ouvrir ou fermer le menu',
    themeToLight: 'Passer au mode clair',
    themeToDark: 'Passer au mode sombre',
    links: {
      naming: 'Lakh et crore',
      base: 'Convertisseur de base',
      reference: 'Référence',
      about: 'À propos',
      contact: 'Contact',
      catalog: 'Catalogue de guides',
    },
  },
  de: {
    main: 'Hauptnavigation',
    language: 'Sprache',
    menu: 'Navigation öffnen oder schließen',
    themeToLight: 'Zum hellen Modus wechseln',
    themeToDark: 'Zum dunklen Modus wechseln',
    links: {
      naming: 'Lakh & Crore',
      base: 'Basisrechner',
      reference: 'Referenz',
      about: 'Über uns',
      contact: 'Kontakt',
      catalog: 'Wissenskatalog',
    },
  },
  pt: {
    main: 'Principal',
    language: 'Idioma',
    menu: 'Abrir ou fechar o menu',
    themeToLight: 'Mudar para o modo claro',
    themeToDark: 'Mudar para o modo escuro',
    links: {
      naming: 'Lakh e crore',
      base: 'Conversor de bases',
      reference: 'Referência',
      about: 'Sobre',
      contact: 'Contacto',
      catalog: 'Catálogo de guias',
    },
  },
  it: {
    main: 'Principale',
    language: 'Lingua',
    menu: 'Apri o chiudi il menu',
    themeToLight: 'Passa alla modalità chiara',
    themeToDark: 'Passa alla modalità scura',
    links: {
      naming: 'Lakh e crore',
      base: 'Convertitore di base',
      reference: 'Riferimento',
      about: 'Chi siamo',
      contact: 'Contatti',
      catalog: 'Catalogo delle guide',
    },
  },
};

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterUi {
  pitch: string;
  learnHeading: string;
  pagesHeading: string;
  legalHeading: string;
  languagesHeading: string;
  learnLinks: FooterLink[];
  pageLinks: FooterLink[];
  legalLinks: FooterLink[];
  analytics: string;
  copyright: string;
  lastUpdated: string;
  poweredBy: string;
}

export const footerUi: Record<Locale, FooterUi> = {
  en: {
    pitch: 'A browser-only converter for lakh, crore, million and billion — with the words spelled out.',
    learnHeading: 'Learn',
    pagesHeading: 'Pages',
    legalHeading: 'Legal',
    languagesHeading: 'Languages',
    learnLinks: [
      { label: 'Knowledge Catalog', href: '/knowledge-catalog/' },
      {
        label: 'Converter with steps',
        href: '/knowledge-catalog/number-system-converter-with-steps/',
      },
      {
        label: 'Calculator with solution',
        href: '/knowledge-catalog/number-system-conversion-calculator-with-solution/',
      },
      {
        label: 'Base converter calculator',
        href: '/knowledge-catalog/base-converter-calculator/',
      },
      {
        label: 'Conversion table',
        href: '/knowledge-catalog/number-system-conversion-table/',
      },
      {
        label: 'Conversion PDF',
        href: '/knowledge-catalog/number-system-conversion-pdf/',
      },
    ],
    pageLinks: [
      { label: 'About Us', href: '/about/' },
      { label: 'Contact Us', href: '/contact/' },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms & Conditions', href: '/terms/' },
    ],
    analytics: 'Analytics settings',
    copyright: '© 2026 NumSys Converter. All rights reserved.',
    lastUpdated: 'Last updated',
    poweredBy: 'Built and maintained by',
  },
  es: {
    pitch: 'Un conversor de sistemas numéricos claro y rápido, pensado para entender cada paso.',
    learnHeading: 'Aprender',
    pagesHeading: 'Páginas',
    legalHeading: 'Legal',
    languagesHeading: 'Idiomas',
    learnLinks: [
      { label: 'Catálogo de guías', href: '/knowledge-catalog/' },
      {
        label: 'Conversor con pasos',
        href: '/knowledge-catalog/number-system-converter-with-steps/',
      },
      {
        label: 'Calculadora con solución',
        href: '/knowledge-catalog/number-system-conversion-calculator-with-solution/',
      },
      {
        label: 'Calculadora de bases',
        href: '/knowledge-catalog/base-converter-calculator/',
      },
      {
        label: 'Tabla de conversión',
        href: '/knowledge-catalog/number-system-conversion-table/',
      },
      {
        label: 'PDF de conversión',
        href: '/knowledge-catalog/number-system-conversion-pdf/',
      },
    ],
    pageLinks: [
      { label: 'Sobre nosotros', href: '/about/' },
      { label: 'Contacto', href: '/contact/' },
    ],
    legalLinks: [
      { label: 'Política de privacidad', href: '/privacy-policy/' },
      { label: 'Términos y condiciones', href: '/terms/' },
    ],
    analytics: 'Ajustes de analítica',
    copyright: '© 2026 NumSys Converter. Todos los derechos reservados.',
    lastUpdated: 'Última actualización',
    poweredBy: 'Desarrollado por',
  },
  fr: {
    pitch: 'Un convertisseur de systèmes de numération clair et rapide, conçu pour montrer chaque étape.',
    learnHeading: 'Apprendre',
    pagesHeading: 'Pages',
    legalHeading: 'Mentions légales',
    languagesHeading: 'Langues',
    learnLinks: [
      { label: 'Catalogue de guides', href: '/knowledge-catalog/' },
      {
        label: 'Convertisseur avec étapes',
        href: '/knowledge-catalog/number-system-converter-with-steps/',
      },
      {
        label: 'Calculatrice avec solution',
        href: '/knowledge-catalog/number-system-conversion-calculator-with-solution/',
      },
      {
        label: 'Calculatrice de bases',
        href: '/knowledge-catalog/base-converter-calculator/',
      },
      {
        label: 'Tableau de conversion',
        href: '/knowledge-catalog/number-system-conversion-table/',
      },
      {
        label: 'PDF de conversion',
        href: '/knowledge-catalog/number-system-conversion-pdf/',
      },
    ],
    pageLinks: [
      { label: 'À propos', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
    ],
    legalLinks: [
      { label: 'Politique de confidentialité', href: '/privacy-policy/' },
      { label: 'Conditions générales', href: '/terms/' },
    ],
    analytics: 'Paramètres d’analyse',
    copyright: '© 2026 NumSys Converter. Tous droits réservés.',
    lastUpdated: 'Dernière mise à jour',
    poweredBy: 'Développé par',
  },
  de: {
    pitch: 'Ein klarer, schneller Zahlensystem-Umrechner, der jeden Rechenschritt zeigt.',
    learnHeading: 'Lernen',
    pagesHeading: 'Seiten',
    legalHeading: 'Rechtliches',
    languagesHeading: 'Sprachen',
    learnLinks: [
      { label: 'Wissenskatalog', href: '/knowledge-catalog/' },
      {
        label: 'Umrechner mit Rechenweg',
        href: '/knowledge-catalog/number-system-converter-with-steps/',
      },
      {
        label: 'Rechner mit Lösungsweg',
        href: '/knowledge-catalog/number-system-conversion-calculator-with-solution/',
      },
      {
        label: 'Basisrechner',
        href: '/knowledge-catalog/base-converter-calculator/',
      },
      {
        label: 'Umrechnungstabelle',
        href: '/knowledge-catalog/number-system-conversion-table/',
      },
      {
        label: 'Umrechnungs-PDF',
        href: '/knowledge-catalog/number-system-conversion-pdf/',
      },
    ],
    pageLinks: [
      { label: 'Über uns', href: '/about/' },
      { label: 'Kontakt', href: '/contact/' },
    ],
    legalLinks: [
      { label: 'Datenschutzerklärung', href: '/privacy-policy/' },
      { label: 'Allgemeine Geschäftsbedingungen', href: '/terms/' },
    ],
    analytics: 'Analyse-Einstellungen',
    copyright: '© 2026 NumSys Converter. Alle Rechte vorbehalten.',
    lastUpdated: 'Zuletzt aktualisiert',
    poweredBy: 'Bereitgestellt von',
  },
  pt: {
    pitch: 'Um conversor de sistemas numéricos claro e rápido, criado para mostrar cada passo.',
    learnHeading: 'Aprender',
    pagesHeading: 'Páginas',
    legalHeading: 'Legal',
    languagesHeading: 'Idiomas',
    learnLinks: [
      { label: 'Catálogo de guias', href: '/knowledge-catalog/' },
      {
        label: 'Conversor com passos',
        href: '/knowledge-catalog/number-system-converter-with-steps/',
      },
      {
        label: 'Calculadora com solução',
        href: '/knowledge-catalog/number-system-conversion-calculator-with-solution/',
      },
      {
        label: 'Calculadora de bases',
        href: '/knowledge-catalog/base-converter-calculator/',
      },
      {
        label: 'Tabela de conversão',
        href: '/knowledge-catalog/number-system-conversion-table/',
      },
      {
        label: 'PDF de conversão',
        href: '/knowledge-catalog/number-system-conversion-pdf/',
      },
    ],
    pageLinks: [
      { label: 'Sobre nós', href: '/about/' },
      { label: 'Contacto', href: '/contact/' },
    ],
    legalLinks: [
      { label: 'Política de privacidade', href: '/privacy-policy/' },
      { label: 'Termos e condições', href: '/terms/' },
    ],
    analytics: 'Definições de análise',
    copyright: '© 2026 NumSys Converter. Todos os direitos reservados.',
    lastUpdated: 'Última atualização',
    poweredBy: 'Desenvolvido por',
  },
  it: {
    pitch: 'Un convertitore di sistemi numerici chiaro e veloce, pensato per mostrare ogni passaggio.',
    learnHeading: 'Imparare',
    pagesHeading: 'Pagine',
    legalHeading: 'Note legali',
    languagesHeading: 'Lingue',
    learnLinks: [
      { label: 'Catalogo delle guide', href: '/knowledge-catalog/' },
      {
        label: 'Convertitore con passaggi',
        href: '/knowledge-catalog/number-system-converter-with-steps/',
      },
      {
        label: 'Calcolatrice con soluzione',
        href: '/knowledge-catalog/number-system-conversion-calculator-with-solution/',
      },
      {
        label: 'Calcolatrice di basi',
        href: '/knowledge-catalog/base-converter-calculator/',
      },
      {
        label: 'Tabella di conversione',
        href: '/knowledge-catalog/number-system-conversion-table/',
      },
      {
        label: 'PDF di conversione',
        href: '/knowledge-catalog/number-system-conversion-pdf/',
      },
    ],
    pageLinks: [
      { label: 'Chi siamo', href: '/about/' },
      { label: 'Contatti', href: '/contact/' },
    ],
    legalLinks: [
      { label: 'Informativa sulla privacy', href: '/privacy-policy/' },
      { label: 'Termini e condizioni', href: '/terms/' },
    ],
    analytics: 'Impostazioni analisi',
    copyright: '© 2026 NumSys Converter. Tutti i diritti riservati.',
    lastUpdated: 'Ultimo aggiornamento',
    poweredBy: 'Realizzato da',
  },
};
