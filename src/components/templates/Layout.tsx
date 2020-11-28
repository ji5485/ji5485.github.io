// TODO: Make a Global Layout Component for Search Engine Optimization

import React, { FunctionComponent, ReactNode } from 'react';
import GlobalStyle from 'components/atoms/GlobalStyle';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: ReactNode;
}

const LayoutComponent = styled.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--color);
  transition: 0.3s background;
`;

const Layout: FunctionComponent<LayoutProps> = function ({ children }) {
  return (
    <LayoutComponent>
      <Helmet />

      <GlobalStyle />
      {children}
    </LayoutComponent>
  );
};

export default Layout;
