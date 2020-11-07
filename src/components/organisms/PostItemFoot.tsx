import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostNavigator from 'components/molecules/PostNavigator';

export type OtherItemInfo = {
  slug: string;
  title: string;
};

interface PostItemFootProps {
  prevItem: OtherItemInfo | null;
  nextItem: OtherItemInfo | null;
}

const PostItemFootComponent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

const PostItemFoot: FunctionComponent<PostItemFootProps> = function ({ prevItem, nextItem }) {
  return (
    <PostItemFootComponent>
      {prevItem && <PostNavigator direction="prev" {...prevItem} />}
      {nextItem && <PostNavigator direction="next" {...nextItem} />}
    </PostItemFootComponent>
  );
};

export default PostItemFoot;
