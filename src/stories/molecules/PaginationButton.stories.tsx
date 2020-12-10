import React, { FunctionComponent } from 'react';
import PaginationButton from 'components/molecules/PaginationButton';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Molecules',
  component: PaginationButton,
  decorators: [withKnobs],
};

export const PaginationButtonStory: FunctionComponent = function ({}) {
  const to = text('To', '/blog/3');
  const page = number('Page', 3);

  return <PaginationButton to={to} page={page} />;
};
