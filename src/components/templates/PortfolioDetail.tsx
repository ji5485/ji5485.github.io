import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PortfolioDetailProps {
  title: string;
  image: string;
  subTitle: string;
  period: string;
  description: string;
  review: string;
  extraImage: string;
}

const PortfolioDetailComponent = styled.div`
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 50px;
  }
`;

const PortfolioDetail: FunctionComponent<PortfolioDetailProps> = function ({
  title,
  image,
  subTitle,
  period,
  description,
  review,
  extraImage,
}) {
  return (
    <PortfolioDetailComponent>{title}</PortfolioDetailComponent>
  );
};

export default PortfolioDetail;
