import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type MarkdownProps = {
  html: string
}

const MarkdownComponent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  font-size: 16px;

  h1 {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 40px;
  }

  h2 {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 30px;
  }

  h3 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
  }

  * + h1 {
    margin-top: 100px;
  }

  * + h2 {
    margin-top: 80px;
  }

  * + h3 {
    margin-top: 60px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  img {
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }

  blockquote {
    padding: 5px 15px;
    border-left: 3px solid rgba(30, 31, 32, 0.5);
    margin: 20px 0;
  }

  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  hr {
    border: 1px solid var(--color);
    opacity: 0.5;
    margin: 100px 0;
  }

  p {
    padding: 3px 0;
  }

  a {
    color: #4263eb;
    text-decoration: underline;
  }

  aside {
    margin: 20px 0;
    padding: 20px 15px;
    border-radius: 7px;
    background: #f1f3f5;
    font-weight: 700;
    line-height: 1.5;

    body.dark & {
      background: #343a40;
      color: #ffffff;
    }
  }

  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;
    tab-size: 2;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  & > p > code[class*='language-'] {
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    color: var(--background);
    tab-size: 2;
    background: var(--color);
  }

  @media (max-width: 768px) {
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }
  }
`

const Markdown: FunctionComponent<MarkdownProps> = function ({ html }) {
  return <MarkdownComponent dangerouslySetInnerHTML={{ __html: html }} />
}

export default Markdown
