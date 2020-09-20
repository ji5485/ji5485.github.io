import React, { FunctionComponent } from "react";
import Text from "components/atoms/Text";
import FooterMenu from "components/molecules/FooterMenu";
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: "Molecules",
  component: FooterMenu,
  decorators: [withKnobs]
}

export const FooterMenuStory: FunctionComponent<{}> = function ({}) {
  const title = text("Title", "Explore");

  return (
    <FooterMenu title={title}>
      <Text>Main</Text>
      <Text>About</Text>
      <Text>Portfolio</Text>
      <Text>Blog</Text>
    </FooterMenu>
  );
}