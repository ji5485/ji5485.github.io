import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import TableOfContents from 'components/molecules/TableOfContents';

interface PostItemBodyProps {
  html: string;
  toc: string;
}

const PostItemBodyComponent = styled.div`
  margin: 150px 0;
  display: grid;
  grid-template-columns: 768px 250px;
  grid-gap: 30px;

  @media (max-width: 1350px) {
    display: block;
  }

  @media (max-width: 768px) {
    margin: 100px 0;
  }
`;

const PostItemBody: FunctionComponent<PostItemBodyProps> = function ({ html, toc }) {
  return (
    <PostItemBodyComponent>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <TableOfContents toc={toc} />
    </PostItemBodyComponent>
  );
};

export default PostItemBody;
