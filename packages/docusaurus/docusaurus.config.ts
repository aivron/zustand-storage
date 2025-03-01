import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Zustand Storage', // Site title used in the browser tab and SEO
  tagline: 'Persistent state management for React apps, powered by Zustand.', // A concise, SEO-friendly tagline
  favicon: 'img/favicon.ico',

  // Production URL of your site
  url: 'https://your-docusaurus-site.example.com', // Replace with your actual production URL
  baseUrl: '/',

  // GitHub pages deployment config (if applicable)
  organizationName: 'aivron',
  projectName: 'zustand-storage',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // i18n config
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // Uncomment and update the editUrl if you want the "edit this page" links to show.
          // editUrl: 'https://github.com/aivron/zustand-storage/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: {
          path: 'src/pages',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Additional metadata for improved SEO and searchability
    metadata: [
      {
        name: 'description',
        content:
          'Zustand Storage is a state management library for React that extends Zustand with persistent storage, middleware support, and optional database integration. Ideal for user preferences, shopping carts, and more.',
      },
      {
        name: 'keywords',
        content: 'zustand, storage, react, state management, persistent state, database integration, middleware, type safety',
      },
      // Optionally add OpenGraph or Twitter card meta tags here for enhanced social sharing:
      {
        name: 'og:title',
        content: 'Zustand Storage',
      },
      {
        name: 'og:description',
        content:
          'A powerful state management library for React that offers persistent storage and database integration, built on top of Zustand.',
      },
      {
        name: 'og:image',
        content: 'https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    // Social sharing image for OpenGraph/Twitter cards
    image: 'https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png',
    navbar: {
      title: 'Zustand Storage',
      logo: {
        alt: 'Zustand Storage Logo',
        src: 'https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/aivron/zustand-storage',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      appId: '6H60C6TYN9',
      apiKey: 'd4cb321b870170bc7a5b579d8f65ecad',
      indexName: 'zustand-storage-1.0.0',
      contextualSearch: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/zustand-storage',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/', // Update with your actual Discord invite URL
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/aivron/zustand-storage',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aivron, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
