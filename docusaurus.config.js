const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Audanika',
  tagline: 'making music',
  url: 'https://Bioskyscode.github.io',
  baseUrl: '/docusaurus-audanika/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/faviconi.ico',
  organizationName: 'Bioskyscode', // Usually your GitHub org/user name.
  projectName: 'docusaurus-audanika', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Audanika',
        logo: {
          alt: 'My Site Logo',
          src: 'img/audanika_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Newsletter',
                href: 'https://audanika.com/en/newsletter/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/user/Audanika',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/audanika',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Privacy',
                href: "https://audanika.com/en/privacy/",
              },
              {
                label: 'Support',
                href: 'https://audanika.com/en/support/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Audanika.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
