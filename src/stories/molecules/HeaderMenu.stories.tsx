import React, { FunctionComponent } from "react";
import HeaderMenu, { HeaderMenuProps } from "components/molecules/HeaderMenu";
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: "Molecules",
  component: HeaderMenu,
  decorators: [withKnobs]
}

export const HeaderMenuStory: FunctionComponent<HeaderMenuProps> = () => {
  return <HeaderMenu />;
}