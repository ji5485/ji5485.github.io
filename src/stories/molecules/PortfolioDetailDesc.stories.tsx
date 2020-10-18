import React, { FunctionComponent } from 'react';
import PortfolioDetailDesc from 'components/molecules/PortfolioDetailDesc';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Molecules',
  component: PortfolioDetailDesc,
  decorators: [withKnobs],
};

export const PortfolioDetailDescStory: FunctionComponent<{}> = function ({}) {
  const title = text('Title', 'Description');
  const content = text('Content', `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites.`);

  return <PortfolioDetailDesc title={title} content={content} />;
};
