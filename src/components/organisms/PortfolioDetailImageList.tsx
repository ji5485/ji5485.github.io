import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { shortId } from 'utilities/utils';
import Img, { FluidObject } from 'gatsby-image';

interface PortfolioDetailImageListProps {
  list: [{ fluid: FluidObject }];
}

const PortfolioDetailImageListComponent = styled.div`
  display: grid;
  grid-gap: 30px;

  @media (min-width: 1200px) {
    margin-top: 250px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-top: 100px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

const PortfolioDetailImageList: FunctionComponent<PortfolioDetailImageListProps> = function ({
  list,
}) {
  return (
    <PortfolioDetailImageListComponent>
      {list.map(({ fluid }) => (
        <Img fluid={{ ...fluid, aspectRatio: 1 }} alt="Activity Image" key={shortId()} />
      ))}
    </PortfolioDetailImageListComponent>
  );
};

export default PortfolioDetailImageList;
