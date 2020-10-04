import React, { FunctionComponent } from 'react';
import PortfolioItem from 'components/molecules/PortfolioItem';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Molecules',
  component: PortfolioItem,
  decorators: [withKnobs],
};

export const PortfolioItemStory: FunctionComponent<{}> = function ({}) {
  const index = text('Index', '01');
  const title = text('Title', 'Likelion Hackathon');
  const content = text(
    'Content',
    '전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사',
  );
  const image = text('Image', 'about_portfolio_1');

  return <PortfolioItem index={index} title={title} content={content} image={image} />;
};
