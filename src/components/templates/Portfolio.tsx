import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Title from 'components/molecules/Title';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import PortfolioList from 'components/organisms/PortfolioList';
import PORTFOLIO_LIST from '../../../static/PortfolioList.json';

const PortoflioComponent = styled.div`
  width: 100%;
`;

const Content = styled.div`
  padding: 100px 0;
  width: 768px;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 100%;
    padding: 80px 20px;
  }
`;

const Portfolio: FunctionComponent<{}> = function ({}) {
  return (
    <PortoflioComponent>
      <Header />

      <Content>
        <Title title="Portfolio." subTitle="My Projects & Activities" />
        <PortfolioList type="project" title="Projects" list={PORTFOLIO_LIST.project} />
        <PortfolioList type="activity" title="Activities" list={PORTFOLIO_LIST.activity} />
      </Content>

      <Footer />
    </PortoflioComponent>
  );
};

export default Portfolio;
