import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Text from 'components/atoms/Text'
import NavBar, { NavBarComponent } from 'components/molecules/NavBar'

export const HeaderComponent = styled.header`
  width: 768px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
    width: 100%;

    ${NavBarComponent} {
      width: 100%;
      justify-content: space-between;
    }
  }
`

const Title = styled(Text)`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`

const Header: FunctionComponent = function () {
  return (
    <HeaderComponent>
      <Title>Too Early To Stop</Title>
      <NavBar modeSwitch={true} />
    </HeaderComponent>
  )
}

export default Header
