import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link, { LinkComponent } from 'components/atoms/Link';
import Text, { TextComponent } from 'components/atoms/Text';
import splitOnUpper from 'utilities/splitOnUpper';
import shortId from 'utilities/shortId';

export interface PostItemProps {
  title: string;
  summary: string[];
  date: string;
  thumbnail: {
    childImageSharp: {
      resize: {
        src: string;
      };
    };
  };
  categories: string[];
  slug: string;
}

const PostItemComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px 0;
  border-top: 1px solid #1e1f21;
  border-bottom: 1px solid #1e1f21;

  & + & {
    border-top: none;
  }
`;

const Content = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled(LinkComponent)`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  ${LinkComponent} {
    font-size: 14px;
    font-weight: 400;
    color: #1e1f21;
    opacity: 0.75;
    margin-right: 10px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  ${LinkComponent}:hover {
    text-decoration: underline;
  }
`;

const Summary = styled(TextComponent)`
  font-size: 15px;
  font-weight: 400;
  color: #1e1f21;
  opacity: 0.9;
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ThumbnailImage = styled.img`
  width: 180px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  summary,
  date,
  thumbnail: {
    childImageSharp: {
      resize: { src },
    },
  },
  categories,
  slug,
}) {
  return (
    <PostItemComponent>
      <Content>
        <Title to={slug}>{title}</Title>
        <div>{date}</div>
        <Category>
          {categories.map((category) => (
            <Link to={`/blog/${splitOnUpper(category)}/1`} key={shortId()}>
              #{category}
            </Link>
          ))}
        </Category>
        <Summary>
          {summary.map((sentence) => (
            <Text key={shortId()}>{sentence}</Text>
          ))}
        </Summary>
      </Content>

      <ThumbnailImage src={src} alt="Thumbnail Image" />
    </PostItemComponent>
  );
};

export default PostItem;
