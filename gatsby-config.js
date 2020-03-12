module.exports = {
  siteMetadata: {
    title: `0-100 [nolla viiva sata]`,
    description: `Podcast konsulttifirman perustamisesta.`,
    author: `@joonaskykkanen`,
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
              }
            }
          }
        `,
        setup: ({ query: { site } }) => ({
          custom_namespaces: {
            itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
          },
          custom_elements: [
            { "itunes:author": "Joonas Kykkänen" },
            { "itunes:explicit": "clean" },
            {
              "itunes:image": {
                _attr: {
                  href:
                    "https://storage.googleapis.com/nolla-viiva-sata-feed/nolla-viiva-sata-cover.png",
                },
              },
            },
            {
              "itunes:category": [
                {
                  _attr: {
                    text: "Business",
                  },
                },
                {
                  "itunes:category": {
                    _attr: {
                      text: "Entrepreneurship",
                    },
                  },
                },
              ],
            },
            {
              "itunes:owner": [
                { "itunes:name": "Joonas Kykkänen" },
                { "itunes:email": "jonaskay@iki.fi" },
              ],
            },
          ],
          description: site.siteMetadata.description,
          language: "fi",
          site_url: site.siteMetadata.siteUrl,
          title: site.siteMetadata.title,
        }),
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  custom_elements: [
                    { "itunes:duration": edge.node.frontmatter.audioDuration },
                    { "itunes:episodeType": edge.node.frontmatter.type },
                    { "itunes:summary": edge.node.frontmatter.description },
                  ],
                  date: edge.node.frontmatter.date,
                  description: edge.node.frontmatter.description,
                  enclosure: {
                    size: edge.node.frontmatter.audioSize,
                    type: "audio/mp3",
                    url: edge.node.frontmatter.audioUrl,
                  },
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        description
                        type
                        date
                        audioDuration
                        audioSize
                        audioUrl
                      }
                    }
                  }
                }
              }
            `,
            title: "0-100 [nolla viiva sata]",
            output: "feed.xml",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
