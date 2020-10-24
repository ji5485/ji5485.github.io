import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import { BlogCategoryListProps } from 'components/organisms/BlogCategoryList';
import { PaginationProps } from 'components/organisms/Pagination';
import BlogCategory from 'components/templates/BlogCategory';

interface BlogCategoryTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: BlogCategoryListProps.list
    }
  },
  pageContext: PaginationProps
}

const BlogCategoryTemplate: FunctionComponent<BlogCategoryTemplateProps> = function ({
  data: {
    allMarkdownRemark: {
      edges
    }
  },
  pageContext
}) {
  return (
    <Layout>
      <BlogCategory list={edges} pagination={pageContext} />
    </Layout>
  );
};

export default BlogCategoryTemplate;

export const blogCategoryQuery = graphql`
  query blogListQuery($skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
            date
            thumbnail
            categories
          }
          fields {
            slug
          }
        }
      }
    }
  }
`