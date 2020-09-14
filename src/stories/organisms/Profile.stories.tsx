import React, { FunctionComponent } from "react";
import Profile from "components/organisms/Profile";
import { withKnobs, number, text } from "@storybook/addon-knobs";

const IconSetListProps = [
  { href: 'https://github.com/ji5485', type: 'github' },
  { href: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
  { href: 'https://www.facebook.com/', type: 'facebook' },
]

export default {
  title: 'Organisms',
  component: Profile,
  decorators: [withKnobs]
};

export const ProfileStory: FunctionComponent<{}> = function ({}) {
  const width = number('Width', 200);
  const height = number('Height', 200);
  const src = text('Link', "https://avatars2.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4");
  const alt = text('Alt', 'Profile Image');

  return <Profile profileImageProps={{ width, height, src, alt }} IconSetListProps={IconSetListProps} />;
}