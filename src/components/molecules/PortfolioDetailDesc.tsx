import React, { FunctionComponent } from 'react'
import Text from 'components/atoms/Text'
import styled from '@emotion/styled'

export type PortfolioDetailDescProps = {
  title: string
  content: string
}

export const PortfolioDetailDescComponent = styled.div``

const Title = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`

const Desc = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`

const PortfolioDetailDesc: FunctionComponent<PortfolioDetailDescProps> =
  function ({ title, content }) {
    return (
      <PortfolioDetailDescComponent>
        <Title>{title}</Title>
        <Desc>{content}</Desc>
      </PortfolioDetailDescComponent>
    )
  }

export default PortfolioDetailDesc
