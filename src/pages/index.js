import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.description} />
      <header className="mb-8 sm:mb-12 sm:ml-8 w-40 sm:w-64">
        <Logo />
      </header>
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
    </Layout>
  )
}
export default IndexPage
