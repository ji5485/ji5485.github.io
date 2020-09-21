import React from 'react';
import { Global, css } from '@emotion/core';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  html,
  body,
  div[id='___gatsby'],
  div[id='root'],
  div[id='gatsby-focus-wrapper'] {
    height: 100%;
  }
`;

const GlobalStyle = function () {
  return <Global styles={style} />;
};

export default GlobalStyle;
