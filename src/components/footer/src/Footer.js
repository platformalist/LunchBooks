import React from "react"

import { Button, Flex, Heading, Wrapper } from "components"

const Footer = ({ text }) => (
  <Wrapper pb="layout.6">
    <Flex justifyContent="space-between">
      <Heading children={text} size={400} color="text" />
      <Flex>
        <Button
          label="Twitter"
          link="https://twitter.com/ProwerJames"
          color="text"
          size={400}
          pr={["layout.2", "layout.3", "layout.4"]}
        />
        <Button label="Blog" link="/blog" color="text" size={400} />
      </Flex>
    </Flex>
  </Wrapper>
)

export default Footer
