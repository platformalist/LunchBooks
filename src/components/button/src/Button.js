import React, { useState } from "react"

import { Box, Heading } from "components"

function Button({ link, label, color, size, pr, underline }) {
  const [hover, setHover] = useState(false)
  return (
    // Wrapper box to keep button's clickable area from overflowing into container.
    <Box maxWidth="100px" pr={pr}>
      <a
        href={link}
        css={{
          textDecoration: "none",
        }}
        target={link.includes("http") ? "_blank" : null}
        rel={link.includes("http") ? "noopener noreferrer" : null}
      >
        <Heading
          children={label}
          color={color}
          size={size}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          css={{
            "&.hovered": { opacity: 0.7 },
            textDecoration: underline ? "underline" : null,
          }}
          className={hover ? "hovered" : ""}
        />
      </a>
    </Box>
  )
}

export default Button
