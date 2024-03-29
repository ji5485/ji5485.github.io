import React, { FunctionComponent } from 'react'
import Text from 'components/atoms/Text'
import styled from '@emotion/styled'

const MainText = styled.h1`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 10px;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const SubText = styled(Text)`
  font-size: 25px;
  font-weight: 300;

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const IntroductionText: FunctionComponent = function () {
  return (
    <div>
      <MainText>Hello, I am Ju Hyeon Do</MainText>
      <SubText>I am a Junior Frontend Developer,</SubText>
      <SubText>hoping to become Professional Developer</SubText>
    </div>
  )
}

export default IntroductionText
