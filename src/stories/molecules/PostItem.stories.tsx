import React, { FunctionComponent } from 'react';
import PostItem from 'components/molecules/PostItem';
import { withKnobs, text } from '@storybook/addon-knobs';

const PostItemProps = {
  thumbnail:
    'https://www.notion.so/image/https%3A%2F%2Fstatics.goorm.io%2Fimages%2F1200_628_goorm_edu.png?table=block&id=313188d2-7086-41d6-bfe9-591105c022bc&width=3840&userId=259ce6c4-908e-4655-a6e7-19f62c9fd54e&cache=v2',
  categories: [
    'Backend',
    'Security',
    'Backend',
    'Security',
    'Backend',
    'Security',
    'Backend',
    'Security',
    'Backend',
    'Security',
    'Backend',
    'Security',
  ],
  slug: '/blog/kittens/',
};

export default {
  title: 'Molecules',
  component: PostItem,
  decorators: [withKnobs],
};

export const PostItemStory: FunctionComponent = function ({}) {
  const title = text('Title', 'Layout Development Through Modern CSS Techniques');
  const summary = text(
    'Summary',
    `Let's find out four ways to defend against SQL Injection hacking, and look at examples to see how they implement it.`,
  );
  const date = text('Date', '2020/10/14');

  return <PostItem title={title} summary={summary} date={date} {...PostItemProps} />;
};
