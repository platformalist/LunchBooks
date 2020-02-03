import React from "react"
import { Box, Heading } from "components"

const Footer = ({ data }) => (
  <Box as="footer" textAlign="center">
    <Heading children={data.text} fontWeight={800} size={600} />
  </Box>
)

export default Footer
