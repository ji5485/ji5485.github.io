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
  const BlogTemplate = path.resolve(__dirname, 'src/page_template/BlogItemTemplate.tsx');
  const PortfolioTemplate = path.resolve(__dirname, 'src/page_template/PortfolioItemTemplate.tsx');

  // Create Pages Through Markdown Files
  getAllMarkdownQuery.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {
      createPage({
        path: slug,
        component: BlogTemplate,
        context: {
          slug,
        },
      });
    },
  );

  // Create Portfolio Item Pages
  project.forEach(({ title, content, image }, index) => {
    createPage({
      path: `/portfolio/project/${index + 1}`,
      component: PortfolioTemplate,
      context: {
        title,
        content,
        image,
      },
    });
  });

  activity.forEach(({ title, content, image }, index) => {
    createPage({
      path: `/portfolio/activity/${index + 1}`,
      component: PortfolioTemplate,
      context: {
        title,
        content,
        image,
      },
    });
  });
};
