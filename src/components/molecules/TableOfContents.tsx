import React, { FunctionComponent } from 'react';
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
  border-left: 3px solid rgba(30, 31, 33, 0.5);
  padding: 5px 0;
  font-size: 15px;

  a {
    display: block;
    padding: 4px 0;
    opacity: 0.5;
    transition: 0.3s all;
  }

  ul,
  li {
    list-style-type: none;
  }

  & ul {
    padding: 0 10px;

    ul {
      padding-left: 0 10px;
    }
  }

  a[href$='#${({ activeSlug }) => activeSlug}'] {
    opacity: 1;
    font-weight: 700;
  }

  body.dark & {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const TableOfContents: FunctionComponent<TableOfContentsProps> = function ({ toc }) {
  const activeSlug: string = useSetHeading(toc);

  return (
    <TableOfContentsComponent>
      {toc && <TOC dangerouslySetInnerHTML={{ __html: toc }} activeSlug={encodeURI(activeSlug)} />}
    </TableOfContentsComponent>
  );
};

export default TableOfContents;
