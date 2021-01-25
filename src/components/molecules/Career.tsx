import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import { shortId } from 'utilities/utils';

export interface CareerProps {
  title: string;
  contents: string[];
}

export const CareerComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Content = styled.div`
  width: 70%;

  ${TextComponent} {
    font-size: 15px;
    font-weight: 300;
    padding: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }

  ${TextComponent}:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  body.dark & {
    ${TextComponent} {
      border-color: rgba(255, 255, 255, 0.3);
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    ${TextComponent} {
      font-size: 12px;
    }
  }
`;

const Career: FunctionComponent<CareerProps> = function ({ title, contents }) {
  return (
    <CareerComponent>
      <Title>{title}</Title>

      <Content>
        {contents.map((content: string) => {
          return <Text key={shortId()}>{content}</Text>;
        })}
      </Content>
    </CareerComponent>
  );
};

export default Career;
