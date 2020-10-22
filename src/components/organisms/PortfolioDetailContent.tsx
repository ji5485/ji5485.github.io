import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { LinkComponent } from 'components/atoms/Link';
import Icon, { IconComponent } from 'components/atoms/Icon';
import PortfolioDetailDesc, {
  PortfolioDetailDescProps,
  PortfolioDetailDescComponent,
} from 'components/molecules/PortfolioDetailDesc';
import PortfolioDetailInfo, {
  PortfolioDetailInfoProps,
} from 'components/molecules/PortfolioDetailInfo';
import generateImageLink from 'utilities/imageLinkGenerator';
import useWindowSize from 'hooks/useWindowSize';

interface PortfolioDetailContentProps {
  info: PortfolioDetailInfoProps;
  contents: PortfolioDetailDescProps[];
  image: string;
}

const PortfolioDetailContentComponent = styled.div`
  width: 100%;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 350px 1fr;
    grid-gap: 50px;
    height: calc(100vh - 300px);
    min-height: 600px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1199px) {
    margin-top: 40px;
  }
`;

const StyledButton = styled(LinkComponent)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1e1f21;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  margin-bottom: 50px;

  ${IconComponent} {
    font-size: 20px;
    color: white;
  }
`;

const Description = styled.div`
  margin-top: 50px;

  @media (min-width: 1200px) {
    ${PortfolioDetailDescComponent} + ${PortfolioDetailDescComponent} {
      margin-top: 30px;
    }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }

  @media (max-width: 767px) {
    ${PortfolioDetailDescComponent} + ${PortfolioDetailDescComponent} {
      margin-top: 30px;
    }
  }
`;

const StyledLine = styled.div`
  width: 40%;
  height: 2px;
  background: #1e1f21;
  margin-top: auto;

  @media (max-width: 1199px) {
    display: none;
  }
`;

const PortfolioDetailContent: FunctionComponent<PortfolioDetailContentProps> = function ({
  info,
  contents,
  image,
}) {
  const { width } = useWindowSize();

  return (
    <PortfolioDetailContentComponent>
      <Content>
        <StyledButton to="/portfolio">
          <Icon type="arrowLeft" />
        </StyledButton>

        <PortfolioDetailInfo {...info} />

        {width < 1200 && <Image src={generateImageLink(image)} alt={info.title} />}

        <Description>
          {contents.map((item) => (
            <PortfolioDetailDesc {...item} key={`${info.title}-${item.title}`} />
          ))}
        </Description>

        <StyledLine />
      </Content>

      {width >= 1200 && <Image src={generateImageLink(image)} alt={info.title} />}
    </PortfolioDetailContentComponent>
  );
};

export default PortfolioDetailContent;