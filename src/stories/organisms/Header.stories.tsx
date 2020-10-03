import React, { FunctionComponent } from 'react';
import Header from 'components/organisms/Header';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Organisms',
  component: Header,
  decorators: [withKnobs],
};

export const HeaderStory: FunctionComponent<{}> = function ({}) {
  const logoVisibility = boolean('Logo Visibility', true);

  return <Header logoVisibility={logoVisibility} />;
};
