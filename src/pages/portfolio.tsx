import React, { FunctionComponent } from 'react';
import Layout from '../Layout';
import Portfolio from 'components/templates/Portfolio';

const PortfolioPage: FunctionComponent<{}> = function ({}) {
  return (
    <Layout>
      <Portfolio />
    </Layout>
  );
};

export default PortfolioPage;
