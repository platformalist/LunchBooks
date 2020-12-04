import React from "react"

import { Heading, Wrapper } from "components"

const Footer = ({ text }) => {
  const today = new Date()
  let thisYear = today.getFullYear()
  let finalString =
    thisYear === 2020 ? "© " + thisYear + " " : "© 2020-" + thisYear + " "
  return (
    <Wrapper py="layout.5">
      <Heading
        children={finalString + "James Prower"}
        size={[350, 350, 400]}
        color="text"
      />
    </Wrapper>
  )
}

export default Footer
