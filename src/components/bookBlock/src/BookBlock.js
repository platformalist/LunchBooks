import React from "react"
import { Box, Button, Flex, Heading, Text } from "components"

const BookBlock = ({ title, genre, cover, synopsis, buttons, index }) => {
  let dockColor = index % 2 === 1 ? "#deddd5" : "#e8e7e1"

  return (
    <Flex>
      {/* The background holding the whole book. */}
      <Flex
        width="100%"
        mb={[3, 3, 8]}
        flexWrap={["wrap", "wrap", "nowrap"]}
        justifyContent={["center", "center", "flex-start"]}
      >
        <Box>
          {/* The actual book cover */}
          <Box
            height="300px"
            width="200px"
            mb={[4, 4, 0]}
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
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg={["background", "background", dockColor]}
          />
          <Flex
            position="relative"
            flexDirection="column"
            alignItems={["center", "center", "flex-start"]}
          >
            <Heading
              textAlign={["center", "center", "left"]}
              children={title}
              fontWeight={800}
              size={700}
            />
            <Text children={genre} mb={[2, 2, 3]} fontWeight={400} />
            <Flex
              flexWrap="wrap"
              justifyContent={["center", "center", "flex-start"]}
            >
              {buttons.map((button, index) => (
                <Button
                  link={button.link}
                  label={button.label}
                  index={index}
                  key={"button" + index}
                />
              ))}
            </Flex>
            <Text
              children={synopsis}
              mt={2}
              textAlign={["center", "center", "left"]}
              fontWeight={400}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BookBlock
