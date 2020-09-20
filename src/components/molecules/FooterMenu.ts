import React, { ReactNode, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';

interface FooterMenuProps {
  title: string;
  children: ReactNode;
}

const FooterMenuTitle = styled.div`
  margin-left: 20px;
`;

const FooterMenuContents = styled.div`
  a + a {
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
        <Text weight={400}>{title}</Text>
      </FooterMenuTitle>

      <FooterMenuContents>{children}</FooterMenuContents>
    </FooterMenuComponent>
  );
};

export default FooterMenu;
