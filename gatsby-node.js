const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const template = path.resolve(`./src/templates/episode.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const episodes = result.data.allMarkdownRemark.edges

  episodes.forEach((episode) => {
    createPage({
      path: episode.node.fields.slug,
      component: template,
      context: {
        slug: episode.node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
