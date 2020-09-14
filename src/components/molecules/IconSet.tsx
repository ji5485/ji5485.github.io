import React, { FunctionComponent } from 'react';
import Icon from 'components/atoms/Icon';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';

interface IconSetProps {
  href: string;
  type: string;
  scale: number;
  fill?: string;
  text?: string;
}

export const IconSetComponent = styled.div`
  display: flex;
  align-items: center;

  ${TextComponent} {
    margin-left: 15px;
  }
`;

const IconSet: FunctionComponent<IconSetProps> = function ({ href, type, scale, fill, text }) {
  return (
    <IconSetComponent>
      <a href={href} target="_blank">
        <Icon type={type} scale={scale} fill={fill} />
      </a>
      <Text weight={100} size={18}>{text}</Text>
    </IconSetComponent>
  );
};

IconSet.defaultProps = {
  scale: 1,
  fill: '#1E1F21',
};

export default IconSet;
