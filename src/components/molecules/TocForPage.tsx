import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';

export interface TocForPageProps {
  toc: [{ title: string; slug: string }];
  activeSlug: string;
}

export const TocForPageComponent = styled.div`
  position: sticky;
  top: 100px;
  width: 100%;
  padding: 10px;
  border-left: 3px solid grey;

  a {
    display: block;
    transition: .3s color;
    color: #868e96;
  }

  a.active {
    color: #1E1F21;
  }

  a + a {
    margin-top: 10px;
  }
`;

const TocForPage: FunctionComponent<TocForPageProps> = function ({ toc, activeSlug }) {
  return (
    <TocForPageComponent>
      {toc.map((tocItem, index) => {
        let { title, slug } = tocItem;
        const isActive = activeSlug === slug;

        return (
          <a
            href={`#${slug}`}
            className={isActive ? 'active' : ''}
            key={`toc-${title}-${index}`}
          >
            <Text size={15} weight={isActive ? 700 : 400}>{title}</Text>
          </a>
        );
      })}
    </TocForPageComponent>
  );
};

export default TocForPage;
