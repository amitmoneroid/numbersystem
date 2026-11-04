// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'pt', 'it'],
    routing: {
      // English keeps the un-prefixed URLs that are already indexed.
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
