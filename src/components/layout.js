/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "../components/logo"
import "./layout.css"

const Layout = ({ children }) => (
  <main className="max-w-md mx-auto p-8">
    <header className="mb-8 sm:mb-12 w-40 sm:w-64">
      <Link to="/">
        <Logo />
      </Link>
    </header>
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
