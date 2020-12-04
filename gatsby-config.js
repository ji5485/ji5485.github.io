/* eslint-disable @typescript-eslint/camelcase */
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
require('dotenv');

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
  siteMetadata: {
    title: 'Dev Log of Hyun',
    author: 'Hyun (Ju Hyeon Do)',
    description: '이것저것 배우고 만들기를 좋아하는 주니어 웹 개발자 Hyun의 데브 로그',
    siteUrl: 'https://ji5485.github.io',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // If you need using Google Optimize, you must append optimizeId, experimentId, variationId.
        trackingId: 'UA-136620069-1',
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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: gatsbyRemarkPlugins,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [`/blog/*`, `/portfolio/project/*`, `/portfolio/activity/*`],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/about', '/portfolio'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ji5485.github.io',
        sitemap: 'https://ji5485.github.io/sitemap.xml',
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
};
