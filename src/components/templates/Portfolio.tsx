import React, { FunctionComponent } from 'react';
import Title from 'components/molecules/Title';
import PortfolioList from 'components/organisms/PortfolioList';
import PageTemplate from 'components/templates/PageTemplate';
import PORTFOLIO_LIST from '../../../static/PortfolioList.json';

const Portfolio: FunctionComponent<{}> = function ({}) {
  return (
    <PageTemplate>
      <Title title="Portfolio." subTitle="My Projects & Activities" />
      <PortfolioList type="project" title="Projects" list={PORTFOLIO_LIST.project} />
      <PortfolioList type="activity" title="Activities" list={PORTFOLIO_LIST.activity} />
    </PageTemplate>
  );
};

export default Portfolio;
