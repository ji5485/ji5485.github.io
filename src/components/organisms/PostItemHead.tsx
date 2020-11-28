import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import Img, { FluidObject } from 'gatsby-image';
import shortId from 'utilities/shortId';
import dateFormat from 'utilities/dateFormat';

interface PostItemHeadProps {
  title: string;
  date: string;
  categories: string[];
  thumbnail: FluidObject;
}

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
  line-height: 1.5;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${TextComponent} {
    font-size: 15px;
    font-weight: 300;
    margin-right: 15px;
  }
`;

const Date = styled.div`
  font-size: 15px;
  font-weight: 300;
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
    <div>
      <Img fluid={thumbnail} alt="Thumbnail Image" />
      <Title>{title}</Title>
      <PostInfo>
        <Categories>
          {categories.map((category) => (
            <Text key={shortId()}>#{category}</Text>
          ))}
        </Categories>
        <Date>{dateFormat(date)}</Date>
      </PostInfo>
    </div>
  );
};

export default PostItemHead;
