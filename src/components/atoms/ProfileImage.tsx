import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type ProfileImageStyleProps = {
  width: number;
  height: number;
};

export interface ProfileImageProps extends ProfileImageStyleProps {
  src: string;
  alt: string;
}

export const ProfileImageComponent = styled.div<ProfileImageStyleProps>`
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({ src, alt, ...style }) {
  return (
    <ProfileImageComponent {...style}>
      <img src={src} alt={alt} />
    </ProfileImageComponent>
  );
};

export default ProfileImage;
