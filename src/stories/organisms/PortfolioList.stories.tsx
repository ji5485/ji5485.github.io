import React, { FunctionComponent } from 'react';
import PortfolioList, { PortfolioListProps } from 'components/organisms/PortfolioList';
import { withKnobs, text, select } from '@storybook/addon-knobs';

const PORTFOLIO_LIST: PortfolioListProps.list = [
  {
    title: 'LikeLion Hackathon',
    content: '전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사',
    image: 'likelion_hackathon.jpg',
  },
  {
    title: 'LikeLion Hackathon',
    content: '전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사',
    image: 'likelion_hackathon.jpg',
  },
  {
    title: 'LikeLion Hackathon',
    content: '전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사',
    image: 'likelion_hackathon.jpg',
  },
  {
    title: 'LikeLion Hackathon',
    content: '전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사',
    image: 'likelion_hackathon.jpg',
  },
  {
    title: 'LikeLion Hackathon',
    content: '전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사',
    image: 'likelion_hackathon.jpg',
  },
  {
    title: 'LikeLion Hackathon',
    content: '전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사',
    image: 'likelion_hackathon.jpg',
  },
];

export default {
  title: 'Organisms',
  component: PortfolioList,
  decorators: [withKnobs],
};

export const PortfolioListStory: FunctionComponent<{}> = function ({}) {
  const type = select('Type', { project: 'project', activity: 'activity' }, 'project');
  const title = text('Title', 'Projects');

  return <PortfolioList type={type} title={title} list={PORTFOLIO_LIST} />;
};
