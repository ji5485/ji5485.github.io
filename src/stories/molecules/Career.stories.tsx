import React, { FunctionComponent } from 'react';
import Career from 'components/molecules/Career';
import { withKnobs, text, select } from '@storybook/addon-knobs';

const CareerContents = [
  'Lorem Ipsum is simply dummy text of the printing',
  'Lorem Ipsum is simply dummy text of the printing',
  'Lorem Ipsum is simply dummy text of the printing',
];

export default {
  title: 'Molecules',
  component: Career,
  decorators: [withKnobs],
};

export const CareerStory: FunctionComponent = function ({}) {
  const title = text('Title', 'Experience');
  const direction = select('Direction', { Right: 'right', Left: 'left' }, 'left');

  return <Career title={title} contents={CareerContents} direction={direction} />;
};
