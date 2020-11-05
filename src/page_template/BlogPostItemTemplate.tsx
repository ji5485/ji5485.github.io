import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import BlogPostItem from 'components/templates/BlogPostItem';

interface BlogPostItemTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        categories: string[];
        thumbnail: {
          childImageSharp: {
            resize: {
              tracedSVG: string;
            };
          };
        };
      };
      html: string;
    };
  };
}

const BlogPostItemTemplate: FunctionComponent<BlogPostItemTemplateProps> = function ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) {
  return (
    <Layout>
      <BlogPostItem postInfo={frontmatter} html={html} />
    </Layout>
  );
};

export default BlogPostItemTemplate;

export const blogQuery = graphql`
  query getBlogData($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        categories
        thumbnail {
          childImageSharp {
            resize(fit: COVER, width: 768, height: 500) {
              tracedSVG
            }
          }
        }
      }
    }
  }
`;
