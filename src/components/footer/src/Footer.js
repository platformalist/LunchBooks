import React from "react"
import { Button, Flex, Heading, Wrapper } from "components"

const Footer = ({ text }) => (
  <Wrapper pb="layout.6">
    <Flex as="footer" justifyContent="space-between">
      <Heading children={text} size={500} />
      <Flex width="300px" justifyContent="space-around">
        <Button label="Home" link="/" />
        <Button label="Blog" link="/blog" />
        <Button label="Twitter" link="https://twitter.com/ProwerJames" />
      </Flex>
    </Flex>
  </Wrapper>
)

export default Footer
