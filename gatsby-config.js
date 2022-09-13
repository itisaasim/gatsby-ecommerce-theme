module.exports = {
  siteMetadata: {
    title: `Shoppe Aesthetics`,
    siteUrl: `https://shoppeaesthetics.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shoppe Aesthetics`,
        short_name: `Shoppe Aesthetics`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
