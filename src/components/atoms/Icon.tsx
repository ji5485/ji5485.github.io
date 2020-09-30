import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneAlt,
  faEnvelope,
  faSmileWink,
  faRunning,
  faLayerGroup,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

type IconStyleProps = {
  size: number;
  color: string;
};

export interface IconProps extends IconStyleProps {
  type:
    | 'instagram'
    | 'facebook'
    | 'github'
    | 'phone'
    | 'email'
    | 'smileWink'
    | 'running'
    | 'layerGroup'
    | 'userTie';
}

const ICON_TYPE = {
  github: faGithub,
  instagram: faInstagram,
  facebook: faFacebook,
  phone: faPhoneAlt,
  email: faEnvelope,
  smileWink: faSmileWink,
  running: faRunning,
  layerGroup: faLayerGroup,
  userTie: faUserTie,
};

export const IconComponent = styled.div<IconStyleProps>`
  font-size: ${({ size }) => size + 'px'};
  color: ${({ color }) => color};
  width: ${({ size }) => size + 'px'};
  display: flex;
  justify-content: center;
`;

const Icon: FunctionComponent<IconProps> = function ({ type, ...style }) {
  return (
    <IconComponent {...style}>
      <FontAwesomeIcon icon={ICON_TYPE[type]} />
    </IconComponent>
  );
};

Icon.defaultProps = {
  size: 30,
  color: '#1E1F21',
};

export default Icon;
