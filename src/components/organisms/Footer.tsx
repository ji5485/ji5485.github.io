import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import IconList from 'components/molecules/IconList';
import NavBar from 'components/molecules/NavBar';

const ICON_LIST = [
  { to: 'https://github.com/ji5485', type: 'github' },
  { to: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
  { to: 'https://www.facebook.com/', type: 'facebook' },
];

const FooterComponent = styled.div`
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

const Footer: FunctionComponent<{}> = function ({}) {
  return (
    <FooterComponent>
      <FooterContent>
        <ContentLine>
          <Text size={15} weight={700}>
            Too Early To Stop
          </Text>
          <IconList list={ICON_LIST} size={20} />
        </ContentLine>

        <ContentLine>
          <Text size={12} weight={100}>
            ⓒ Copyright
          </Text>
          <NavBar modeSwitch={false} currentMode="light" />
        </ContentLine>
      </FooterContent>
    </FooterComponent>
  );
};

export default Footer;
