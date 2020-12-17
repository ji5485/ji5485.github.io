import React, { FunctionComponent } from 'react';
import { PortfolioListProps } from 'components/organisms/PortfolioList';
import Layout from 'components/templates/Layout';
import Portfolio from 'components/templates/Portfolio';
import { graphql } from 'gatsby';

interface PortfolioPageProps {
  data: {
    project: {
      edges: PortfolioListProps.list;
    };
    activity: {
      edges: PortfolioListProps.list;
    };
  };
}

const PORTFOLIO_PAGE_METADATA = {
  title: 'Portfolios in Dev Life',
  description:
    '개발자가 되고 싶다고 생각한 이후로 만든 프로젝트에 대한 설명과 그동안 여러 대회에 참석하면서 생각한 느낀 점과 결과를 담았습니다.',
  siteUrl: 'https://ji5485.github.io/portfolio',
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = function ({
  data: { project, activity },
}) {
  return (
    <Layout {...PORTFOLIO_PAGE_METADATA}>
      <Portfolio project={project.edges} activity={activity.edges} />
    </Layout>
  );
};

export default PortfolioPage;

export const getPortfolioMetadata = graphql`
  fragment PortfolioData on PortfolioMetadata {
    title
    content
    image {
      fluid(maxWidth: 720, maxHeight: 200, fit: OUTSIDE, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  query getAllPortfolioMetadata {
    project: allPortfolioMetadata(filter: { type: { eq: "project" } }) {
      edges {
        node {
          ...PortfolioData
        }
      }
    }
    activity: allPortfolioMetadata(filter: { type: { eq: "activity" } }) {
      edges {
        node {
          ...PortfolioData
        }
      }
    }
  }
`;
