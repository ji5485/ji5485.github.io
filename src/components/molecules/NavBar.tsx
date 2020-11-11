import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';

interface NavBarProps {
  modeSwitch: boolean;
  currentMode: 'light' | 'dark';
  changeCurrentMode: Function;
}

export const NavBarComponent = styled.div`
  display: flex;
  font-weight: 100;

  ${TextComponent} {
    cursor: pointer;
    font-size: 15px;
  }

  ${LinkComponent} + ${TextComponent},
  ${LinkComponent} + ${LinkComponent} {
    margin-left: 20px;
  }
`;

const ModeSelectSwitch = styled(Text)``;

const NavBar: FunctionComponent<NavBarProps> = function ({ modeSwitch, currentMode, changeCurrentMode }) {
  return (
    <NavBarComponent>
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
      {modeSwitch && <ModeSelectSwitch onClick={changeCurrentMode}>{currentMode === 'light' ? 'Dark' : 'Light'} Mode</ModeSelectSwitch>}
    </NavBarComponent>
  );
};

export default NavBar;
