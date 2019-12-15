import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Player from "../components/player"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query EpisodeQuery {
      site {
        siteMetadata {
          description
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              audioUrl
            }
          }
        }
      }
    }
  `)

  const episodes = data.allMarkdownRemark.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.description} />
      <div className="text-lg leading-relaxed">
        <p className="my-6">
          Startupin perustaminen ei ole ainoa tapa yrittää digimaailmassa. Voit
          valita tuotteiden sijasta palvelut ja konsultoinnin. Mutta miten
          konsulttiyritys perustetaan? Entä onko tällaisessa liiketoiminnassa
          mitään järkeä?
        </p>
        <p className="my-6">
          0-100 [nolla viiva sata] kysyy konsulttifirmojen perustajilta mm.
          ensimmäisistä asiakkaista ja ensimmäisistä työntekijöistä. Joka toinen
          viikko voit kuunnella uuden tositarinan konsulttifirman
          perustamisesta.
        </p>
      </div>
      <h2 className="mt-8 text-2xl font-medium">Jaksot</h2>
      {episodes.map(episode => (
        <div className="my-4">
          <h3 className="mb-2 text-xl font-medium">
            <Link to={episode.fields.slug}>{episode.frontmatter.title}</Link>
          </h3>
          <Player
            body={episode.frontmatter.description}
            url={episode.frontmatter.audioUrl}
          />
        </div>
      ))}
    </Layout>
  )
}
export default IndexPage
