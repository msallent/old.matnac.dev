import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link, PageProps } from 'gatsby';
import MonoLisaWoff2 from '../assets/fonts/MonoLisa-Regular.woff2';
import MonoLisaWoff from '../assets/fonts/MonoLisa-Regular.woff';

const Container = styled.main`
  @font-face {
    font-family: 'MonoLisa';
    src: local('MonoLisa'), url(${MonoLisaWoff2}) format('woff2'),
      url(${MonoLisaWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  font-family: 'MonoLisa', sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
`;

const HeadingWrapper = styled.div`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 7.5rem;
  text-transform: uppercase;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 8.5rem;
  }
`;

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  word-spacing: -0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const NotFound: FunctionComponent<PageProps> = () => (
  <Container>
    <HeadingWrapper>
      <Heading>Not</Heading>
      <Heading>Found</Heading>
    </HeadingWrapper>
    <StyledLink to="/">Go back</StyledLink>
  </Container>
);

export default NotFound;
