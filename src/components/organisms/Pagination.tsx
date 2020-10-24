import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export interface PaginationProps {
  skip: number;
  totalPage: number;
  currentPage: number;
}

const PaginationComponent = styled.div``;

const Pagination: FunctionComponent<PaginationProps> = function ({ totalPage, currentPage }) {
  return <PaginationComponent></PaginationComponent>
}

export default Pagination;