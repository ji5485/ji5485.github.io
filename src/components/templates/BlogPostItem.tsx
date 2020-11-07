import React, { FunctionComponent } from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import PostItemHead from 'components/organisms/PostItemHead';
import PostItemFoot from 'components/organisms/PostItemFoot';
import { FluidObject } from 'gatsby-image';

interface BlogPostItemProps {
  postInfo: {
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
  prevItem: string;
  nextItem: string;
}

const BlogPostItem: FunctionComponent<BlogPostItemProps> = function ({
  postInfo: {
    title,
    date,
    categories,
    thumbnail: {
      childImageSharp: { fluid },
    },
  },
  html,
  prevItem,
  nextItem,
}) {
  return (
    <PageTemplate>
      <PostItemHead title={title} date={date} categories={categories} thumbnail={fluid} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <PostItemFoot prevItem={prevItem} nextItem={nextItem} />
    </PageTemplate>
  );
};

export default BlogPostItem;
