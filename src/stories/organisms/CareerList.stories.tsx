import React, { FunctionComponent } from 'react';
import CareerList from 'components/organisms/CareerList';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Organisms',
  component: CareerList,
  decorators: [withKnobs],
};

export const CareerListStory: FunctionComponent = function ({}) {
  return <CareerList />;
};
