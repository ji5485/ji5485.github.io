import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import ProfileImage from 'components/atoms/ProfileImage';
import IconSet, { IconSetComponent } from 'components/molecules/IconSet';

interface ProfileProps {
  profileImageProps: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };

  IconSetListProps: [
    {
      href: string;
      type: string;
      scale?: number;
      fill?: string;
      text: string;
    },
  ];
}

const ProfileComponent = styled.div`
  width: 100%;
  display: flex;
`;

const ProfileContentComponent = styled.div`
  flex: 1;
  padding-left: 30px;
`;

const ProfileIconSetListComponent = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${IconSetComponent} {
    width: 50%;
  }
`;

const Profile: FunctionComponent<ProfileProps> = function ({
  profileImageProps: { width, height, src, alt },
  IconSetListProps,
}) {
  return (
    <ProfileComponent>
      <ProfileImage width={width} height={height} src={src} alt={alt} />

      <ProfileContentComponent>
        <Text size={30} weight={100}>
          Ju Hyeon Do
        </Text>
        <Text size={15} weight={100}>
          Junior Web Frontend Developer
        </Text>

        <ProfileIconSetListComponent>
          {IconSetListProps.map((props, index) => {
            return <IconSet {...props} key={index} />;
          })}
        </ProfileIconSetListComponent>
      </ProfileContentComponent>
    </ProfileComponent>
  );
};

export default Profile;
