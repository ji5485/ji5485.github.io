import React, { FunctionComponent, ReactNode } from 'react';
import Icon, { IconComponent } from 'components/atoms/Icon';
import { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';
import useWindowSize from 'hooks/useWindowSize';

interface QuestionProps {
  icon: 'smileWink' | 'running' | 'layerGroup' | 'userTie';
  title: ReactNode;
  content: ReactNode;
}

export const QuestionComponent = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  padding: 30px;

  @media (max-width: 1199px) {
    padding: 20px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (min-width: 1200px) {
    flex-direction: column;

    ${IconComponent} {
      margin-bottom: 20px;
    }

    ${TextComponent} {
      font-size: 20px;
      font-weight: 700;
    }
  }

  @media (max-width: 1199px) {
    align-items: center;

    ${IconComponent} {
      margin-right: 15px;
    }

    ${TextComponent} {
      font-size: 15px;
      font-weight: 700;
    }
  }
`;

const Content = styled.div`
  font-size: 15px;
  font-weight: 100;

  @media (max-width: 1199px) {
    font-size: 13px;
  }
`;

const Question: FunctionComponent<QuestionProps> = function ({ icon, title, content }) {
  const { width } = useWindowSize();

  return (
    <QuestionComponent>
      <TitleBox>
        <Icon size={width >= 1200 ? 60 : 40} color="#5C7CFA" type={icon} />
        <div>{title}</div>
      </TitleBox>

      <Content>{content}</Content>
    </QuestionComponent>
  );
};

export default Question;
