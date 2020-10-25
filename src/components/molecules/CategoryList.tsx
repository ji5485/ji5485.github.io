import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link, { LinkComponent } from 'components/atoms/Link';

interface CategoryListProps {
  categories: [
    {
      category: string;
      count: number;
    },
  ];
}

const CategoryListComponent = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${LinkComponent} + ${LinkComponent} {
    margin-left: 15px;
  }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({ categories }) {
  return (
    <CategoryListComponent>
      {categories.map(({ category, count }) => {
        const url = `/blog/${category}/1`;
        return (
          <Link to={url} key={`${category}-${count}`}>
            #{category}({count})
          </Link>
        );
      })}
    </CategoryListComponent>
  );
};

export default CategoryList;
