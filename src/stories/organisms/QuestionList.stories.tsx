import React, { FunctionComponent } from 'react';
import QuestionList from 'components/organisms/QuestionList';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Organisms',
  component: QuestionList,
  decorators: [withKnobs],
};

export const QuestionListStory: FunctionComponent<{}> = function ({}) {
  return <QuestionList />;
};
