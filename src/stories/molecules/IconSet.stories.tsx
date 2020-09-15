import React, { FunctionComponent } from 'react';
import IconSet from 'components/molecules/IconSet';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

export default {
  title: 'Molecules',
  component: IconSet,
  decorators: [withKnobs],
};

export const IconSetStory: FunctionComponent<{}> = function ({}) {
  const href = text("Href", "https://instagram.com");
  const type = select('Type', {Instagram: 'instagram', Facebook: 'facebook', Github: 'github', Phone: 'phone', Email: 'email'}, 'instagram');
  const content = text("Text", "hello_d0o");
  const size = number("Size", 25);

  return <IconSet href={href} type={type} text={content} size={size} />;
};
