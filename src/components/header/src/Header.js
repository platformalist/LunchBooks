import React from "react"
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

function Header({ banner, navButtons }) {
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

export default Header
