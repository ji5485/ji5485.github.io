import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import { LinkComponent } from 'components/atoms/Link';

const NotFoundComponent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundTextBox = styled.div`
  display: flex;
`;

const NotFoundText = styled(Text)<{ reverse?: boolean }>`
  font-size: 250px;
  font-weight: 700;

  ${({ reverse = false }) =>
    reverse
      ? `
    color: #ffffff;
    text-shadow: -3px 0 #1e1f21, 0 3px #1e1f21, 3px 0 #1e1f21, 0 -3px #1e1f21;
  `
      : ''}

  body.dark & {
    ${({ reverse = false }) =>
      reverse
        ? `
      color: #1e1f21;
      text-shadow: -3px 0 #ffffff, 0 3px #ffffff, 3px 0 #ffffff, 0 -3px #ffffff;
    `
        : ''}
  }

  @media (max-width: 768px) {
    font-size: 120px;
  }
`;

const SubTextBox = styled(Text)`
  font-size: 25px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  ${TextComponent} {
    text-align: center;
  }
`;

const LinkToMain = styled(LinkComponent)`
  margin-top: 50px;
  font-weight: 700;
  padding: 10px 30px;
  border: 1px solid #1e1f21;
  transition: 0.1s all;

  &:hover {
    background: #1e1f21;
    color: #ffffff;
  }

  body.dark & {
    border-color: #ffffff;

    &:hover {
      background: #ffffff;
      color: #1e1f21;
    }
  }
`;

const NotFound: FunctionComponent = function ({}) {
  return (
    <NotFoundComponent>
      <NotFoundTextBox>
        <NotFoundText>4</NotFoundText>
        <NotFoundText reverse={true}>0</NotFoundText>
        <NotFoundText>4</NotFoundText>
        <NotFoundText>.</NotFoundText>
      </NotFoundTextBox>

      <SubTextBox>
        <Text>Sorry, Page Not Found.</Text>
        <Text>The page you are looking for cannot be found.</Text>
      </SubTextBox>

      <LinkToMain to="/">Back To Main</LinkToMain>
    </NotFoundComponent>
  );
};

export default NotFound;
