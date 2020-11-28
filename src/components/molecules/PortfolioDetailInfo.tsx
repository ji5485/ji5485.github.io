import React, { FunctionComponent } from 'react';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';

export interface PortfolioDetailInfoProps {
  title: string;
  subTitle: string;
  period: string;
}

export const PortfoiloDetailInfoComponent = styled.div``;

const Title = styled(Text)`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Desc = styled.div`
  ${TextComponent} {
    font-size: 15px;
    font-weight: 300;
  }
`;

const PortfolioDetailInfo: FunctionComponent<PortfolioDetailInfoProps> = function ({
  title,
  subTitle,
  period,
}) {
  return (
    <PortfoiloDetailInfoComponent>
      <Title>{title}</Title>

      <Desc>
        <Text>{subTitle}</Text>
        <Text>{period}</Text>
      </Desc>
    </PortfoiloDetailInfoComponent>
  );
};

export default PortfolioDetailInfo;
