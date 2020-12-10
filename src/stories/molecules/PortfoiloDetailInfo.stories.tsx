import React, { FunctionComponent } from 'react';
import PortfolioDetailInfo from 'components/molecules/PortfolioDetailInfo';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Molecules',
  component: PortfolioDetailInfo,
  decorators: [withKnobs],
};

export const PortfolioDetailInfoStory: FunctionComponent = function ({}) {
  const title = text('Title', 'Likelion Hackathon');
  const subTitle = text('Sub Title', '중앙 멋쟁이 사자처럼 해커톤');
  const period = text('Period', '2019.07. ~ 2019.08.');

  return <PortfolioDetailInfo title={title} subTitle={subTitle} period={period} />;
};
