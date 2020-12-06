import React from "react"

import { Heading, Wrapper } from "components"

function Footer() {
  const today = new Date()
  let thisYear = today.getFullYear()
  let finalString =
    thisYear === 2020 ? "© " + thisYear + " " : "© 2020-" + thisYear + " "
  return (
    <Wrapper
      data-component-id="footer"
      as="footer"
      mt="auto"
      pt="layout.6"
      pb="layout.5"
      position="relative"
    >
      <Heading
        children={finalString + "James Prower"}
        size={400}
        color="text"
      />
    </Wrapper>
  )
}

export default Footer
