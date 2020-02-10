import React from "react"
import { Box, Flex, Text, Heading } from "components"
import headerImage from "images/header.jpg"

const Header = ({ data }) => {
  return (
    <Box as="header" width="100%">
      <Flex justifyContent={["center", "center", "flex-end"]}>
        <Heading mb={1} children={data.title} fontWeight={800} size={800} />
      </Flex>
      <Flex justifyContent="flex-end">
        <Text
          mb={[6, 6, 8]}
          textAlign={["center", "center", "right"]}
          children={data.text}
        />
      </Flex>
      {/* Image Block */}

      <Box
        mb={[6, 6, 4]}
        width="100%"
        height={["40px", "40px", "80px"]}
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
