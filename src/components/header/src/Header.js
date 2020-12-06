import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import { Box, Button, Heading, Inline, Wrapper } from "components"

function NavItem({ label, link, pageName }) {
  console.log(pageName)
  console.log(link)

  // let UNDERLINE = pageName === link ? true : false

  if (label && link)
    return (
      <Button
        label={label}
        link={link}
        // underline={UNDERLINE}
        underline={false}
        color="text"
        size={400}
      />
    )
  else return null
}

function Header({ location }) {
  const { aboutHeader, blogHeader, homeHeader } = useStaticQuery(IMAGE_QUERY)
  const [headerImage, setHeaderImage] = useState(homeHeader)

  // Determine which page we're on
  const PAGE_NAME =
    location && location.href
      ? location.href.substring(
          location.href.lastIndexOf("/"),
          location.href.length
        )
      : ""

  // Set headerImage based on page name
  // switch (PAGE_NAME) {
  //   case "about":
  //     setHeaderImage(aboutHeader)
  //     break
  //   case "blog":
  //     setHeaderImage(blogHeader)
  //     break
  //   default:
  //     setHeaderImage(homeHeader)
  // }

  return (
    <>
      <>
        <Box position="relative" width="100vw" py={["32px", "48px", "56px"]}>
          {homeHeader && (
            <Img
              fluid={headerImage.childImageSharp.fluid}
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
          <NavItem label="Home" link="/" pageName={PAGE_NAME} />
          <NavItem label="About" link="/about" pageName={PAGE_NAME} />
          <NavItem label="Blog" link="/blog" pageName={PAGE_NAME} />
          <NavItem
            label="Twitter"
            link="https://twitter.com/ProwerJames"
            pageName={PAGE_NAME}
          />
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
