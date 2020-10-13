import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Title from 'components/molecules/Title';
import QuestionList from 'components/organisms/QuestionList';
import Profile from 'components/organisms/Profile';
import CareerList, { CareerListProps, CareerListComponent } from 'components/organisms/CareerList';
import Header, { HeaderComponent } from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

interface AboutProps {
  careerList: CareerListProps;
}

const AboutComponent = styled.div`
  width: 100%;

  ${HeaderComponent} {
    @media (min-width: 768px) {
      width: 768px;
    }
  }
`;

const StyleLine = styled.div`
  width: 1px;
  height: 100px;
  background: black;
  margin: 100px auto;
`;

const AboutContentComponent = styled.div`
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

const About: FunctionComponent<AboutProps> = function ({}) {
  return (
    <AboutComponent>
      <Header />

      <AboutContentComponent>
        <Title title="About." subTitle="Introduce Myself" align="left" />
        <QuestionList />
        <StyleLine />
        <Title title="Profile." subTitle="Information About Me" align="right" />
        <Profile />
        <CareerList />
      </AboutContentComponent>

      <Footer />
    </AboutComponent>
  );
};

export default About;
