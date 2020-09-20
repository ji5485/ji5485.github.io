import React, { FunctionComponent } from 'react';
import Layout from '../Layout';
import About from 'components/templates/About';

const AboutPageProps = {
  logoVisibility,
};

const AboutPage: FunctionComponent<{}> = function ({}) {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;