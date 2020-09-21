import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';
import FooterMenu, { FooterMenuComponent } from 'components/molecules/FooterMenu';
import FooterNav, { FooterNavComponent } from 'components/molecules/FooterNav';
import IconList from 'components/molecules/IconList';
import IconSet from 'components/molecules/IconSet';
import useWindowSize from 'hooks/useWindowSize';

const ICON_LIST = [
  { to: 'https://github.com/ji5485', type: 'github' },
  { to: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
  { to: 'https://www.facebook.com/', type: 'facebook' },
];

const FooterRight = styled.div`
  ${TextComponent} {
    font-size: 15px;
  }

  ${TextComponent}:first-of-type {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const FooterLeft = styled.div`
  display: flex;

  ${FooterMenuComponent} + ${FooterMenuComponent} {
    margin-left: 50px;
  }
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: #1e1f21;
  margin: 15px 0;
`;

const FooterContent = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;

  ${FooterNavComponent} {
    margin-top: 25px;
  }

  @media (max-width: 1199px) {
    width: 100%;
    padding: 40px 30px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterComponent = styled.div`
  background: rgba(0, 0, 0, 0.03);
  width: 100%;
`;

const Footer: FunctionComponent<{}> = function ({}) {
  const { width } = useWindowSize();

  return (
    <FooterComponent>
      <FooterContent>
        {width >= 768 ? (
          <>
            <FooterRight>
              <Text weight={700}>Too Early To Stop</Text>

              <Text weight={100}>Lorem Ipsum is simply dummy text of the</Text>
              <Text weight={100}>printing and typesetting industry.</Text>
              <Text weight={100}>Lorem Ipsum has been the industry's</Text>
              <Text weight={100}>standard dummy text ever since the 1500s.</Text>
            </FooterRight>

            <FooterLeft>
              <FooterMenu title="Explorer">
                <Link to="/">
                  <Text>Main</Text>
                </Link>
                <Link to="/about">
                  <Text>About</Text>
                </Link>
                <Link to="/portfolio">
                  <Text>Portfolio</Text>
                </Link>
                <Link to="/blog">
                  <Text>Blog</Text>
                </Link>
              </FooterMenu>

              <FooterMenu title="About Me">
                <IconSet
                  href={'https://instagram.com'}
                  type="instagram"
                  text="Instagram"
                  size={15}
                />
                <IconSet href={'https://instagram.com'} type="facebook" text="Facebook" size={15} />
                <IconSet href={'https://instagram.com'} type="github" text="Github" size={15} />
              </FooterMenu>
            </FooterLeft>
          </>
        ) : (
          <>
            <Text size={17} weight={700}>
              Too Early To Stop
            </Text>
            <FooterNav />
            <StyledLine />
            <IconList list={ICON_LIST} size={20} />
          </>
        )}
      </FooterContent>
    </FooterComponent>
  );
};

export default Footer;
