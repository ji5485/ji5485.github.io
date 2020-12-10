import React, { FunctionComponent } from 'react';
import Text from 'components/atoms/Text';
import { withKnobs, text, number, select, color } from '@storybook/addon-knobs';

export default {
  title: 'Atoms',
  component: Text,
  decorators: [withKnobs],
};

export const TextStory: FunctionComponent = function ({}) {
  const children = text('Text', 'Hello Storybook');
  const size = number('Size', 20);
  const weight = select('Weight', { Thin: 100, Normal: 400, Bold: 700 }, 400);
  const fontColor = color('Color', 'black');

  return (
    <Text size={size} weight={weight} color={fontColor}>
      {children}
    </Text>
  );
};
