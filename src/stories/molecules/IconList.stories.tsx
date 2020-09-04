import React, { FunctionComponent } from 'react';
import IconList from 'components/molecules/IconList';
import { withKnobs } from '@storybook/addon-knobs';

const IconListProps = [
  { to: 'https://github.com/ji5485', type: 'github' },
  { to: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
  { to: 'https://www.facebook.com/', type: 'facebook' },
];

export default {
  title: 'Molecules',
  component: IconList,
  decorators: [withKnobs],
};

export const IconListStory: FunctionComponent<{}> = () => {
  return <IconList list={IconListProps} />;
};
