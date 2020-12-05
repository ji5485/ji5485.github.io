import React, { FunctionComponent } from 'react';
import Layout from 'components/templates/Layout';
import PortfolioDetail from 'components/templates/PortfolioDetail';

interface PortfolioDetailTemplateProps {
  pathContext: {
    title: string;
    image: string;
    subTitle: string;
    period: string;
    description: string;
    review: string;
    extraImage: string;
  };
}

const PortfolioDetailTemplate: FunctionComponent<PortfolioDetailTemplateProps> = function ({
  pathContext,
}) {
  return (
    <Layout title="Detail of This Portfolio">
      <PortfolioDetail {...pathContext} />
    </Layout>
  );
};

export default PortfolioDetailTemplate;
