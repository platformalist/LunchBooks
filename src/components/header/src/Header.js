import React from "react"

import { Button, Flex, Wrapper } from "components"

const Header = () => {
  return (
    // Add a header if we eventually have enough content to use a menu
    <Wrapper pt="layout.6" position="absolute" zIndex={1}>
      <Flex justifyContent="flex-end">
        {/* Unlock these once the blog has 10+ posts */}
        {/* <Flex width="300px" justifyContent="space-between">
          <Button label="Home" link="/" color="background" />
          <Button label="Blog" link="/blog" color="background" /> */}
        <Button
          label="Twitter"
          link="https://twitter.com/ProwerJames"
          color="background"
        />
        {/* </Flex> */}
      </Flex>
    </Wrapper>
  )
}
export default Header
