import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import { LinkComponent } from 'components/atoms/Link';
import Icon, { IconComponent } from 'components/atoms/Icon';
import generateImageLink from 'utilities/imageLinkGenerator';

export interface PortfolioItemProps {
  type: 'project' | 'activity';
  index: number;
  title: string;
  content: string;
  image: string;
}

const Index = styled(Text)`
  font-size: 25px;
  font-weight: 700;
`;

const ImageBox = styled.div`
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
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const PortfolioItemComponent = styled(LinkComponent)`
  &:hover ${ImageBox} {
    ${IconComponent} {
      opacity: 1;
    }
  }
`;

const PortfolioItem: FunctionComponent<PortfolioItemProps> = function ({
  type,
  index,
  title,
  content,
  image,
}) {
  const portfolioIndex: string = (index < 10 ? '0' : '') + index;

  return (
    <PortfolioItemComponent to={`/portfolio/${type}/${index}`}>
      <Index>{portfolioIndex}.</Index>

      <ImageBox>
        <Icon type="search" color="#ffffff" size={30} />
        <Image src={generateImageLink(image)} alt="Portfolio Item Image" />
      </ImageBox>

      <Title>{title}</Title>
      <Content>{content}</Content>
    </PortfolioItemComponent>
  );
};

export default PortfolioItem;
