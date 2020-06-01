import React from "react"
import { Flex, Heading, Vector, Wrapper } from "components"

const Footer = ({ text }) => (
  <Wrapper py="layout.6">
    <Flex as="footer" justifyContent="space-between">
      <Heading children={text} size={600} />
      <Flex>
        <Vector selection="twitter" />
        <Vector selection="triangle" />
      </Flex>
    </Flex>
  </Wrapper>
)

export default Footer
