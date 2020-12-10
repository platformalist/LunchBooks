import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Heading, SEO, Text, VStack, Wrapper } from "components"

const NotFoundPage = () => {
  const { opengraph } = useStaticQuery(NO_PAGE_QUERY)
  return (
    <>
      <SEO
        title="404 | James Prower"
        description="James Prower is a Canadian author of sci-fi, fantasy, and supernatural fiction, specializing in short stories and novels. Prower primarily focuses on parallel universes, mysterious objects from other worlds, and happenstance meetings with strange, rare creatures."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="Peach and green storm clouds"
      />

      <Wrapper py="layout.7">
        <VStack space="layout.2">
          <Heading children="404: Page Not Found" size={700} color="text" />
          <Text
            children="You found a page that doesn't exist! You dreamer, you!"
            color="text"
          />
        </VStack>
      </Wrapper>
    </>
  )
}

const NO_PAGE_QUERY = graphql`
  {
    opengraph: file(relativePath: { eq: "opengraph.jpg" }) {
      publicURL
      childImageSharp {
        fixed(width: 1200, height: 627, quality: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default NotFoundPage
