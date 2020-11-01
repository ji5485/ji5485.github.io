import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Title from 'components/molecules/Title';
import CategoryList, { CategoryListProps } from 'components/molecules/CategoryList';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import BlogPostList, { BlogPostListProps } from 'components/organisms/BlogPostList';
import Pagination, { PaginationProps } from 'components/organisms/Pagination';

export interface BlogCategoryProps {
  list: BlogPostListProps.list;
  context: PaginationProps | CategoryListProps | { category: string };
}

const BlogCategoryComponent = styled.div`
  width: 100%;
`;

const Content = styled.div`
  padding: 100px 0;
  width: 768px;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 100%;
    padding: 80px 20px;
  }
`;

const BlogCategory: FunctionComponent<BlogCategoryProps> = function ({
  list,
  context: { totalPage, currentPage, categories, category },
}) {
  const categoryTitle = category ? '#' + category.substring(1, category.length - 1) : '';

  return (
    <BlogCategoryComponent>
      <Header />

      <Content>
        <Title title={`Blog${categoryTitle}.`} subTitle="Development, Record" />
        <CategoryList categories={categories} />
        <BlogPostList list={list} />
      </Content>

      <Footer />
    </BlogCategoryComponent>
  );
};

export default BlogCategory;
