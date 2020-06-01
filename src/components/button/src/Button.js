import React, { useState } from "react"

import { Box, Heading } from "components"

const Button = ({ link, label }) => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      css={{ "&.hovered": { opacity: 0.7 } }}
      className={hover ? "hovered" : ""}
      width="100px"
    >
      <a
        href={link}
        css={{
          textDecoration: "none",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Heading
          children={label}
          css={{
            color: "#000",
          }}
          size={600}
        />
      </a>
    </Box>
  )
}

export default Button
