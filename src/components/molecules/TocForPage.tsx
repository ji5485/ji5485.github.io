import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';

interface TocForPageProps {
  toc: [{ title: string; slug: string }];
}

const TocForPageComponent = styled.div`
  width: 100%;
  padding: 10px;
  border-left: 3px solid grey;

  a {
    display: block;
  }

  a + a {
    margin-top: 10px;
  }
`;

const TocForPage: FunctionComponent<TocForPageProps> = function ({ toc }) {
  return (
    <TocForPageComponent>
      {toc.map((tocItem, index) => {
        let { title, slug } = tocItem;
        return (
          <a href={`#${slug}`} key={`toc-${title}-${index}`}>
            <Text size={15}>{title}</Text>
          </a>
        );
      })}
    </TocForPageComponent>
  );
};

export default TocForPage;
