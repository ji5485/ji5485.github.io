import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import BlogCategoryItem from 'components/molecules/BlogCategoryItem';

export interface BlogCategoryListProps {
  list: [
    {
      node: {
        fields: {
          slug: string;
        };
        frontmatter: {
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
        };
      };
    },
  ];
}

const BlogCategoryListComponent = styled.div``;

const BlogCategoryList: FunctionComponent<BlogCategoryListProps> = function ({ list }) {
  return (
    <BlogCategoryListComponent>
      {list.map(({ node: { fields: { slug }, frontmatter } }) => (
        <BlogCategoryItem slug={slug} {...frontmatter} key={slug} />
      ))}
    </BlogCategoryListComponent>
  );
};

export default BlogCategoryList;
