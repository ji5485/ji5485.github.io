import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface MarkdownProps {
  html: string;
}

const MarkdownComponent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  font-size: 18px;

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  h1,
  h2,
  h3 {
    font-weight: 700;
    margin-bottom: 40px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 100px;
  }

  blockquote {
    padding: 5px 15px;
    border-left: 3px solid rgba(30, 31, 32, 0.5);
    margin: 20px 0;
  }

  ol,
  ul {
    margin-left: 20px;
  }

  hr {
    border: 1px solid rgba(30, 31, 32, 0.5);
    margin: 20px 0;
  }

  p {
    padding: 3px 0;
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
