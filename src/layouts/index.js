import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"
import Helmet from "react-helmet"
import { motion, AnimatePresence } from "framer-motion"

// Project components
import { Footer, GlobalStyles, Header, Theme } from "components"

import "./fonts.css"

function Layout({ children, location }) {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <Helmet>
          {/* Enable iPhone X and greater env() padding for properly avoiding bottom bar */}
          <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        </Helmet>

        <GlobalStyles />
        {/* Header section. */}
        <Header path={location.pathname} />

        {/* Page content. */}
        <AnimatePresence>
          <motion.main
            variants={{
              initial: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  // delay: 0.3,
                  when: "beforeChildren",
                },
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.3 },
                when: "afterChildren",
              },
            }}
            key={location.pathname}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        {/* Footer section. */}
        <Footer data={{}} />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
