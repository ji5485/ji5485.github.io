import React, { FunctionComponent } from 'react';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';

export interface HeaderProps {
  logoVisibility: boolean;
}

const HeaderLeft = styled.div<HeaderProps>`
  visibility: ${({ logoVisibility }) => (logoVisibility ? 'visible' : 'hidden')};

  @media (max-width: 767px) {
    display: none;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  font-weight: 100;

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

export const HeaderComponent = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 0 30px;
  }

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

const Header: FunctionComponent<HeaderProps> = function ({ logoVisibility }) {
  return (
    <HeaderComponent>
      <HeaderLeft logoVisibility={logoVisibility}>
        <Text size={15} weight={700}>
          Too Early To Stop
        </Text>
      </HeaderLeft>

      <HeaderRight>
        <Link to="/">
          <Text size={15}>Main</Text>
        </Link>
        <Link to="/about">
          <Text size={15}>About</Text>
        </Link>
        <Link to="/portfolio">
          <Text size={15}>Portfolio</Text>
        </Link>
        <Link to="/blog">
          <Text size={15}>Blog</Text>
        </Link>
        <Text size={15}>Dark Mode</Text>
      </HeaderRight>
    </HeaderComponent>
  );
};

Header.defaultProps = {
  logoVisibility: false,
};

export default Header;
