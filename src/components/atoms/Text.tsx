import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type TextStyleProps = {
  size?: number;
  weight?: number;
  color?: string;
};

export interface TextProps extends TextStyleProps {
  children: string | string[];
}

export const TextComponent = styled.div<TextStyleProps>(({ size, weight, color }) => ({
  fontSize: size + 'px',
  fontWeight: weight,
  color,
}));

const Text: FunctionComponent<TextProps> = function ({ children, ...style }) {
  return <TextComponent {...style}>{children}</TextComponent>;
};

export default Text;
