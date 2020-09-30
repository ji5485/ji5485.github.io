import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Header from 'components/molecules/Header';
import QuestionList, { QuestionListProps } from 'components/organisms/QuestionList';
import Profile from 'components/organisms/Profile';
import CareerList, { CareerListProps, CareerListComponent } from 'components/organisms/CareerList';
import Footer from 'components/organisms/Footer';

interface AboutProps {
  logoVisibility: boolean;
  questionList: QuestionListProps;
  careerList: CareerListProps;
}

const StyleLine = styled.div`
  width: 1px;
  height: 100px;
  background: black;
  margin: 100px auto;
`;

const AboutContentComponent = styled.div`
  padding: 100px 0;
  width: 1200px;
  margin: 0 auto;

  ${CareerListComponent} {
    margin-top: 120px;
  }

  @media (max-width: 1199px) {
    width: 100%;
    padding: 60px 30px;
  }

  @media (max-width: 767px) {
    padding: 60px 20px;
  }
`;

const AboutComponent = styled.div`
  width: 100%;
`;

const About: FunctionComponent<AboutProps> = function ({
  logoVisibility,
  questionList,
  careerList,
}) {
  return (
    <AboutComponent>
      <Header logoVisibility={logoVisibility} />

      <AboutContentComponent>
        <QuestionList questionList={questionList} />
        <StyleLine />
        <Profile />
        <CareerList careerList={careerList} />
      </AboutContentComponent>

      <Footer />
    </AboutComponent>
  );
};

export default About;
