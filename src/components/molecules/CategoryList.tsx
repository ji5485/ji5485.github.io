import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link, { LinkComponent } from 'components/atoms/Link';
import splitOnUpper from 'utilities/splitOnUpper';

export interface CategoryListProps {
  categories: {
    [key: string]: number
  };
}

const CategoryListComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -5px -10px;
  margin-bottom: 60px;

  ${LinkComponent} {
    font-size: 14px;
    font-weight: 700;
    margin: 5px 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({ categories }) {
  return (
    <CategoryListComponent>
      {Object.keys(categories).map((category: string) => {
        const url: string = `/blog/${splitOnUpper(category)}/1`;
        const count: number = categories[category];

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
