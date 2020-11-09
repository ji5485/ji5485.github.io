import React, { FunctionComponent, useEffect } from 'react';
import styled from '@emotion/styled';
import useSetHeading from 'hooks/useSetHeading';

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

const TOC = styled.div<{ activeSlug: string }>`
  position: sticky;
  top: 150px;
  border-left: 3px solid #1e1f21;
  padding: 5px 0;

  a {
    display: block;
    padding: 3px 0;
  }

  & ul {
    padding: 0 10px;

    ul {
      padding-left: 0 10px;
    }
  }

  a[href$='${({ activeSlug }) => activeSlug}'] {
    font-weight: 700;
  }
`;

const TableOfContents: FunctionComponent<TableOfContentsProps> = function ({ toc }) {
  const activeSlug: string = useSetHeading(toc);

  useEffect(() => {
    console.log(activeSlug);
  }, [activeSlug]);

  return (
    <TableOfContentsComponent>
      <TOC dangerouslySetInnerHTML={{ __html: toc }} activeSlug={activeSlug} />
    </TableOfContentsComponent>
  );
};

export default TableOfContents;
