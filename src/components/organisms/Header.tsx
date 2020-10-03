import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import NavBar, { NavBarComponent } from 'components/molecules/NavBar';

export const HeaderComponent = styled.div`
  width: 768px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    padding: 0 20px;
    width: 100%;

    ${NavBarComponent} {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

const HeaderTitle = styled.div`
  ${TextComponent} {
    font-size: 17px;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const Header: FunctionComponent<{}> = function ({}) {
  return (
    <HeaderComponent>
      <HeaderTitle>
        <Text>Too Early To Stop</Text>
      </HeaderTitle>
      <NavBar modeSwitch={true} currentMode="light" />
    </HeaderComponent>
  );
};

Header.defaultProps = {
  logo: true,
};

export default Header;
