import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import generateImageLink from 'utilities/imageLinkGenerator';
import shortId from 'utilities/shortId';

interface PortfolioDetailImageListProps {
  list: string[];
}

const PortfolioDetailImageListComponent = styled.div`
  display: grid;
  grid-gap: 30px;

  @media (min-width: 1200px) {
    margin-top: 250px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    margin-top: 100px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 767px) {
    margin-top: 100px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PortfolioDetailImageList: FunctionComponent<PortfolioDetailImageListProps> = function ({
  list,
}) {
  return (
    <PortfolioDetailImageListComponent>
      {list.map((image, index) => (
        <ImageBox key={shortId()}>
          <Image src={generateImageLink(image)} alt="Activity Image" />
        </ImageBox>
      ))}
    </PortfolioDetailImageListComponent>
  );
};

export default PortfolioDetailImageList;
