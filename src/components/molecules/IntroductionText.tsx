import React, { FunctionComponent } from 'react';
import Text from 'components/atoms/Text';
import styled from '@emotion/styled';

const MainText = styled(Text)`
  font-size: 50px;
  font-weight: 700;
  color: #1e1f21;
  margin-bottom: 10px;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 35px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

const SubText = styled(Text)`
  font-size: 25px;
  font-weight: 100;
  color: #1e1f21;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

const IntroductionText: FunctionComponent<{}> = function ({}) {
  return (
    <div>
      <MainText>Hello, I am Ju Hyeon Do</MainText>
      <SubText>I am a Junior Full-Stack Developer,</SubText>
      <SubText>hoping to become Professional Developer</SubText>
    </div>
  );
};

export default IntroductionText;
