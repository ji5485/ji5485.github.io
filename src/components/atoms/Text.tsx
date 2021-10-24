import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'

type TextStyleProps = {
  size?: number
  weight?: number
  color?: string
}

export type TextProps = {
  children: ReactNode
} & TextStyleProps

export const TextComponent = styled.div<TextStyleProps>(
  ({ size, weight, color }) => ({
    fontSize: size !== undefined ? `${size}px` : 'initial',
    fontWeight: weight,
    color,
  }),
)

const Text: FunctionComponent<TextProps> = function ({ children, ...style }) {
  return <TextComponent {...style}>{children}</TextComponent>
}

export default Text
