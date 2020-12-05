import React from "react"

import { Button, Inline, Wrapper } from "components"

function NavItem({ label, link, href }) {
  let PAGE_NAME = href.substring(href.lastIndexOf("/"), href.length)

  let UNDERLINE = PAGE_NAME === link ? true : false

  console.log(PAGE_NAME)
  console.log(link)
  //
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

function NavBar({ location }) {
  return (
    <Wrapper py="layout.2" mb="layout.6" bg="background">
      <Inline space="layout.3">
        <NavItem label="Home" link="/" href={location.href} />
        <NavItem label="About" link="/about" href={location.href} />
        <NavItem label="Blog" link="/blog" href={location.href} />
        <NavItem
          label="Twitter"
          link="https://twitter.com/ProwerJames"
          href={location.href}
        />
      </Inline>
    </Wrapper>
  )
}

export default NavBar
