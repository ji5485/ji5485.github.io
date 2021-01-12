import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { OtherItemInfo } from 'components/organisms/PostItemFoot';
import Layout from 'components/templates/Layout';
import BlogPostItem from 'components/templates/BlogPostItem';
import { FluidObject } from 'gatsby-image';

interface BlogPostItemTemplateProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
        summary: string;
        categories: string[];
        thumbnail: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
      };
      tableOfContents: string;
    };
    site: {
      siteMetadata: {
        siteUrl: string;
      };
    };
  };
  pageContext: {
    prev: OtherItemInfo | null;
    next: OtherItemInfo | null;
    slug: string;
  };
}

const BlogPostItemTemplate: FunctionComponent<BlogPostItemTemplateProps> = function ({
  data: {
    markdownRemark: { html, frontmatter, tableOfContents },
    site: {
      siteMetadata: { siteUrl },
    },
  },
  pageContext: { prev, next, slug },
}) {
  const PostItemMetaData = {
    title: frontmatter.title,
    description: frontmatter.summary,
    url: siteUrl + slug,
  };

  return (
    <Layout {...PostItemMetaData}>
      <BlogPostItem
        postInfo={frontmatter}
        html={html}
        prevItem={prev}
        nextItem={next}
        toc={tableOfContents}
      />
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
        summary
        categories
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 768, maxHeight: 450, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      tableOfContents
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
