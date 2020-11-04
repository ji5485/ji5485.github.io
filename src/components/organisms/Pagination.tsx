import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Icon from 'components/atoms/Icon';
import Link, { LinkComponent } from 'components/atoms/Link';
import PaginationButton from 'components/molecules/PaginationButton';
import shortId from 'utilities/shortId';

export interface PaginationProps {
  totalPage: number;
  currentPage: number;
  category: string;
}

const PaginationComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const PageMoveIcon = styled(Link)<{ active: boolean }>`
  cursor: pointer;
  pointer-events: ${(active) => (active ? 'initial' : 'none')};
  padding: 0 15px;
`;

const Pagination: FunctionComponent<PaginationProps> = function ({
  totalPage,
  currentPage,
  category,
}) {
  const currentPosition = Math.floor((currentPage - 1) / 5) + 1;
  const prev = currentPosition === 1 ? null : (currentPosition - 1) * 5;
  const next = currentPosition === (totalPage - 1) / 5 + 1 ? null : currentPosition * 5 + 1;

  const returnPageLink = (page: number | null): string =>
    `/blog${category ? `/${category}` : ''}/${page}`;

  return (
    <PaginationComponent>
      {[1, 2, 3, 4, 5].map((index) => {
        const page = (currentPosition - 1) * 5 + index;
        return (
          page <= totalPage && (
            <PaginationButton to={returnPageLink(page)} page={page} key={shortId()} />
          )
        );
      })}
    </PaginationComponent>
  );
};

export default Pagination;
