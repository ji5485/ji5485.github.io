import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import IconList from 'components/molecules/IconList';
import useWindowSize from 'hooks/useWindowSize';

type ImageEdgeType = {
  node: {
    original: {
      src: string;
    };
  };
};

const PROFILE_ICON_LIST = [
  { href: 'https://github.com/ji5485', type: 'github' },
  { href: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
  { href: 'https://www.facebook.com/', type: 'facebook' },
  { href: '#', type: 'phone' },
  { href: '#', type: 'email' },
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

  @media (max-width: 767px) {
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

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  ${TextComponent}:last-of-type {
    font-size: 15px;
    font-weight: 100;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

const profileImageQuery = graphql`
  query {
    allImageSharp(filter: { resize: { originalName: { regex: "/about_profile/" } } }) {
      edges {
        node {
          original {
            src
          }
        }
      }
    }
  }
`;

const Profile: FunctionComponent<{}> = function ({}) {
  const { width } = useWindowSize();
  const {
    allImageSharp: { edges },
  } = useStaticQuery(profileImageQuery);

  return (
    <ProfileComponent>
      <ProfileImageList>
        {edges.map(({ node: { original: { src } } }: ImageEdgeType, index: number) => (
          <img key={`profile-image-${index}`} src={src} alt={`profile_image_${index}`} />
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
