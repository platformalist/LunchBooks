import React from "react"

import Img from "gatsby-image"

import { Box, Button, Flex, Heading, Text, Wrapper } from "components"

const BookBlock = ({ title, genre, cover, synopsis, buttons }) => {
  return (
    <Wrapper>
      <Box maxWidth="900px">
        <Flex pt="layout.1" flexDirection={["column", "column", "row"]}>
          {/* Cover */}
          <Box width="276px" height="412px" m="auto">
            <Img fixed={cover} />
          </Box>

          {/* Title and genre */}
          <Box pl={[0, 0, "layout.4"]} pt={["layout.3", "layout.3", 0]}>
            <Heading children={title} size={600} />
            <Text children={synopsis} size={500} py="layout.3" />
            {buttons.map((button, index) => (
              <Button
                label={button.label}
                link={button.link}
                color="text"
                size={350}
                key={"bookButton" + index}
              />
            ))}
          </Box>
        </Flex>
      </Box>
    </Wrapper>
  )
}

export default BookBlock
