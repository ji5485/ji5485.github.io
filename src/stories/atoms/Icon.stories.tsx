import React, { FunctionComponent } from "react";
import Icon from "components/atoms/Icon";
import { IconProps } from "components/atoms/Icon/Icon";
import { withKnobs, number, select, color } from '@storybook/addon-knobs';

export default {
  title: "Atoms",
  component: Icon,
  decorators: [withKnobs]
}

export const IconStory: FunctionComponent<IconProps> = () => {
  const type = select('Type', {Instagram: 'instagram', Facebook: 'facebook', Github: 'github'}, 'instagram');
  const scale = number('Scale', 1);
  const fill = color('Color', 'black');

  return <Icon type={type} scale={scale} fill={fill} />;
}