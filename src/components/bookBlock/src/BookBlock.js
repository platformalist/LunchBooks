import React from "react"

import Img from "gatsby-image"

import { Box, Button, Flex, Heading, Text, Wrapper } from "components"

const BookBlock = ({ title, genre, cover, synopsis, buttons }) => {
  return (
    <Wrapper>
      <Box width="900px" pt="layout.3">
        {/* Title and genre */}
        <Heading children={title} size={800} />

        {/* Cover */}
        <Flex pt="layout.1">
          <Box width="276px" height="412px">
            <Img fixed={cover} />
          </Box>

          {/* Synopsis and Buttons */}
          <Box pl="layout.3">
            <Text children={synopsis} size={700} pb="layout.3" />
            {buttons.map((button, index) => (
              <Button
                label={button.label}
                link={button.link}
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
