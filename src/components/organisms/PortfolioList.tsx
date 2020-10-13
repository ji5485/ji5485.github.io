import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import PortfolioItem from 'components/molecules/PortfolioItem';

interface PortfolioListProps {
  title: string;
  portfolioList: [
    {
      title: string;
      content: string;
    },
  ];
}

const PortfolioListComponent = styled.div``;

const Title = styled.div``;

const PortfolioList: FunctionComponent<PortfolioListProps> = function ({ title, portfolioList }) {
  return (
    <PortfolioListComponent>
      <Title>
        <Text>{title}</Text>
      </Title>

      {portfolioList.map((props, index) => (
        <PortfolioItem {...props} index={index} key={`${title}-${index}`} />
      ))}
    </PortfolioListComponent>
  );
};

export default PortfolioList;
