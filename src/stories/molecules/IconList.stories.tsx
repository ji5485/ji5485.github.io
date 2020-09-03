import React, { FunctionComponent } from "react";
import IconList from "components/molecules/IconList";
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: "Molecules",
  component: IconList,
  decorators: [withKnobs]
}

export const IconListStory: FunctionComponent<{}> = () => {
  return <IconList />;
}