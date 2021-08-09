import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import About from 'components/templates/About';

const ABOUT_PAGE_METADATA = {
  title: 'About Junior Developer Hyun',
  description:
    '저는 항상 다양한 경험을 중요시 생각하고, 언제나 Too Early To Stop이라는 제 슬로건에 맞게 행동하기 위해 노력하는 주니어 개발자 Hyun입니다.',
  url: 'https://ji5485.github.io/about/',
};

interface AboutPageProps {
  data: {
    imageSharp: {
      fixed: { src: string };
    };
  };
}

const AboutPage: FunctionComponent<AboutPageProps> = function ({
  data: {
    imageSharp: {
      fixed: { src },
    },
  },
}) {
  return (
    <Layout {...ABOUT_PAGE_METADATA} image={src}>
      <About />
    </Layout>
  );
};

export default AboutPage;

export const imageMetadataQuery = graphql`
  {
    imageSharp(fixed: { originalName: { eq: "main_image.jpeg" } }) {
      fixed {
        src
      }
    }
  }
`;
