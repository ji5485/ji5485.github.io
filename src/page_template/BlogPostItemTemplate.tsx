import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { OtherItemInfo } from 'components/organisms/PostItemFoot';
import Layout from 'components/templates/Layout';
import BlogPostItem from 'components/templates/BlogPostItem';
import { FluidObject } from 'gatsby-image';
import useModeSelect from 'hooks/useModeSelect';

interface BlogPostItemTemplateProps {
  data: {
    markdownRemark: {
      html: string;
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
      tableOfContents: string;
    };
  };
  pageContext: {
    prev: OtherItemInfo | null;
    next: OtherItemInfo | null;
  };
}

const BlogPostItemTemplate: FunctionComponent<BlogPostItemTemplateProps> = function ({
  data: {
    markdownRemark: { html, frontmatter, tableOfContents },
  },
  pageContext: { prev, next },
}) {
  const { currentMode, changeCurrentMode } = useModeSelect();

  return (
    <Layout currentMode={currentMode}>
      <BlogPostItem
        postInfo={frontmatter}
        html={html}
        prevItem={prev}
        nextItem={next}
        toc={tableOfContents}
        currentMode={currentMode}
        changeCurrentMode={changeCurrentMode}
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
        categories
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 768, maxHeight: 450, fit: FILL) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      tableOfContents
    }
  }
`;
