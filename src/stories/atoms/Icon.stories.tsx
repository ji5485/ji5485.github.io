import React, { FunctionComponent } from 'react';
import Icon from 'components/atoms/Icon';
import { withKnobs, number, select, color } from '@storybook/addon-knobs';

export default {
  title: 'Atoms',
  component: Icon,
  decorators: [withKnobs],
};

export const IconStory: FunctionComponent = function ({}) {
  const type = select(
    'Type',
    {
      Instagram: 'instagram',
      Facebook: 'facebook',
      Github: 'github',
      Phone: 'phone',
      Email: 'email',
      SmileWink: 'smileWink',
      Running: 'running',
      LayerGroup: 'layerGroup',
      UserTie: 'userTie',
      Search: 'search',
      ArrowRight: 'arrowRight',
      ArrowLeft: 'arrowLeft',
      CaretRight: 'caretRight',
      CaretLeft: 'caretLeft',
    },
    'instagram',
  );
  const size = number('Size', 20);
  const iconColor = color('Color', 'black');

  return <Icon type={type} size={size} color={iconColor} />;
};
