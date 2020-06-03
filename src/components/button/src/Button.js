import React, { useState } from "react"

import { Box, Heading } from "components"

const Button = ({ link, label, color }) => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      css={{ "&.hovered": { opacity: 0.7 } }}
      className={hover ? "hovered" : ""}
    >
      <a
        href={link}
        css={{
          textDecoration: "none",
        }}
        target={link.includes("http") ? "_blank" : null}
        rel={link.includes("http") ? "noopener noreferrer" : null}
      >
        <Heading children={label} color={color} size={400} />
      </a>
    </Box>
  )
}

export default Button
