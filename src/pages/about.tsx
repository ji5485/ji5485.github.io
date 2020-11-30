import React, { FunctionComponent } from 'react';
import Layout from 'components/templates/Layout';
import About from 'components/templates/About';

const ABOUT_PAGE_METADATA = {
  title: 'About Junior Developer Hyun',
  description: '',
  siteUrl: 'https://ji5485.github.io/about',
};

const AboutPage: FunctionComponent = function ({}) {
  return (
    <Layout {...ABOUT_PAGE_METADATA}>
      <About />
    </Layout>
  );
};

export default AboutPage;
