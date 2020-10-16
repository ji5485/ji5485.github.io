import React, { FunctionComponent } from 'react';
import Layout from 'components/templates/Layout';
import About from 'components/templates/About';

const AboutPage: FunctionComponent<{}> = function ({}) {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;
