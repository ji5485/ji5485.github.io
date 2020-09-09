// TODO: Make a Global Layout Component for Search Engine Optimization

import React, { FunctionComponent, ReactNode } from 'react';
import GlobalStyle from 'components/atoms/GlobalStyle';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = function ({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
