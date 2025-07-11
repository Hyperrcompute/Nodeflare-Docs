// @ts-check

const config = {
  title: 'Hyperrcompute',
  tagline: 'Your simple P2P tunnel and gpu sharing tool',
  url: 'http://localhost',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  organizationName: 'hyperrcompute',
  projectName: 'hyperrcompute-docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          routeBasePath: '/',
          // Add this to ensure sidebar is shown
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          // homePageId: 'welcome/welcome',

        },
        // blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', 
        disableSwitch: false, 
        respectPrefersColorScheme: false, 
      },
      docs: {
        sidebar: {
          // hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Hyperrcompute',
        logo: {
          alt: 'Hyperrcompute Logo',
          src: 'img/logo.png',
          width: 32,
          height: 32,
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docs',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {
          //   href: 'https://github.com/hyperrcompute/hyperrcompute-docs',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         { label: 'Welcome', to: '/' },
      //         { label: 'Install Guide', to: '/Install-npm' },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/hyperrcompute/hyperrcompute-docs',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Hyperrcompute.`,
      // },
    }),
};

module.exports = config;
