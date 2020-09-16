import React, { FunctionComponent } from 'react';
import QuestionList from 'components/organisms/QuestionList';
import { withKnobs } from '@storybook/addon-knobs';

const QuestionListProps = [
  {
    title: 'Hello Storybook',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    slug: 'hello-storybook1'
  },
  {
    title: 'Hello Storybook',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    slug: 'hello-storybook2'
  },
  {
    title: 'Hello Storybook',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    slug: 'hello-storybook3'
  },
]

export default {
  title: 'Organisms',
  component: QuestionList,
  decorators: [withKnobs],
};

export const QuestionListStory: FunctionComponent<{}> = function ({}) {
  return <QuestionList questionList={QuestionListProps} />;
};
