import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Title from 'components/molecules/Title';
import QuestionList from 'components/organisms/QuestionList';
import Profile from 'components/organisms/Profile';
import CareerList from 'components/organisms/CareerList';
import PageTemplate from 'components/templates/PageTemplate';

const StyleLine = styled.div`
  width: 1px;
  height: 100px;
  background: #000000;
  margin: 100px auto;

  body.dark & {
    background: #FFFFFF;
  }
`;

const About: FunctionComponent<{}> = function ({}) {
  return (
    <PageTemplate>
      <Title title="About." subTitle="Introduce Myself" align="left" />
      <QuestionList />
      <StyleLine />
      <Title title="Profile." subTitle="Information About Me" align="right" />
      <Profile />
      <CareerList />
    </PageTemplate>
  );
};

export default About;
