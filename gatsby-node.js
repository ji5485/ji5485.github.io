/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { project, activity } = require('./static/PortfolioList.json');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  if (stage !== 'develop') {
    return;
  }
  const config = getConfig();
  const output = config.output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        utilities: path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};

// Make a Slug each Posts
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: `/blog${slug}` });
  }
};

// Transform Markdown File to Page
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Get All Markdown File For Paging
  const getAllMarkdownQuery = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  // Handle errors
  if (getAllMarkdownQuery.errors) {
    reporter.panicOnBuild(`Error while running transform markdown to page`);
    return;
  }

  // Import Template Files for Blog and Portfolio Item Page
  const BlogItemTemplate = path.resolve(__dirname, 'src/page_template/BlogItemTemplate.tsx');
  const BlogCategoryTemplate = path.resolve(
    __dirname,
    'src/page_templates/BlogCategoryTemplate.tsx',
  );
  const PortfolioDetailTemplate = path.resolve(
    __dirname,
    'src/page_template/PortfolioDetailTemplate.tsx',
  );

  // Create Post List
  const allPost = getAllMarkdownQuery.data.allMarkdownRemark.edges;
  const pageNum = Math.ceil(allPost.length / 10);

  for (let index = 1; index <= pageNum; i++)
    createPage({
      path: index == 1 ? '/blog' : `/blog/${index}`,
      component: BlogCategoryTemplate,
      context: { skip, pageNum, currentPage: index },
    });

  // Create Pages Through Markdown Files
  allPost.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {
      createPage({
        path: slug,
        component: BlogItemTemplate,
        context: {
          slug,
        },
      });
    },
  );

  // Create Portfolio Item Pages
  project.forEach(({ title, image, extraInfo }, index) => {
    createPage({
      path: `/portfolio/project/${index + 1}`,
      component: PortfolioDetailTemplate,
      context: {
        title,
        image,
        ...extraInfo,
      },
    });
  });

  activity.forEach(({ title, image, extraInfo }, index) => {
    createPage({
      path: `/portfolio/activity/${index + 1}`,
      component: PortfolioDetailTemplate,
      context: {
        title,
        image,
        ...extraInfo,
      },
    });
  });
};
