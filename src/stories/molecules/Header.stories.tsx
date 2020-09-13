import React, { FunctionComponent } from "react";
import Header from "components/molecules/Header";
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: "Molecules",
  component: Header,
  decorators: [withKnobs]
}

export const HeaderStory: FunctionComponent<{}> = () => {
  return <Header />;
}