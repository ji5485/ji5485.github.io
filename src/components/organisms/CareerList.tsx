import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Career, { CareerComponent } from 'components/molecules/Career';
import shortId from 'utilities/shortId';

type CareerType = {
  title: string;
  contents: string[];
};

const CAREER_LIST: CareerType[] = [
  {
    title: 'Prize',
    contents: [
      'Smarteen App+ Challenge 본선 진출 / 가작 입상',
      'Rehoboth Launch Cup 본선 진출 / 장려상 수상',
      '건국대학교 Medical Hackathon / 대상 수상',
    ],
  },
  {
    title: 'Experience',
    contents: [
      '프리랜서 개발자 (2019.01 ~ 2019.06)',
      '스타트업 Knar 웹 개발자 (2019.06 ~ 2020.02)',
      '서울시립대학교 멋쟁이사자처럼 강의자 (2019.08 ~ 2019.11)',
    ],
  },
  {
    title: 'Education',
    contents: [
      '한국디지털미디어고등학교 졸업 (2016.03 ~ 2019.02)',
      '서울시립대학교 수학과 재학 (2019.03 ~ )',
    ],
  },
];

const CareerListComponent = styled.div`
  margin-top: 120px;

  ${CareerComponent} + ${CareerComponent} {
    margin-top: 100px;
  }
`;

const CareerList: FunctionComponent = function ({}) {
  return (
    <CareerListComponent>
      {CAREER_LIST.map(({ title, contents }: CareerType) => {
        return <Career title={title} contents={contents} key={shortId()} />;
      })}
    </CareerListComponent>
  );
};

export default CareerList;
