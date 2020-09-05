import React, { FunctionComponent } from 'react';
import Text from 'components/atoms/Text';
import { css } from "@emotion/core";

const MainTextStyle = css`
  font-size: 50px;
  font-weight: 500;
  color: 1E1F21;
  margin-bottom: 10px;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 40px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

const SubTextStyle = css`
  font-size: 30px;
  font-weight: 300;
  color: 1E1F21;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;
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
