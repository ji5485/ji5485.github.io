import React, { FunctionComponent } from 'react'
import Layout from 'components/templates/Layout'
import PortfolioDetail, {
  PortfolioDetailProps,
} from 'components/templates/PortfolioDetail'
import { graphql } from 'gatsby'

type PortfolioDetailTemplateProps = {
  data: {
    portfolioMetadata: PortfolioDetailProps
  }
  location: {
    href: string
  }
}

const PortfolioDetailTemplate: FunctionComponent<PortfolioDetailTemplateProps> =
  function ({ data: { portfolioMetadata }, location: { href } }) {
    const portfolioDetailMetaData = {
      title: `Detail of ${portfolioMetadata.title}`,
      description: portfolioMetadata.detail.subTitle,
      image: portfolioMetadata.image.gatsbyImageData.images.fallback!.src,
      url: href,
    }

    return (
      <Layout {...portfolioDetailMetaData}>
        <PortfolioDetail {...portfolioMetadata} />
      </Layout>
    )
  }

export default PortfolioDetailTemplate

export const getPortfolioDetailById = graphql`
  query getPortfolioDetailById($portfolioId: String) {
    portfolioMetadata(id: { eq: $portfolioId }) {
      title
      image {
        gatsbyImageData(width: 1600)
      }
      detail {
        subTitle
        period
        description
        review
        extraImage {
          gatsbyImageData(width: 570)
        }
      }
    }
  }
`
