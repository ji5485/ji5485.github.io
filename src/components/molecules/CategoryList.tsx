import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link, { LinkComponent } from 'components/atoms/Link';
import splitOnUpper from 'utilities/splitOnUpper';
import shortId from 'utilities/shortId';

export interface CategoryListProps {
  categories: {
    [key: string]: number;
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

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({ categories }) {
  return (
    <CategoryListComponent>
      {Object.keys(categories).map((category: string) => {
        const url = `/blog/${splitOnUpper(category)}/1`;
        const count: number = categories[category];

        return (
          <Link to={url} key={shortId()}>
            #{category}({count})
          </Link>
        );
      })}
    </CategoryListComponent>
  );
};

export default CategoryList;
