import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostNavigator from 'components/molecules/PostNavigator';
import Utterances from 'components/molecules/Utterances';

export type OtherItemInfo = {
  slug: string;
  title: string;
};

interface PostItemFootProps {
  prevItem: OtherItemInfo | null;
  nextItem: OtherItemInfo | null;
}

const PostNavigatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const PostItemFoot: FunctionComponent<PostItemFootProps> = function ({ prevItem, nextItem }) {
  return (
    <div>
      <PostNavigatorContainer>
        {prevItem && <PostNavigator direction="prev" {...prevItem} />}
        {nextItem && <PostNavigator direction="next" {...nextItem} />}
      </PostNavigatorContainer>

      <Utterances mode="light" repo="ji5485/ji5485.github.io" />
    </div>
  );
};

export default PostItemFoot;
