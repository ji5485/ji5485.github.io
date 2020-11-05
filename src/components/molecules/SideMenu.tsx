import React, { FunctionComponent } from 'react';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';

export const SideMenuComponent = styled.div`
  display: flex;
  width: 15px;
  height: 100%;
  font-weight: 300;
  margin-left: auto;
  flex-direction: row;
  justify-content: center;
  writing-mode: vertical-rl;

  ${TextComponent} {
    cursor: pointer;
  }

  ${LinkComponent} + ${TextComponent},
  ${LinkComponent} + ${LinkComponent} {
    margin-top: 30px;
  }
`;

const SideMenu: FunctionComponent<{}> = function ({}) {
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
      <Link to="/blog/1">
        <Text>Blog</Text>
      </Link>
      <Text>To Dark Mode</Text>
    </SideMenuComponent>
  );
};

export default SideMenu;
