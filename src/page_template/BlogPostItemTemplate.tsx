import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

const BlogPostItemTemplate: FunctionComponent<any> = function (props) {
  console.log(props);
  return <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />;
};

export default BlogPostItemTemplate;

export const blogQuery = graphql`
  query getBlogData($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            resize(fit: COVER, width: 768, height: 500) {
              tracedSVG
            }
          }
        }
        date
        categories
      }
    }
  }
`;
