import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/templates/Layout'
import Main from 'components/templates/Main'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  return (
    <Layout
      title={title}
      description={description}
      image={publicURL}
      url={siteUrl}
    >
      <Main image={gatsbyImageData} />
    </Layout>
  )
}

export default IndexPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "main_image" }) {
      childImageSharp {
        gatsbyImageData(width: 200, height: 200)
      }
      publicURL
    }
  }
`
