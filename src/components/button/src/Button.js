import React, { useState } from "react"

import { Box, Flex, Text } from "components"

const Button = ({ link, label }) => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      height="40px"
      width="156px"
      css={{ "&.hovered": { opacity: 0.7 } }}
      className={hover ? "hovered" : ""}
      mr={3}
      my={[2, 2, 3]}
    >
      <a
        href={link}
        css={{
          textDecoration: "none",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          bg="#d96b1c"
          borderRadius={8}
          height="40px"
          width="156px"
        >
          <Text
            children={label}
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
