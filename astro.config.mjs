// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/flutter-for-react-developers',
  output: 'static',
  integrations: [starlight({
      title: 'Flutter for React Developers',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/flutter-for-react-developers/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/flutter-for-react-developers/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/flutter-for-react-developers/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/flutter-for-react-developers/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#02569B' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Flutter for React Developers" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/flutter-for-react-developers/sw.js',{scope:'/flutter-for-react-developers/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/flutter-for-react-developers' }],
      sidebar: [
        { label: 'Introduction & Setup', collapsed: true, items: [{ autogenerate: { directory: 'intro' } }] },
        { label: 'React → Flutter: Same vs Different', collapsed: true, items: [{ autogenerate: { directory: 'mental-model' } }] },
        { label: 'Widgets & UI', collapsed: true, items: [{ autogenerate: { directory: 'widgets' } }] },
        { label: 'State & Lifecycle', collapsed: true, items: [{ autogenerate: { directory: 'state-lifecycle' } }] },
        { label: 'Handling Data', collapsed: true, items: [{ autogenerate: { directory: 'data' } }] },
        { label: 'Navigation & Routing', collapsed: true, items: [{ autogenerate: { directory: 'navigation' } }] },
        { label: 'Tooling, Testing & Deployment', collapsed: true, items: [{ autogenerate: { directory: 'tooling' } }] },
      ],
      }), preact()],
});