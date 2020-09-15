import React, { FunctionComponent } from 'react';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';

interface QuestionProps {
  title: string;
  content: string;
}

export const QuestionComponent = styled.div`
  ${TextComponent} + ${TextComponent} {
    margin-top: 40px;
  }

  & + & {
    margin-top: 100px;
  }
`;

const Question: FunctionComponent<QuestionProps> = function ({ title, content }) {
  return (
    <QuestionComponent>
      <Text size={40} weight={700}>
        {title}
      </Text>
      <Text size={20} weight={100}>
        {content}
      </Text>
    </QuestionComponent>
  );
};

export default Question;
