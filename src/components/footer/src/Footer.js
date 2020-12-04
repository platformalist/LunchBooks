import React from "react"

import { Button, Flex, Heading, Inline, Wrapper } from "components"

const Footer = ({ text }) => (
  <Wrapper py="layout.5">
    <Flex justifyContent="space-between">
      <Heading children={text} size={[350, 350, 400]} color="text" />
      <Inline space="layout.3">
        <Button
          label="About"
          link="/about"
          color="text"
          size={[350, 350, 400]}
        />
        <Button label="Blog" link="/blog" color="text" size={[350, 350, 400]} />
        <Button
          label="Twitter"
          link="https://twitter.com/ProwerJames"
          color="text"
          size={[350, 350, 400]}
        />
      </Inline>
    </Flex>
  </Wrapper>
)

export default Footer
