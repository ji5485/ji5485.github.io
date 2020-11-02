import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import { CategoryListProps } from 'components/molecules/CategoryList';
import { BlogCategoryListProps } from 'components/organisms/BlogCategoryList';
import { PaginationProps } from 'components/organisms/Pagination';
import BlogCategory from 'components/templates/BlogCategory';

interface BlogCategoryTemplateProps {
  data: {
    filtered?: {
      edges: BlogCategoryListProps.list;
    };
    unfiltered?: {
      edges: BlogCategoryListProps.list;
    };
  };
  pageContext:
    | PaginationProps
    | CategoryListProps
    | { category: string; selectedCategory: boolean };
}

const BlogCategoryTemplate: FunctionComponent<BlogCategoryTemplateProps> = function ({
  data,
  pageContext: { selectedCategory, ...restPageContext },
}) {
  const list: BlogCategoryListProps.list = selectedCategory ? data.filtered : data.unfiltered;

  return (
    <Layout>
      <BlogCategory list={list.edges} context={restPageContext} />
    </Layout>
  );
};

export default BlogCategoryTemplate;

export const blogCategoryQuery = graphql`
  query blogListQuery($skip: Int!, $selectedCategory: Boolean!, $category: String) {
    filtered: allMarkdownRemark(
      filter: { frontmatter: { categories: { regex: $category } } }
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      skip: $skip
      limit: 10
    ) @include(if: $selectedCategory) {
      edges {
        node {
          frontmatter {
            title
            summary
            date
            thumbnail {
              childImageSharp {
                resize(fit: COVER, width: 180, height: 130) {
                  src
                }
              }
            }
            categories
          }
          fields {
            slug
          }
        }
      }
    }

    unfiltered: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      skip: $skip
      limit: 10
    ) @skip(if: $selectedCategory) {
      edges {
        node {
          frontmatter {
            title
            summary
            date
            thumbnail {
              childImageSharp {
                resize(fit: COVER, width: 180, height: 130) {
                  src
                }
              }
            }
            categories
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
