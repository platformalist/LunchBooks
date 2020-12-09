import React from "react"
import Img from "gatsby-image/withIEPolyfill"

import { Box, Button, Heading, Inline, Wrapper } from "components"

function NavItem({ path, label, link }) {
  // Tell the nav that we're on 'blog' if we're on a specific blog post, so the
  // highlighted item is correct.

  if (path.startsWith("/blog/")) {
    path = "/blog/"
  }

  if (label && link)
    return (
      <Button
        label={label}
        link={link}
        underline={path === "/" ? link === path : link.startsWith(path)}
        color="text"
        size={400}
      />
    )
  else return null
}

function Header({ banners, path, navButtons }) {
  return (
    <div data-component-id="header" as="header">
      <Box position="relative" width="100vw" py={["32px", "48px", "56px"]}>
        <Img
          fluid={
            path === "/"
              ? banners.homeHeader.childImageSharp.fluid
              : path.startsWith("/about")
              ? banners.aboutHeader.childImageSharp.fluid
              : path.startsWith("/blog")
              ? banners.blogHeader.childImageSharp.fluid
              : banners.homeHeader.childImageSharp.fluid
          }
          objectFit="cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          durationFadeIn={0}
          loading="eager"
        />
        )
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
                    path={path}
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

export default Header
