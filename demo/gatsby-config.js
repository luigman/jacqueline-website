module.exports = {
  pathPrefix: "/jacqueline-website",
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-portfolio",
      options: {
        contentPath: `${__dirname}/content`
      }
    }
  ]
};
