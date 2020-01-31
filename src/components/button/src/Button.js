import React, { useState } from "react"

import { Box, Flex, Text } from "components"

const Button = ({ buttonLink, buttonText }) => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      height="40px"
      width="156px"
      css={{ "&.hovered": { opacity: 0.6 } }}
      className={hover ? "hovered" : ""}
    >
      <a
        href={buttonLink}
        css={{
          textDecoration: "none",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          bg="#ffa636"
          borderRadius={8}
          height="40px"
          width="156px"
        >
          <Text
            children={buttonText}
            css={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          />
        </Flex>
      </a>
    </Box>
  )
}

export default Button
