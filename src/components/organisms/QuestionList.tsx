import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Question, { QuestionProps, QuestionComponent } from 'components/molecules/Question';

export interface QuestionListProps {
  questionList: [QuestionProps];
}

export const QuestionListComponent = styled.div`
  ${QuestionComponent} + ${QuestionComponent} {
    margin-top: 80px;
  }
`;

const QuestionList: FunctionComponent<QuestionListProps> = function ({ questionList }) {
  return (
    <QuestionListComponent>
      {questionList.map(({ title, content, slug }, index) => {
        return <Question title={title} content={content} slug={slug} key={`${title}-${index}`} />;
      })}
    </QuestionListComponent>
  );
};

export default QuestionList;
