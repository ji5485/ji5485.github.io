import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import BlogPostItem from 'components/templates/BlogPostItem';
import { FluidObject } from 'gatsby-image';

interface BlogPostItemTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        categories: string[];
        thumbnail: {
          childImageSharp: {
            fluid: FluidObject;
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
            fluid(maxWidth: 768, maxHeight: 450, fit: FILL) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;