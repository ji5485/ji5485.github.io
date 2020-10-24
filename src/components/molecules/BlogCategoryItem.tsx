import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export interface BlogCategoryItemProps {
  title: string;
  summary: string;
  date: string;
  thumbnail: string;
  categories: string;
  slug: string;
}

const BlogCategoryItemComponent = styled.div``;

const BlogCategoryItem: FunctionComponent<BlogCategoryItemProps> = function ({
  title,
  summary,
  date,
  thumbnail,
  categories,
  slug
}) {
  return <BlogCategoryItemComponent></BlogCategoryItemComponent>
}

export default BlogCategoryItem;