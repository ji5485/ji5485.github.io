import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from 'components/molecules/PostItem';
import shortId from 'utilities/shortId';

export interface PostListProps {
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
          categories: string[];
          thumbnail: {
            childImageSharp: {
              resize: {
                src: string;
              };
            };
          };
        };
      };
    },
  ];
}

const PostListComponent = styled.div``;

const PostList: FunctionComponent<PostListProps> = function ({ list }) {
  return (
    <PostListComponent>
      {list.map(({ node: { fields: { slug }, frontmatter } }) => (
        <PostItem slug={slug} {...frontmatter} key={shortId()} />
      ))}
    </PostListComponent>
  );
};

export default PostList;
