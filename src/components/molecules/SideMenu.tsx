import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { IconComponent } from 'components/atoms/Icon';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';
import ModeSwitch, { Switch } from 'components/molecules/ModeSwitch';

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

  ${Switch} {
    margin-left: 0;
    margin-top: 30px;
    padding: 5px 2px;

    ${IconComponent} {
      margin-bottom: 3px;
      padding-left: 0.5px;
      transform: rotate(90deg);
    }
  }
`;

const SideMenu: FunctionComponent = function ({}) {
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
      <Link to="/blog/1/">
        <Text>Blog</Text>
      </Link>
      <ModeSwitch />
    </SideMenuComponent>
  );
};

export default SideMenu;
