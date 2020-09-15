import React, { FunctionComponent } from "react";
import SideMenu from "components/molecules/SideMenu";
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: "Molecules",
  component: SideMenu,
  decorators: [withKnobs]
}

export const SideMenuStory: FunctionComponent<{}> = function ({}) {
  return <SideMenu />;
}