module.exports = {
  siteMetadata: {
    title: `Narendra Syahrasyad`,
    description: `Front-end web developer and Business and Computer Science candidate at UBC.`,
    name: `Hello Typescript World!`,
    tagline: `Gatsby + SASS + Typescript = 💪`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: `projects`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
