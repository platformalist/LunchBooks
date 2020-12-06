import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import { Box, Button, Heading, Inline, Wrapper } from "components"

function NavItem({ label, link, pathname }) {
  if (label && link)
    return (
      <Button
        label={label}
        link={link}
        underline={pathname === link ? true : false}
        color="text"
        size={400}
      />
    )
  else return null
}

function Header({ location }) {
  const { aboutHeader, blogHeader, homeHeader } = useStaticQuery(IMAGE_QUERY)

  let BANNER = homeHeader

  // Set headerImage based on page name
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
  const NavButtons = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
    { label: "Twitter", link: "https://twitter.com/ProwerJames" },
  ]

  return (
    <>
      <>
        <Box position="relative" width="100vw" py={["32px", "48px", "56px"]}>
          {BANNER && (
            <Img
              fluid={BANNER.childImageSharp.fluid}
              objectFit="cover"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          )}
          <Box position="relative">
            <Wrapper>
              <Heading
                children="James Prower"
                size={[700, 800, 900]}
                color="background"
              />
            </Wrapper>
          </Box>
        </Box>
      </>
      {/* NavBar */}
      <Wrapper py="layout.2" mb="layout.6" bg="background">
        <Inline space="layout.3">
          {NavButtons &&
            NavButtons[0] &&
            NavButtons.map((item, index) => {
              if (item && item.label && item.link)
                return (
                  <NavItem
                    label={item.label}
                    link={item.link}
                    {...location}
                    key={"headerNavItem" + index}
                  />
                )
              else return null
            })}
        </Inline>
      </Wrapper>
    </>
  )
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

export default Header
