import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Text from 'components/atoms/Text';

type TitleStyleProps = {
  align: 'right' | 'left';
};

interface TitleProps extends TitleStyleProps {
  title: string;
  subTitle: string;
}

const TitleComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLine = styled.div`
  width: 50%;
  height: 1px;
  background: #1e1f21;

  @media (max-width: 767px) {
    width: 30%;
  }
`;

const TextBox = styled.div<TitleStyleProps>`
  text-align: ${({ align }) => align};
`;

const TitleStyle = css`
  font-size: 60px;
  font-weight: 700;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 50px;
  }

  @media (max-width: 767px) {
    font-size: 40px;
  }
`;

const SubTitleStyle = css`
  font-size: 30px;
  font-weight: 100;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Title: FunctionComponent<TitleProps> = function ({ title, subTitle, align }) {
  return (
    <TitleComponent>
      {align === 'right' && <StyledLine />}
      <TextBox align={align}>
        <Text nestedStyle={TitleStyle}>{title}</Text>
        <Text nestedStyle={SubTitleStyle}>{subTitle}</Text>
      </TextBox>
    </TitleComponent>
  );
};

export default Title;
