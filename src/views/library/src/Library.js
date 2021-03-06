import React from "react"

import Img from "gatsby-image"

import {
  Button,
  Column,
  Columns,
  Flex,
  Heading,
  Inline,
  Text,
  VStack,
  Wrapper,
} from "components"

const Library = ({ title, genre, cover, synopsis, buttons }) => {
  return (
    <Wrapper>
      <VStack space="layout.2">
        <Heading children={title} size={700} />

        {/* Title and genre */}
        <Columns space="layout.4">
          <Column width={[1 / 1, 1 / 1, 1 / 1, 1 / 2]}>
            <VStack space="layout.3">
              <Text children={synopsis} size={400} />
              <Inline space="spacing.2">
                <Heading children="Available on " size={400} color="text" />
                {buttons.map((button, index) => {
                  let APPEND = ", "
                  if (index === buttons.length - 1) {
                    APPEND = ""
                  }

                  return (
                    <Flex key={"bookButton" + index}>
                      <Button
                        label={button.label}
                        link={button.link}
                        size={400}
                      />
                      <Heading children={APPEND} size={400} color="text" />
                    </Flex>
                  )
                })}
              </Inline>
            </VStack>
          </Column>
          {/* Cover Art */}
          <Column width={[1 / 1, 1 / 1, 1 / 1, 1 / 2]}>
            <Flex width="100%" justifyContent={["center", "left"]}>
              <Img
                fixed={cover}
                durationFadeIn={0}
                loading="eager"
                style={{
                  borderRadius: "6px",
                  boxShadow: "0px 6px 16px grey",
                }}
              />
            </Flex>
          </Column>
        </Columns>
      </VStack>
    </Wrapper>
  )
}

export default Library
