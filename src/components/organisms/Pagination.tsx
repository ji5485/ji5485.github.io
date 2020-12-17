import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Icon, { IconComponent } from 'components/atoms/Icon';
import { LinkComponent } from 'components/atoms/Link';
import PaginationButton from 'components/molecules/PaginationButton';
import { shortId } from 'utilities/utils';

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

const PageMoveIcon = styled(LinkComponent)<{ active: number }>`
  cursor: pointer;
  pointer-events: ${({ active }) => (active ? 'initial' : 'none')};
  padding: 0 10px;

  ${IconComponent} {
    color: ${({ active }) => (active ? 'initial' : 'rgba(0, 0, 0, 0.3)')};
  }
`;

const Pagination: FunctionComponent<PaginationProps> = function ({
  totalPage,
  currentPage,
  category,
}) {
  const currentPosition = Math.floor((currentPage - 1) / 5) + 1;
  const prev = currentPosition === 1 ? null : (currentPosition - 1) * 5;
  const next =
    currentPosition === Math.floor((totalPage - 1) / 5) + 1 ? null : currentPosition * 5 + 1;

  const returnPageLink = (page: number | null): string =>
    `/blog${category ? `/${category}` : ''}/${page}`;

  return (
    <PaginationComponent>
      <PageMoveIcon to={returnPageLink(prev)} active={prev ? 1 : 0}>
        <Icon type="caretLeft" size={17} />
      </PageMoveIcon>

      {[1, 2, 3, 4, 5].map((index: number) => {
        const page = (currentPosition - 1) * 5 + index;
        return (
          page <= totalPage && (
            <PaginationButton to={returnPageLink(page)} page={page} key={shortId()} />
          )
        );
      })}

      <PageMoveIcon to={returnPageLink(next)} active={next ? 1 : 0}>
        <Icon type="caretRight" size={17} />
      </PageMoveIcon>
    </PaginationComponent>
  );
};

export default Pagination;
