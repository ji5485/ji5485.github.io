import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import IconList from 'components/molecules/IconList';
import NavBar from 'components/molecules/NavBar';

const ICON_LIST = [
  { href: 'https://github.com/ji5485', type: 'github' },
  { href: 'https://www.instagram.com/hello_d0o/', type: 'instagram' },
  { href: 'https://www.facebook.com/people/주현도/100006799395407', type: 'facebook' },
];

const FooterComponent = styled.footer`
  background: rgba(0, 0, 0, 0.03);
  width: 100%;
  padding: 50px 0;

  body.dark & {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const FooterContent = styled.div`
  width: 768px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const ContentLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer: FunctionComponent = function ({}) {
  return (
    <FooterComponent>
      <FooterContent>
        <ContentLine>
          <Text size={17} weight={700}>
            Developer Hyun
          </Text>
          <IconList list={ICON_LIST} size={20} />
        </ContentLine>

        <ContentLine>
          <Text size={12} weight={300}>
            ⓒ Copyright
          </Text>
          <NavBar modeSwitch={false} currentMode="light" />
        </ContentLine>
      </FooterContent>
    </FooterComponent>
  );
};

export default Footer;
