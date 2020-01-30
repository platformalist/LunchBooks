import React from "react"
import { Link } from "gatsby"
import { Box, Text } from "components"

const Footer = ({ data }) => (
  <Box textAlign="center">
    <Link to="/page-2/">Go to page 2</Link>
    <Text children={data.text} />
  </Box>
)

export default Footer
