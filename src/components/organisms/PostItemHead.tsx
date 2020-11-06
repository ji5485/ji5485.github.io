import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import Img, { FluidObject } from 'gatsby-image';
import shortId from 'utilities/shortId';

interface PostItemHeadProps {
  title: string;
  date: string;
  categories: string[];
  thumbnail: FluidObject;
}

const PostItemHeadComponent = styled.div`
  margin-bottom: 100px;
`;

const Title = styled(Text)`
  font-size: 40px;
  font-weight: 700;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${TextComponent} {
    font-size: 15px;
    font-weight: 100;
    margin-right: 15px;
  }
`;

const Date = styled.div`
  font-size: 15px;
  font-weight: 100;
  flex-shrink: 0;
  padding-left: 30px;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 5px;
  }
`;

const PostItemHead: FunctionComponent<PostItemHeadProps> = function ({
  title,
  date,
  categories,
  thumbnail,
}) {
  return (
    <PostItemHeadComponent>
      <Img fluid={thumbnail} alt="Thumbnail Image" />
      <Title>{title}</Title>
      <PostInfo>
        <Categories>
          {categories.map((category) => (
            <Text key={shortId()}>#{category}</Text>
          ))}
        </Categories>
        <Date>{date}</Date>
      </PostInfo>
    </PostItemHeadComponent>
  );
};

export default PostItemHead;
