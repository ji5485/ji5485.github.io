import React, { FunctionComponent } from "react";
import Profile from "components/organisms/Profile";
import { withKnobs, number, text } from "@storybook/addon-knobs";

const IconSetListProps = [
  { href: 'https://www.instagram.com/?hl=ko', type: 'instagram', text: 'hello_d0o', size: 23 },
  { href: '#', type: 'phone', text: '010-5593-3495', size: 23 },
  { href: 'https://www.facebook.com/', type: 'facebook', text: 'Ju Hyeon Do', size: 23 },
  { href: '#', type: 'email', text: 'dong5485@gmail.com', size: 23 },
  { href: 'https://github.com/ji5485', type: 'github', text: 'HyeonDo Ju', size: 23 },
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

  return <Profile profileImage={{ width, height, src, alt }} iconSetList={IconSetListProps} />;
}