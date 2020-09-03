import React, { FunctionComponent } from "react";
import Text from "components/atoms/Text";
import { TextProps } from "components/atoms/Text/Text";
import { withKnobs, text, number, select, color } from '@storybook/addon-knobs';

export default {
  title: "Atoms",
  component: Text,
  decorators: [withKnobs]
}

export const TextStory: FunctionComponent<TextProps> = () => {
  const children = text('Text', 'Hello Storybook');
  const size = number('Size', 40);
  const weight = select('Weight', { Thin: 300, Normal: 500, Bold: 700 }, 500);
  const fontColor = color('Color', "black");

  return <Text size={size} weight={weight} color={fontColor}>{children}</Text>;
}