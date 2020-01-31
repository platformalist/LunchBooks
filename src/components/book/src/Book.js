import React, { useState } from "react"
import { Box, Button, Flex, Heading, Text } from "components"

const Book = ({
  dockColor,
  genre,
  synopsis,
  title,
  index,
  cover,
  buttonText,
  buttonLink,
}) => {
  const [hover, setHover] = useState(false)

  return (
    <Flex
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* The background holding the whole book. */}
      <Flex width="100%" mb={4}>
        <Box>
          {/* The actual book cover */}
          <Box
            height="300px"
            width="200px"
            className={hover ? "hovered" : ""}
            css={{
              backgroundImage: "url(" + cover + ")",
              backgroundSize: "cover",
              "&.hovered": { opacity: 0.6 },
            }}
          />
        </Box>
        <Flex
          position="relative"
          p={3}
          flexDirection="column"
          justifyContent="flex-end"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg={dockColor}
            className={hover ? "hovered" : ""}
            css={{
              "&.hovered": { opacity: 0.6 },
            }}
          />
          <Box position="relative" css={{ opacity: 1 }}>
            <Heading children={title} />
            <Text fontStyle="italic" children={genre} />
            <Box my={3}>
              <Button buttonLink={buttonLink} buttonText={buttonText} />
            </Box>
            <Text children={synopsis} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Book
