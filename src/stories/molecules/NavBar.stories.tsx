import React, { FunctionComponent } from 'react';
import NavBar from 'components/molecules/NavBar';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Molecules',
  component: NavBar,
  decorators: [withKnobs],
};

export const NavBarStory: FunctionComponent = function ({}) {
  const modeSwitch = boolean('Mode Switch', true);
  const currentMode = select('Current Mode', { Light: 'light', Dark: 'dark' }, 'light');

  return <NavBar modeSwitch={modeSwitch} currentMode={currentMode} />;
};
