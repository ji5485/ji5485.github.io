import React, { FunctionComponent, ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from '@emotion/styled'

export type LinkProps = {
  to: string
  target?: string
  children: ReactNode
}

export const LinkComponent = styled(GatsbyLink)`
  cursor: pointer;
  display: block;

  &.active {
    font-weight: 700;
  }
`

const Link: FunctionComponent<LinkProps> = function ({ to, target, children }) {
  return (
    <LinkComponent to={to} target={target} activeClassName="active">
      {children}
    </LinkComponent>
  )
}

Link.defaultProps = {
  target: '_self',
}

export default Link
