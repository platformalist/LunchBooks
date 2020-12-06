import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import { Box, Button, Heading, Inline, Wrapper } from "components"

function NavItem({ label, link, active }) {
  if (label && link)
    return (
      <Button
        label={label}
        link={link}
        underline={active}
        color="text"
        size={400}
      />
    )
  else return null
}

function setBannerName(path, images) {
  switch (path) {
    case "/about":
      return images.aboutHeader
    case "/blog":
      return images.blogHeader
    default:
      return images.homeHeader
  }
}

function Header({ path }) {
  const IMAGES = useStaticQuery(IMAGE_QUERY)

  const [active, setActive] = useState(false)
  const [banner, setBanner] = useState(null)
  useEffect(() => {
    setBanner(setBannerName(path, IMAGES))
  }, [path])

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
    <div data-component-id="header" as="header">
      <Box position="relative" width="100vw" py={["32px", "48px", "56px"]}>
        {banner && (
          <Img
            fluid={banner.childImageSharp.fluid}
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

      {/* NavBar */}
      <Wrapper py="layout.2" mb="layout.6" bg="background">
        <Inline space="layout.3">
          {navButtons &&
            navButtons[0] &&
            navButtons.map((item, index) => {
              if (item && item.label && item.link)
                return (
                  <NavItem
                    label={item.label}
                    link={item.link}
                    active={item.active}
                    key={"headerNavItem" + index}
                  />
                )
              else return null
            })}
        </Inline>
      </Wrapper>
    </div>
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
