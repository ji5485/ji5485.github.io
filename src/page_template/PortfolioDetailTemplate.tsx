import React, { FunctionComponent } from 'react';
import Layout from 'components/templates/Layout';
import PortfolioDetail, { PortfolioDetailProps } from 'components/templates/PortfolioDetail';
import { graphql } from 'gatsby';

interface PortfolioDetailTemplateProps {
  data: {
    portfolioMetadata: PortfolioDetailProps;
  };
}

const PortfolioDetailTemplate: FunctionComponent<PortfolioDetailTemplateProps> = function ({
  data: { portfolioMetadata },
}) {
  return (
    <Layout title="Detail of This Portfolio">
      <PortfolioDetail {...portfolioMetadata} />
    </Layout>
  );
};

export default PortfolioDetailTemplate;

export const getPortfolioDetailById = graphql`
  query getPortfolioDetailById($portfolioId: String) {
    portfolioMetadata(id: { eq: $portfolioId }) {
      title
      image {
        fluid(maxWidth: 800, fit: OUTSIDE, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      detail {
        subTitle
        period
        description
        review
        extraImage {
          fluid(maxWidth: 300, maxHeight: 300, fit: OUTSIDE, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
