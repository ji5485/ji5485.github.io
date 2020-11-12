import React, { FunctionComponent } from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import PostItemHead from 'components/organisms/PostItemHead';
import PostItemBody from 'components/organisms/PostItemBody';
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
  toc: string;
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
  toc,
}) {
  return (
    <PageTemplate>
      <PostItemHead title={title} date={date} categories={categories} thumbnail={fluid} />
      <PostItemBody html={html} toc={toc} />
      <PostItemFoot prevItem={prevItem} nextItem={nextItem} />
    </PageTemplate>
  );
};

export default BlogPostItem;
