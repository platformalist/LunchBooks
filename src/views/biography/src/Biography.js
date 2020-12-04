import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { AspectRatio, Box, Column, Columns, Text, Wrapper } from "components"

function Biography({ image }) {
  return (
    <Wrapper>
      <Columns>
        <Column width={2 / 3}>
          <Text size={400} color="text">
            Science fiction author, dreaming of parallel universes. Send any
            questions to{" "}
            <a href="mailto:inquiries@jamesprower.com">
              inquiries@jamesprower.com
            </a>
            .
          </Text>
        </Column>
        <Column width={1 / 3}>
          <AspectRatio ratio="1:1" position="relative">
            <Img
              fluid={image.childImageSharp.fluid}
              objectFit="cover"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </AspectRatio>
          <Box bg="text" />
        </Column>
      </Columns>
    </Wrapper>
  )
}

export default Biography
