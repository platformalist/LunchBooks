import React from "react"

import Img from "gatsby-image/withIEPolyfill"

import { Box, Heading, Text, Wrapper } from "components"

const PageHeader = ({ title, body, image }) => (
  <>
    <Box position="relative" width="100%" py="128px" color="red">
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
            size={[700, 800, 900]}
            color="background"
            pb="layout.3"
          />
          <Box height="20px" width="100%" bg="background" />
          <Text children={body} size={600} pt="layout.4" color="background" />
        </Wrapper>
      </Box>
    </Box>
  </>
)

export default PageHeader
