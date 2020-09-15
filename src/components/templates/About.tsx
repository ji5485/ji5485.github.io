import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Header from 'components/molecules/Header';
import Question, { QuestionProps } from 'components/molecules/Question';
import Profile, { ProfileProps } from 'components/organisms/Profile';
import Career, { CareerProps } from 'components/molecules/Career';

interface AboutProps {
  logoVisibility: boolean;
  questionList: [QuestionProps];
  profileImage: ProfileProps.profileImage;
  iconSetList: ProfileProps.IconSetList;
  careerList: [CareerProps];
}

const StyleLine = styled.div`
  width: 1px;
  height: 100px;
  background: black;
  margin: 100px auto;
`;

const AboutContentComponent = styled.div`
  padding: 50px 0;
  width: 840px;
`;

const AboutComponent = styled.div`
  width: 100%;
`;

const About: FunctionComponent<AboutProps> = function ({ logoVisibility, questionList, profileImage, iconSetList, careerList }) {
  return (
    <AboutComponent>
      <Header logoVisibility={logoVisibility} />
      
      <AboutContentComponent>
        {questionList.map((question, index) => {
          let { title, content } = question;
          return <Question title={title} content={content} key={`${question}-${index}`} />;
        })}

        <StyleLine/>

        <Profile profileImage={profileImage} iconSetList={iconSetList} />

        {careerList.map((career, index) => {
          let { title, contents, direction } = career;
          return <Career title={title} contents={contents} direction={direction} key={`${title}-${index}`} />;
        })}
      </AboutContentComponent>

    </AboutComponent>
  );
};

export default About;
