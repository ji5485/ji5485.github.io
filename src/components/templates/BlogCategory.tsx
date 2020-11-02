import React, { FunctionComponent } from 'react';
import Title from 'components/molecules/Title';
import CategoryList, { CategoryListProps } from 'components/molecules/CategoryList';
import BlogPostList, { BlogPostListProps } from 'components/organisms/BlogPostList';
import Pagination, { PaginationProps } from 'components/organisms/Pagination';
import PageTemplate from 'components/templates/PageTemplate';

export interface BlogCategoryProps {
  list: BlogPostListProps.list;
  context: PaginationProps | CategoryListProps | { category: string };
}

const BlogCategory: FunctionComponent<BlogCategoryProps> = function ({
  list,
  context: { totalPage, currentPage, categories, category },
}) {
  const categoryTitle = category ? '#' + category.substring(1, category.length - 1) : '';

  return (
    <PageTemplate>
      <Title title={`Blog${categoryTitle}.`} subTitle="Development, Record" />
      <CategoryList categories={categories} />
      <BlogPostList list={list} />
    </PageTemplate>
  );
};

export default BlogCategory;
