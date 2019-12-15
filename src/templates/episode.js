import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Player from "../components/player"

const Episode = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, description, audioUrl },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} description={description} />
      <h1 className="my-6 text-3xl font-medium">{title}</h1>
      <Player body={description} url={audioUrl} />
    </Layout>
  )
}

export default Episode

export const query = graphql`
  query EpisodeBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        audioUrl
      }
    }
  }
`
