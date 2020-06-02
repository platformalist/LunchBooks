import React from "react"

import Img from "gatsby-image"

import { Box, Button, Flex, Heading, Text, Wrapper } from "components"

const BookBlock = ({ title, genre, cover, synopsis, buttons }) => {
  return (
    <Wrapper>
      <Box width="900px" py="layout.6">
        {/* Cover */}
        <Flex pt="layout.1">
          <Box width="276px" height="412px">
            <Img fixed={cover} />
          </Box>

          {/* Synopsis and Buttons */}
          <Box pl="layout.4">
            {/* Title and genre */}
            <Heading children={title} size={700} />
            <Text children={synopsis} size={600} pb="layout.3" />
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
