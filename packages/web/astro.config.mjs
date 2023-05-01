import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: '../../dist/packages/web',
  site: 'https://sykofizz.hanz.lol',
  integrations: [react(), sitemap(), tailwind()],
});
