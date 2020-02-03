import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "components"
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
      <Wrapper py={64} px={5}>
        <GlobalStyles />
        <Header
          data={{
            title: "The Name of This Site",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }}
        />
        <main>{children}</main>
        <Footer
          data={{
            text:
              "This is the footer text. Copyright 2020 Totally Legitimate Corporation. All Rights Reserved. Patents pending. Etc.",
          }}
        />
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
