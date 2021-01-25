import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Icon, { IconComponent } from 'components/atoms/Icon';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';

interface NavBarProps {
  modeSwitch: boolean;
}

const MODE_STORAGE_KEY = 'blog-current-mode';

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

const SwitchText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 15px;
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 3px;
  background: var(--color);
  color: var(--background);

  ${IconComponent} {
    margin-right: 3px;
    padding-bottom: 0.5px;
  }

  @media (max-width: 768px) {
    font-size: 13px;

    ${IconComponent} {
      padding-bottom: 0;
    }
  }
`;

const NavBar: FunctionComponent<NavBarProps> = function ({ modeSwitch }) {
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
      {modeSwitch && (
        <SwitchText onClick={changeMode}>
          <Icon type={currentMode === 'light' ? 'moon' : 'sun'} size={11} />{' '}
          {currentMode === 'light' ? 'Dark' : 'Light'}
        </SwitchText>
      )}
    </NavBarComponent>
  );
};

export default NavBar;
