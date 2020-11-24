import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import IconList from 'components/molecules/IconList';
import useWindowSize from 'hooks/useWindowSize';
import shortId from 'utilities/shortId';

const PROFILE_ICON_LIST = [
  { href: 'https://github.com/ji5485', type: 'github' },
  { href: 'https://www.instagram.com/hello_d0o/', type: 'instagram' },
  { href: 'https://www.facebook.com/people/주현도/100006799395407', type: 'facebook' },
  { href: '#', type: 'phone' },
  { href: 'mailto:dong5485@gmail.com', type: 'email' },
];

const IMAGE_LINK = [
  '../../about_images/about_profile_1.jpeg',
  '../../about_images/about_profile_2.jpg',
  '../../about_images/about_profile_3.jpg',
];

const ProfileComponent = styled.div`
  width: 100%;
`;

const ProfileImageList = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;

  img {
    width: auto;
    max-height: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ProfileContentText = styled.div`
  ${TextComponent}:first-of-type {
    font-size: 25px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  ${TextComponent}:last-of-type {
    font-size: 15px;
    font-weight: 100;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
const Profile: FunctionComponent = function ({}) {
  const { width } = useWindowSize();

  return (
    <ProfileComponent>
      <ProfileImageList>
        {IMAGE_LINK.map((src: string, index: number) => (
          <img key={shortId()} src={src} alt={`profile_image_${index}`} />
        ))}
      </ProfileImageList>

      <ProfileContent>
        <ProfileContentText>
          <Text>Ju Hyeon Do</Text>
          <Text>Junior Web Frontend Developer</Text>
        </ProfileContentText>

        <IconList list={PROFILE_ICON_LIST} size={width >= 768 ? 20 : 17} />
      </ProfileContent>
    </ProfileComponent>
  );
};

export default Profile;
