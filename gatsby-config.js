module.exports = {
  pathPrefix: "/tia-pikachu",
  siteMetadata: {
    title: "Tia Pikachu",
    titleTemplate: "%s · Tia Pikachu",
    description:
      "Sitio web Giovanna Grandón Caro constituyente distrito 12",
    url: "https://www.tiapikachu.cl", // No trailing slash allowed!
    image: "/images/logo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@TiaPikachu",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
