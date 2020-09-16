import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';

type CareerStyleProps = {
  direction: 'right' | 'left';
};

export interface CareerProps extends CareerStyleProps {
  title: string;
  contents: [string];
}

const CareerContentsComponent = styled.div`
  ${TextComponent} + ${TextComponent} {
    margin-top: 15px;
  }
`;

export const CareerComponent = styled.div<CareerStyleProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'right' ? 'row' : 'row-reverse')};

  ${CareerContentsComponent} {
    ${({ direction }) => `margin-${direction === 'right' ? 'left' : 'right'}`}: 50px;
  }
`;

const Career: FunctionComponent<CareerProps> = function ({ title, contents, direction }) {
  return (
    <CareerComponent direction={direction}>
      <Text size={25} weight={100}>{title}</Text>
      <CareerContentsComponent>
        {contents.map((content, index) => {
          return <Text key={`${content}-${index}`} size={18} weight={100}>{content}</Text>;
        })}
      </CareerContentsComponent>
    </CareerComponent>
  );
};

export default Career;
