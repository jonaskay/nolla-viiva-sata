import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title={data.site.siteMetadata.description} />
      <p style={{ fontSize: "1.125rem" }}>
        Startupin perustaminen ei ole ainoa tapa yrittää digimaailmassa.
        Tuotteiden sijasta voit myydä osaamista ja perustaa konsulttiyrityksen.
        Mutta miten konsulttiyritys perustetaan? Entä onko tällaisessa
        liiketoiminnassa mitään järkeä?
      </p>
      <p>
        0-100 (nolla viiva sata) kysyy konsulttifirmojen perustajilta mm.
        ensimmäisistä asiakkaista, ensimmäisistä työntekijöistä ja tärkeimmistä
        taktiikoista. Joka toinen viikko voit kuunnella uuden tositarinan
        konsulttifirman perustamisesta.
      </p>
    </Layout>
  )
}
export default IndexPage
