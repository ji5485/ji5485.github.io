import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export interface PaginationProps {
  totalPage: number;
  currentPage: number;
  category: string;
}

const PaginationComponent = styled.div`
  display: flex;
  grid-template-columns: repeat(25px, 7);
  grid-gap: 10px;
`;

const Pagination: FunctionComponent<PaginationProps> = function ({
  totalPage,
  currentPage,
  category,
}) {
  return <PaginationComponent></PaginationComponent>;
};

export default Pagination;
