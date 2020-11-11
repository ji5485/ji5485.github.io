import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { TextComponent } from 'components/atoms/Text';
import NavBar, { NavBarComponent } from 'components/molecules/NavBar';

interface HeaderProps {
  currentMode: 'light' | 'dark';
  changeCurrentMode: Function;
}

export const HeaderComponent = styled.div`
  width: 768px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
    width: 100%;

    ${NavBarComponent} {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

const Title = styled(TextComponent)`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header: FunctionComponent<HeaderProps> = function ({ currentMode, changeCurrentMode }) {
  return (
    <HeaderComponent>
      <Title>Too Early To Stop</Title>
      <NavBar modeSwitch={true} currentMode={currentMode} changeCurrentMode={changeCurrentMode} />
    </HeaderComponent>
  );
};

export default Header;
