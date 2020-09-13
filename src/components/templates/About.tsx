import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Header from 'components/molecules/Header';

interface AboutProps {
  logoVisibility: boolean;
}

const AboutComponent = styled.div`
  width: 100%;
`;

const About: FunctionComponent<AboutProps> = function ({ logoVisibility }) {
  return (
    <AboutComponent>
      <Header logoVisibility={logoVisibility} />
    </AboutComponent>
  );
};

export default About;
