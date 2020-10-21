import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PortfolioDetailContent from 'components/organisms/PortfolioDetailContent';

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
    padding: 150px 0;
  }
`;

const PortfolioDetail: FunctionComponent<PortfolioDetailProps> = function ({
  title,
  image,
  subTitle,
  period,
  description,
  review,
  //  extraImage,
}) {
  console.log(image);
  return (
    <PortfolioDetailComponent>
      <PortfolioDetailContent
        info={{ title, subTitle, period }}
        contents={[
          { title: 'Description', content: description },
          { title: 'Review', content: review },
        ]}
        image={image}
      />
    </PortfolioDetailComponent>
  );
};

export default PortfolioDetail;
