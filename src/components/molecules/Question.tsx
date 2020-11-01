import React, { FunctionComponent } from 'react';
import Icon, { IconComponent } from 'components/atoms/Icon';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';
import shortId from 'utilities/shortId';

interface QuestionProps {
  icon: 'smileWink' | 'running' | 'layerGroup' | 'userTie';
  title: string[];
  content: string[];
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
  flex-direction: column;
  margin-bottom: 10px;

  ${IconComponent} {
    margin-bottom: 20px;
  }

  ${TextComponent} {
    font-size: 18px;
    font-weight: 700;
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
  return (
    <QuestionComponent>
      <TitleBox>
        <Icon size={50} color="#5C7CFA" type={icon} />
        <div>
          {title.map((text) => (
            <Text key={shortId()}>{text}</Text>
          ))}
        </div>
      </TitleBox>

      <Content>
        {content.map((text) => (
          <Text key={shortId()}>{text}</Text>
        ))}
      </Content>
    </QuestionComponent>
  );
};

export default Question;
