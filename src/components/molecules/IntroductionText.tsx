import React, { FunctionComponent } from 'react';
import Text from 'components/atoms/Text';
import { css } from "@emotion/core";

const MainTextStyle = css`
  font-size: 50px;
  font-weight: 700;
  color: #1E1F21;
  margin-bottom: 10px;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 35px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

const SubTextStyle = css`
  font-size: 25px;
  font-weight: 100;
  color: #1E1F21;

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
      <Text nestedStyle={MainTextStyle}>Hello, I am Ju Hyeon Do</Text>
      <Text nestedStyle={SubTextStyle}>I am a Junior Full-Stack Developer,</Text>
      <Text nestedStyle={SubTextStyle}>hoping to become Professional Developer</Text>
    </div>
  );
};

export default IntroductionText;
