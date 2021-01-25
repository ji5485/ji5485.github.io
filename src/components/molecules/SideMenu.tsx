import React, { FunctionComponent, useState, useEffect } from 'react';
import Icon, { IconComponent } from 'components/atoms/Icon';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';

const MODE_STORAGE_KEY = 'blog-current-mode';

export const SideMenuComponent = styled.div`
  display: flex;
  width: 20px;
  font-weight: 300;
  margin-left: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;

  ${TextComponent} {
    cursor: pointer;
  }

  ${LinkComponent} + ${TextComponent},
  ${LinkComponent} + ${LinkComponent} {
    margin-top: 30px;
  }
`;

const SwitchText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 2px;
  border-radius: 3px;
  background: var(--color);
  color: var(--background);

  ${IconComponent} {
    margin-bottom: 3px;
    padding-left: 0.5px;
    transform: rotate(90deg);
  }
`;

const SideMenu: FunctionComponent = function ({}) {
  const [currentMode, setCurrentMode] = useState<string | null>();

  useEffect(() => {
    setCurrentMode(window.localStorage.getItem(MODE_STORAGE_KEY));
  }, []);

  const changeMode = () => {
    const toggledMode = currentMode === 'light' ? 'dark' : 'light';

    if (!currentMode) return;

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
      <Link to="/about/">
        <Text>About</Text>
      </Link>
      <Link to="/portfolio/">
        <Text>Portfolio</Text>
      </Link>
      <Link to="/blog/1">
        <Text>Blog</Text>
      </Link>
      <SwitchText onClick={changeMode}>
        <Icon type={currentMode === 'light' ? 'moon' : 'sun'} size={11} />{' '}
        {currentMode === 'light' ? 'Dark' : 'Light'}
      </SwitchText>{' '}
    </SideMenuComponent>
  );
};

export default SideMenu;
