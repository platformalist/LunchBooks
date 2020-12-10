import React from "react"

import {
  Column,
  Columns,
  Heading,
  Link,
  Text,
  VStack,
  Wrapper,
} from "components"

function Biography({ image }) {
  return (
    <Wrapper>
      <Columns space="layout.5">
        <Column width={[1 / 1, 1 / 1, 1 / 1, 1 / 2]}>
          <VStack space="layout.2">
            <Heading children="Portals and invisible places" size={700} />
            <Text size={400} color="text">
              James Prower is a Canadian author of sci-fi, fantasy, and
              supernatural fiction, specializing in short stories and novels,
              though he also dabbles in poetry. He’s currently on the science
              fiction short-story submission circuit.
              <br />
              <br />
              Prower's saga of novels—beginning with{" "}
              <i>A Being of Some Cosmic Importance</i>
              —revolves around the political and ethical ramifications of warp
              travel, and the individuals affected by dangerous policies and
              technology. For short stories, Prower primarily focuses on
              parallel universes, mysterious objects from other worlds, and
              happenstance meetings with strange, rare creatures.
              <br />
              <br />
              If you’d like to speak with James, ask about his work, or inquire
              about anything else, send an email to{" "}
              <u>
                <Link href="mailto:inquiries@jamesprower.com">
                  inquiries@jamesprower.com
                </Link>
              </u>{" "}
              and he’ll be sure to get back to you.
            </Text>
          </VStack>
        </Column>
        {/* Eventual Headshot */}
        {/* <Column width={1 / 4}>
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
        </Column> */}
      </Columns>
    </Wrapper>
  )
}

export default Biography
