import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import useWindowSize from 'hooks/useWindowSize';

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
  ${TextComponent} {
    text-align: ${({ direction }) => direction};
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: ${({ direction }) => (direction === 'left' ? 'row' : 'row-reverse')};

    ${CareerContentsComponent} {
      ${({ direction }) => `margin-${direction}: 50px`};
    }
  }

  @media (max-width: 767px) {
    ${CareerContentsComponent} {
      margin-top: 30px;
    }
  }
`;

const Career: FunctionComponent<CareerProps> = function ({ title, contents, direction }) {
  const { width } = useWindowSize();

  return (
    <CareerComponent direction={direction}>
      <Text size={25} weight={100}>
        {title}
      </Text>

      <CareerContentsComponent>
        {contents.map((content, index) => {
          return (
            <Text key={`${content}-${index}`} size={width >= 768 ? 18 : 15} weight={100}>
              {content}
            </Text>
          );
        })}
      </CareerContentsComponent>
    </CareerComponent>
  );
};

export default Career;
