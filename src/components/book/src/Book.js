import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "components"

const Book = ({ color, genre, synopsis, title, index, open }) => {
  const [hover, setHover] = useState(false)

  return (
    <Flex
      className={hover ? "hovered" : ""}
      css={{ "&.hovered": { opacity: 0.6 } }}
    >
      <Flex width="100%" my={3} mx={3}>
        <Box mb={4}>
          <Box
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            height="300px"
            width="200px"
            bg={color}
          />
        </Box>
        {open && (
          <Box>
            <Heading children={title} />
            <Text children={synopsis} />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

export default Book
