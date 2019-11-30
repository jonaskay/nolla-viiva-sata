/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Side from "./side"
import Header from "./header"
import "./layout.css"

const Layout = ({ children, title }) => {
  return (
    <div style={{ padding: "3rem 0" }}>
      <Side />

      <div
        className="right"
        style={{
          maxWidth: 640,
          padding: "0 1rem",
        }}
      >
        <Header siteTitle={title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
