import React, { useState } from "react"
import { Box, Button, Flex, Heading, Text } from "components"

const BookBlock = ({ title, genre, cover, synopsis, buttons, index }) => {
  const [hover, setHover] = useState(false)
  let dockColor = index % 2 === 1 ? "#F8F6F4" : "#F3F2F1"

  return (
    <Flex>
      {/* The background holding the whole book. */}
      <Flex width="100%" mb={4}>
        <Box>
          {/* The actual book cover */}
          <Box
            height="300px"
            width="200px"
            css={{
              backgroundImage: "url(" + cover + ")",
              backgroundSize: "cover",
            }}
          />
        </Box>
        <Flex
          position="relative"
          p={5}
          flexDirection="column"
          justifyContent="center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
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
              "&.hovered": { opacity: 0.3 },
            }}
          />
          <Box position="relative">
            <Heading children={title} fontWeight={800} size={700} />
            <Text children={genre} fontWeight={400} />
            <Flex flexWrap="wrap">
              {buttons.map((button, index) => (
                <Button link={button.link} label={button.label} index={index} />
              ))}
            </Flex>
            <Text children={synopsis} fontWeight={400} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BookBlock
