import React from "react"

import { Box } from "components"

import backgroundImage from "images/mars.jpg"

const InfoWindow = () => (
  // {/* Background image */}

  <Box
    mb={4}
    width="100%"
    height="200px"
    p={4}
    css={{
      backgroundImage: "url(" + backgroundImage + ")",
      backgroundSize: "cover",
    }}
  />
)
export default InfoWindow
