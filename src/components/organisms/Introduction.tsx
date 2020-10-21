import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import useWindowSize from 'hooks/useWindowSize';
import ProfileImage, { ProfileImageComponent } from 'components/atoms/ProfileImage';
import IconList, { IconListComponent, IconListProps } from 'components/molecules/IconList';
import IntroductionText from 'components/molecules/IntroductionText';

interface IntroductionProps {
  iconList: IconListProps.list;
}

const PROFILE_IMAGE_LINK =
  'https://avatars2.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4';

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

const Introduction: FunctionComponent<IntroductionProps> = function ({ iconList }) {
  const { width } = useWindowSize();

  return (
    <IntroductionComponent>
      <ProfileImage
        width={width >= 1200 ? 200 : width >= 768 ? 150 : 120}
        height={width >= 1200 ? 200 : width >= 768 ? 150 : 120}
        src={PROFILE_IMAGE_LINK}
        alt="Profile Image"
      />

      <RightIntroduction>
        <IntroductionText />
        <IconList list={iconList} size={30} />
      </RightIntroduction>
    </IntroductionComponent>
  );
};

export default Introduction;
