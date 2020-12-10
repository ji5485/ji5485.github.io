import React, { FunctionComponent } from 'react';
import PostNavigator from 'components/molecules/PostNavigator';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Molecules',
  component: PostNavigator,
  decorators: [withKnobs],
};

export const PostNavigatorStory: FunctionComponent = function ({}) {
  const direction = select('Direction', { Prev: 'prev', Next: 'next' }, 'prev');
  const title = text('Title', 'How to prevent SQL Injection?');
  const slug = text('Slug', '/blog/kittens/');

  return <PostNavigator direction={direction} title={title} slug={slug} />;
};
