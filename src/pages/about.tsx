import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/templates/Layout'
import About from 'components/templates/About'

const ABOUT_PAGE_METADATA = {
  title: 'About Junior Developer Hyun',
  description:
    '저는 항상 다양한 경험을 중요시 생각하고, 언제나 Too Early To Stop이라는 제 슬로건에 맞게 행동하기 위해 노력하는 주니어 개발자 Hyun입니다.',
  url: 'https://ji5485.github.io/about/',
}

type AboutPageProps = {
  data: {
    file: {
      publicURL: string
    }
  }
}

const AboutPage: FunctionComponent<AboutPageProps> = function ({
  data: {
    file: { publicURL },
  },
}) {
  return (
    <Layout {...ABOUT_PAGE_METADATA} image={publicURL}>
      <About />
    </Layout>
  )
}

export default AboutPage

export const imageMetadataQuery = graphql`
  {
    file(name: { eq: "main_image" }) {
      publicURL
    }
  }
`
