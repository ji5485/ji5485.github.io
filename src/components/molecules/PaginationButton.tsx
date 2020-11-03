import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { LinkComponent } from 'components/atoms/Link';

interface PaginationButtonProps {
  to: string;
  page: number;
}

const PaginationButtonComponent = styled(LinkComponent)`
  width: 25px;
  height: 25px;
  border: 1px solid #1e1f21;
  font-size: 17px;
  font-weight: 700;
  display: grid;
  place-items: center;
  color: #1e1f21;
`;

const PaginationButton: FunctionComponent<PaginationButtonProps> = function ({ to, page }) {
  return <PaginationButtonComponent to={to}>{page}</PaginationButtonComponent>;
};

export default PaginationButton;
