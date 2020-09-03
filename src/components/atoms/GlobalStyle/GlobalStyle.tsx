import React from "react";
import { Global, css } from '@emotion/core';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', 'Noto Sans KR', sans-serif;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
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
