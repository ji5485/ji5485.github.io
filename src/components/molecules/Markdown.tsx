import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface MarkdownProps {
  html: string;
}

const MarkdownComponent = styled.div`
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
    margin: 20px 0;
  }

  blockquote {
    padding: 5px 15px;
    border-left: 3px solid rgba(30, 31, 32, 0.5);
    margin: 20px 0;
  }

  ol,
  ul {
    margin: 20px 0 20px 25px;
  }

  hr {
    border: 1px solid rgba(30, 31, 32, 0.5);
    margin: 20px 0;
  }

  p {
    padding: 3px 0;
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
