/* eslint-disable node/no-path-concat */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
      maxWidth: 768,
      quality: 100,
      withWebp: true,
      wrapperStyle: () => `
        width: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      `,
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
  {
    resolve: 'gatsby-remark-external-links',
    options: {
      target: '_blank',
      rel: 'nofollow',
    },
  },
]

module.exports = {
  siteMetadata: {
    title: 'Dev Log of Hyun',
    author: 'Hyun (Ju Hyeon Do)',
    description:
      '이것 저것 배우고 만들어보는 것을 좋아하는 주니어 웹 풀스택 개발자 Hyun, 주현도입니다. 성장하는 과정을 Dev Log로 담은 개인 블로그입니다.',
    siteUrl: 'https://ji5485.github.io',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
        anonymize: true,
      },
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'image',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: gatsbyRemarkPlugins,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/about', '/portfolio', '/blog/1'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ji5485.github.io',
        sitemap: 'https://ji5485.github.io/sitemap-pages.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ji5485.github.io`,
      },
    },
  ],
}
