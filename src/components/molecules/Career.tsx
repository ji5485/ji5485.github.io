import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';

export interface CareerProps {
  title: string;
  contents: [string];
}

const CareerTitle = styled.div`
  ${TextComponent} {
    font-size: 30px;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

const CareerContents = styled.div`
  width: 70%;
  min-width: 500px;

  ${TextComponent} {
    font-size: 20x;
    font-weight: 400;
    padding: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }

  ${TextComponent}:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CareerComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Career: FunctionComponent<CareerProps> = function ({ title, contents }) {
  return (
    <CareerComponent>
      <CareerTitle>
        <Text>{title}</Text>
      </CareerTitle>

      <CareerContents>
        {contents.map((content, index) => {
          return <Text key={`${content}-${index}`}>{content}</Text>;
        })}
      </CareerContents>
    </CareerComponent>
  );
};

export default Career;
