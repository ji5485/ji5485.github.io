import React, { FunctionComponent, ReactNode } from 'react';
import GlobalStyle from 'components/atoms/GlobalStyle';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  title: string;
  description?: string;
  type: string;
  image?: string;
  url: string;
  children: ReactNode;
}

const LayoutComponent = styled.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--color);
  transition: 0.3s background;
`;

const Layout: FunctionComponent<LayoutProps> = function ({
  title,
  description,
  type,
  image,
  url,
  children,
}) {
  return (
    <LayoutComponent>
      <Helmet>
        <title>{title} | Developer Hyun</title>

        <meta name="description" content={description} />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Dev Log of Hyun" />

        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      {children}
    </LayoutComponent>
  );
};

Layout.defaultProps = {
  title: 'Dev Log of Hyun',
  type: 'website',
  image: undefined,
  url: 'https://ji5485.github.io',
};

export default Layout;
