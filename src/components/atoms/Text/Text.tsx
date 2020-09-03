import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type TextStyleProps = {
  size: number;
  weight: number;
  color: string;
  responsive?: object;
};

export interface TextProps extends TextStyleProps {
  children: string;
}

const TextComponent = styled.div<TextStyleProps>(
  ({ size, weight, color, responsive }) => responsive ? responsive : ({
    fontSize: size + 'px',
    fontWeight: weight,
    color,
  })
);

const Text: FunctionComponent<TextProps> = function ({ children, ...style }) {
  return <TextComponent {...style}>{children}</TextComponent>;
};

Text.defaultProps = {
  responsive: {}
}

export default Text;
