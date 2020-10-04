import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import Link from 'components/atoms/Link';

interface PortfolioItemProps {
  index: string;
  title: string;
  content: string;
  image: string;
  link: string;
}

const PortfolioItemComponent = styled.div``;

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
`;

const PortfolioTitle = styled.div`
  ${TextComponent} {
    font-size: 20px;
    font-weight: 700;
  }
`;

const PortfolioContent = styled.div`
  font-size: 15px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
`;

const PortfolioItem: FunctionComponent<PortfolioItemProps> = function ({
  index,
  title,
  content,
  image,
  link,
}) {
  return (
    <PortfolioItemComponent>
      <PortfolioIndex>
        <Text>{index}.</Text>
      </PortfolioIndex>

      <PortfolioImage src={image} alt="Portfolio Item Image" />

      <Link to={link}>
        <PortfolioTitle>
          <Text>{title}</Text>
        </PortfolioTitle>
        <PortfolioContent>{content}</PortfolioContent>
      </Link>
    </PortfolioItemComponent>
  );
};

export default PortfolioItem;
