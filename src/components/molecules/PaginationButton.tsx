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
  border: 1px solid var(--color);
  font-size: 17px;
  font-weight: 700;
  display: grid;
  place-items: center;
  color: var(--color);
  background: var(--background);

  & + & {
    margin-left: 10px;
  }

  &.active {
    color: var(--background);
    background: var(--color);
  }
`;

const PaginationButton: FunctionComponent<PaginationButtonProps> = function ({ to, page }) {
  return (
    <PaginationButtonComponent to={to} activeClassName="active">
      {page}
    </PaginationButtonComponent>
  );
};

export default PaginationButton;
