import React, { FunctionComponent, useState, useEffect } from 'react';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';

const MODE_STORAGE_KEY = 'blog-current-mode';

export const SideMenuComponent = styled.div`
  display: flex;
  width: 15px;
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
      <Text onClick={changeMode}>{currentMode === 'light' ? 'Dark' : 'Light'} Mode</Text>
    </SideMenuComponent>
  );
};

export default SideMenu;
