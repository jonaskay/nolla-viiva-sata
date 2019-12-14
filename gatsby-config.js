module.exports = {
  siteMetadata: {
    title: `0-100 [nolla viiva sata]`,
    description: `Podcast konsulttifirman perustamisesta.`,
    author: `Joonas Kykkänen`,
    siteUrl: `https://www.nollaviivasata.fi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/src/episodes`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `0-100 [nolla viiva sata]`,
        short_name: `0-100`,
        start_url: `/`,
        background_color: `#212529`,
        theme_color: `#212529`,
        display: `minimal-ui`,
        icon: `src/images/nolla-viiva-sata-cover.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                })
              })
            },
            query: `
              {
                allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        date
                        title
                        description
                      }
                    }
                  }
                }
              }
            `,
            setup: () => ({
              custom_namespaces: {
                itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
              },
              custom_elements: [
                { "itunes:author": "Joonas Kykkänen" },
                { "itunes:explicit": "clean" },
              ],
            }),
            output: "/rss.xml",
            title: "0-100 RSS-syöte",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
