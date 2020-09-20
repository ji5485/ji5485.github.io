import React, { FunctionComponent, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from 'components/molecules/Header';
import TocForPage, { TocForPageProps, TocForPageComponent } from 'components/molecules/TocForPage';
import QuestionList, { QuestionListProps } from 'components/organisms/QuestionList';
import Profile from 'components/organisms/Profile';
import CareerList, { CareerListProps, CareerListComponent } from 'components/organisms/CareerList';
import Footer from 'components/organisms/Footer';
import useSetHeading from 'hooks/useSetHeading';

interface AboutProps {
  logoVisibility: boolean;
  questionList: QuestionListProps;
  careerList: CareerListProps;
  toc: TocForPageProps.toc;
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

  @media (max-width: 1199px) {
    display: block;
    width: 100%;
    padding: 60px 30px;

    ${TocForPageComponent} {
      display: none;
    }
  }
`;

const AboutComponent = styled.div`
  width: 100%;
`;

const NON_TARGET_ID: string[] = ['root', 'error-stack', 'error-message', 'docs-root'];

const About: FunctionComponent<AboutProps> = function ({
  logoVisibility,
  questionList,
  careerList,
  toc,
}) {
  const activeSlug = useSetHeading('*[id]', NON_TARGET_ID);

  return (
    <AboutComponent>
      <Header logoVisibility={logoVisibility} />

      <AboutContentComponent>
        <div>
          <QuestionList questionList={questionList} />
          <StyleLine />
          <Profile id="developer-info" />
          <CareerList careerList={careerList} id="developer-career" />
        </div>

        <div>
          <TocForPage toc={toc} activeSlug={activeSlug} />
        </div>
      </AboutContentComponent>

      <Footer />
    </AboutComponent>
  );
};

export default About;
