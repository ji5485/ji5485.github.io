import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link, { LinkComponent } from 'components/atoms/Link';
import { TextComponent } from 'components/atoms/Text';

export interface BlogCategoryItemProps {
  title: string;
  summary: string;
  date: string;
  thumbnail: string;
  categories: string[];
  slug: string;
}

const BlogCategoryItemComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 15px 0;
  border-top: 1px solid #1e1f21;
  border-bottom: 1px solid #1e1f21;

  & + & {
    border-top: none;
  }
`;

const ThumbnailImage = styled.img`
  width: 180px;
  object-fit: cover;
`;

const Title = styled(LinkComponent)`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  ${LinkComponent} {
    font-size: 13px;
    font-weight: 100;
    color: #1e1f21;
    opacity: 0.8;
    margin-right: 10px;
  }

  ${LinkComponent}:hover {
    text-decoration: underline;
  }
`;

const Summary = styled(TextComponent)`
  font-size: 17px;
  font-weight: 400;
  color: #1e1f21;
  opacity: 0.9;
`;

const Content = styled.div`
  width: calc(100% - 200px);
`;

const BlogCategoryItem: FunctionComponent<BlogCategoryItemProps> = function ({
  title,
  summary,
  date,
  thumbnail,
  categories,
  slug,
}) {
  return (
    <BlogCategoryItemComponent>
      <Content>
        <Title to={slug}>{title}</Title>
        <Category>
          {categories.map((category) => (
            <Link to={`/blog/${category}/1`} key={`${title}-${category}`}>
              #{category}
            </Link>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </Content>

      <ThumbnailImage src={thumbnail} alt="Thumbnail Image" />
    </BlogCategoryItemComponent>
  );
};

export default BlogCategoryItem;
