import React, { FunctionComponent } from 'react';
import IconList from 'components/molecules/IconList';
import { withKnobs } from '@storybook/addon-knobs';

const IconListProps = {
  list: [
    { to: 'https://github.com/ji5485', type: 'github' },
    { to: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
    { to: 'https://www.facebook.com/', type: 'facebook' },
  ],
  size: 30
}

export default {
  title: 'Molecules',
  component: IconList,
  decorators: [withKnobs],
};

export const IconListStory: FunctionComponent<{}> = function ({}) {
  return <IconList list={IconListProps.list} size={IconListProps.size} />;
};
