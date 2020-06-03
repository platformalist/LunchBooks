import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"
import Helmet from "react-helmet"

// Project components
import { Footer, GlobalStyles, Header, Theme } from "components"

import "./fonts.css"

const today = new Date()

const Layout = ({ children }) => {
  // Check the year. If 2020, just write (c) 2020 PEN NAME.
  // If not, write (c) 2020-202X PEN NAME.
  let thisYear = today.getFullYear()
  let finalString =
    thisYear === 2020 ? "© " + thisYear + " " : "© 2020-" + thisYear + " "

  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        {/* Enable iPhone X and greater env() padding for properly avoiding bottom bar */}
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Helmet>

      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer text={"" + finalString + "James Prower"} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
