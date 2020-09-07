import React, { FunctionComponent } from 'react';
import Main from 'components/templates/Main';
import { withKnobs } from '@storybook/addon-knobs';

const MainProps = {
  profileImageLink:
    'https://avatars2.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4',
  profileImageAlt: 'Profile Image',
  iconList: [
    { to: 'https://github.com/ji5485', type: 'github' },
    { to: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
    { to: 'https://www.facebook.com/', type: 'facebook' },
  ]
};

export default {
  title: 'Templates',
  component: Main,
  decorators: [withKnobs],
};

export const MainStory: FunctionComponent<{}> = () => {
  return (
    <Main
      profileImageLink={MainProps.profileImageLink}
      profileImageAlt={MainProps.profileImageAlt}
      iconList={MainProps.iconList}
    />
  );
};
