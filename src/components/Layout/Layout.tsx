import React, { FunctionComponent } from 'react';
import { PageProps } from 'gatsby';
import { GlobalStyle } from '../../style/GlobalStyle';
import { SEO } from '../SEO/SEO';
import { Footer } from '../Footer/Footer';

export const Layout: FunctionComponent<Omit<PageProps, 'children'>> = ({ children, location }) => (
  <>
    <GlobalStyle />
    <SEO location={location} />
    {children}
    <Footer />
  </>
);
