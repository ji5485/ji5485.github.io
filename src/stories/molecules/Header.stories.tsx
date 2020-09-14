import React, { FunctionComponent } from "react";
import Header from "components/molecules/Header";
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: "Molecules",
  component: Header,
  decorators: [withKnobs]
}

export const HeaderStory: FunctionComponent<{}> = () => {
  const logoVisibility = boolean("Logo Visibility", true);

  return <Header logoVisibility={logoVisibility} />;
}