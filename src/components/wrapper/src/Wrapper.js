import React from "react"

import { Box } from "components"

function Wrapper({ children, maxWidth, px, ...rest }) {
  return (
    <Box data-component-id="wrapper" width="100%" px={px} {...rest}>
      <Box width="100%" maxWidth={maxWidth} mx="auto">
        {children}
      </Box>
    </Box>
  )
}

Wrapper.defaultProps = {
  maxWidth: 1080,
  px: ["layout.4", "layout.6"],
}

export default Wrapper
