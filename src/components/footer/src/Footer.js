import React from "react"
import { Box, Text } from "components"

const Footer = ({ data }) => (
  <Box textAlign="center">
    <Text children={data.text} />
  </Box>
)

export default Footer
