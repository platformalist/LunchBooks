import React from "react"

import Img from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby"

import { Box, Heading, Text, Wrapper } from "components"

const PageHeader = ({ title, body, image }) => (
  <Link to="/">
    <Box
      position="relative"
      width="100vw"
      py={["72px", "96px", "128px"]}
      color="red"
    >
      {image && (
        <Img
          fluid={image}
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
          <Heading children={title} size={[750, 800, 900]} color="background" />
          <Box
            height={["10px", "13px", "20px"]}
            bg="background"
            my={["layout.2", "layout.3", "layout.4"]}
          />
          <Text children={body} size={[500, 600, 600]} color="background" />
        </Wrapper>
      </Box>
    </Box>
  </Link>
)

export default PageHeader
