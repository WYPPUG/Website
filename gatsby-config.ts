import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `WYPPUG - West Yorkshire Power Platform User Group`,
    siteUrl: `https://www.wyppug.org.uk`,
  },

  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdxevents`,
        path: `${__dirname}/src/content/events`,
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mdxpages",
        path: "./src/content/pages/",
      },
      __key: "mdxpages",
    },
  ],
};

export default config;
