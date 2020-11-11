// TODO: Make a Global Layout Component for Search Engine Optimization

import React, { FunctionComponent, ReactNode } from 'react';
import GlobalStyle from 'components/atoms/GlobalStyle';

interface LayoutProps {
  currentMode: 'light' | 'dark';
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = function ({ currentMode, children }) {  
  return (
    <>
      <GlobalStyle mode={currentMode} />
      {children}
    </>
  );
};

export default Layout;
