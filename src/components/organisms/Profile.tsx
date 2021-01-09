import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import { shortId } from 'utilities/utils';
import Img, { FluidObject } from 'gatsby-image';

type FluidImageType = {
  node: {
    fluid: FluidObject;
  };
};

const getImageQuery = graphql`
  {
    allImageSharp(filter: { original: { src: { regex: "/about/" } } }) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

const ProfileComponent = styled.div`
  width: 100%;
`;

const ProfileImageList = styled.div`
  width: 100%;
  max-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  .gatsby-image-wrapper {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  ${TextComponent} {
    font-size: 20px;
    font-weight: 300;
  }

  ${TextComponent}:last-of-type {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    ${TextComponent} {
      font-size: 15px;
    }
  }
`;

const Profile: FunctionComponent = function ({}) {
  const {
    allImageSharp: { edges },
  } = useStaticQuery(getImageQuery);

  return (
    <ProfileComponent>
      <ProfileImageList>
        {edges.map(({ node: { fluid } }: FluidImageType) => (
          <Img fluid={{ ...fluid, aspectRatio: 1 }} key={shortId()} alt="Profile Image" />
        ))}
      </ProfileImageList>

      <ProfileContent>
        <Text>Junior Web Frontend Developer</Text>
        <Text>Ju Hyeon Do</Text>
      </ProfileContent>
    </ProfileComponent>
  );
};

export default Profile;
