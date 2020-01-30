import React from "react"
import { Box, Flex, Text, Heading } from "components"

const Header = ({ data }) => (
  <Box>
    <Flex justifyContent="flex-end">
      <Heading mb={1} children={data.title} />
    </Flex>
    <Flex justifyContent="flex-end">
      <Text mb={4} textAlign="right" children={data.text} />
    </Flex>
  </Box>
)
export default Header
