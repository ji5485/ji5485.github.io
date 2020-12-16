import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import { LinkComponent } from 'components/atoms/Link';
import Icon, { IconComponent } from 'components/atoms/Icon';
import Img, { FluidObject } from 'gatsby-image';

export type PortfolioItemType = {
  title: string;
  content: string;
  image: {
    fluid: FluidObject;
  };
};

interface PortfolioItemProps extends PortfolioItemType {
  type: 'project' | 'activity';
  index: number;
}

const Index = styled(Text)`
  font-size: 25px;
  font-weight: 700;
`;

const ImageBox = styled(LinkComponent)`
  width: 100%;
  height: 200px;
  margin: 10px 0;
  position: relative;

  ${IconComponent} {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: grid;
    place-items: center;
    transition: 0.1s opacity;
    opacity: 0;
    color: #ffffff;
    z-index: 5;
  }

  &:hover {
    ${IconComponent} {
      opacity: 1;
    }
  }
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 3px;
`;

const Content = styled.div`
  font-size: 15px;
  font-weight: 400;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const PortfolioItemComponent = styled.div``;

const PortfolioItem: FunctionComponent<PortfolioItemProps> = function ({
  type,
  index,
  title,
  content,
  image,
}) {
  const portfolioIndex: string = (index < 10 ? '0' : '') + index;

  return (
    <PortfolioItemComponent>
      <Index>{portfolioIndex}.</Index>

      <ImageBox to={`/portfolio/${type}/${index}`}>
        <Icon type="search" size={30} />
        <Image fluid={image.fluid} alt="Portfolio Item Image" />
      </ImageBox>

      <Title>{title}</Title>
      <Content>{content}</Content>
    </PortfolioItemComponent>
  );
};

export default PortfolioItem;
