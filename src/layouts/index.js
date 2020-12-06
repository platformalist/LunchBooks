import React, { useEffect } from "react"

import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"
import Helmet from "react-helmet"

// Project components
import { Box, Footer, GlobalStyles, Header, Theme } from "components"

import "./fonts.css"

const Layout = ({ children, location }) => {
  useEffect(() => {
    // Set static viewport height unit on resize and on load
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        {/* Enable iPhone X and greater env() padding for properly avoiding bottom bar */}
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Helmet>

      <GlobalStyles />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header path={location.pathname} />

        <main>{children}</main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
