/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const PortfolioList = require('./static/PortfolioList.json');

const splitOnUpper = function (str) {
  const lowerCaseArr = str.split(/(?=[A-Z])/).reduce((acc, cur) => {
    acc.push(cur.toLowerCase());
    return acc;
  }, []);

  return lowerCaseArr.join('-');
};

const shortId = function () {
  return Math.random().toString(36).substring(2);
};

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig();
  const output = config.output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        utilities: path.resolve(__dirname, 'src/utils'),
        static: path.resolve(__dirname, 'static'),
      },
    },
  });
};

// Create Custom GrpahQL Schema for Transformation Image Link to Image Sharp in Portfolio Data
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const typeDefs = [
    schema.buildObjectType({
      name: 'PortfolioMetadata',
      fields: {
        type: 'String!',
        title: 'String!',
        content: 'String!',
        image: {
          type: 'ImageSharp!',
          resolve: async (source, args, context) => {
            const img = await context.nodeModel.runQuery({
              type: 'ImageSharp',
              query: {
                filter: {
                  fluid: {
                    originalName: { eq: source.image },
                  },
                },
              },
            });

            return img[0];
          },
        },
        detail: 'PortfolioDetailInfo',
      },
      interfaces: ['Node'],
      extensions: {
        infer: true,
      },
    }),
    schema.buildObjectType({
      name: 'PortfolioDetailInfo',
      fields: {
        subTitle: 'String!',
        period: 'String!',
        description: 'String!',
        review: 'String!',
        extraImage: {
          type: '[ImageSharp]',
          resolve: async (source, args, context) => {
            const sharpImageArray = await Promise.all(
              source.extraImage.map(async (fileName) => {
                const img = await context.nodeModel.runQuery({
                  type: 'ImageSharp',
                  query: {
                    filter: {
                      fluid: {
                        originalName: { eq: fileName },
                      },
                    },
                  },
                });

                return img[0];
              }),
            );

            return sharpImageArray;
          },
        },
      },
      interfaces: ['Node'],
      extensions: {
        infer: true,
      },
    }),
  ];

  createTypes(typeDefs);
};

// Push Portfolio Data From Static File To GraphQL
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const generatePortfolioNode = (type) => {
    PortfolioList[type].forEach((portfolioItem) => {
      const { extraInfo, ...portfolioMetadata } = portfolioItem;

      const detailInfoNode = {
        id: createNodeId(`Portfolio-Detail-Info-${shortId()}`),
        ...extraInfo,
        internal: {
          type: 'PortfolioDetailInfo',
          contentDigest: createContentDigest(extraInfo),
        },
      };

      const metadataNode = {
        id: createNodeId(`Portfolio-${shortId()}`),
        type,
        ...portfolioMetadata,
        detail: detailInfoNode,
        internal: {
          type: 'PortfolioMetadata',
          contentDigest: createContentDigest(portfolioMetadata),
        },
      };

      actions.createNode(detailInfoNode);
      actions.createNode(metadataNode);
    });
  };

  generatePortfolioNode('project');
  generatePortfolioNode('activity');
};

// Make a Slug each Posts
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: `/post${slug}` });
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

  // Get All Portfolio Items
  const getAllPortfolioItem = await graphql(
    `
      {
        allPortfolioMetadata {
          edges {
            node {
              id
              type
            }
          }
        }
      }
    `,
  );

  // Handle errors
  if (getAllMarkdownQuery.errors || getAllCategoryList.errors || getAllPortfolioItem.errors) {
    reporter.panicOnBuild(`Error while running query`);
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
            index === 0
              ? null
              : {
                  slug: allPost[index - 1].node.fields.slug,
                  title: allPost[index - 1].node.frontmatter.title,
                },
          next:
            index === allPost.length - 1
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
  const distributePortfolioByType = (portfolioType) =>
    getAllPortfolioItem.data.allPortfolioMetadata.edges.reduce(
      (portfolioIdArray, { node: { id, type } }) => {
        if (type === portfolioType) portfolioIdArray.push(id);
        return portfolioIdArray;
      },
      [],
    );

  const portfolioIdList = {
    project: distributePortfolioByType('project'),
    activity: distributePortfolioByType('activity'),
  };

  const generatePortfolioPages = (type) => {
    portfolioIdList[type].forEach((portfolioId, index) => {
      createPage({
        path: `/portfolio/${type}/${index + 1}`,
        component: PortfolioDetailTemplate,
        context: {
          portfolioId,
        },
      });
    });
  };

  generatePortfolioPages('project');
  generatePortfolioPages('activity');
};
