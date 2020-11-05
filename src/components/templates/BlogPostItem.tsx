import React, { FunctionComponent } from 'react';
import PageTemplate from 'components/templates/PageTemplate';

interface BlogPostItemProps {
  postInfo: {
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
}

const BlogPostItem: FunctionComponent<BlogPostItemProps> = function ({ postInfo, html }) {
  return (
    <PageTemplate>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </PageTemplate>
  );
};

export default BlogPostItem;
