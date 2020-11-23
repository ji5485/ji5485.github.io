import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import SideMenu, { SideMenuComponent } from 'components/molecules/SideMenu';
import IconList, { IconListProps } from 'components/molecules/IconList';
import Introduction from 'components/organisms/Introduction';
import Header, { HeaderComponent } from 'components/organisms/Header';

const INTRODUCTION_ICON_LIST: IconListProps.list = [
  { href: 'https://github.com/ji5485', type: 'github' },
  { href: 'https://www.instagram.com/hello_d0o/', type: 'instagram' },
  { href: 'https://www.facebook.com/people/주현도/100006799395407', type: 'facebook' },
];

const MainComponent = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 60px 0;
  display: grid;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0 60px;
    grid-template-rows: 80px minmax(400px, auto) 80px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  ${HeaderComponent} {
    display: none;
    height: 100%;
    margin: 0;
    padding: 0;

    @media (max-width: 1200px) {
      display: flex;
      width: 100%;
    }
  }
`;

const MainContentComponent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    justify-content: space-between;

    ${SideMenuComponent} {
      display: none;
    }
  }
`;

const MainFooterComponent = styled.div`
  height: 100%;
  display: none;
  align-items: center;

  @media (max-width: 1200px) {
    display: flex;
  }
`;

const Main: FunctionComponent<{}> = function ({}) {
  return (
    <MainComponent>
      <Header />

      <MainContentComponent>
        <Introduction iconList={INTRODUCTION_ICON_LIST} />
        <SideMenu />
      </MainContentComponent>

      <MainFooterComponent>
        <IconList list={INTRODUCTION_ICON_LIST} size={25} />
      </MainFooterComponent>
    </MainComponent>
  );
};

export default Main;
