// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://for-react-developers.avetavos.com',
  base: '/flutter',
  output: 'static',
  integrations: [starlight({
      title: 'Flutter for React Developers',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/flutter/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/flutter/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/flutter/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/flutter/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#02569B' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Flutter for React Developers" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/flutter/sw.js',{scope:'/flutter/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/flutter-for-react-developers' }],
      sidebar: [
        { label: 'Introduction & Setup', items: [{ autogenerate: { directory: 'intro' } }] },
        { label: 'React → Flutter: Same vs Different', items: [{ autogenerate: { directory: 'mental-model' } }] },
        { label: 'Widgets & UI', items: [{ autogenerate: { directory: 'widgets' } }] },
        { label: 'State & Lifecycle', items: [{ autogenerate: { directory: 'state-lifecycle' } }] },
        { label: 'Handling Data', items: [{ autogenerate: { directory: 'data' } }] },
        { label: 'Navigation & Routing', items: [{ autogenerate: { directory: 'navigation' } }] },
        { label: 'Tooling, Testing & Deployment', items: [{ autogenerate: { directory: 'tooling' } }] },
      ],
      }), preact()],
});