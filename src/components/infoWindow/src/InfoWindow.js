import React from "react"

import { Box } from "components"

const InfoWindow = ({ source }) => (
  // {/* Background image */}

  <Box
    mb={4}
    width="100%"
    height="144px"
    p={4}
    css={{
      backgroundImage: "url(" + source + ")",
      backgroundSize: "cover",
    }}
  />
)
export default InfoWindow
