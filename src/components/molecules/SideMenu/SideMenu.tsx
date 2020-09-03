import React, { FunctionComponent } from 'react';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import styled from '@emotion/styled';

export interface SideMenuProps {}

const SideMenuComponent = styled.div`
  display: flex;
  width: 15px;
  font-weight: 300;
  margin-left: auto;
  flex-direction: row;
  justify-content: center;
  writing-mode: vertical-rl;
`;

const SideMenu: FunctionComponent<SideMenuProps> = function ({}) {
  return (
    <SideMenuComponent>
      <Link to="/">
        <Text>Main</Text>
      </Link>
      <Link to="/about">
        <Text>About</Text>
      </Link>
      <Link to="/portfolio">
        <Text>Portfolio</Text>
      </Link>
      <Link to="/blog">
        <Text>Blog</Text>
      </Link>
      <Text extra={{marginTop: '40px', cursor: 'pointer'}}>To Dark Mode</Text>
    </SideMenuComponent>
  );
};

export default SideMenu;
