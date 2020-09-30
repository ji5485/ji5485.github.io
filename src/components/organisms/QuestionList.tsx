import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import Question, { QuestionComponent } from 'components/molecules/Question';

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
      <Question
        icon="smileWink"
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
      />
      <Question
        icon="running"
        title={
          <>
            <Text>저는 신념에 맞게 행동하는,</Text>
            <Text>끈기 있는 개발자입니다.</Text>
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
      />
      <Question
        icon="layerGroup"
        title={
          <>
            <Text>저는 다채로운 활동을 해왔지만,</Text>
            <Text>더 많고 다양한 활동을 할 개발자입니다.</Text>
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
      />
      <Question
        icon="userTie"
        title={
          <>
            <Text>저는 롤모델을 가지는 것도 좋지만,</Text>
            <Text>롤모델이 되고 싶은 개발자입니다.</Text>
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
      />
    </QuestionListComponent>
  );
};

export default QuestionList;
