import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type TextStyleProps = {
  size: number;
  weight: number;
  color: string;
  nestedStyle?: object | null;
};

export interface TextProps extends TextStyleProps {
  children: string;
}

export const TextComponent = styled.div<TextStyleProps>(
  ({ size, weight, color, nestedStyle }) => nestedStyle ? nestedStyle : ({
    fontSize: size + 'px',
    fontWeight: weight,
    color,
  })
);

const Text: FunctionComponent<TextProps> = function ({ children, ...style }) {
  return <TextComponent {...style}>{children}</TextComponent>;
};

Text.defaultProps = {
  nestedStyle: null
}

export default Text;
