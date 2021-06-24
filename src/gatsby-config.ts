/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

import { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: 'matnac.dev',
    description: 'Next-gen web development',
    keywords: [
      'matnac',
      'dev',
      'senior',
      'software',
      'engineer',
      'frontend',
      'react',
      'typescript',
      'development',
    ],
    siteUrl: 'https://matnac.dev',
    imageUrl: '/share.jpg',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, './assets'),
        name: 'assets',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'matnac.dev',
        short_name: 'matnac.dev',
        start_url: '/',
        icon: 'src/assets/svg/favicon.svg',
        background_color: '#1c1c1c',
        theme_color: '#36363a',
        display: 'standalone',
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
  ],
};

export default gatsbyConfig;
