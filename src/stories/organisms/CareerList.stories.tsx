import React, { FunctionComponent } from 'react';
import CareerList from 'components/organisms/CareerList';
import { withKnobs } from '@storybook/addon-knobs';

const CareerListProps = [
  {
    title: 'Experience',
    direction: 'left',
    contents: [
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing',
    ],
  },
  {
    title: 'Experience',
    direction: 'right',
    contents: [
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing',
    ],
  },
  {
    title: 'Experience',
    direction: 'left',
    contents: [
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing',
      'Lorem Ipsum is simply dummy text of the printing',
    ],
  },
];

export default {
  title: 'Organisms',
  component: CareerList,
  decorators: [withKnobs],
};

export const CareerListStory: FunctionComponent<{}> = function ({}) {
  return <CareerList careerList={CareerListProps} />;
};
