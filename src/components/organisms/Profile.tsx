import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import ProfileImage from 'components/atoms/ProfileImage';
import IconList, { IconListComponent } from 'components/molecules/IconList';
import IconSet, { IconSetComponent } from 'components/molecules/IconSet';
import useWindowSize from 'hooks/useWindowSize';

const PROFILE_IMAGE_SRC =
  'https://avatars2.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4';
const PROFILE_IMAGE_ALT = 'Github Profile Image';
const MOBILE_PROFILE_ICON_LIST = [
  { href: 'https://github.com/ji5485', type: 'github' },
  { href: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
  { href: 'https://www.facebook.com/', type: 'facebook' },
];

const ProfileComponent = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileContentComponent = styled.div`
  flex: 1;
  padding-left: 50px;

  ${IconListComponent} {
    margin-top: 20px;
  }

  @media (max-width: 767px) {
    padding-left: 0;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

const Profile: FunctionComponent<{}> = function ({}) {
  const { width } = useWindowSize();

  return (
    <ProfileComponent id="developer-info">
      <ProfileImage
        width={width >= 768 ? 200 : 150}
        height={width >= 768 ? 200 : 150}
        src={PROFILE_IMAGE_SRC}
        alt={PROFILE_IMAGE_ALT}
      />

      <ProfileContentComponent>
        <Text size={width >= 768 ? 40 : 30} weight={100}>
          Ju Hyeon Do
        </Text>
        <Text size={width >= 768 ? 20 : 15} weight={100}>
          Junior Web Frontend Developer
        </Text>

        {width >= 768 ? (
          <ProfileIconSetListComponent>
            <IconSet
              href="https://www.instagram.com/?hl=ko"
              type="instagram"
              text="hello_d0o"
              size={23}
            />
            <IconSet href="#" type="phone" text="010-5593-3495" size={23} />
            <IconSet
              href="https://www.instagram.com/?hl=ko"
              type="facebook"
              text="Ju Hyeon Do"
              size={23}
            />
            <IconSet href="#" type="email" text="dong5485@gmail.com" size={23} />
            <IconSet
              href="https://www.instagram.com/?hl=ko"
              type="github"
              text="HyeonDo Ju"
              size={23}
            />
          </ProfileIconSetListComponent>
        ) : (
          <IconList list={MOBILE_PROFILE_ICON_LIST} size={25} />
        )}
      </ProfileContentComponent>
    </ProfileComponent>
  );
};

export default Profile;
