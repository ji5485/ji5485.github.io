import React, { FunctionComponent } from 'react';
import Title from 'components/molecules/Title';
import PortfolioList, { PortfolioListProps } from 'components/organisms/PortfolioList';
import PageTemplate from 'components/templates/PageTemplate';

interface PortfolioProps {
  project: PortfolioListProps.list;
  activity: PortfolioListProps.list;
}

const Portfolio: FunctionComponent<PortfolioProps> = function ({ project, activity }) {
  return (
    <PageTemplate>
      <Title title="Portfolio." subTitle="My Projects & Activities" />
      <PortfolioList type="project" title="Projects" list={project} />
      <PortfolioList type="activity" title="Activities" list={activity} />
    </PageTemplate>
  );
};

export default Portfolio;
