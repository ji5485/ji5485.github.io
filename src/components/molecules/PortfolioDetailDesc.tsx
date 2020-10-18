import React, { FunctionComponent } from 'react';
import Text from 'components/atoms/Text';
import styled from '@emotion/styled';

interface PortfolioDetailDescProps {
  title: string;
  content: string;
}

export const PortfolioDetailDescComponent = styled.div``;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Desc = styled(Text)`
  font-size: 15px;
  font-weight: 400;
`;

const PortfolioDetailDesc: FunctionComponent<PortfolioDetailDescProps> = function ({ title, content }) {
  return (
    <PortfolioDetailDescComponent>
      <Title>{title}</Title>
      <Desc>{content}</Desc>
    </PortfolioDetailDescComponent>
  );
}

export default PortfolioDetailDesc;