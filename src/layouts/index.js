import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"
import Helmet from "react-helmet"

// Project components
import { Footer, GlobalStyles, Header, Theme } from "components"

import "./fonts.css"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        {/* Enable iPhone X and greater env() padding for properly avoiding bottom bar */}
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Helmet>

      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
