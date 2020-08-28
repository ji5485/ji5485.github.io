import React, { StatelessComponent } from 'react';
import styled from '@emotion/styled';

type TextStyleProps = {
  size: number;
  weight: 100 | 300 | 700;
  color: string;
};

interface TextProps extends TextStyleProps {
  text: string;
}

const TextComponent = styled.div<TextStyleProps>(({ size, weight, color }) => ({
  size: size + 'px',
  weight,
  color,
}));

const Text: StatelessComponent<TextProps> = function ({ text, ...style }) {
  return <TextComponent style={style}>{text}</TextComponent>;
};

export default Text;
