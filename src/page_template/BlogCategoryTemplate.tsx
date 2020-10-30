import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import { CategoryListProps } from 'components/molecules/CategoryList';
import { BlogCategoryListProps } from 'components/organisms/BlogCategoryList';
import { PaginationProps } from 'components/organisms/Pagination';
import BlogCategory from 'components/templates/BlogCategory';

interface BlogCategoryTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: BlogCategoryListProps.list;
    };
  };
  pageContext: PaginationProps | CategoryListProps;
}

const BlogCategoryTemplate: FunctionComponent<BlogCategoryTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext,
}) {
  return (
    <Layout>
      <BlogCategory list={edges} context={pageContext} />
    </Layout>
  );
};

export default BlogCategoryTemplate;

export const blogCategoryQuery = graphql`
  query blogListQuery($skip: Int!, $category: String = "//") {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { regex: $category } } },
      sort: { fields: [frontmatter___date], order: DESC },
      skip: $skip)
    {
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
