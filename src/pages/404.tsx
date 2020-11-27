import React, { FunctionComponent } from 'react';
import Layout from 'components/templates/Layout';
import NotFound from 'components/templates/NotFound';

const NotFoundPage: FunctionComponent = function ({}) {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
