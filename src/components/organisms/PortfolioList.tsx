import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import PortfolioItem from 'components/molecules/PortfolioItem';

export interface PortfolioListProps {
  type: 'project' | 'activity';
  title: string;
  list: [
    {
      title: string;
      content: string;
      image: string;
    },
  ];
}

export const PortfolioListComponent = styled.div`
  & + & {
    margin-top: 120px;
  }
`;

const Title = styled(Text)`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioList: FunctionComponent<PortfolioListProps> = function ({ type, title, list }) {
  return (
    <PortfolioListComponent>
      <Title>#{title}</Title>

      <List>
        {list.map((props, index) => (
          <PortfolioItem {...props} type={type} index={index + 1} key={`${title}-${index}`} />
        ))}
      </List>
    </PortfolioListComponent>
  );
};

export default PortfolioList;
