import React, { FunctionComponent } from 'react';
import Introduction from 'components/organisms/Introduction';
import { withKnobs } from '@storybook/addon-knobs';

const IntroductionProps = {
  profileImageLink:
    'https://avatars2.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4',
  profileImageAlt: 'Profile Image',
  iconList: [
    { href: 'https://github.com/ji5485', type: 'github' },
    { href: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
    { href: 'https://www.facebook.com/', type: 'facebook' },
  ]
};

export default {
  title: 'Organisms',
  component: Introduction,
  decorators: [withKnobs],
};

export const IntroductionStory: FunctionComponent<{}> = () => {
  return (
    <Introduction
      profileImageLink={IntroductionProps.profileImageLink}
      profileImageAlt={IntroductionProps.profileImageAlt}
      iconList={IntroductionProps.iconList}
    />
  );
};
