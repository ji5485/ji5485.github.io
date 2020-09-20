import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import Link from 'components/atoms/Link';

const StyledLink = styled.div`
  height: 15px;
  width: 1px;
  background: #1e1f21;
`;

export const FooterNavComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${TextComponent} {
    font-size: 15px;
    font-weight: 400;
  }
`;

const FooterNav: FunctionComponent<{}> = function ({}) {
  return (
    <FooterNavComponent>
      <Link to="/">
        <Text>Main</Text>
      </Link>
      <StyledLink />
      <Link to="/about">
        <Text>About</Text>
      </Link>
      <StyledLink />
      <Link to="/portfolio">
        <Text>Portfolio</Text>
      </Link>
      <StyledLink />
      <Link to="/blog">
        <Text>Blog</Text>
      </Link>
    </FooterNavComponent>
  );
};

export default FooterNav;
