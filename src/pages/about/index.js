import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { SEO } from "components"
import { Biography } from "views"

function AboutPage() {
  const { opengraph } = useStaticQuery(IMAGE_QUERY)

  return (
    <>
      <SEO
        title="About"
        description="Author of science fiction, including 'A Being of Some Cosmic Importance'. Send any questions, concerns or inquiries to inquiries@jamesprower.com."
        imageOpenGraph={opengraph.publicURL}
        imageAlt="James Prower, the author of 'A Being of Some Cosmic Importance'."
      />

      <Biography />
    </>
  )
}

const IMAGE_QUERY = graphql`
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

export default AboutPage
