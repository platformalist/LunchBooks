import React from "react"

import { Button, Inline, Wrapper } from "components"

function NavItem({ label, link }) {
  let URL = window.location.href
  let LAST_SLASH = URL.lastIndexOf("/")
  let PAGE_NAME = URL.substring(LAST_SLASH, URL.length)

  let UNDERLINE = PAGE_NAME === link ? true : false

  if (label && link)
    return (
      <Button
        label={label}
        link={link}
        underline={UNDERLINE}
        color="text"
        size={[350, 350, 400]}
      />
    )
  else return null
}

function NavBar() {
  return (
    <Wrapper py="layout.2" mb="layout.6" bg="background">
      <Inline space="layout.3">
        <NavItem label="Home" link="/" />
        <NavItem label="About" link="/about" />
        <NavItem label="Blog" link="/blog" />
        <NavItem label="Twitter" link="https://twitter.com/ProwerJames" />
      </Inline>
    </Wrapper>
  )
}

export default NavBar
