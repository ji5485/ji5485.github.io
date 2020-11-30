import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import Main from 'components/templates/Main';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
  };
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
  },
}) {
  return (
    <Layout title={title} description={description} url={siteUrl}>
      <Main />
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
  }
`;
