import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { PageProps } from 'gatsby';
import { Defs } from '../components/Defs/Defs';
import { TracedM } from '../components/TracedM/TracedM';
import { Logo } from '../components/Logo/Logo';
import { Footer } from '../components/Footer/Footer';

const Container = styled.div`
  top: 50%;
  left: 50%;
  width: 30rem;
  position: fixed;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 50rem;
  }
`;

const Index: FunctionComponent<PageProps> = () => (
  <>
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342 57">
        <Defs />
        <TracedM />
        <Logo />
      </svg>
    </Container>
    <Footer />
  </>
);

export default Index;
