import React, { FunctionComponent } from "react";
import FooterNav from "components/molecules/FooterNav";
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: "Molecules",
  component: FooterNav,
  decorators: [withKnobs]
}

export const FooterNavStory: FunctionComponent<{}> = function ({}) {
  return <FooterNav />;
}