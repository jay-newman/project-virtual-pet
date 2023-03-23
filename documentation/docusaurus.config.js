// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/**
 * The URL or reference to your projects logo!
 * @type {string}
 */
const logo = 'https://raw.githubusercontent.com/Capstone-Projects-2023-Spring/project-virtual-pet/6116807a9936c9e2771169cf9201ded2c160d23e/documentation/static/img/logo.svg';
const logo_small = 'https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/blob/main/documentation/static/img/baby_kitty_hearts.png?raw=true'

const main_template_jira_scripts = () => {
    return [    'https://temple-cis-projects-in-cs.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/1abpwv/b/8/b0105d975e9e59f24a3230a22972a71a/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=ccfbfc66',
]
}

// You can change the title here. The default is the name of the repository.
//const title = ''+process.env.PROJECT_NAME.replaceAll('-',' ').split(' ').map((word) => {
//  return word[0].toUpperCase() + word.substring(1);
//}).join(' ');
const title = 'My Study Buddy';


/** @type {import('@docusaurus/types').Config} */
const config = {
  /*TODO: Change to your project's title and tagline*/
  title: title,
  tagline: 'Stay on top of your academic goals with the help of an adorable new friend!',
  /*Unless you move this website to a seperate repo don't change url and baseurl.*/
  url: 'https://'+process.env.ORG_NAME+'.github.io/',
  baseUrl: '/'+process.env.PROJECT_NAME+'/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.ORG_NAME, // Usually your GitHub org/user name.
  projectName: process.env.PROJECT_NAME, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-live-codeblock','@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          path: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/'+process.env.ORG_NAME+'/'+process.env.PROJECT_NAME+'/edit/main/documentation/',
          // remarkPlugins: [require('mdx-mermaid')],

        },
        // tutorials: {
        //   sidebarPath: require.resolve('./tutorialSidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'using-single-yaml',
            spec: 'static/openapi.yml.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        /*TODO: Change to your project's title*/
        title: title,
        logo: {
          alt: 'Kitty logo',
          src: logo,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },{
            to: '/tutorial/Intro',
            label: 'Docusaurus Tutorial',
            position: 'left',
            activeBaseRegex: `/tutorial/`,
          },
          {
            to: '/resources/Links',
            label: 'Resources',
            position: 'left',
            activeBaseRegex: `/resources/`,
          },
          {
            href: 'https://github.com/'+process.env.ORG_NAME+'/'+process.env.PROJECT_NAME,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Baby kitty',
          src: logo_small,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/'+process.env.ORG_NAME+'/'+process.env.PROJECT_NAME,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${title}, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          zIndex:100,
          background: 'white',
          // scrollOffset: 10,
          // container: '#zoom-container',
          // template: '#zoom-template',
        },
      },

    }),
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resources',
        path: 'resources',
        routeBasePath: 'resources',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },

    ],
    [
      "docusaurus2-dotenv-2",
      {
        systemvars: true,
      },
    ],
    'plugin-image-zoom',


  ],
  scripts:['https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
      ...main_template_jira_scripts()
  ],
};
console.log(config.scripts)
module.exports = config;
