import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import useWindowSize from 'hooks/useWindowSize';
import ProfileImage, { ProfileImageComponent } from 'components/atoms/ProfileImage';
import IconList, { IconListComponent, iconListProps } from "components/molecules/IconList";
import IntroductionText from 'components/molecules/IntroductionText';

export interface IntroductionProps {
  profileImageLink: string;
  profileImageAlt: string;
  iconList: iconListProps.list;
}

export const IntroductionComponent = styled.div`
  display: flex;
  align-items: center;

  ${ProfileImageComponent} {
    margin-right: 30px;
  }
`;

const RightIntroduction = styled.div`
  display: flex;
  flex-direction: column;

  ${IconListComponent} {
    margin-top: 30px;
  }
`;

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImageLink,
  profileImageAlt,
  iconList
}) {
  const { width } = useWindowSize();

  return (
    <IntroductionComponent>
      <ProfileImage
        width={width >= 768 ? 200 : 120}
        height={width >= 768 ? 200 : 120}
        src={profileImageLink}
        alt={profileImageAlt}
      />

      <RightIntroduction>
        <IntroductionText />
        <IconList list={iconList} />
      </RightIntroduction>
    </IntroductionComponent>
  );
};

Introduction.defaultProps = {
  profileImageLink: "#",
  profileImageAlt: "Empty Image",
  iconList: []
}

export default Introduction;
