import React, { FunctionComponent } from 'react';
import Text from 'components/atoms/Text';
import Question from 'components/molecules/Question';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Molecules',
  component: Question,
  decorators: [withKnobs],
};

export const QuestionStory: FunctionComponent<{}> = function ({}) {
  const icon = select(
    'Icon',
    { smileWink: 'smileWink', running: 'running', layerGroup: 'layerGroup', userTie: 'userTie' },
    'smileWink',
  );

  return (
    <Question
      title={
        <>
          <Text>저는 성장의 기쁨을 아는,</Text>
          <Text>개발의 즐거움을 아는 개발자입니다.</Text>
        </>
      }
      content={
        <>
          <Text>누구든지 첫 성취는 짜릿할 만큼 기쁜 순간일 것입니다.</Text>
          <Text>저도 마찬가지로 처음 클론 프로젝트 완성을 통해 느꼈던 첫 성취감,</Text>
          <Text>성장을 했다는 느낌은 정말 짜릿했던 순간이었습니다.</Text>
          <Text>그 느낌은 현재 개발의 즐거움을 알게 된 저를 만들어주었고,</Text>
          <Text>이런 저는 지금도 멈추지 않고 끊임없이 성장 중입니다.</Text>
        </>
      }
      icon={icon}
    />
  );
};
