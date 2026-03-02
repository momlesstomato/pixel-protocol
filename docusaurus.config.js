// @ts-check

import {themes as prismThemes} from 'prism-react-renderer'

const organizationName = process.env.GH_ORG ?? 'MomlessTomato'
const projectName = process.env.GH_REPO ?? 'pixel-protocol'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pixel Protocol',
  tagline: 'Public packet specification for Nitro-compatible services',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Pixel Protocol',
        logo: {
          alt: 'Pixel Protocol',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'reference/packet-composition',
            position: 'left',
            label: 'Packet Composition',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Protocol',
          },
          {
            href: 'https://github.com/MomlessTomato/pixel-protocol',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Specification',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Packet Composition',
                to: '/docs/reference/packet-composition',
              },
              {
                label: 'Protocol',
                to: '/docs/protocol/packet-catalog',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MomlessTomato/pixel-protocol',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} · Created with love by <a href="https://github.com/MomlessTomato" target="_blank" rel="noopener noreferrer">MomlessTomato</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config
