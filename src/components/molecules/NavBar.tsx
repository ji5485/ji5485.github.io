import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';

type NavBarStyleProps = {
  currentMode: 'light' | 'dark';
};

interface NavBarProps extends NavBarStyleProps {
  modeSwitch: boolean;
}

export const NavBarComponent = styled.div<NavBarStyleProps>`
  display: flex;
  font-weight: 100;

  ${TextComponent} {
    cursor: pointer;
    font-size: 15px;
    color: ${({ currentMode }) => (currentMode === 'light' ? '#1E1F21' : '#FFFFFF')};
  }

  ${LinkComponent} + ${TextComponent},
  ${LinkComponent} + ${LinkComponent} {
    margin-left: 20px;
  }
`;

const NavBar: FunctionComponent<NavBarProps> = function ({ modeSwitch, currentMode }) {
  return (
    <NavBarComponent currentMode={currentMode}>
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
      {modeSwitch && <Text>{currentMode === 'light' ? 'Dark' : 'Light'} Mode</Text>}
    </NavBarComponent>
  );
};

NavBar.defaultProps = {
  modeSwitch: true,
  currentMode: 'light',
};

export default NavBar;
