import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import BlogCategoryList, { BlogCategoryListProps } from 'components/organisms/BlogCategoryList';
import Pagination, { PaginationProps } from 'components/organisms/Pagination';

export interface BlogCategoryProps {
  list: BlogCategoryListProps.list;
  pagination: PaginationProps;
}

const BlogCategoryComponent = styled.div``;

const BlogCategory: FunctionComponent<BlogCategoryProps> = function ({ list, pagination: {totalPage, currentPage} }) {
  return <BlogCategoryComponent></BlogCategoryComponent>
}

export default BlogCategory;