import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

const PortoflioComponent = styled.div``;

const Portfolio: FunctionComponent<{}> = function ({}) {
  return (
    <PortoflioComponent>
      <Header />

      <Footer />
    </PortoflioComponent>
  );
};

export default Portfolio;
