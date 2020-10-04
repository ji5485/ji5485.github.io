import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import SideMenu, { SideMenuComponent } from 'components/molecules/SideMenu';
import IconList, { iconListProps } from 'components/molecules/IconList';
import Introduction from 'components/organisms/Introduction';
import Header, { HeaderComponent } from 'components/organisms/Header';

export interface MainProps {
  profileImageLink: string;
  profileImageAlt: string;
  iconList: iconListProps.list;
}

const MainComponent = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  align-items: center;

  @media (max-width: 1199px) {
    padding: 60px 60px;
    display: grid;
    grid-template-rows: 30px minmax(400px, auto) 30px;
  }

  @media (max-width: 767px) {
    padding: 60px 20px;
  }

  ${HeaderComponent} {
    display: none;
    height: 100%;
    margin: 0;

    @media (max-width: 1199px) {
      display: flex;
      width: 100%;
    }
  }
`;

const MainContentComponent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;

  @media (max-width: 1199px) {
    display: flex;
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

  @media (max-width: 1199px) {
    display: flex;
  }
`;

const Main: FunctionComponent<MainProps> = function ({
  profileImageLink,
  profileImageAlt,
  iconList,
}) {
  return (
    <MainComponent>
      <Header />

      <MainContentComponent>
        <Introduction
          profileImageLink={profileImageLink}
          profileImageAlt={profileImageAlt}
          iconList={iconList}
          iconSize={30}
        />
        <SideMenu />
      </MainContentComponent>

      <MainFooterComponent>
        <IconList list={iconList} size={25} />
      </MainFooterComponent>
    </MainComponent>
  );
};

export default Main;
