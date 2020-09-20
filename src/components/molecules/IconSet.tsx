import React, { FunctionComponent } from 'react';
import Icon from 'components/atoms/Icon';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';

export interface IconSetProps {
  href: string;
  type: string;
  size: number;
  color?: string;
  text: string;
}

export const IconSetComponent = styled.a`
  display: flex;
  align-items: center;

  ${TextComponent} {
    margin-left: 15px;
  }
`;

const IconSet: FunctionComponent<IconSetProps> = function ({ href, type, size, color, text }) {
  return (
    <IconSetComponent href={href} target="_blank">
      <Icon type={type} size={size} color={color} />
      <Text weight={100} size={size - 5}>{text}</Text>
    </IconSetComponent>
  );
};

export default IconSet;
