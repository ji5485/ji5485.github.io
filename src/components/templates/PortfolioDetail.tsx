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

const PortfolioDetailComponent = styled.div``;

const PortfolioDetail: FunctionComponent<PortfolioDetailProps> = function ({
  title,
  image,
  subTitle,
  period,
  description,
  review,
  extraImage,
}) {
  return <PortfolioDetailComponent>{title}</PortfolioDetailComponent>;
};

export default PortfolioDetail;
