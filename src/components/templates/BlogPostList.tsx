import React, { FunctionComponent } from 'react';
import Title from 'components/molecules/Title';
import CategoryList, { CategoryListProps } from 'components/molecules/CategoryList';
import PostList, { PostListProps } from 'components/organisms/PostList';
import Pagination, { PaginationProps } from 'components/organisms/Pagination';
import PageTemplate from 'components/templates/PageTemplate';

export interface BlogPostListProps {
  list: PostListProps.list;
  context: PaginationProps | CategoryListProps;
}

const BlogPostList: FunctionComponent<BlogPostListProps> = function ({
  list,
  context: { totalPage, currentPage, categories, category },
}) {
  const categoryTitle = category ? '#' + category.substring(1, category.length - 1) : '';

  return (
    <PageTemplate>
      <Title title={`Blog${categoryTitle}.`} subTitle="Development, Record" />
      <CategoryList categories={categories} />
      <PostList list={list} />
      {totalPage > 1 && (
        <Pagination totalPage={totalPage} currentPage={currentPage} category={category} />
      )}
    </PageTemplate>
  );
};

export default BlogPostList;
