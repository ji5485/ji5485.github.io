import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export interface BlogCategoryListProps {
  list: [{
    node: {
      fields: {
        slug: string;
      },
      frontmatter: {
        title: string;
        summary: string;
        date: string;
        thumbnail: string;
        categories: string;
      }
    }
  }]
}

const BlogCategoryListComponent = styled.div``;

const BlogCategoryList: FunctionComponent<BlogCategoryListProps> = function ({ list }) {
  return <BlogCategoryListComponent></BlogCategoryListComponent>
}

export default BlogCategoryList;