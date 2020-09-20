import React, { FunctionComponent } from 'react';
import Footer from 'components/organisms/Footer';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Organisms',
  component: Footer,
  decorators: [withKnobs],
};

export const FooterStory: FunctionComponent<{}> = function ({}) {
  return <Footer />;
};
