import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import { LinkComponent } from 'components/atoms/Link';

export interface PortfolioItemProps {
  index: number;
  title: string;
  content: string;
}

const PortfolioItemComponent = styled(LinkComponent)`
  transition: 0.3s all;
  padding: 20px;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
  }
`;

const PortfolioIndex = styled.div`
  ${TextComponent} {
    font-size: 25px;
    font-weight: 700;
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin: 10px 0;
`;

const PortfolioTitle = styled.div`
  ${TextComponent} {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 3px;
  }
`;

const PortfolioContent = styled.div`
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

const PortfolioItem: FunctionComponent<PortfolioItemProps> = function ({ index, title, content }) {
  const portfolioIndex: number = index < 10 ? '0' + index : index;

  return (
    <PortfolioItemComponent to={`/portfolio/${index}`}>
      <PortfolioIndex>
        <Text>{portfolioIndex}.</Text>
      </PortfolioIndex>

      <PortfolioImage
        src={`../../portfolio_images/portfolio_image_${index}.jpg`}
        alt="Portfolio Item Image"
      />

      <PortfolioTitle>
        <Text>{title}</Text>
      </PortfolioTitle>
      <PortfolioContent>{content}</PortfolioContent>
    </PortfolioItemComponent>
  );
};

export default PortfolioItem;
