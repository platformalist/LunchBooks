import React from "react"

import { Button, Inline, Wrapper } from "components"

function NavBar() {
  return (
    <Wrapper py="layout.3">
      <Inline space="layout.3">
        <Button label="Home" link="/" color="text" size={[350, 350, 400]} />
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
    </Wrapper>
  )
}

export default NavBar
