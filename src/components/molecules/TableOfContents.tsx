import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface TableOfContentsProps {
  toc: string;
}

const TableOfContentsComponent = styled.div`
  position: relative;
  width: 250px;

  @media (max-width: 1350px) {
    display: none;
  }
`;

const TOC = styled.div`
  position: sticky;
  top: 150px;
  border-left: 1px solid black;
`;

const TableOfContents: FunctionComponent<TableOfContentsProps> = function ({ toc }) {
  return (
    <TableOfContentsComponent>
      <TOC dangerouslySetInnerHTML={{ __html: toc }} />
    </TableOfContentsComponent>
  );
};

export default TableOfContents;
