import React, { FunctionComponent } from 'react';
import Title from 'components/molecules/Title';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Molecules',
  component: Title,
  decorators: [withKnobs],
};

export const TitleStory: FunctionComponent<{}> = function ({}) {
  const title = text('Title', 'Profile.');
  const subTitle = text('SubTitle', 'Information About Me');
  const align = select('Align', { left: 'left', right: 'right' }, 'left');

  return <Title title={title} subTitle={subTitle} align={align} />;
};
