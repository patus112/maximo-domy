import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://patus112.github.io';

function normalizeBase(value) {
  if (!value || value === '/') return '/';
  const trimmed = String(value).replace(/^\/+|\/+$/g, '');
  return `/${trimmed}/`;
}

const base = normalizeBase(process.env.SITE_BASE || '/maximo-domy/');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  prefetch: false,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
