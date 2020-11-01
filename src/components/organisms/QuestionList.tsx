import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Question, { QuestionComponent } from 'components/molecules/Question';
import QUESTION_LIST from '../../../static/QuestionList.json';
import shortId from 'utilities/shortId';

export const QuestionListComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    ${QuestionComponent} + ${QuestionComponent} {
      margin-top: 20px;
    }
  }
`;

const QuestionList: FunctionComponent<{}> = function () {
  return (
    <QuestionListComponent>
      {QUESTION_LIST.map(({ icon, title, content }) => {
        return <Question icon={icon} title={title} content={content} key={shortId()} />;
      })}
    </QuestionListComponent>
  );
};

export default QuestionList;
