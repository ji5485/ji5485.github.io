import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import ProfileImage from 'components/atoms/ProfileImage';
import IconSet, { IconSetComponent, IconSetProps } from 'components/molecules/IconSet';

export interface ProfileProps {
  profileImage: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };

  iconSetList: [IconSetProps];
}

const ProfileComponent = styled.div`
  width: 100%;
  display: flex;
`;

const ProfileContentComponent = styled.div`
  flex: 1;
  padding-left: 50px;
`;

const ProfileIconSetListComponent = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${IconSetComponent} {
    width: 50%;
    padding: 7px 0;
  }
`;

const Profile: FunctionComponent<ProfileProps> = function ({
  profileImage: { width, height, src, alt },
  iconSetList,
}) {
  return (
    <ProfileComponent>
      <ProfileImage width={width} height={height} src={src} alt={alt} />

      <ProfileContentComponent>
        <Text size={40} weight={100}>
          Ju Hyeon Do
        </Text>
        <Text size={20} weight={100}>
          Junior Web Frontend Developer
        </Text>

        <ProfileIconSetListComponent>
          {iconSetList.map((props, index) => {
            return <IconSet {...props} key={index} />;
          })}
        </ProfileIconSetListComponent>
      </ProfileContentComponent>
    </ProfileComponent>
  );
};

export default Profile;
