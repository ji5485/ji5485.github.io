import React, { FunctionComponent } from 'react';
import Layout from 'components/templates/Layout';
import Portfolio from 'components/templates/Portfolio';

const PORTFOLIO_PAGE_METADATA = {
  title: 'Portfolios in Dev Life',
  description:
    '개발자가 되고 싶다고 생각한 이후로 만든 프로젝트에 대한 설명과 그동안 여러 대회에 참석하면서 생각한 느낀 점과 결과를 담았습니다.',
  siteUrl: 'https://ji5485.github.io/portfolio',
};

const PortfolioPage: FunctionComponent = function ({}) {
  return (
    <Layout {...PORTFOLIO_PAGE_METADATA}>
      <Portfolio />
    </Layout>
  );
};

export default PortfolioPage;
