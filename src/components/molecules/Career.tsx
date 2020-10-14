import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';

export interface CareerProps {
  title: string;
  contents: [string];
}

export const CareerComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Title = styled(Text)`
  ${TextComponent} {
    font-size: 20px;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

const Content = styled.div`
  width: 70%;
  min-width: 500px;

  ${TextComponent} {
    font-size: 15px;
    font-weight: 400;
    padding: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }

  ${TextComponent}:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Career: FunctionComponent<CareerProps> = function ({ title, contents }) {
  return (
    <CareerComponent>
      <Title>{title}</Title>

      <Content>
        {contents.map((content, index) => {
          return <Text key={`${content}-${index}`}>{content}</Text>;
        })}
      </Content>
    </CareerComponent>
  );
};

export default Career;
