import React, { FunctionComponent } from 'react';
import IconList from 'components/molecules/IconList';
import { withKnobs } from '@storybook/addon-knobs';

const IconListProps = {
  list: [
    { href: 'https://github.com/ji5485', type: 'github' },
    { href: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
    { href: 'https://www.facebook.com/', type: 'facebook' },
  ],
  size: 30,
};

export default {
  title: 'Molecules',
  component: IconList,
  decorators: [withKnobs],
};

export const IconListStory: FunctionComponent = function ({}) {
  return <IconList list={IconListProps.list} size={IconListProps.size} />;
};
