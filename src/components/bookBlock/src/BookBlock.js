import React from "react"
import { Box, Button, Flex, Heading, Text, Wrapper } from "components"

const BookBlock = ({ title, genre, cover, synopsis, buttons, index }) => {
  return (
    <Wrapper>
      <Box width="900px">
        {/* Title and genre */}
        <Heading children={title} size={800} />

        {/* Cover */}
        <Flex pt="layout.3">
          <Box minWidth="276px" height="412px" bg="red" />

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
