import React, { FunctionComponent } from 'react';
import Text from 'components/atoms/Text';
import styled from '@emotion/styled';

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
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const StyledLine = styled.div`
  width: 50%;
  height: 1px;
  background: #1e1f21;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

const TextBox = styled.div<TitleStyleProps>`
  text-align: ${({ align }) => align};
`;

const MainTitle = styled(Text)`
  font-size: 60px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled(Text)`
  font-size: 25px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Title: FunctionComponent<TitleProps> = function ({ title, subTitle, align }) {
  return (
    <TitleComponent>
      {align === 'right' && <StyledLine />}

      <TextBox align={align}>
        <MainTitle>{title}</MainTitle>
        <SubTitle>{subTitle}</SubTitle>
      </TextBox>
    </TitleComponent>
  );
};

Title.defaultProps = {
  align: 'left',
};

export default Title;
