import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Title from 'components/molecules/Title';
import QuestionList from 'components/organisms/QuestionList';
import Profile from 'components/organisms/Profile';
import CareerList, { CareerListComponent } from 'components/organisms/CareerList';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

const AboutComponent = styled.div`
  width: 100%;
`;

const StyleLine = styled.div`
  width: 1px;
  height: 100px;
  background: black;
  margin: 100px auto;
`;

const Content = styled.div`
  padding: 100px 0;
  width: 768px;
  margin: 0 auto;

  ${CareerListComponent} {
    margin-top: 120px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 80px 20px;
  }
`;

const About: FunctionComponent<{}> = function ({}) {
  return (
    <AboutComponent>
      <Header />

      <Content>
        <Title title="About." subTitle="Introduce Myself" align="left" />
        <QuestionList />
        <StyleLine />
        <Title title="Profile." subTitle="Information About Me" align="right" />
        <Profile />
        <CareerList />
      </Content>

      <Footer />
    </AboutComponent>
  );
};

export default About;
