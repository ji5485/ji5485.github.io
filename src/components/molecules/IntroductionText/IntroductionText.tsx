import React, { FunctionComponent } from 'react';
import Text from 'components/atoms/Text';
import {css} from "@emotion/core";

const MainTextResponsiveStyle = css`
  font-size: 50px;
  font-weight: 500;
  color: 1E1F21;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 40px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

const SubTextResponsiveStyle = css`
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
      <Text responsive={MainTextResponsiveStyle}>Hello, I am Ju Hyeon Do</Text>
      <Text responsive={SubTextResponsiveStyle}>I am a Junior Full-Stack Developer,</Text>
      <Text responsive={SubTextResponsiveStyle}>hoping to become Professional Developer</Text>
    </div>
  );
};

export default IntroductionText;
