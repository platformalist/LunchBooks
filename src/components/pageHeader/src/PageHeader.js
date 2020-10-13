import React from "react"

import Img from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby"

import { Box, Heading, Text, Wrapper } from "components"

const PageHeader = ({ title, body, image }) => (
  <Link to="/">
    <Box
      position="relative"
      width="100vw"
      py={["32px", "48px", "56px"]}
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
          <Heading
            children={title}
            size={[750, 800, 900]}
            color="background"
            textAlign={["right", "left"]}
          />
        </Wrapper>
      </Box>
    </Box>
    <Wrapper>
      <Box
        width={[1 / 1, 1 / 1, 1 / 1, 2 / 3]}
        py={["layout.2", "layout.3", "layout.4"]}
      >
        <Text children={body} size={500} color="text" />
      </Box>
    </Wrapper>
  </Link>
)

export default PageHeader
