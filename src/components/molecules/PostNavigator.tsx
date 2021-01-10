import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Icon, { IconComponent } from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import { LinkComponent } from 'components/atoms/Link';

interface PostNavigatorProps {
  direction: 'prev' | 'next';
  slug: string;
  title: string;
}

const PostNavigatorComponent = styled(LinkComponent)<{ direction: string }>`
  width: 47%;
  display: flex;
  flex-direction: column;
  ${({ direction }) =>
    direction === 'next'
      ? `
    align-items: flex-end;
    margin-left: auto;
  `
      : ''}
`;

const LinkButton = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${({ direction }) => `row${direction === 'prev' ? '' : '-reverse'}`};
  align-items: center;
  font-size: 18px;
  margin-bottom: 15px;

  ${IconComponent} {
    ${({ direction }) => `margin-${direction === 'prev' ? 'right' : 'left'}`}: 15px;
  }
`;

const Title = styled(Text)<{ direction: string }>`
  font-size: 15px;
  font-weight: 300;
  ${({ direction }) => `text-align: ${direction === 'prev' ? 'left' : 'right'}`};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const PostNavigator: FunctionComponent<PostNavigatorProps> = function ({ direction, slug, title }) {
  return (
    <PostNavigatorComponent to={slug} direction={direction}>
      <LinkButton direction={direction}>
        <Icon type={`arrow${direction === 'prev' ? 'Left' : 'Right'}`} size={20} />
        <Text>{direction.charAt(0).toUpperCase() + direction.slice(1)}</Text>
      </LinkButton>

      <Title direction={direction}>{title}</Title>
    </PostNavigatorComponent>
  );
};

export default PostNavigator;
