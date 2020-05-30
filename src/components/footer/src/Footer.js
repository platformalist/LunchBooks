import React from "react"
import { Flex, Heading, Vector } from "components"

const Footer = ({ data }) => (
  <Flex
    flexDirection="column"
    as="footer"
    alignItems="center"
    justifyContent="center"
  >
    <Vector selection="Twitter" />
    <Heading children={data.text} fontWeight={800} size={600} />
  </Flex>
)

export default Footer
