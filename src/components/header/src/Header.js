import React from "react"
import { Box, Flex, Text } from "components"

const Header = () => (
  <Box>
    <Flex width="100%" justifyContent="flex-end">
      <Box width="200px" height="100px" bg="blue" />
    </Flex>
    <Flex width="100%" justifyContent="flex-end">
      <Text children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    </Flex>
  </Box>
)
export default Header
