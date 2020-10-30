import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Title from 'components/molecules/Title';
import CategoryList, { CategoryListProps } from 'components/molecules/CategoryList';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import BlogCategoryList, { BlogCategoryListProps } from 'components/organisms/BlogCategoryList';
import Pagination, { PaginationProps } from 'components/organisms/Pagination';

export interface BlogCategoryProps {
  list: BlogCategoryListProps.list;
  context: PaginationProps | CategoryListProps;
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
  context: { totalPage, currentPage, categories },
}) {
  return (
    <BlogCategoryComponent>
      <Header />

      <Content>
        <Title title="Blog." subTitle="Development, Record" />
        <CategoryList categories={categories} />
        <BlogCategoryList list={list} />
      </Content>

      <Footer />
    </BlogCategoryComponent>
  );
};

export default BlogCategory;
