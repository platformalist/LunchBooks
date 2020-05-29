import React from "react"
import { Box, Flex, Heading, Vector } from "components"

const Footer = ({ data }) => (
  <Flex
    flexDirection="column"
    as="footer"
    alignItems="center"
    justifyContent="center"
  >
    {/* Unlock this vector when your Twitter has more than like ... 0 followers. */}
    {/* <Vector selection="Twitter" /> */}
    <Heading children={data.text} fontWeight={800} size={600} />
  </Flex>
)

export default Footer
