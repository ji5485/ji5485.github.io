import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { LinkComponent } from 'components/atoms/Link';
import Icon, { IconComponent } from 'components/atoms/Icon';
import PortfolioDetailDesc, {
  PortfolioDetailDescProps,
} from 'components/molecules/PortfolioDetailDesc';
import PortfolioDetailInfo, {
  PortfolioDetailInfoProps,
} from 'components/molecules/PortfolioDetailInfo';
import generateImageLink from 'utilities/imageLinkGenerator';

interface PortfolioDetailContentProps {
  info: PortfolioDetailInfoProps;
  contents: PortfolioDetailDescProps[];
  image: string;
}

const PortfolioDetailContentComponent = styled.div`
  width: 100%;
  height: calc(100vh - 300px);

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 350px 1fr;
    grid-gap: 50px;
  }
`;

const Content = styled.div``;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledButton = styled(LinkComponent)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1e1f21;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;

  ${IconComponent} {
    font-size: 20px;
    color: white;
  }
`;

const StyledLine = styled.div`
  width: 35%;
  height: 1px;
  background: #1e1f21;

  @media (max-width: 1199px) {
    display: none;
  }
`;

const PortfolioDetailContent: FunctionComponent<PortfolioDetailContentProps> = function ({
  info,
  contents,
  image,
}) {
  return (
    <PortfolioDetailContentComponent>
      <Content>
        <StyledButton to="/portfolio">
          <Icon type="arrowLeft" />
        </StyledButton>

        <PortfolioDetailInfo {...info} />

        {contents.map((item) => (
          <PortfolioDetailDesc {...item} key={`${info.title}-${item.title}`} />
        ))}

        <StyledLine />
      </Content>

      <Image src={generateImageLink(image)} alt={info.title} />
    </PortfolioDetailContentComponent>
  );
};

export default PortfolioDetailContent;
