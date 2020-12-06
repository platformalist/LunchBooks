import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
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

  // Set headerImage based on page name
  const { aboutHeader, blogHeader, homeHeader } = useStaticQuery(IMAGE_QUERY)

  let BANNER = homeHeader

  switch (location.pathname) {
    case "/about":
      BANNER = aboutHeader
      break
    case "/blog":
      BANNER = blogHeader
      break
    default:
      BANNER = homeHeader
  }

  // Define which links appear in the navbar
  const navButtons = [
    { label: "Home", link: "/", active: false },
    { label: "About", link: "/about", active: false },
    { label: "Blog", link: "/blog", active: false },
    {
      label: "Twitter",
      link: "https://twitter.com/ProwerJames",
      active: false,
    },
  ]

  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        {/* Enable iPhone X and greater env() padding for properly avoiding bottom bar */}
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Helmet>

      <GlobalStyles />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header banner={BANNER} navButtons={navButtons} />

        <main>{children}</main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const IMAGE_QUERY = graphql`
  {
    aboutHeader: file(relativePath: { eq: "hero_about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    blogHeader: file(relativePath: { eq: "hero_blog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeHeader: file(relativePath: { eq: "hero_index.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Layout
