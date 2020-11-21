import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

interface PageTemplateProps {
  children: ReactNode;
}

const Template = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 100px;

  @media (max-width: 768px) {
    grid-gap: 50px;
  }
`;

const Content = styled.div`
  width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const PageTemplate: FunctionComponent<PageTemplateProps> = function ({ children }) {
  return (
    <Template>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Template>
  );
};

export default PageTemplate;
