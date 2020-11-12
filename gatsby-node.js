/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { project, activity } = require('./static/PortfolioList.json');

const splitOnUpper = function (str) {
  const lowerCaseArr = str.split(/(?=[A-Z])/).reduce((acc, cur) => {
    acc.push(cur.toLowerCase());
    return acc;
  }, []);

  return lowerCaseArr.join('-');
};

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
        store: path.resolve(__dirname, 'src/store'),
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
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );

  // Get All Category Through Markdown Files
  const getAllCategoryList = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                categories
              }
            }
          }
        }
      }
    `,
  );

  // Handle errors
  if (getAllMarkdownQuery.errors || getAllCategoryList.errors) {
    reporter.panicOnBuild(`Error while running transform markdown to page`);
    return;
  }

  // Import Template Files for Blog and Portfolio Item Page
  const BlogPostItemTemplate = path.resolve(
    __dirname,
    'src/page_template/BlogPostItemTemplate.tsx',
  );
  const BlogPostListTemplate = path.resolve(
    __dirname,
    'src/page_template/BlogPostListTemplate.tsx',
  );
  const PortfolioDetailTemplate = path.resolve(
    __dirname,
    'src/page_template/PortfolioDetailTemplate.tsx',
  );

  // Make Category Count Object
  const categoryCount = getAllCategoryList.data.allMarkdownRemark.edges.reduce(
    (
      acc,
      {
        node: {
          frontmatter: { categories },
        },
      },
    ) => {
      categories.forEach((category) => {
        if (!acc[category]) acc[category] = 1;
        else acc[category]++;
      });

      return acc;
    },
    {},
  );

  // Create Post List
  const allPost = getAllMarkdownQuery.data.allMarkdownRemark.edges;
  const totalPage = Math.ceil(allPost.length / 10);

  for (let index = 1; index <= totalPage; index++) {
    createPage({
      path: `/blog/${index}`,
      component: BlogPostListTemplate,
      context: {
        skip: 10 * (index - 1),
        totalPage,
        currentPage: index,
        selectedCategory: false,
        categories: categoryCount,
      },
    });
  }

  // Create Post List By Category
  Object.keys(categoryCount).forEach((category) => {
    const allCategoryPost = categoryCount[category];
    const totalCategoryPage = Math.ceil(allCategoryPost / 10);

    for (let index = 1; index <= totalCategoryPage; index++) {
      createPage({
        path: `/blog/${splitOnUpper(category)}/${index}`,
        component: BlogPostListTemplate,
        context: {
          skip: 10 * (index - 1),
          totalPage: totalCategoryPage,
          currentPage: index,
          categories: categoryCount,
          selectedCategory: true,
          category: `/${category}/`,
        },
      });
    }
  });

  // Create Pages Through Markdown Files
  allPost.forEach(
    (
      {
        node: {
          fields: { slug },
        },
      },
      index,
    ) => {
      createPage({
        path: slug,
        component: BlogPostItemTemplate,
        context: {
          slug,
          prev:
            index == 0
              ? null
              : {
                  slug: allPost[index - 1].node.fields.slug,
                  title: allPost[index - 1].node.frontmatter.title,
                },
          next:
            index == allPost.length - 1
              ? null
              : {
                  slug: allPost[index + 1].node.fields.slug,
                  title: allPost[index + 1].node.frontmatter.title,
                },
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
