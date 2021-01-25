import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Question, { QuestionComponent, QuestionProps } from 'components/molecules/Question';
import QUESTION_LIST from 'static/QuestionList.json';
import { shortId } from 'utilities/utils';

type QuestionType = {
  icon: QuestionProps['icon'];
  title: string[];
  content: string[];
};

export const QuestionListComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    ${QuestionComponent} + ${QuestionComponent} {
      margin-top: 20px;
    }
  }
`;

const QuestionList: FunctionComponent = function () {
  return (
    <QuestionListComponent>
      {QUESTION_LIST.map((props: QuestionType) => {
        return <Question {...props} key={shortId()} />;
      })}
    </QuestionListComponent>
  );
};

export default QuestionList;
