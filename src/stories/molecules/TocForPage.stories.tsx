import React, { FunctionComponent } from "react";
import TocForPage from "components/molecules/TocForPage";
import { withKnobs } from '@storybook/addon-knobs';

const TocForPageProps = [
  { title: 'Hello Storybook1', slug: 'hello-storybook1' },
  { title: 'Hello Storybook2', slug: 'hello-storybook2' },
  { title: 'Hello Storybook3', slug: 'hello-storybook3' }
]

export default {
  title: "Molecules",
  component: TocForPage,
  decorators: [withKnobs]
}

export const TocForPageStory: FunctionComponent<{}> = function ({}) {
  return <TocForPage toc={TocForPageProps} />;
}