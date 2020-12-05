import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { AspectRatio, Column, Columns, Text, Wrapper } from "components"

function Biography({ image }) {
  return (
    <Wrapper>
      <Columns space="layout.5">
        <Column width={1 / 4}>
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
        </Column>

        <Column width={1 / 2}>
          <Text size={400} color="text">
            James Prower is a Canadian author of sci-fi, fantasy, and
            supernatural fiction, specializing in short stories and poetic
            tidbits, though he also writes poetry and novels when the stars
            align.
            <br />
            <br />
            He’s currently on the science fiction circuit, submitting to great
            sci-fi anthologies that you know and love. His current saga of
            novels—beginning with <i>A Being of Some Cosmic Importance</i>
            —revolves around the political and ethical ramifications of warp
            travel, and the individuals affected by dangerous policies and
            technology. When it comes to short stories, Prower primarily focuses
            on parallel universes, mysterious objects from other worlds, and
            happenstance meetings with strange, rare creatures.
            <br />
            <br />
            If you’d like to speak with James, ask about his work, or inquire
            about anything else, send an email to{" "}
            <a href="mailto:inquiries@jamesprower.com">
              inquiries@jamesprower.com
            </a>{" "}
            and he’ll be sure to get back to you.
          </Text>
        </Column>
      </Columns>
    </Wrapper>
  )
}

export default Biography
