import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { shortId } from 'utilities/utils'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export type PortfolioDetailImageListProps = {
  imageList: [{ gatsbyImageData: IGatsbyImageData }]
}

const PortfolioDetailImageListComponent = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 1200px) {
    margin-top: 250px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    grid-template-columns: 1fr;
  }
`

const PortfolioDetailImageList: FunctionComponent<PortfolioDetailImageListProps> =
  function ({ imageList }) {
    return (
      <PortfolioDetailImageListComponent>
        {imageList.map(({ gatsbyImageData }) => (
          <GatsbyImage
            image={gatsbyImageData}
            alt="Activity Image"
            key={shortId()}
          />
        ))}
      </PortfolioDetailImageListComponent>
    )
  }

export default PortfolioDetailImageList
