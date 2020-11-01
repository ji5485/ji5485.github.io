import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import BlogPostItem from 'components/molecules/BlogPostItem';
import shortId from 'utilities/shortId';

export interface BlogPostListProps {
  list: [
    {
      node: {
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          summary: string[];
          date: string;
          thumbnail: {
            childImageSharp: {
              resize: {
                src: string;
              };
            };
          };
          categories: string[];
        };
      };
    },
  ];
}

const BlogPostListComponent = styled.div``;

const BlogPostList: FunctionComponent<BlogPostListProps> = function ({ list }) {
  return (
    <BlogPostListComponent>
      {list.map(({ node: { fields: { slug }, frontmatter } }) => (
        <BlogPostItem slug={slug} {...frontmatter} key={shortId()} />
      ))}
    </BlogPostListComponent>
  );
};

export default BlogPostList;
