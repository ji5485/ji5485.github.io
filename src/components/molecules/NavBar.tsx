import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';
import ModeSwitch from 'components/molecules/ModeSwitch';

interface NavBarProps {
  modeSwitch: boolean;
}

export const NavBarComponent = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;

  ${TextComponent} {
    cursor: pointer;
    font-size: 15px;
  }

  ${LinkComponent} + ${TextComponent},
  ${LinkComponent} + ${LinkComponent} {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    ${TextComponent} {
      font-size: 13px;
    }
  }
`;

const NavBar: FunctionComponent<NavBarProps> = function ({ modeSwitch }) {
  return (
    <NavBarComponent>
      <Link to="/">
        <Text>Main</Text>
      </Link>
      <Link to="/about/">
        <Text>About</Text>
      </Link>
      <Link to="/portfolio/">
        <Text>Portfolio</Text>
      </Link>
      <Link to="/blog/1">
        <Text>Blog</Text>
      </Link>
      {modeSwitch && <ModeSwitch />}
    </NavBarComponent>
  );
};

export default NavBar;
