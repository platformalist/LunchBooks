import React from "react"

import { Box, Heading, RichText, VStack, Wrapper } from "components"

const BlogPost = ({ title, html }) => (
  <Wrapper>
    <VStack space="layout.2">
      <Heading children={title} size={700} color="text" />
      <Box width={[1 / 1, 1 / 1, 1 / 1, 1 / 2]}>
        <RichText content={{ html: html }} />
      </Box>
    </VStack>
  </Wrapper>
)

export default BlogPost
