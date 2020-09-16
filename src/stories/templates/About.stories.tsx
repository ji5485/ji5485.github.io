import React, { FunctionComponent } from 'react';
import About from 'components/templates/About';
import { withKnobs } from '@storybook/addon-knobs';

const AboutProps = {
  logoVisibility: true,
  questionList: [
    {
      title: 'Hello Storybook',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      slug: 'hello-storybook1'
    },
    {
      title: 'Hello Storybook',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      slug: 'hello-storybook2'
    },
    {
      title: 'Hello Storybook',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      slug: 'hello-storybook3'
    },
  ],
  profileImage: {
    width: 200,
    height: 200,
    src: 'https://avatars2.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4',
    alt: 'Profile Image'
  },
  iconSetList: [
    { href: 'https://www.instagram.com/?hl=ko', type: 'instagram', text: 'hello_d0o', size: 23 },
    { href: '#', type: 'phone', text: '010-5593-3495', size: 23 },
    { href: 'https://www.facebook.com/', type: 'facebook', text: 'Ju Hyeon Do', size: 23 },
    { href: '#', type: 'email', text: 'dong5485@gmail.com', size: 23 },
    { href: 'https://github.com/ji5485', type: 'github', text: 'HyeonDo Ju', size: 23 },
  ],
  careerList: [
    { title: 'Experience', direction: 'right', contents: [
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing'
    ]},
    { title: 'Experience', direction: 'left', contents: [
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing'
    ]},
    { title: 'Experience', direction: 'right', contents: [
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing'
    ]},
  ]
};

export default {
  title: 'Templates',
  component: About,
  decorators: [withKnobs],
};

export const AboutStory: FunctionComponent<{}> = function ({}) {
  return (
    <About
      logoVisibility={AboutProps.logoVisibility}
      questionList={AboutProps.questionList}
      profileImage={AboutProps.profileImage}
      iconSetList={AboutProps.iconSetList}
      careerList={AboutProps.careerList}
    />
  );
};
