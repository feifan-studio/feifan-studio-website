require('dotenv').config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.js
    siteTitle: 'Feifan Studio',
    siteTitleAlt: 'Feifan Studio',
    siteHeadline: 'Feifan Studio @ Austin, TX',
    siteUrl: 'https://feifan-studio.netlify.app',
    siteDescription: 'Feifan Studio @ Austin, TX.',
    siteImage: '/banner.jpg',
    author: '@feifan.studio'
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-jodie',
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: 'About', slug: '/about' },
          { name: 'Projects', slug: '/projects' }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Feifan Studio',
        short_name: 'Feifan',
        description: 'Feifan Studio @ Austin, TX.',
        start_url: '/',
        background_color: '#ffffff',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b75e09`,
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    shouldAnalyseBundle && {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        reportFilename: '_bundle.html',
        openAnalyzer: false
      }
    }
  ].filter(Boolean)
}
