import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

const BlogItem: FunctionComponent<any> = function (props) {
  console.log(props);
  return <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />;
};

export default BlogItem;

export const blogQuery = graphql`
  query getBlogData($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date
      }
    }
  }
`;
