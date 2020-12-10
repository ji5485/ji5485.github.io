import React, { FunctionComponent } from 'react';
import Pagination from 'components/organisms/Pagination';
import { withKnobs, number, text } from '@storybook/addon-knobs';

export default {
  title: 'Organisms',
  component: Pagination,
  decorators: [withKnobs],
};

export const PaginationStory: FunctionComponent = function ({}) {
  const totalPage = number('Total Page', 12);
  const currentPage = number('Current Page', 3);
  const category = text('Category', '');

  return <Pagination totalPage={totalPage} currentPage={currentPage} category={category} />;
};
