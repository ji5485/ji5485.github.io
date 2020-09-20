import React, { FunctionComponent } from 'react';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';
import useWindowSize from 'hooks/useWindowSize';

interface QuestionProps {
  title: string;
  content: string;
  slug: string;
}

export const QuestionComponent = styled.div`
  ${TextComponent} + ${TextComponent} {
    margin-top: 40px;
  }
`;

const Question: FunctionComponent<QuestionProps> = function ({ title, content, slug }) {
  const { width } = useWindowSize();

  return (
    <QuestionComponent id={slug}>
      <Text size={width >= 768 ? 35 : 25} weight={400}>
        {title}
      </Text>
      <Text size={18} weight={100}>
        {content}
      </Text>
    </QuestionComponent>
  );
};

export default Question;
