// TODO: Make a Global Layout Component for Search Engine Optimization

import React, { FunctionComponent, ReactNode } from 'react';
import GlobalStyle from 'components/atoms/GlobalStyle';
import { css } from '@emotion/core';

interface LayoutProps {
  children: ReactNode;
}

const LayoutStyle = css`
  min-height: 100vh;
  background: var(--background);
  color: var(--color);
  transition: 0.3s background;
`;

const Layout: FunctionComponent<LayoutProps> = function ({ children }) {
  return (
    <div css={LayoutStyle}>
      <GlobalStyle />
      {children}
    </div>
  );
};

export default Layout;
