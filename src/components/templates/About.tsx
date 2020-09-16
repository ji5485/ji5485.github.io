import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Header from 'components/molecules/Header';
import QuestionList, { QuestionListProps } from 'components/organisms/QuestionList';
import Profile, { ProfileProps } from 'components/organisms/Profile';
import CareerList, { CareerListProps, CareerListComponent } from 'components/organisms/CareerList';

interface AboutProps {
  logoVisibility: boolean;
  questionList: QuestionListProps;
  profileImage: ProfileProps.profileImage;
  iconSetList: ProfileProps.IconSetList;
  careerList: CareerListProps;
}

const StyleLine = styled.div`
  width: 1px;
  height: 100px;
  background: black;
  margin: 100px auto;
`;

const AboutContentComponent = styled.div`
  display: grid;
  grid-template-columns: 900px 240px;
  grid-gap: 60px;
  padding: 100px 0;
  width: 1200px;
  margin: 0 auto;

  ${CareerListComponent} {
    margin-top: 120px;
  }

  @media (max-width: 767px) {
    display: block;
    width: 100%;
    padding: 60px 30px;
  }
`;

const AboutComponent = styled.div`
  width: 100%;
`;

const About: FunctionComponent<AboutProps> = function ({ logoVisibility, questionList, profileImage, iconSetList, careerList }) {
  return (
    <AboutComponent>
      <Header logoVisibility={logoVisibility} />
      
      <AboutContentComponent>
        <div>
          <QuestionList questionList={questionList} />
          <StyleLine />
          <Profile profileImage={profileImage} iconSetList={iconSetList} id="developer-info" />
          <CareerList careerList={careerList} id="developer-career" />
        </div>

        <div>abc</div>
      </AboutContentComponent>

    </AboutComponent>
  );
};

export default About;
