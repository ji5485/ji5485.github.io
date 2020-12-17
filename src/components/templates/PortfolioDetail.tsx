import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PortfolioDetailContent from 'components/organisms/PortfolioDetailContent';
import PortfolioDetailImageList from 'components/organisms/PortfolioDetailImageList';
import { FluidObject } from 'gatsby-image';

export interface PortfolioDetailProps {
  title: string;
  image: {
    fluid: FluidObject;
  };
  detail: {
    subTitle: string;
    period: string;
    description: string;
    review: string;
    extraImage: [{ fluid: FluidObject }];
  };
}

const PortfolioDetailComponent = styled.div`
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
    padding: 150px 0;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 80px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const PortfolioDetail: FunctionComponent<PortfolioDetailProps> = function ({
  title,
  image: { fluid },
  detail: { subTitle, period, description, review, extraImage },
}) {
  return (
    <PortfolioDetailComponent>
      <PortfolioDetailContent
        info={{ title, subTitle, period }}
        contents={[
          { title: 'Description', content: description },
          { title: 'Review', content: review },
        ]}
        image={fluid}
      />
      <PortfolioDetailImageList list={extraImage} />
    </PortfolioDetailComponent>
  );
};

export default PortfolioDetail;
