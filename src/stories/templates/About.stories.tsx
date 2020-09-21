import React, { FunctionComponent } from 'react';
import About from 'components/templates/About';
import { withKnobs } from '@storybook/addon-knobs';

const AboutProps = {
  logoVisibility: true,
  questionList: [
    {
      title: 'Hello Storybook',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      slug: 'hello-storybook1',
    },
    {
      title: 'Hello Storybook',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      slug: 'hello-storybook2',
    },
    {
      title: 'Hello Storybook',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      slug: 'hello-storybook3',
    },
  ],
  careerList: [
    {
      title: 'Experience',
      direction: 'left',
      contents: [
        'Lorem Ipsum is simply dummy text of the printing',
        'Lorem Ipsum is simply dummy text of the printing',
        'Lorem Ipsum is simply dummy text of the printing',
      ],
    },
    {
      title: 'Experience',
      direction: 'right',
      contents: [
        'Lorem Ipsum is simply dummy text of the printing',
        'Lorem Ipsum is simply dummy text of the printing',
        'Lorem Ipsum is simply dummy text of the printing',
      ],
    },
    {
      title: 'Experience',
      direction: 'left',
      contents: [
        'Lorem Ipsum is simply dummy text of the printing',
        'Lorem Ipsum is simply dummy text of the printing',
        'Lorem Ipsum is simply dummy text of the printing',
      ],
    },
  ],
  toc: [
    { title: 'Hello Storybook1', slug: 'hello-storybook1' },
    { title: 'Hello Storybook2', slug: 'hello-storybook2' },
    { title: 'Hello Storybook3', slug: 'hello-storybook3' },
  ],
};

export default {
  title: 'Templates',
  component: About,
  decorators: [withKnobs],
};

export const AboutStory: FunctionComponent<{}> = function ({}) {
  return (
    <About
      logoVisibility={AboutProps.logoVisibility}
      questionList={AboutProps.questionList}
      careerList={AboutProps.careerList}
      toc={AboutProps.toc}
    />
  );
};
