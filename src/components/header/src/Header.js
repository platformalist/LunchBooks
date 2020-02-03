import React from "react"
import { Box, Flex, Text, Heading } from "components"
import headerImage from "images/mars.jpg"

const Header = ({ data }) => {
  return (
    <Box as="header" width="100%">
      <Flex justifyContent="flex-end">
        <Heading mb={1} children={data.title} fontWeight={800} size={800} />
      </Flex>
      <Flex justifyContent="flex-end">
        <Text mb={4} textAlign="right" children={data.text} />
      </Flex>
      {/* Image Block */}

      <Box
        mb={4}
        width="100%"
        height={["80px", "96px", "120px"]}
        p={4}
        display={["none", "none", "block"]}
        css={{
          backgroundImage: "url(" + headerImage + ")",
          backgroundSize: "cover",
        }}
      />
    </Box>
  )
}
export default Header
