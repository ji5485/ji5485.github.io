import React, { FunctionComponent } from 'react';
import ProfileImage from 'components/atoms/ProfileImage';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Atoms',
  component: ProfileImage,
  decorators: [withKnobs],
};

export const ProfileImageStory: FunctionComponent = function ({}) {
  const width = number('Width', 200);
  const height = number('Height', 200);
  const src = text(
    'Link',
    'https://avatars2.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4',
  );
  const alt = text('Alt', 'Profile Image');

  return <ProfileImage width={width} height={height} src={src} alt={alt} />;
};
