import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as GithubLogo } from '../../assets/svg/github.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/svg/linkedin.svg';

const Container = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StyledLink = styled.a`
  width: 3rem;
  height: 3rem;
`;

export const Footer: FunctionComponent = () => (
  <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ opacity: { duration: 0.5, ease: 'easeInOut', delay: 2.7 } }}
  >
    <StyledLink href="https://github.com/msallent" target="_blank" rel="noreferrer">
      <GithubLogo />
    </StyledLink>
    <StyledLink href="https://www.linkedin.com/in/matias-sallent/" target="_blank" rel="noreferrer">
      <LinkedInLogo />
    </StyledLink>
  </Container>
);
