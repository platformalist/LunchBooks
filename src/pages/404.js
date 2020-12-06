import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Heading, SEO, Text, VStack, Wrapper } from "components"

const NotFoundPage = () => {
  const { opengraph } = useStaticQuery(NO_PAGE_QUERY)
  return (
    <>
      <SEO
        title="404: Page not found"
        description="Author of science fiction, including 'A Being of Some Cosmic Importance'. Send any questions, concerns or inquiries to inquiries@jamesprower.com."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="James Prower, the author of 'A Being of Some Cosmic Importance'."
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
        fixed(width: 1200, height: 627) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default NotFoundPage
