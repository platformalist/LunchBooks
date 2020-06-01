import React from "react"

import Img from "gatsby-image/withIEPolyfill"

import { Box, Flex, Heading, Text, Wrapper } from "components"

const PageHeader = ({ title, body, image }) => (
  <>
    <Box height="50vh" width="100%" top={0} left={0}>
      <Img fluid={image} objectFit="cover" />
      <Flex
        position="absolute"
        top={0}
        left={0}
        flexDirection="column"
        justifyContent="center"
        width="100%"
        height="50vh"
      >
        <Wrapper>
          <Heading children={title} size={900} color="background" />
          <Box height="20px" width="100%" bg="background" />
          <Text children={body} size={700} pt="layout.4" color="background" />
        </Wrapper>
      </Flex>
    </Box>
  </>
)

export default PageHeader
