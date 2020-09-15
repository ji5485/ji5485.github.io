import React, { FunctionComponent } from "react";
import IntroductionText from "components/molecules/IntroductionText";
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: "Molecules",
  component: IntroductionText,
  decorators: [withKnobs]
}

export const IntroductionTextStory: FunctionComponent<{}> = function ({}) {
  return <IntroductionText />;
}