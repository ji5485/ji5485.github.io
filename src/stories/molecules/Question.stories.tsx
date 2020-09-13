import React, { FunctionComponent } from "react";
import Question from "components/molecules/Question";
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: "Molecules",
  component: Question,
  decorators: [withKnobs]
}

export const QuestionStory: FunctionComponent<{}> = () => {
  const title = text('Title', 'Hello Storybook');
  const content = text('Content', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`);

  return <Question title={title} content={content} />;
}