import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from 'components/molecules/PostItem';
import { shortId } from 'utilities/utils';
import { FixedObject } from 'gatsby-image';

type PostItemType = {
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
          fixed: FixedObject;
        };
      };
    };
  };
};

export interface PostListProps {
  list: PostItemType[];
}

const PostListComponent = styled.div``;

const PostList: FunctionComponent<PostListProps> = function ({ list }) {
  return (
    <PostListComponent>
      {list.map(({ node: { fields: { slug }, frontmatter } }: PostItemType) => (
        <PostItem slug={slug} {...frontmatter} key={shortId()} />
      ))}
    </PostListComponent>
  );
};

export default PostList;
