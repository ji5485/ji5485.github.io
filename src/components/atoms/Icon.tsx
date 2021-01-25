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
  faSearchPlus,
  faArrowRight,
  faArrowLeft,
  faCaretRight,
  faCaretLeft,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

type IconStyleProps = {
  size: number;
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
    | 'userTie'
    | 'search'
    | 'arrowRight'
    | 'arrowLeft'
    | 'caretRight'
    | 'caretLeft'
    | 'moon'
    | 'sun';
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
  search: faSearchPlus,
  arrowRight: faArrowRight,
  arrowLeft: faArrowLeft,
  caretRight: faCaretRight,
  caretLeft: faCaretLeft,
  moon: faMoon,
  sun: faSun,
};

export const IconComponent = styled.div<IconStyleProps>`
  font-size: ${({ size }) => size + 'px'};
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
};

export default Icon;
