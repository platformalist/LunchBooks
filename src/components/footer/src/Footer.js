import React from "react"
import { Heading, Wrapper } from "components"

const Footer = ({ text }) => (
  <Wrapper pb="layout.6">
    <Heading children={text} size={400} />
  </Wrapper>
)

export default Footer
