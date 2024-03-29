import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
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
    min-height: 100vh;
  }

  body.dark {
    --color: #ffffff;
    --background: #1e1f21;

    ::-webkit-scrollbar-track {
      background: #18171a;
    }

    ::-webkit-scrollbar-thumb {
      background: #ffffff;
      border-radius: 3px;
    }
  }

  body.light {
    --color: #1e1f21;
    --background: #ffffff;

    ::-webkit-scrollbar-track {
      background: #dee2e6;
    }

    ::-webkit-scrollbar-thumb {
      background: #1e1f21;
      border-radius: 3px;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
