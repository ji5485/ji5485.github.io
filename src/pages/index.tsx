import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import Main from 'components/templates/Main';
import { FixedObject } from 'gatsby-image';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    imageSharp: {
      fixed: FixedObject;
    };
  };
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    imageSharp: { fixed },
  },
}) {
  return (
    <Layout title={title} description={description} url={siteUrl}>
      <Main image={fixed} />
    </Layout>
  );
};

export default IndexPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    imageSharp(fixed: { originalName: { eq: "main_image.jpeg" } }) {
      fixed(width: 200, height: 200, quality: 80) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`;
