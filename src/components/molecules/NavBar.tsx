import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';

interface NavBarProps {
  modeSwitch: boolean;
}

const MODE_STORAGE_KEY = 'blog-current-mode';

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

const NavBar: FunctionComponent<NavBarProps> = function ({ modeSwitch }) {
  const [currentMode, setCurrentMode] = useState<string>('');

  useEffect(() => {
    setCurrentMode(window.localStorage.getItem(MODE_STORAGE_KEY));
  }, []);

  const changeMode = () => {
    const toggledMode = currentMode === 'light' ? 'dark' : 'light';

    window.document.body.classList.remove(currentMode);
    window.document.body.classList.add(toggledMode);

    window.localStorage.setItem(MODE_STORAGE_KEY, toggledMode);
    setCurrentMode(toggledMode);
  };

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
      {modeSwitch && (
        <Text onClick={changeMode}>{currentMode === 'light' ? 'Dark' : 'Light'} Mode</Text>
      )}
    </NavBarComponent>
  );
};

export default NavBar;
