import React, { FunctionComponent } from 'react';
import PortfolioDetailContent from 'components/organisms/PortfolioDetailContent';
import { withKnobs } from '@storybook/addon-knobs';

const PortfolioDetailContentProps = {
  info: {
    title: 'Likelion Hackathon',
    subTitle: '중앙 멋쟁이 사자처럼 해커톤',
    period: '2019.07. ~ 2019.08.',
  },
  contents: [
    {
      title: 'Description',
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites.`,
    },
    {
      title: 'Description',
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites.`,
    },
  ],
};

export default {
  title: 'Organisms',
  component: PortfolioDetailContent,
  decorators: [withKnobs],
};

export const PortfolioDetailContentStory: FunctionComponent<{}> = function ({}) {
  return <PortfolioDetailContent {...PortfolioDetailContentProps} />;
};
