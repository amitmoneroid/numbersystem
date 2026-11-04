// Localisation routing. The default locale keeps the un-prefixed URLs that are
// already indexed; every other locale is served from /<locale>/.
//
// Only paths listed in `translatedPaths` have a translated counterpart. That
// set drives both the hreflang cluster in Layout.astro and the language
// switcher, so alternate links never point at a page that does not exist.

export const SITE_URL = 'https://numbersystemconverter.com';

export const locales = ['en', 'es', 'fr', 'de', 'pt', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export interface LocaleMeta {
  code: Locale;
  /** Value used for <html lang> and the hreflang attribute. */
  htmlLang: string;
  /** Endonym shown in the language switcher. */
  nativeName: string;
  englishName: string;
  /** Open Graph locale, e.g. es_ES. */
  ogLocale: string;
  /** Canonical path of the localised home page. */
  path: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: {
    code: 'en',
    htmlLang: 'en',
    nativeName: 'English',
    englishName: 'English',
    ogLocale: 'en_US',
    path: '/',
  },
  es: {
    code: 'es',
    htmlLang: 'es',
    nativeName: 'Español',
    englishName: 'Spanish',
    ogLocale: 'es_ES',
    path: '/es/',
  },
  fr: {
    code: 'fr',
    htmlLang: 'fr',
    nativeName: 'Français',
    englishName: 'French',
    ogLocale: 'fr_FR',
    path: '/fr/',
  },
  de: {
    code: 'de',
    htmlLang: 'de',
    nativeName: 'Deutsch',
    englishName: 'German',
    ogLocale: 'de_DE',
    path: '/de/',
  },
  pt: {
    code: 'pt',
    htmlLang: 'pt',
    nativeName: 'Português',
    englishName: 'Portuguese',
    ogLocale: 'pt_BR',
    path: '/pt/',
  },
  it: {
    code: 'it',
    htmlLang: 'it',
    nativeName: 'Italiano',
    englishName: 'Italian',
    ogLocale: 'it_IT',
    path: '/it/',
  },
};

export const nonDefaultLocales = locales.filter(
  (locale): locale is Exclude<Locale, 'en'> => locale !== defaultLocale,
);

/** English paths that exist in every locale. Extend when a page is translated. */
export const translatedPaths = new Set<string>(['/']);

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Normalise any pathname to the canonical English path used as the key. */
export function canonicalPath(pathname: string): string {
  let path = pathname.split('?')[0].split('#')[0];
  for (const locale of nonDefaultLocales) {
    const prefix = `/${locale}`;
    if (path === prefix || path === `${prefix}/`) return '/';
    if (path.startsWith(`${prefix}/`)) {
      path = path.slice(prefix.length);
      break;
    }
  }
  if (!path.startsWith('/')) path = `/${path}`;
  if (!path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path)) path = `${path}/`;
  return path;
}

/** Build the URL path for `locale`, e.g. localizePath('/', 'es') -> '/es/'. */
export function localizePath(path: string, locale: Locale): string {
  const canonical = canonicalPath(path);
  if (locale === defaultLocale) return canonical;
  return `/${locale}${canonical === '/' ? '/' : canonical}`;
}

export function absoluteUrl(path: string, locale: Locale): string {
  return `${SITE_URL}${localizePath(path, locale)}`;
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

export interface HreflangCluster extends AlternateLink {
  locale: Locale;
}

/**
 * Complete hreflang cluster (self-referencing, every locale, plus x-default)
 * for a translated path. Returns an empty array for English-only pages.
 */
export function hreflangCluster(path: string): HreflangCluster[] {
  const canonical = canonicalPath(path);
  if (!translatedPaths.has(canonical)) return [];

  const links: HreflangCluster[] = locales.map((locale) => ({
    locale,
    hreflang: localeMeta[locale].htmlLang,
    href: absoluteUrl(canonical, locale),
  }));

  links.push({
    locale: defaultLocale,
    hreflang: 'x-default',
    href: absoluteUrl(canonical, defaultLocale),
  });

  return links;
}

/** Locale-aware href for the language switcher, falling back to the home page. */
export function switchHref(pathname: string, locale: Locale): string {
  const canonical = canonicalPath(pathname);
  if (translatedPaths.has(canonical)) return localizePath(canonical, locale);
  return localeMeta[locale].path;
}
