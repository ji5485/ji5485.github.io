import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import { CategoryListProps } from 'components/molecules/CategoryList';
import { PostListProps } from 'components/organisms/PostList';
import { PaginationProps } from 'components/organisms/Pagination';
import BlogPostList from 'components/templates/BlogPostList';

interface BlogPostListTemplateProps {
  data: {
    filtered?: {
      edges: PostListProps;
    };
    unfiltered?: {
      edges: PostListProps;
    };
  };
  pageContext: CategoryListProps &
    PaginationProps & {
      category: string;
      selectedCategory: boolean;
    };
}

const BlogPostListTemplate: FunctionComponent<BlogPostListTemplateProps> = function ({
  data,
  pageContext: { selectedCategory, ...restPageContext },
}) {
  const list = selectedCategory ? data.filtered : data.unfiltered;

  return (
    <Layout
      title="Dev Log List"
      description="개발자 Hyun이 지금까지 활동하면서 작성한 Dev Log 목록입니다."
    >
      <BlogPostList list={list.edges} context={restPageContext} />
    </Layout>
  );
};

export default BlogPostListTemplate;

export const blogCategoryQuery = graphql`
  fragment MarkdownData on MarkdownRemark {
    frontmatter {
      title
      summary
      date
      categories
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 180, maxHeight: 130, fit: INSIDE, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    fields {
      slug
    }
  }

  query blogListQuery($skip: Int!, $selectedCategory: Boolean!, $category: String) {
    filtered: allMarkdownRemark(
      filter: { frontmatter: { categories: { regex: $category } } }
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      skip: $skip
      limit: 10
    ) @include(if: $selectedCategory) {
      edges {
        node {
          ...MarkdownData
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
          ...MarkdownData
        }
      }
    }
  }
`;
