import React, { FunctionComponent } from 'react';
import Layout from '../Layout';
import About from 'components/templates/About';

const AboutProps = {
  logoVisibility: true,
  questionList: [
    {
      title: 'Hello Storybook',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      slug: 'hello-storybook1',
    },
    {
      title: 'Hello Storybook',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      slug: 'hello-storybook2',
    },
    {
      title: 'Hello Storybook',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      slug: 'hello-storybook3',
    },
  ],
  careerList: [
    {
      title: 'Prize',
      direction: 'left',
      contents: [
        'Smarteen App+ Challenge 본선 진출 / 가작 입상',
        'Rehoboth Launch Cup 본선 진출 / 장려상 수상',
        '건국대학교 Medical Hackathon / 대상 수상',
      ],
    },
    {
      title: 'Experience',
      direction: 'right',
      contents: [
        '프리랜서 개발자 (2019.01 ~ 2019.06)',
        '스타트업 Knar 웹 개발자 (2019.06 ~ 2020.02)',
        '서울시립대학교 멋쟁이사자처럼 강의자 (2019.08 ~ 2019.11)',
      ],
    },
    {
      title: 'Education',
      direction: 'left',
      contents: [
        '한국디지털미디어고등학교 졸업 (2016.03 ~ 2019.02)',
        '서울시립대학교 수학과 재학 (2019.03 ~ )',
      ],
    },
  ],
  toc: [
    { title: 'Question1', slug: 'hello-storybook1' },
    { title: 'Question2', slug: 'hello-storybook2' },
    { title: 'Question3', slug: 'hello-storybook3' },
    { title: 'Developer Info', slug: 'developer-info' },
    { title: 'Developer Career', slug: 'developer-career' },
  ],
};

const AboutPage: FunctionComponent<{}> = function ({}) {
  return (
    <Layout>
      <About
        logoVisibility={AboutProps.logoVisibility}
        questionList={AboutProps.questionList}
        careerList={AboutProps.careerList}
        toc={AboutProps.toc}
      />
    </Layout>
  );
};

export default AboutPage;
