// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bigdata-Blog',
  tagline: '大数据入门及相关资料',
  url: 'https://sophiadata.github.io',
  baseUrl: '/Bigdata_Blog_Website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SophiaData', // Usually your GitHub org/user name.
  projectName: 'Bigdata_Blog_Website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ["zh-Hans", "en"],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/docs",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          postsPerPage: 5,
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  plugins: [
      ['docusaurus-plugin-yandex-metrica', {
        counterID: '91340636',
      }],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'document',
                path: 'document',
                routeBasePath: '/document',
                include: ['*.md'],
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
   ],

     themes: [
       [
         "@easyops-cn/docusaurus-search-local",
         /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
         ({
           hashed: true,
           language: ["en", "zh"],
           highlightSearchTermsOnTargetPage: true,
           explicitSearchResultPath: true,
         }),
       ],
     ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bigdata_Blog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/overview', label: 'Home Page', position: 'left'},
          {to: '/Note/blog recommend', label: 'Note', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/SophiaData/Bigdata_Blog_Website',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [
            {
             href: 'https://bigdata-note.readthedocs.io/en/latest/',
             label: 'Old', // Sphinx + GitHub + Read the doc 构建博客的存档 (停止更新)
                  },
               ],
            },
         ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Issues',
                href: 'https://github.com/SophiaData/Bigdata_Blog_Website/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SophiaData/Bigdata_Blog_Website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} sophiadata, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java','scala'],
      },
    }),
};

module.exports = config;
