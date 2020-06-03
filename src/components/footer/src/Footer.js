import React from "react"
import { Button, Flex, Heading, Wrapper } from "components"

const Footer = ({ text }) => (
  <Wrapper pb="layout.6">
    <Flex justifyContent="space-between">
      <Heading children={text} size={400} color="text" />
      <Button
        label="Twitter"
        link="https://twitter.com/ProwerJames"
        color="text"
      />
    </Flex>
  </Wrapper>
)

export default Footer
