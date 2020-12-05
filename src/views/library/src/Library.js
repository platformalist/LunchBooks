import React from "react"

import Img from "gatsby-image"

import { Box, Button, Flex, Heading, Text, VStack, Wrapper } from "components"

const BookBlock = ({ title, genre, cover, synopsis, buttons }) => {
  return (
    <Wrapper>
      <Box maxWidth="710px">
        <VStack space="layout.3">
          <Heading children={title} size={700} />

          <Flex flexDirection={["column", "column", "row"]}>
            {/* Cover */}
            <Box width="276px" height="412px" m="auto">
              <Img fixed={cover} />
            </Box>

            {/* Title and genre */}
            <Box pl={[0, 0, "layout.4"]} pt={["layout.3", "layout.3", 0]}>
              <VStack space="layout.3">
                <Text children={synopsis} size={400} />
                <Box>
                  {buttons.map((button, index) => (
                    <Button
                      label={button.label}
                      link={button.link}
                      color="text"
                      size={400}
                      key={"bookButton" + index}
                    />
                  ))}
                </Box>
              </VStack>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Wrapper>
  )
}

export default BookBlock
