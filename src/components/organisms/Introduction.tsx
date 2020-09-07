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

  @media (max-width: 1199px) {
    ${ProfileImageComponent} {
      margin-right: 0;
      margin-bottom: 20px;
    }

    flex-direction: column;
    align-items: flex-start;
  }
`;

const RightIntroduction = styled.div`
  display: flex;
  flex-direction: column;

  ${IconListComponent} {
    margin-top: 30px;
  }

  @media (max-width: 1199px) {
    ${IconListComponent} {
      display: none;
    }
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
        width={width >= 1200 ? 200 : (width >= 768 ? 150 : 120)}
        height={width >= 1200 ? 200 : (width >= 768 ? 150 : 120)}
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

export default Introduction;
