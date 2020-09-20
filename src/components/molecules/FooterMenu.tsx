import React, { ReactNode, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import { LinkComponent } from 'components/atoms/Link';
import { IconSetComponent } from 'components/molecules/IconSet';

interface FooterMenuProps {
  title: string;
  children: ReactNode;
}

const FooterMenuTitle = styled.div`
  margin-right: 30px;

  ${TextComponent} {
    font-size: 15px;
    font-weight: 400;
  }
`;

const FooterMenuContents = styled.div`
  ${TextComponent} {
    font-size: 15px;
    font-weight: 100;
  }

  ${LinkComponent} + ${LinkComponent},
  ${IconSetComponent} + ${IconSetComponent} {
    margin-top: 15px;
  }
`;

export const FooterMenuComponent = styled.div`
  display: flex;
`;

const FooterMenu: FunctionComponent<FooterMenuProps> = function ({ title, children }) {
  return (
    <FooterMenuComponent>
      <FooterMenuTitle>
        <Text weight={400} size={15}>
          {title}
        </Text>
      </FooterMenuTitle>

      <FooterMenuContents>{children}</FooterMenuContents>
    </FooterMenuComponent>
  );
};

export default FooterMenu;
