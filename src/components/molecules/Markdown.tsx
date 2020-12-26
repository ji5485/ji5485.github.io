import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface MarkdownProps {
  html: string;
}

const MarkdownComponent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  font-size: 17px;

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
    border: 1px solid rgba(30, 31, 32, 0.5);
    margin: 100px 0;
  }

  p {
    padding: 3px 0;
  }

  a {
    color: #4263eb;
    text-decoration: underline;
  }

  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  @media (max-width: 768px) {
    line-height: 1.6;
    font-size: 16px;

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

const Markdown: FunctionComponent<MarkdownProps> = function ({ html }) {
  return <MarkdownComponent dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Markdown;
