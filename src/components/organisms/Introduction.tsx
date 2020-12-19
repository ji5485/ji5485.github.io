import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import IconList, { IconListComponent, IconListProps } from 'components/molecules/IconList';
import IntroductionText from 'components/molecules/IntroductionText';
import Img, { FixedObject } from 'gatsby-image';

interface IntroductionProps {
  image: FixedObject;
  iconList: IconListProps.list;
}

export const IntroductionComponent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProfileImage = styled(Img)`
  border-radius: 50%;
  margin-right: 30px;

  @media (max-width: 1200px) and (min-width: 769px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 150px !important;
    height: 150px !important;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 120px !important;
    height: 120px !important;
  }
`;

const RightIntroduction = styled.div`
  display: flex;
  flex-direction: column;

  ${IconListComponent} {
    margin-top: 30px;
  }

  @media (max-width: 1200px) {
    ${IconListComponent} {
      display: none;
    }
  }
`;

const Introduction: FunctionComponent<IntroductionProps> = function ({ image, iconList }) {
  return (
    <IntroductionComponent>
      <ProfileImage fixed={image} />

      <RightIntroduction>
        <IntroductionText />
        <IconList list={iconList} size={30} />
      </RightIntroduction>
    </IntroductionComponent>
  );
};

export default Introduction;
