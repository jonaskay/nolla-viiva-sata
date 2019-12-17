import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "nolla-viiva-sata-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Image
      fluid={data.logoImage.childImageSharp.fluid}
      alt="0-100 [nolla viiva sata] -logo"
    />
  )
}

export default Logo
