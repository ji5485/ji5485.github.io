import React, { FunctionComponent } from 'react';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';

export interface HeaderMenuProps {}

export const HeaderMenuComponent = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 300;

  ${TextComponent} {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    ${LinkComponent} + ${TextComponent},
    ${LinkComponent} + ${LinkComponent} {
      margin-left: 30px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const HeaderMenu: FunctionComponent<HeaderMenuProps> = function ({}) {
  return (
    <HeaderMenuComponent>
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
    </HeaderMenuComponent>
  );
};

export default HeaderMenu;
