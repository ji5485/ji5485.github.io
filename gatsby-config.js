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
    title: '',
    author: 'Ju Hyeon Do',
    description: '',
    siteUrl: 'https://ji5485.github.io/',
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
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        /**
         * no need to specify the other options, since they will be merged with this
         */
        feeds: [
          {
            title: 'Feed',
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(({ node }) => {
                return {
                  ...node.frontmatter,
                  description: node.excerpt,
                  url: site.siteMetadata.siteUrl + node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': node.html }],
                };
              });
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      frontmatter {
                        path
                        title
                        date
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: 'rss.xml',
          },
        ],
      },
    },
    // TODO: Using SiteMap Plugin for Search Engine Optimization
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/about', '/portfolio'],
      },
    },
  ],
};
