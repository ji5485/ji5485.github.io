/* eslint-disable @typescript-eslint/camelcase */
const gatsbyRemarkPlugins = [
  {
    resolve: 'gatsby-remark-smartypants',
    options: {
      dashes: 'oldschool',
    },
  },
  {
    resolve: 'gatsby-remark-prismjs',
    options: {
      classPrefix: 'language-',
      inlineCodeMarker: {
        tsx: 'tsx',
      },
      aliases: {},
    },
  },
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: 1200,
    },
  },
  {
    resolve: 'gatsby-remark-copy-linked-files',
    options: {},
  },
  {
    resolve: `gatsby-remark-autolink-headers`,
    options: {
      className: `anchor-header`,
      maintainCase: false,
      removeAccents: true,
      elements: ['h1', 'h2', 'h3'],
    },
  },
];

module.exports = {
  // Gatsby Blog Metadata
  // TODO: Thinking Metadata of My Gatsby Blog
  siteMetadata: {
    title: 'Dev Log of Nickname',
    author: 'Nickname (Ju Hyeon Do)',
    description: '이것저것 배우고 만들기를 좋아하는 주니어 웹 개발자 Nickname의 데브 로그',
    siteUrl: 'https://ji5485.github.io',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: gatsbyRemarkPlugins,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [
          {
            name: 'en',
            filterNodes: (node) => !node.frontmatter || node.frontmatter.draft !== true,
            customEntries: [
              {
                title: 'Another Page',
                content: 'Welcome to page 2',
                path: '/another-page/',
              },
            ],
          },
        ],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'path', store: true },
          { name: 'content' },
          { name: 'tags' },
        ],
        resolvers: {
          Mdx: {
            title: (node) => node.frontmatter.title,
            path: (node) => node.frontmatter.path,
            content: (node) => node.rawBody,
            tags: (node) => node.frontmatter.tags,
          },
        },
      },
    },
    // TODO: Using SiteMap Plugin for Search Engine Optimization
    {
      resolve: 'gatsby-plugin-sitemap',
      options: '/sitemap.xml',
      excludes: [`/blog/*`, `/portfolio/project/*`, `/portfolio/activity/*`],
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/about', '/portfolio'],
      },
    },
  ],
};
