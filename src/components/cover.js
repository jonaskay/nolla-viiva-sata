import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Cover = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "nollaviivasata-cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Image fluid={data.coverImage.childImageSharp.fluid} />
}

export default Cover
